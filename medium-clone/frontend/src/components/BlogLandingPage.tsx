import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Clock, Edit, MessageSquare, Search, Tag, Bookmark, ArrowRight } from "lucide-react"
import { Link } from 'react-router-dom'

export default function BlogLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <BookOpen className="h-6 w-6" />
          <span>BlogWave</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link to="#explore" className="text-sm font-medium hover:underline underline-offset-4">
            Explore
          </Link>
          <Link to="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Share your stories with the world
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create, publish, and grow your blog with our powerful and easy-to-use platform. Start writing today
                    and connect with readers around the globe.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Start Your Blog
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    See Examples
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need to blog like a pro
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides all the tools you need to create, publish, and grow your blog with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="explore" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Explore
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover trending stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our collection of featured posts from our community of writers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post, index) => (
                <div
                  key={index}
                  className="group flex flex-col rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                   
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        <span>{post.category}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="p-4 pt-0 mt-auto">
                    <Link to="#" className="inline-flex items-center text-sm font-medium text-primary">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>

        <section id="categories" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore by category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find content that matches your interests from our diverse range of topics.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to="#"
                  className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-xs text-muted-foreground">{category.count} posts</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start your blogging journey today</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for you and start sharing your stories with the world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    ${plan.price}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8">Get Started</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="w-full flex justify-center py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Subscribe to our newsletter</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest blog posts and news delivered to your inbox weekly.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <div className="flex items-center justify-center">
                  <Button type="submit">
                    Subscribe
                  </Button>
                </div>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link to="#" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-12">
        <div className="container flex flex-col gap-6 px-4 md:flex-row md:px-6">
          <div className="flex flex-col gap-3 md:w-1/3">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <BookOpen className="h-6 w-6" />
              <span>BlogWave</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern platform for creating and sharing your stories with the world.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Features
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Pricing
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Testimonials
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  About
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Blog
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Careers
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Documentation
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Guides
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Support
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  API
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:underline">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-3 border-t px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} BlogWave. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Easy Editor",
    description: "Write and format your content with our intuitive rich text editor.",
    icon: <Edit className="h-6 w-6 text-primary" />,
  },
  {
    title: "SEO Optimization",
    description: "Optimize your content for search engines to reach more readers.",
    icon: <Search className="h-6 w-6 text-primary" />,
  },
  {
    title: "Social Sharing",
    description: "Share your posts across social media platforms with one click.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
  {
    title: "Analytics",
    description: "Track your audience engagement and post performance.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "Custom Domains",
    description: "Use your own domain name for a professional blog presence.",
    icon: <Bookmark className="h-6 w-6 text-primary" />,
  },
  {
    title: "Mobile Friendly",
    description: "Your blog looks great on all devices, from desktop to mobile.",
    icon: <Tag className="h-6 w-6 text-primary" />,
  },
]

const featuredPosts = [
  {
    title: "10 Tips for Writing Engaging Blog Content",
    excerpt: "Learn how to create content that captivates your audience and keeps them coming back for more.",
    category: "Writing",
    readTime: "5 min read",
  },
  {
    title: "How to Grow Your Blog Audience in 2025",
    excerpt: "Discover proven strategies to increase your readership and build a loyal following for your blog.",
    category: "Growth",
    readTime: "7 min read",
  },
  {
    title: "The Future of Content Creation: AI and Beyond",
    excerpt: "Explore how artificial intelligence is transforming the way we create and consume content online.",
    category: "Technology",
    readTime: "8 min read",
  },
  {
    title: "Building a Personal Brand Through Blogging",
    excerpt: "Learn how to establish yourself as an authority in your niche and build a recognizable personal brand.",
    category: "Branding",
    readTime: "6 min read",
  },
  {
    title: "Monetization Strategies for Bloggers in 2025",
    excerpt: "Discover different ways to turn your passion for writing into a sustainable income stream.",
    category: "Business",
    readTime: "9 min read",
  },
  {
    title: "The Art of Storytelling in Blog Writing",
    excerpt: "Master the craft of storytelling to create more engaging and memorable blog content.",
    category: "Writing",
    readTime: "4 min read",
  },
]

const categories = [
  {
    name: "Technology",
    count: 124,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    name: "Lifestyle",
    count: 98,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    name: "Travel",
    count: 87,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    name: "Food",
    count: 76,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    name: "Health",
    count: 65,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    name: "Business",
    count: 54,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    name: "Art",
    count: 43,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    name: "Education",
    count: 32,
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
]

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for beginners and hobbyists.",
    price: 0,
    features: ["5 blog posts per month", "Basic analytics", "Standard themes", "Community support"],
  },
  {
    name: "Pro",
    description: "For serious bloggers and content creators.",
    price: 12,
    features: [
      "Unlimited blog posts",
      "Advanced analytics",
      "Premium themes",
      "Priority support",
      "Custom domain",
      "No ads",
    ],
  },
  {
    name: "Business",
    description: "For professional publications and teams.",
    price: 29,
    features: [
      "Everything in Pro",
      "Multiple authors",
      "Team collaboration",
      "API access",
      "White-label solution",
      "Dedicated support",
    ],
  },
]

