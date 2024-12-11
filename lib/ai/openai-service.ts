"use client"

import OpenAI from 'openai'
import { AgentPersonality } from '@/lib/types/agent'
import { Department } from '@/lib/stores/department-store'
import { logger } from '@/lib/utils/logger'
import { businessContext } from './business-context'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export class OpenAIService {
  private async generateSystemPrompt(agent: AgentPersonality, department: Department) {
    const deptContext = businessContext.departments[department.type]
    const companyContext = businessContext.company

    return `You are ${agent.name}, an AI assistant specializing in ${department.name} at ${companyContext.name}, a ${companyContext.type} serving ${companyContext.clientBase.count} clients.

Role: ${agent.role}
Expertise: ${agent.expertise.join(", ")}
Personality Traits: ${agent.traits.join(", ")}
Communication Style: ${agent.communicationStyle}

Department Context:
${JSON.stringify(deptContext, null, 2)}

Guidelines:
1. Stay in character as ${agent.name} with your defined personality traits
2. Provide specific, actionable insights based on our current business metrics and challenges
3. Reference actual client cases and metrics when relevant
4. Keep responses concise but informative (max 2-3 paragraphs)
5. Use your professional but ${agent.communicationStyle} communication style
6. Focus on your department's expertise while considering our current business situation
7. Acknowledge previous context and build upon it
8. If asked about areas outside your expertise, suggest consulting the appropriate department

Remember: You are part of an AI department team at ${companyContext.name}. Your responses should reflect your specific role and expertise while maintaining a collaborative approach.`
  }

  public async generateResponse(
    message: string,
    agent: AgentPersonality,
    department: Department,
    conversationHistory: { role: 'user' | 'assistant'; content: string; name?: string }[]
  ) {
    const systemPrompt = await this.generateSystemPrompt(agent, department)
    
    try {
      logger.debug('[OpenAIService] Generating response for:', {
        department: department.type,
        agent: agent.name,
        messageLength: message.length
      })

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          ...conversationHistory,
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
        response_format: { type: "text" }
      })

      const response = completion.choices[0].message.content
      logger.debug('[OpenAIService] Generated response:', {
        department: department.type,
        responseLength: response?.length || 0
      })

      return response
    } catch (error) {
      logger.error('[OpenAIService] API error:', error)
      return null
    }
  }
}

export const openAIService = new OpenAIService()