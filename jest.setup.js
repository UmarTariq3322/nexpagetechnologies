import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  usePathname() {
    return '/'
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    h1: 'h1',
    p: 'p',
    span: 'span',
    button: 'button',
    section: 'section',
    header: 'header',
    nav: 'nav',
    main: 'main',
    footer: 'footer',
    article: 'article',
    aside: 'aside',
    ul: 'ul',
    li: 'li',
    a: 'a',
    img: 'img',
    form: 'form',
    input: 'input',
    textarea: 'textarea',
    select: 'select',
    option: 'option',
    label: 'label',
    table: 'table',
    thead: 'thead',
    tbody: 'tbody',
    tr: 'tr',
    th: 'th',
    td: 'td',
  },
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn(),
  }),
  useInView: () => true,
  useMotionValue: () => ({ get: jest.fn(), set: jest.fn() }),
  useTransform: () => ({ get: jest.fn(), set: jest.fn() }),
  useSpring: () => ({ get: jest.fn(), set: jest.fn() }),
  useScroll: () => ({ scrollY: { get: jest.fn() } }),
  useViewportScroll: () => ({ scrollY: { get: jest.fn() } }),
  useReducedMotion: () => false,
  useAnimationControls: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn(),
  }),
}))

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: jest.fn(),
    resolvedTheme: 'dark',
  }),
  ThemeProvider: ({ children }) => children,
}))

// Mock @vercel/analytics
jest.mock('@vercel/analytics/next', () => ({
  Analytics: () => null,
}))

// Mock environment variables
process.env.NEXT_PUBLIC_GA_ID = 'test-ga-id'
