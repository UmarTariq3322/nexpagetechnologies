import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
  const { topic, category, tone, length, keywords } = await req.json()

  const lengthMap = {
    short: "500-800 words",
    medium: "800-1200 words",
    long: "1200+ words",
  }

  const prompt = `Write a comprehensive blog post for Digital Acubens, a cutting-edge digital agency.

Topic: ${topic}
Category: ${category}
Tone: ${tone}
Length: ${lengthMap[length as keyof typeof lengthMap]}
Keywords to include: ${keywords || "digital transformation, innovation, technology"}

Company Context:
- Digital Acubens: "Shaping brands in the digital constellations"
- Services: Web/Mobile Development, AI Automation, SaaS Products, Branding, Data Analytics
- Leadership: CEO Shamikh Shahid, COO Wahb Ali, CTO Umar Tariq

Requirements:
1. Engaging title and introduction
2. Well-structured content with headers
3. Include relevant examples and insights
4. Professional yet accessible language
5. Call-to-action at the end
6. SEO-friendly structure
7. Include constellation/space metaphors when appropriate

Format the output as a complete blog post with markdown formatting.`

}
