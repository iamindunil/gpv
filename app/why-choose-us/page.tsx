import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

import heroImg from "../../public/why_choose_us_hero.png"
import expertImg from "../../public/ex.png"
import clientImg from "../../public/cc.png"
import innovationImg from "../../public/ino.png"
import globalReachImg from "../../public/gr.png"
import provenImg from "../../public/pe.png"
import agileImg from "../../public/Am.png"
import techImg from "../../public/t.png"
import globalStandardsImg from "../../public/gsl.png"
import ContactBox from "@/components/contactBox"

export default function WhyChooseUs() {

  const features = [
    {
      image: expertImg,
      title: "Expert Team",
      description: "Skilled professionals with industry-leading expertise",
    },
    {
      image: clientImg,
      title: "Client-Centric Approach",
      description: "Solutions tailored to your unique business needs",
    },
    {
      image: innovationImg,
      title: "Innovation-Driven",
      description: "Leveraging the latest technologies for future-ready results",
    },
    {
      image: globalReachImg,
      title: "Global Reach, Local Impact",
      description: "Serving clients across borders with precision and care.",
    },
    {
      image: provenImg,
      title: "Proven Expertise",
      description: "Experienced team with a track record of successful projects.",
    },
    {
      image: agileImg,
      title: "Agile Methodology",
      description: "Flexible, efficient, and client-focused development.",
    },
    {
      image: techImg,
      title: "24/7 Technical Support",
      description: "Reliable maintenance and assistance",
    },
    {
      image: globalStandardsImg,
      title: "Global Standards, Local Relevance",
      description: "Solutions designed for international markets with localized support.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Key Advantages Section */}
        <section className="w-full py-12 md:py-24 lg:py-24 bg-gradient-to-r from-white to-[#CEEFFF]">
          <div className="container px-4 md:px-14">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <Image src={heroImg} alt="Team collaboration" className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full md:h-96 " />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                    Excellence in Every Line of Code
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We combine technical expertise with creative problem-solving to deliver exceptional results.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Custom website developement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Progressive Web Apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">E-Commerse solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Content management systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Web application developement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">API development and integration</span>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-gradient-to-r from-[#CEEFFF] to-[#CEEFFF] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6  rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-16 w-full mb-4"> {/* Increased height from h-32 to h-48 */}
  <Image
    src={feature.image}
    alt={feature.title}
    fill
    style={{ objectFit: "contain" }} // 'contain' gives a larger image within bounds
    className="rounded-lg p-1" // Reduced padding slightly to give more space
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </section>
        <ContactBox />
      </main>
    </div>
  )
}
