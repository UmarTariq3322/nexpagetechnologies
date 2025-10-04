import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

const recommendationSchema = z.object({
  recommendedService: z.string().describe("The recommended service package name"),
  reasoning: z.string().describe("Why this service is recommended"),
  estimatedPrice: z.string().describe("Estimated price range"),
  timeline: z.string().describe("Estimated project timeline"),
  keyFeatures: z.array(z.string()).describe("Key features included"),
  nextSteps: z.array(z.string()).describe("Recommended next steps"),
})

export async function POST(req: Request) {
  const { businessType, primaryGoal, budgetRange, additionalInfo } = await req.json()

  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    schema: recommendationSchema,
    prompt: `As a digital agency consultant for Digital Acubens, recommend the best service package based on:
    
    Business Type: ${businessType}
    Primary Goal: ${primaryGoal}
    Budget Range: ${budgetRange}
    Additional Info: ${additionalInfo || "None provided"}
    
    Available Services:
    - Web & Mobile Development ($5,000-$25,000)
    - AI Automation Tools ($3,000-$15,000)
    - SaaS Products ($15,000-$100,000+)
    - Branding & Creative Design ($2,500-$10,000)
    - Data Analytics ($4,000-$20,000)
    - Digital Transformation (Custom pricing)
    
    Provide a specific recommendation with reasoning, pricing, timeline, and next steps.`,
    maxOutputTokens: 800,
  })

  return Response.json({ recommendation: object })
}
