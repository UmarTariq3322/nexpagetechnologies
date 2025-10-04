import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { type UIMessage } from "ai";

export const maxDuration = 30;

// Initialize the Gemini API with environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();
    
    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        text: "This is a demo response from Nexpage Technologies. Please set up your Gemini API key to enable real AI responses.",
      });
    }
    
    // Initialize the Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    // Company context for the chatbot
    const companyContext = `You are an AI assistant for Nexpage Technologies, a cutting-edge digital agency.
    
    Company Info:
    - Name: Nexpage Technologies
    - Tagline: "Shaping brands in the digital constellations"
    
    Services:
    - Web & Mobile App Development (React/Next.js, TypeScript, Mobile-First)
    - AI Automation Tools (Gemini Integration, Workflow Automation, Smart Analytics)
    - SaaS Products (Cloud Architecture, Multi-tenant, API Integration)
    - Branding & Creative Design (Logo Design, Brand Identity, UI/UX Design)
    - Data Insights & Analytics (Business Intelligence, Custom Dashboards, Predictive Analytics)
    
    Packages:
    - Starter: $2,500-5,000 (Basic web presence, branding)
    - Business: $5,000-15,000 (Full web apps, automation)
    - Enterprise: $15,000+ (Custom solutions, AI integration)
    
    You should:
    - Be helpful and knowledgeable about digital services
    - Recommend appropriate services based on user needs
    - Offer to schedule consultations or demos
    - Maintain a professional but friendly tone
    - Use constellation/space metaphors when appropriate
    - Always try to guide users toward contacting the team for detailed quotes`;
    
    // Set up the chat with history
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: companyContext }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand my role as Nexpage Technologies\' AI assistant. I\'ll provide helpful, concise, and professional responses about your digital agency services. How can I assist you today?' }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });
    
    // Get the last user message
    const lastUserMessage = (messages[messages.length - 1] as any).content;
    
    // Send the user's message to the model
    const result = await chat.sendMessage(lastUserMessage);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
   }
 }
