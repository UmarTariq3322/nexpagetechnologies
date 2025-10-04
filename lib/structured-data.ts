export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nexpage Technologies",
  "description": "Cutting-edge digital agency specializing in web development, AI automation, branding, and data insights.",
  "url": "https://nexpagetechnologies.com",
  "logo": "https://nexpagetechnologies.com/logo.png",
  "image": "https://nexpagetechnologies.com/og-image.png",
  "foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "Shamikh Shahid",
      "jobTitle": "CEO"
    },
    {
      "@type": "Person", 
      "name": "Wahb Ali",
      "jobTitle": "COO"
    },
    {
      "@type": "Person",
      "name": "Umar Tariq", 
      "jobTitle": "CTO"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://digitalacubens.com/contact"
  },
  "sameAs": [
    "https://twitter.com/nexpagetechnologies",
    "https://linkedin.com/company/nexpage-technologies",
    "https://github.com/nexpage-technologies"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Web Development",
      "description": "Custom web applications and mobile apps built with cutting-edge technologies"
    },
    {
      "@type": "Service", 
      "name": "AI Automation",
      "description": "Intelligent automation solutions to streamline business processes"
    },
    {
      "@type": "Service",
      "name": "Branding & Design", 
      "description": "Comprehensive branding solutions that make businesses stand out"
    },
    {
      "@type": "Service",
      "name": "Data Analytics",
      "description": "Transform data into actionable insights and strategic advantages"
    }
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nexpage Technologies",
  "url": "https://nexpagetechnologies.com",
  "description": "Shaping brands in the digital constellations",
  "publisher": {
    "@type": "Organization",
    "name": "Nexpage Technologies"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nexpagetechnologies.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://digitalacubens.com${item.url}`
  }))
})

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})
