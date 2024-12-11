"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AISetupWizard } from "@/components/departments/ai-setup-wizard"
import { DepartmentWizard } from "@/components/departments/department-wizard"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { useDepartmentStore } from "@/lib/stores/department-store"
import { logger } from "@/lib/utils/logger"

export default function SetupPage() {
  const router = useRouter()
  const { departments, clearDepartments } = useDepartmentStore()
  const isInitialSetup = departments.length === 0

  useEffect(() => {
    const isResetting = sessionStorage.getItem('resetting-departments')
    
    if (isResetting) {
      logger.debug('[SetupPage] Resetting departments')
      clearDepartments()
      sessionStorage.removeItem('resetting-departments')
    } else if (!isInitialSetup) {
      logger.debug('[SetupPage] Redirecting to add department flow')
      router.push('/setup/add-department')
    }
  }, [isInitialSetup, router, clearDepartments])

  return (
    <div>
      <DashboardHeader />
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {isInitialSetup ? "Set Up Your AI Department" : "Reset Department Setup"}
          </h1>
          <p className="text-muted-foreground">
            {isInitialSetup 
              ? "Let our AI analyze your needs and create an optimized department structure"
              : "Start fresh with a new department configuration"
            }
          </p>
        </div>
        <AISetupWizard />
      </main>
    </div>
  )
}