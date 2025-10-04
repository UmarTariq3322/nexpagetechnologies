"use client"
import { ServiceRecommenderEnhanced } from "@/components/ai/service-recommender-enhanced"

const questions = [
  {
    id: "business-type",
    question: "What type of business do you have?",
    options: [
      { value: "startup", label: "Startup/New Business" },
      { value: "small-business", label: "Small Business" },
      { value: "enterprise", label: "Enterprise/Large Company" },
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

const recommendations = {
  "startup-online-presence-under-5k": {
    service: "Branding & Web Development Package",
    description: "Perfect for startups looking to establish their brand and online presence.",
    includes: ["Logo Design", "Brand Guidelines", "Responsive Website", "Basic SEO"],
    price: "$4,500",
  },
  "small-business-automate-processes-5k-15k": {
    service: "AI Automation Starter",
    description: "Streamline your business processes with intelligent automation.",
    includes: ["Process Analysis", "Custom Automation", "AI Chatbot", "Training & Support"],
    price: "$8,500",
  },
  "enterprise-improve-efficiency-over-50k": {
    service: "Digital Transformation Suite",
    description: "Complete digital transformation for large organizations.",
    includes: ["Strategy Consulting", "Custom Software", "AI Integration", "Ongoing Support"],
    price: "Custom Quote",
  },
}

export function ServiceRecommender() {
  return <ServiceRecommenderEnhanced />
}
