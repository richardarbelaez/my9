"use client"

export const businessContext = {
  company: {
    name: "Marketiando",
    type: "Marketing Agency",
    clientBase: {
      count: 10,
      ratePerClient: 1000,
      totalRevenue: 10000
    }
  },
  departments: {
    sales: {
      projects: {
        clientAcquisition: {
          objective: "Acquire 3 new clients in 2 months",
          budget: {
            googleAds: 500,
            total: 500
          },
          currentMetrics: {
            leadsGenerated: 12,
            conversionRate: 0.08
          }
        },
        retention: {
          initiatives: [
            "Weekly newsletters with marketing tips",
            "Monthly virtual workshops"
          ]
        }
      },
      metrics: {
        websiteTraffic: {
          monthly: 2500,
          growth: 0.2
        },
        socialMedia: {
          newFollowers: 500,
          platform: "Instagram"
        },
        emailCampaigns: {
          openRate: 0.45,
          clickRate: 0.12
        }
      },
      challenges: [
        "Limited marketing budget",
        "Increasing market competition"
      ]
    },
    "customer-service": {
      activeTickets: [
        {
          client: "Client A",
          issue: "Instagram post schedule adjustment",
          status: "in-progress",
          eta: "2 days"
        },
        {
          client: "Client B",
          issue: "Low CTR on Google Ads",
          status: "analyzing",
          eta: "3 days"
        },
        {
          client: "Client D",
          issue: "Holiday campaign landing page",
          status: "awaiting-approval"
        }
      ],
      metrics: {
        npsScore: 9,
        resolutionTime: 18,
        unit: "hours"
      },
      challenges: [
        "Increasing support volume",
        "Maintaining service quality while scaling"
      ]
    },
    finance: {
      revenue: {
        monthly: 10000,
        breakdown: {
          clientFees: 10000
        }
      },
      expenses: {
        software: 800,
        marketing: 500,
        miscellaneous: 200,
        total: 1500
      },
      profit: {
        monthly: 8500
      },
      liabilities: {
        loan: {
          total: 10000,
          remaining: 7000,
          monthlyPayment: 1000
        }
      },
      pendingPayments: [
        {
          client: "Client G",
          status: "overdue",
          days: 5
        }
      ]
    },
    operations: {
      activeProjects: [
        {
          client: "Client A",
          name: "Holiday Campaign",
          progress: 0.6,
          deliverables: [
            "3 weekly social media posts",
            "Email marketing campaign"
          ],
          challenges: ["Delayed content approvals"]
        },
        {
          client: "Client E",
          name: "Google Ads Optimization",
          goal: "Increase CTR by 20%",
          tasks: [
            "A/B testing ad copies",
            "Revising targeting settings"
          ]
        },
        {
          client: "Client H",
          name: "Branding Refresh",
          deliverables: [
            "New logo design - Approved",
            "Brand style guide - Pending feedback"
          ]
        }
      ],
      metrics: {
        onTimeDelivery: 0.95,
        taskCompletion: 0.90
      },
      challenges: [
        "Multiple deadline management",
        "Feedback loop optimization"
      ]
    }
  }
}