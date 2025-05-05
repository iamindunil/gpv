import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-row items-center">
              <img
                src="/Logo-v6.png"
                alt="logo"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18"
              />
              <span className="ml-4 mt-2 text-2xl font-bold">GPV</span>
            </div>


            <p className="text-sm mb-4"><br /> Empowering your digital journey<br /> with Global Pearl Ventures<br /> – Where innovation meets
              excellence.</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7235 9.88256L8.66986 4H4L10.1294 12.8955L4 20H5.38119L10.7222 13.7878L14.998 20H19.6679L13.3174 10.7749ZM11.3961 12.9738L10.7726 12.0881L5.95568 5.02193H8.0045L11.7491 10.5547L12.3726 11.4403L17.3999 18.9671H15.3509L11.3961 12.9738Z" fill="currentColor" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link href="/our-services" className="hover:text-white">Our Services</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-white">Why Choose Us?</Link></li>
              <li><Link href="/get-in-touch" className="hover:text-white">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/our-services#web-dev" className="hover:text-white">Web Development</Link></li>
              <li><Link href="/our-services#mobile-dev" className="hover:text-white">Mobile App Development</Link></li>
              <li><Link href="/our-services#custom-software" className="hover:text-white">Custom Software Development</Link></li>
              <li><Link href="/our-services#cloud-devops" className="hover:text-white">Cloud Solutions & DevOps</Link></li>
              <li><Link href="/our-services#ai-ml" className="hover:text-white">AI & ML Solutions</Link></li>
              <li><Link href="/our-services#cybersecurity" className="hover:text-white">Cyber Security Services</Link></li>
              <li><Link href="/our-services#consulting" className="hover:text-white">IT Consulting & Digital Transformation</Link></li>
              <li><Link href="/our-services#uiux" className="hover:text-white">UI / UX Design</Link></li>
              <li><Link href="/our-services#big-data" className="hover:text-white">Big Data</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>123 Software Lane, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>info@globalpearlventures.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
          <p className="text-sm">© 2025 Global Pearl Ventures. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}