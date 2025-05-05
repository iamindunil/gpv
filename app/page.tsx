import Link from "next/link"
import { ArrowRight, Brain, Code, Database, Globe, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import Image from "next/image"
import ContactBox from "@/components/contactBox"


export default function Home() {
  return (
    <div className="flex flex-col min-h-scree">
      

      {/* Services Section */}
      <section className="w-full py-2 md:py-3 lg:py-24 bg-white" id="services">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                Comprehensive Software Solutions
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of services to help your business succeed in the digital world.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <ServiceCard
              icon={<Globe className="h-10 w-10 text-blue-600" />}
              title="Web Development"
              description="Custom websites and web applications built with the latest technologies."
            />
            <ServiceCard
              icon={<Layers className="h-10 w-10 text-blue-600" />}
              title="Mobile Apps"
              description="Native and cross-platform mobile applications for iOS and Android."
            />
            <ServiceCard
              icon={<Brain className="h-10 w-10 text-blue-600" />}
              title="AI & Machine Learning"
              description="Intelligent automation and data-driven insights."
            />
          </div>
          <div className="flex justify-center mt-5 md:mt-7 ">
            <Link href="/our-services">
              <Button variant="outline" className="bg-blue-600 hover:bg-blue-700 hover:text-white text-white">
                Explore
                <ArrowRight className=" h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-12 lg:py-12 bg-blue-50 mt-3">
        <div className="container px-4 md:px-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex items-center justify-center">
              <img
                src="/Team collaboration.svg"
                alt="Team collaboration"
                className="mx-auto overflow-hidden rounded-xl md:rounded-none object-cover object-center sm:w-full md:w-10/12 md:h-96"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Why Choose Global Pearl
                  Ventures?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base">
                  At Global Pearl Ventures (GPV), we don’t just deliver technology
                  we deliver value. Our approach combines technical excellence with strategic thinking. Here’s why businesses choose to partner with us:
                </p>
              </div>
              <ul className="grid gap-3">
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src="/ex.svg"
                      alt="Team collaboration"
                      width={32}
                      height={32}


                    />
                  </div>
                  <span className="text-gray-700">Expert Team</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src="/cc.svg"
                      alt="Client-Centric Approach"
                      width={34}
                      height={34}


                    />
                  </div>
                  <span className="text-gray-700">Client-Centric Approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src="/ino.svg"
                      alt="Innovation-Driven"
                      width={34}
                      height={34}


                    />
                  </div>
                  <span className="text-gray-700">Innovation-Driven</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                    <Image
                      src="/gr.svg"
                      alt="Innovation-Driven"
                      width={34}
                      height={34}


                    />
                  </div>
                  <span className="text-gray-700">Global Reach, Local Impact</span>
                </li>

              </ul>
              <div className="flex items-center justify-center">
                <Link href="/why-choose-us">
                  <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      
      <section className="relative z-10 w-full py-14 md:py-40 bg-gradient-to-b from-blue-50 to-white">
        <BackgroundAnimation />
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl lg:text-5xl/2 xl:text-5xl/none   text-black">
                  Innovating Tommorrow, Today !
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Empowering your digital journey with Global Pearl Ventures<br />
                  Where Innovation meets Excellence.
                </p>
              </div>
              <div className="flex flex-col-2 gap-4 min-[400px]:flex-row">
                <Link href="/get-in-touch">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-teal-700 text-white transition-colors duration-300 ease-in-out">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/our-services">
                  <Button variant="outline" className="border-blue-200 text-blue-600 transition-colors duration-300 ease-in-out">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
          </div>
          </div>
        </div>
      </section>
      <ContactBox />
    </div>
  )
}
