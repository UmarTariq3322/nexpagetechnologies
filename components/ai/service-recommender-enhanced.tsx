"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles, CheckCircle } from "lucide-react"

const questions = [
  {
    id: "business-type",
    question: "What type of business do you have?",
    options: [
      { value: "startup", label: "Startup/New Business" },
      { value: "small-business", label: "Small Business (1-50 employees)" },
      { value: "medium-business", label: "Medium Business (50-200 employees)" },
      { value: "enterprise", label: "Enterprise/Large Company (200+ employees)" },
      { value: "nonprofit", label: "Non-profit Organization" },
    ],
  },
  {
    id: "primary-goal",
    question: "What is your primary goal?",
    options: [
      { value: "online-presence", label: "Establish online presence" },
      { value: "automate-processes", label: "Automate business processes" },
      { value: "increase-sales", label: "Increase sales and revenue" },
      { value: "improve-efficiency", label: "Improve operational efficiency" },
      { value: "digital-transformation", label: "Complete digital transformation" },
      { value: "data-insights", label: "Better data insights and analytics" },
    ],
  },
  {
    id: "budget-range",
    question: "What is your budget range?",
    options: [
      { value: "under-5k", label: "Under $5,000" },
      { value: "5k-15k", label: "$5,000 - $15,000" },
      { value: "15k-50k", label: "$15,000 - $50,000" },
      { value: "over-50k", label: "Over $50,000" },
    ],
  },
]

interface Recommendation {
  recommendedService: string
  reasoning: string
  estimatedPrice: string
  timeline: string
  keyFeatures: string[]
  nextSteps: string[]
}

export function ServiceRecommenderEnhanced() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [loading, setLoading] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const generateRecommendation = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/service-recommender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessType: answers["business-type"],
          primaryGoal: answers["primary-goal"],
          budgetRange: answers["budget-range"],
          additionalInfo,
        }),
      })

      const data = await response.json()
      setRecommendation(data.recommendation)
    } catch (error) {
      console.error("Error generating recommendation:", error)
    } finally {
      setLoading(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setAdditionalInfo("")
    setRecommendation(null)
    setShowQuiz(true)
  }

  if (!showQuiz && !recommendation) {
    return (
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Service Recommender
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Find your perfect service package
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Answer a few quick questions and let our AI recommend the best service package tailored specifically for
              your business needs and goals.
            </p>
            <Button onClick={() => setShowQuiz(true)} size="lg" className="mt-8">
              <Sparkles className="h-4 w-4 mr-2" />
              Start AI Recommendation
            </Button>
          </div>
        </div>
      </section>
    )
  }

  if (recommendation) {
    return (
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <CheckCircle className="h-4 w-4 mr-2" />
              Your AI Recommendation
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Perfect match found!
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{recommendation.recommendedService}</CardTitle>
              <CardDescription className="text-center text-lg">{recommendation.reasoning}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{recommendation.estimatedPrice}</div>
                  <div className="text-sm text-muted-foreground">Estimated Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{recommendation.timeline}</div>
                  <div className="text-sm text-muted-foreground">Project Timeline</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">What's included:</h4>
                  <div className="space-y-3">
                    {recommendation.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Next steps:</h4>
                  <div className="space-y-3">
                    {recommendation.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button className="flex-1" asChild>
                  <a href="/contact">Get Started Now</a>
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]
  const isLastQuestion = currentQuestion === questions.length - 1

  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance">{question.question}</h2>
          </div>

          <Card>
            <CardContent className="p-6">
              <RadioGroup onValueChange={(value) => handleAnswer(question.id, value)}>
                <div className="space-y-4">
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {isLastQuestion && (
                <div className="mt-6">
                  <Label htmlFor="additional-info" className="text-sm font-medium">
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="additional-info"
                    placeholder="Tell us more about your specific needs, challenges, or goals..."
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    className="mt-2"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            <div className="text-sm text-muted-foreground">
              Progress: {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </div>

            {isLastQuestion ? (
              <Button onClick={generateRecommendation} disabled={!answers[question.id] || loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Recommendation
                  </>
                )}
              </Button>
            ) : (
              <Button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={!answers[question.id]}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
