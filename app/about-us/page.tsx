import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TeamMember } from "@/components/team-member"

import heroImg from "../../public/about_us_hero.svg"
import innovationImg from "../../public/i.svg"
import reliableImg from "../../public/rs.svg"
import scalableImg from "../../public/ss.svg"
import transformativeImg from "../../public/ts.svg"
import ContactBox from "@/components/contactBox"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-24 bg-gradient-to-r from-white to-[#CEEFFF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:text-left text-center sm:space-x-10 gap-y-8">
              <div className="w-full sm:w-1/2  ">
                <Image src={heroImg} alt="About Us" className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full md:h-96 " />
              </div>
              <div className="w-full sm:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
                  What is Global Pearl Ventures?
                </h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl">
                  Global Pearl Ventures (GPV) is a dynamic software development and technology solutions provider, committed to delivering innovative, scalable, and secure IT services to businesses across industries. With a focus on excellence and customer satisfaction, we empower organizations to harness the power of cutting-edge technology for sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovating Future Section */}
        <section className="px-4 py-12 sm:py-16 bg-white text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Innovating Future, Today!
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-12">
            To be a global leader in technology innovation, enabling businesses to thrive in the digital era through reliable, scalable, and transformative solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="border border-green-200 shadow-sm transition-all hover:shadow-md hover:border-green-300 rounded-md p-6 shadow-sm hover:shadow-md transition">
              <Image src={innovationImg} alt="Innovation" className="mx-auto mb-4 h-12 w-12" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to stay ahead of the curve and deliver cutting-edge solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-green-200 shadow-sm transition-all hover:shadow-md hover:border-green-300 rounded-md p-6 shadow-sm hover:shadow-md transition">
              <Image src={reliableImg} alt="Reliable Solutions" className="mx-auto mb-4 h-12 w-12" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Solutions</h3>
              <p className="text-gray-600">
                We are committed to delivering reliable solutions by continuously adapting to your evolving needs and ensuring exceptional quality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-green-200 shadow-sm transition-all hover:shadow-md hover:border-green-300 rounded-md p-6 shadow-sm hover:shadow-md transition">
              <Image src={scalableImg} alt="Scalable Solutions" className="mx-auto mb-4 h-12 w-12" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                We design with scalability in mind, ensuring our solutions grow seamlessly alongside your business and adapt to increasing demands.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-green-200 shadow-sm transition-all hover:shadow-md hover:border-green-300 rounded-md p-6 shadow-sm hover:shadow-md transition">
              <Image src={transformativeImg} alt="Transformative Solutions" className="mx-auto mb-4 h-12 w-12" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transformative Solutions</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and methodologies to stay ahead of the curve and deliver transformative solutions.
              </p>
            </div>
          </div>
          
        </section>
        <ContactBox />
      </main>
    </div>
  )
}
