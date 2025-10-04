"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  options: {
    value: string
    label: string
    description?: string
  }[]
}

interface QuizResult {
  package: string
  title: string
  description: string
  price: string
  features: string[]
  recommended: boolean
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "business-size",
    question: "What's the size of your business?",
    options: [
      { value: "startup", label: "Startup (1-10 employees)", description: "Just getting started" },
      { value: "small", label: "Small Business (11-50 employees)", description: "Growing team" },
      { value: "medium", label: "Medium Business (51-200 employees)", description: "Established company" },
      { value: "enterprise", label: "Enterprise (200+ employees)", description: "Large organization" },
    ],
  },
  {
    id: "project-type",
    question: "What type of project do you need?",
    options: [
      { value: "website", label: "Website", description: "Simple website or landing page" },
      { value: "webapp", label: "Web Application", description: "Interactive web application" },
      { value: "mobile", label: "Mobile App", description: "iOS and Android app" },
      { value: "ecommerce", label: "E-commerce Store", description: "Online store with payments" },
      { value: "custom", label: "Custom Solution", description: "Complex, unique requirements" },
    ],
  },
  {
    id: "timeline",
    question: "What's your preferred timeline?",
    options: [
      { value: "urgent", label: "ASAP (1-2 weeks)", description: "Need it done quickly" },
      { value: "fast", label: "Fast (1-2 months)", description: "Quick turnaround" },
      { value: "normal", label: "Normal (2-4 months)", description: "Standard timeline" },
      { value: "flexible", label: "Flexible (4+ months)", description: "No rush, quality first" },
    ],
  },
  {
    id: "budget",
    question: "What's your budget range?",
    options: [
      { value: "low", label: "Under $5,000", description: "Basic solution" },
      { value: "medium", label: "$5,000 - $15,000", description: "Standard solution" },
      { value: "high", label: "$15,000 - $50,000", description: "Premium solution" },
      { value: "enterprise", label: "$50,000+", description: "Enterprise solution" },
    ],
  },
  {
    id: "features",
    question: "Which features are most important to you?",
    options: [
      { value: "basic", label: "Basic Features", description: "Standard functionality" },
      { value: "advanced", label: "Advanced Features", description: "Custom integrations, APIs" },
      { value: "ai", label: "AI Integration", description: "AI-powered features" },
      { value: "analytics", label: "Analytics & Reporting", description: "Data insights and dashboards" },
    ],
  },
]

const quizResults: Record<string, QuizResult> = {
  starter: {
    package: "Starter",
    title: "Perfect for Startups",
    description: "A great starting point for new businesses looking to establish their online presence.",
    price: "$2,999/month",
    features: [
      "Custom website design",
      "Mobile-responsive layout",
      "Basic SEO optimization",
      "Contact form integration",
      "3 months support",
    ],
    recommended: false,
  },
  professional: {
    package: "Professional",
    title: "Ideal for Growing Businesses",
    description: "Comprehensive solution with advanced features and priority support.",
    price: "$5,999/month",
    features: [
      "Everything in Starter",
      "Advanced SEO optimization",
      "Content management system",
      "E-commerce functionality",
      "Advanced analytics",
      "6 months support",
      "Priority support",
    ],
    recommended: true,
  },
  enterprise: {
    package: "Enterprise",
    title: "For Large Organizations",
    description: "Complete solution with custom features and dedicated support team.",
    price: "$9,999/month",
    features: [
      "Everything in Professional",
      "Custom web application",
      "API integrations",
      "Advanced security",
      "Dedicated project manager",
      "12 months support",
      "24/7 priority support",
    ],
    recommended: false,
  },
}

export function PackageQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = quizQuestions[currentStep]
  const progress = ((currentStep + 1) / quizQuestions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: value,
    })
  }

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate result based on answers
      const result = calculateResult()
      setShowResult(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  const calculateResult = (): QuizResult => {
    const { "business-size": businessSize, budget, "project-type": projectType } = answers

    // Simple logic to determine package based on answers
    if (businessSize === "enterprise" || budget === "enterprise" || projectType === "custom") {
      return quizResults.enterprise
    } else if (businessSize === "startup" && budget === "low") {
      return quizResults.starter
    } else {
      return quizResults.professional
    }
  }

  const result = showResult ? calculateResult() : null

  if (showResult && result) {
    return (
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                Your Recommended Package
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                {result.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                {result.description}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mx-auto mt-16 max-w-2xl">
              <Card className={result.recommended ? "ring-2 ring-primary" : ""}>
                {result.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{result.package}</CardTitle>
                  <CardDescription className="text-lg">{result.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{result.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">What's included:</h4>
                    <ul className="space-y-2">
                      {result.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <Button size="lg" className="flex-1">
                      Get Started
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleRestart}>
                      Retake Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Package Quiz
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Find your perfect package
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Answer a few quick questions and we'll recommend the best package for your needs.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-16 max-w-2xl">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Question {currentStep + 1} of {quizQuestions.length}</CardTitle>
                  <Badge variant="secondary">{Math.round(progress)}% Complete</Badge>
                </div>
                <Progress value={progress} className="mt-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {currentQuestion.question}
                  </h3>
                  <RadioGroup
                    value={answers[currentQuestion.id] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-4"
                  >
                    {currentQuestion.options.map((option) => (
                      <div key={option.value} className="flex items-start space-x-3">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 cursor-pointer space-y-1"
                        >
                          <div className="font-medium text-foreground">{option.label}</div>
                          {option.description && (
                            <div className="text-sm text-muted-foreground">
                              {option.description}
                            </div>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.id]}
                  >
                    {currentStep === quizQuestions.length - 1 ? (
                      "Get My Recommendation"
                    ) : (
                      <>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
