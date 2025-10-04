"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Loader2, Search, HelpCircle, Sparkles } from "lucide-react"

interface FAQResponse {
  answer: string
  source: string
  relatedQuestions: string[]
}

export function FAQAssistant() {
  const [question, setQuestion] = useState("")
  const [response, setResponse] = useState<FAQResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    try {
      const res = await fetch("/api/faq-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })

      const data = await res.json()
      setResponse(data)
    } catch (error) {
      console.error("Error getting FAQ response:", error)
    } finally {
      setLoading(false)
    }
  }

  const askQuestion = (q: string) => {
    setQuestion(q)
    setResponse(null)
  }

  const commonQuestions = [
    "What services do you offer?",
    "How much do your services cost?",
    "How long does a project take?",
    "Do you provide ongoing support?",
    "Can you work with our existing systems?",
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            AI FAQ Assistant
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get instant answers
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Ask any question about our services, pricing, or processes. Our AI assistant will provide you with accurate,
            helpful answers.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Ask a Question
            </CardTitle>
            <CardDescription>Type your question below or click on one of the common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., What's included in your web development service?"
                className="flex-1"
              />
              <Button type="submit" disabled={loading || !question.trim()}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              </Button>
            </form>
          </CardContent>
        </Card>

        {response && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Answer</CardTitle>
                <Badge variant={response.source === "FAQ" ? "default" : "secondary"}>{response.source}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{response.answer}</p>

              {response.relatedQuestions.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Related Questions:</h4>
                  <div className="space-y-2">
                    {response.relatedQuestions.map((q, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => askQuestion(q)}
                        className="mr-2 mb-2"
                      >
                        {q}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
            <CardDescription>Click on any question to get an instant answer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {commonQuestions.map((q, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => askQuestion(q)}
                  className="justify-start h-auto p-4 text-left"
                >
                  <HelpCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                  {q}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
