import { FAQAssistant } from "@/components/ai/faq-assistant"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Digital Acubens offer?",
    answer:
      "We offer comprehensive digital services including Web & Mobile App Development, AI Automation Tools, SaaS Products, Branding & Creative Design, Data Insights & Analytics, and Digital Transformation consulting.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies by service complexity and scope. Branding packages start at $2,500, Web Development at $5,000, AI Automation at $3,000, and SaaS Products at $15,000. Enterprise solutions are custom-priced based on requirements.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on scope: Branding (2-4 weeks), Web Development (4-12 weeks), AI Automation (2-8 weeks), SaaS Products (12-24 weeks). We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide comprehensive ongoing support and maintenance for all our projects. We offer monthly and annual support packages that include updates, security monitoring, performance optimization, and technical assistance.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "We specialize in system integration and can work with your existing technology stack. Our team has experience with various platforms, databases, and third-party services to ensure seamless integration.",
  },
  {
    question: "What makes Digital Acubens different from other agencies?",
    answer:
      "We combine cutting-edge technology with creative excellence, specializing in AI-powered solutions. Our constellation-themed approach means we guide your brand to shine brighter in the digital universe through innovative, tailored solutions.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes, we work with startups, small businesses, medium enterprises, and large corporations. We also serve non-profit organizations. Our packages and solutions are scalable to meet different business needs and budgets.",
  },
  {
    question: "How do you ensure project quality and timelines?",
    answer:
      "We follow agile development methodologies with regular check-ins, milestone reviews, and transparent communication. Our experienced team uses industry best practices and quality assurance processes to deliver projects on time and within scope.",
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Got questions? We have answers
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Find answers to common questions about our services, pricing, and processes. Can't find what you're
              looking for? Try our AI assistant below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FAQAssistant />
      <Footer />
    </>
  )
}
