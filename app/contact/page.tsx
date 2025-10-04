import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Let's start your digital journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Ready to transform your business? Get in touch with our team of experts and discover how Digital Acubens
              can help you reach for the stars.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </>
  )
}
