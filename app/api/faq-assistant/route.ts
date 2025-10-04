import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

const faqData = [
  {
    question: "What services does Digital Acubens offer?",
    answer:
      "We offer web & mobile development, AI automation tools, SaaS products, branding & creative design, data analytics, and digital transformation services.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies by service: Branding starts at $2,500, Web Development at $5,000, AI Automation at $3,000, and SaaS Products at $15,000. Enterprise solutions are custom-priced.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary: Branding (2-4 weeks), Web Development (4-12 weeks), AI Automation (2-8 weeks), SaaS Products (12-24 weeks). We provide detailed timelines during consultation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide ongoing support and maintenance for all our projects. Support packages are available monthly or annually based on your needs.",
  },
  {
    question: "Can you work with existing systems?",
    answer: "We specialize in integrating with existing systems and can help modernize your current technology stack.",
  },
]

export async function POST(req: Request) {
  const { question } = await req.json()

  // First, try to find a matching FAQ
  const matchingFaq = faqData.find(
    (faq) =>
      faq.question.toLowerCase().includes(question.toLowerCase()) ||
      question.toLowerCase().includes(faq.question.toLowerCase().split(" ").slice(0, 3).join(" ")),
  )

  if (matchingFaq) {
    return Response.json({
      answer: matchingFaq.answer,
      source: "FAQ",
      relatedQuestions: faqData
        .filter((faq) => faq !== matchingFaq)
        .slice(0, 3)
        .map((faq) => faq.question),
    })
  }

  // If no FAQ match, use AI to generate an answer
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: `You are an FAQ assistant for Digital Acubens, a digital agency. Answer this question based on the company information:
    
    Company: Digital Acubens - "Shaping brands in the digital constellations"
    Services: Web/Mobile Development, AI Automation, SaaS Products, Branding, Data Analytics, Digital Transformation
    Team: CEO Shamikh Shahid, COO Wahb Ali, CTO Umar Tariq
    
    Question: ${question}
    
    Provide a helpful, accurate answer. If you don't have specific information, suggest contacting the team for details.`,
    maxTokens: 300,
  })

  return Response.json({
    answer: text,
    source: "AI Assistant",
    relatedQuestions: faqData.slice(0, 3).map((faq) => faq.question),
  })
}
