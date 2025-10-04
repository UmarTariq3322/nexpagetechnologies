# Digital Acubens - Digital Agency Website

A cutting-edge digital agency website built with Next.js 14, TypeScript, and modern web technologies. This project showcases comprehensive web development practices including performance optimization, SEO, accessibility, security, and user experience enhancements.

## ✨ Features

### 🚀 Performance & Optimization
- **Next.js 14** with App Router for optimal performance
- **Image optimization** with WebP/AVIF support and responsive sizing
- **Code splitting** and lazy loading for faster initial loads
- **Bundle analysis** with webpack-bundle-analyzer
- **Compression** and caching strategies
- **PWA support** with service worker and offline functionality

### 🔍 SEO & Marketing
- **Comprehensive metadata** with Open Graph and Twitter Cards
- **Structured data** (JSON-LD) for better search engine understanding
- **Sitemap generation** with next-sitemap
- **Robots.txt** configuration
- **Google Analytics 4** integration
- **Performance tracking** and user behavior analytics

### ♿ Accessibility
- **WCAG 2.1 AA compliance** with proper ARIA labels
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Focus management** and visual indicators
- **Semantic HTML** structure
- **Color contrast** optimization

### 🔒 Security
- **Rate limiting** to prevent abuse
- **Input sanitization** and validation
- **XSS and SQL injection** prevention
- **CSRF protection** with token validation
- **Security headers** (CSP, HSTS, etc.)
- **Spam detection** with honeypot fields

### 📱 Mobile & UX
- **Responsive design** with mobile-first approach
- **Touch-friendly** interactions and gestures
- **Progressive Web App** capabilities
- **Smooth animations** with Framer Motion
- **Loading states** and error handling
- **Form validation** with real-time feedback

### 🧪 Testing & Quality
- **Unit tests** with Jest and React Testing Library
- **E2E tests** with Playwright
- **TypeScript** for type safety
- **ESLint** and Prettier for code quality
- **Coverage reporting** with thresholds

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Forms**: React Hook Form with Zod validation
- **Testing**: Jest, React Testing Library, Playwright
- **Analytics**: Google Analytics 4, Vercel Analytics
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digital-acubens.git
   cd digital-acubens
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
digital-acubens/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (pages)/           # Page components
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   ├── ai/               # AI-powered components
│   └── admin/            # Admin dashboard
├── lib/                  # Utility functions
│   ├── analytics.ts      # Analytics tracking
│   ├── security.ts       # Security utilities
│   └── utils.ts          # General utilities
├── public/               # Static assets
├── tests/                # Test files
│   ├── unit/            # Unit tests
│   └── e2e/             # E2E tests
└── styles/              # Additional styles
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test -- --coverage
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Loading Speed**: Sub-2s initial page load

## 🔧 Configuration

### Environment Variables
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID
- `OPENAI_API_KEY`: OpenAI API key for AI features
- `NEXTAUTH_SECRET`: Secret for authentication (if using)
- `DATABASE_URL`: Database connection string (if using)

### Customization
- **Colors**: Modify CSS variables in `app/globals.css`
- **Components**: Customize in `components/ui/`
- **Content**: Update in respective page components
- **Analytics**: Configure in `lib/analytics.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Three.js](https://threejs.org/) for 3D graphics

## 📞 Contact

**Digital Acubens**
- Website: [digitalacubens.com](https://digitalacubens.com)
- Email: contact@digitalacubens.com
- Twitter: [@digitalacubens](https://twitter.com/digitalacubens)

---

Built with ❤️ by the Digital Acubens team
