"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Check, X, Star, Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: 2999,
    period: "month",
    popular: false,
    features: [
      "Custom website design",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media integration",
      "3 months support",
      "Basic analytics setup",
    ],
    limitations: [
      "Up to 5 pages",
      "Standard hosting",
      "Email support only",
    ],
    cta: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: 5999,
    period: "month",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced SEO optimization",
      "Content management system",
      "E-commerce functionality",
      "Advanced analytics",
      "6 months support",
      "Priority support",
      "Performance optimization",
      "Security features",
    ],
    limitations: [
      "Up to 15 pages",
      "Premium hosting",
      "Phone & email support",
    ],
    cta: "Most Popular",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: 9999,
    period: "month",
    popular: false,
    features: [
      "Everything in Professional",
      "Custom web application",
      "API integrations",
      "Advanced security",
      "Dedicated project manager",
      "12 months support",
      "24/7 priority support",
      "Custom reporting",
      "Training & documentation",
    ],
    limitations: [
      "Unlimited pages",
      "Enterprise hosting",
      "Dedicated support team",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
]

const addOns = [
  {
    name: "AI Integration",
    description: "Add AI-powered features to your website",
    price: 500,
    period: "one-time",
  },
  {
    name: "Mobile App Development",
    description: "Native iOS and Android apps",
    price: 15000,
    period: "one-time",
  },
  {
    name: "Advanced Analytics",
    description: "Custom dashboards and reporting",
    price: 200,
    period: "month",
  },
  {
    name: "Priority Support",
    description: "24/7 dedicated support",
    price: 300,
    period: "month",
  },
]

export function PricingTable() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Choose the perfect plan for your business
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Flexible pricing options designed to scale with your business. All plans include our core services with varying levels of support and features.
            </p>
          </div>
        </AnimatedSection>

        {/* Billing Toggle */}
        <AnimatedSection delay={0.2}>
          <div className="flex justify-center mt-8">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingPeriod === "yearly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
                <Badge variant="secondary" className="ml-2 text-xs">
                  Save 20%
                </Badge>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.1} direction="up">
              <Card className={`relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {plan.name}
                    {plan.popular && <Zap className="h-4 w-4 text-primary" />}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">
                      {formatPrice(billingPeriod === "yearly" ? plan.price * 10 : plan.price)}
                    </span>
                    <span className="text-muted-foreground">/{billingPeriod === "yearly" ? "year" : plan.period}</span>
                    {billingPeriod === "yearly" && (
                      <div className="text-sm text-green-600 font-medium">
                        Save {formatPrice(plan.price * 2)}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation) => (
                        <li key={limitation} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant={plan.ctaVariant}
                    size="lg"
                    className="w-full"
                    asChild={plan.name === "Enterprise"}
                  >
                    {plan.name === "Enterprise" ? (
                      <a href="/contact">{plan.cta}</a>
                    ) : (
                      <button>{plan.cta}</button>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Add-ons Section */}
        <AnimatedSection delay={0.8}>
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Add-ons & Extensions
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Enhance your plan with additional services and features.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {addOns.map((addOn, index) => (
                <AnimatedSection key={addOn.name} delay={index * 0.1} direction="up">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{addOn.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{addOn.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-foreground">
                            {formatPrice(addOn.price)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {addOn.period === "one-time" ? "one-time" : `per ${addOn.period}`}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection delay={1.0}>
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="mx-auto mt-12 max-w-3xl space-y-8">
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Can I change my plan later?</h4>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">What happens if I exceed my plan limits?</h4>
                <p className="text-muted-foreground">
                  We'll notify you when you're approaching your limits and help you upgrade to a higher plan if needed.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Do you offer custom solutions?</h4>
                <p className="text-muted-foreground">
                  Absolutely! Contact our sales team to discuss custom solutions tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
