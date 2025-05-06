"use client";
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
import { useEffect, useState } from "react"

import teamCollabImage from "./../public/Team_collaboration.png";
import aboutUsImage from "./../public/about_us_hero.png";
import aimlImage from "./../public/ai_ml.png";
import webDevImage from "./../public/web_dev.png";
import mobileAppDevImage from "./../public/mobile_app_dev.png";
import cloudImage from "./../public/cloud_and_devops.png";


const images = [
  teamCollabImage,
  aboutUsImage,
  aimlImage,
  webDevImage,
  mobileAppDevImage,
  cloudImage
]


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev: any) => (prev + 1) % images.length);
    }, 5000); // 5s delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-scree">


      {/* Services Section */}
      <section
        className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-cover bg-center transition-all duration-1000 ease-in-out relative"
        id="services"
        style={{
          backgroundImage: `url(${images[currentImage].src})`,
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        {/* Main content (above overlay) */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                Comprehensive Software Solutions
              </h2>
              <p className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[900px] mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
                We offer a wide range of services to help your business succeed in the digital world.
              </p>
            </div>
          </div>

          <div className="mx-auto grid grid-cols-1 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 max-w-sm sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Globe className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-blue-600" />}
              title="Web Development"
              description="Custom websites and web applications built with the latest technologies."
            />
            <ServiceCard
              icon={<Layers className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-blue-600" />}
              title="Mobile Apps"
              description="Native and cross-platform mobile applications for iOS and Android."
            />
            <ServiceCard
              icon={<Brain className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-blue-600" />}
              title="AI & Machine Learning"
              description="Intelligent automation and data-driven insights."
            />
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
            <Link href="/our-services">
              <Button variant="outline" className="bg-blue-600 hover:bg-blue-700 hover:text-white text-white text-sm sm:text-base py-2 px-4 sm:py-2.5 sm:px-5">
                Explore
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1.5 sm:ml-2" />
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
                src="/Team collaboration.png"
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
                      src="/ex.png"
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
                      src="/cc.png"
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
                      src="/ino.png"
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
                      src="/gr.png"
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
      <section className="relative z-0 w-full py-14 md:py-40 bg-gradient-to-b from-blue-50 to-white">
        <BackgroundAnimation />
        <div className="container px-4 md:px-6">
          <div className="flex justify-center">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-4xl lg:text-5xl/2 xl:text-5xl/none text-black">
                  Innovating Tomorrow, Today!
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Empowering your digital journey with Global Pearl Ventures<br />
                  Where Innovation meets Excellence.
                </p>
              </div>

              {/* ✅ Fixed Buttons Layout */}
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Link href="/get-in-touch">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-teal-700 text-white transition-colors duration-300 ease-in-out">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/our-services">
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBox />
    </div>
  )
}
