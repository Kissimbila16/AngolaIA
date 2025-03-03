import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Cpu, Zap, BarChart3, Lock, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Brain className="h-6 w-6 text-red-600" />
            <span>NexusAI</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#features" className="px-4 py-2 text-sm font-medium transition-colors hover:text-red-500">
                Features
              </Link>
              <Link href="#capabilities" className="px-4 py-2 text-sm font-medium transition-colors hover:text-red-500">
                Capabilities
              </Link>
              <Link href="#demo" className="px-4 py-2 text-sm font-medium transition-colors hover:text-red-500">
                Demo
              </Link>
              <Link href="#pricing" className="px-4 py-2 text-sm font-medium transition-colors hover:text-red-500">
                Pricing
              </Link>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Introducing NexusAI
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    The next generation of artificial intelligence that understands, learns, and adapts to your needs
                    with unprecedented accuracy.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Try It Now</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-black p-1">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="AI Visualization"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-600 px-3 py-1 text-sm text-white">Revolutionary</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Key Features</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NexusAI brings cutting-edge capabilities that redefine what's possible with artificial intelligence
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Cpu className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Advanced Neural Processing</CardTitle>
                  <CardDescription className="text-gray-400">
                    Multi-layered neural networks that process information similar to the human brain.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Zap className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Real-time Learning</CardTitle>
                  <CardDescription className="text-gray-400">
                    Continuously improves through interactions, adapting to new information instantly.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription className="text-gray-400">
                    Forecasts trends and outcomes with unprecedented accuracy based on historical data.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Globe className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Multilingual Understanding</CardTitle>
                  <CardDescription className="text-gray-400">
                    Comprehends and generates content in over 100 languages with native-level fluency.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Lock className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Enhanced Security</CardTitle>
                  <CardDescription className="text-gray-400">
                    Built-in privacy protections and security measures to keep your data safe.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-800 text-white">
                <CardHeader>
                  <Brain className="h-10 w-10 text-red-600 mb-2" />
                  <CardTitle>Contextual Awareness</CardTitle>
                  <CardDescription className="text-gray-400">
                    Understands nuance, context, and implicit meaning in communication.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="capabilities" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Capabilities</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore what NexusAI can do across different domains and applications
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="business" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                <TabsContent value="business" className="p-4 bg-gray-800 text-white">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Market Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Process vast amounts of market data to identify trends, opportunities, and potential risks.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Customer Insights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Analyze customer behavior and feedback to provide actionable insights for business growth.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Process Automation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Streamline workflows and automate repetitive tasks to increase operational efficiency.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Decision Support</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Provide data-driven recommendations to support strategic business decisions.</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="healthcare" className="p-4 bg-gray-800 text-white">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Diagnostic Assistance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Support medical professionals with accurate analysis of patient data and diagnostic imaging.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Treatment Planning</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Analyze medical literature and patient history to suggest personalized treatment options.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Drug Discovery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Accelerate pharmaceutical research by predicting molecular interactions and drug efficacy.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Patient Monitoring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Continuously analyze patient vitals and alert healthcare providers to potential issues.</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="p-4 bg-gray-800 text-white">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Personalized Learning</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Adapt educational content to individual learning styles, pace, and knowledge gaps.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Automated Assessment</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Provide instant, detailed feedback on assignments and assessments to support learning.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Content Creation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Generate educational materials tailored to specific curriculum requirements and learning
                          objectives.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800 text-white">
                      <CardHeader>
                        <CardTitle>Research Assistance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>
                          Help researchers analyze data, identify patterns, and generate insights from complex
                          information.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">See NexusAI in Action</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the power and versatility of our AI through interactive demonstrations
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="rounded-xl border border-gray-700 bg-gray-800 shadow-lg">
                <div className="p-1 bg-gray-900 rounded-t-xl flex items-center">
                  <div className="flex space-x-2 ml-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-400">NexusAI Demo</div>
                </div>
                <div className="p-6 h-[400px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Brain className="h-16 w-16 text-red-600 mx-auto animate-pulse" />
                    <h3 className="text-xl font-medium text-white">Interactive Demo Coming Soon</h3>
                    <p className="text-gray-400">
                      Our team is putting the finishing touches on an interactive demo that will showcase the full
                      capabilities of NexusAI.
                    </p>
                    <Button>Join Waitlist</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Pricing Plans</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect plan for your needs with our flexible pricing options
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {/* Free Plan */}
              <Card className="flex flex-col bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Free</CardTitle>
                  <CardDescription>For individuals exploring AI capabilities</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">$0</div>
                  <p className="text-sm text-gray-400 mb-6">Forever free</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Basic AI capabilities</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>100 queries per month</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Community support</span>
                    </li>
                    <li className="flex items-center text-gray-400">
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
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <span>Advanced features</span>
                    </li>
                    <li className="flex items-center text-gray-400">
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
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <span>API access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col border-red-600 relative bg-gray-800 text-white">
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-red-600 px-3 py-1 text-xs font-bold text-white">
                  POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>For professionals and small teams</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">$49</div>
                  <p className="text-sm text-gray-400 mb-6">per user / month</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>All Free features</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Unlimited queries</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>API access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For organizations with advanced needs</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <p className="text-sm text-gray-400 mb-6">Contact for pricing</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>All Professional features</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>24/7 premium support</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
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
                        className="h-4 w-4 mr-2 text-red-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>SLA guarantees</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-400">All plans include a 14-day free trial. No credit card required.</p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    Ready to transform your workflow?
                  </h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Join thousands of organizations already leveraging NexusAI to drive innovation and efficiency.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">
                    Schedule a Demo
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">Free 14-day trial with full access to all features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">Dedicated support team to help you get started</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">No credit card required </div>
                    <span className="text-white">No credit card required to start your trial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
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
                        className="h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-white">Flexible pricing plans to fit your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <Brain className="h-5 w-5 text-red-600" />
            <span>NexusAI</span>
          </div>
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2025 NexusAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

