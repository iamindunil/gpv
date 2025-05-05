"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition: "left" | "right";
}

const ServiceDetail = ({
  title,
  description,
  features,
  image,
  imagePosition,
}: ServiceDetailProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto">
      <div
        className={`flex flex-col ${
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full w-full">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="bg-blue-50"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 mb-5">{description}</p>

          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                </div>
                <p className="text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if we should display scroll buttons
  const checkScrollButtons = () => {
    if (iconContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = iconContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  // Auto-scroll effect for mobile
  useEffect(() => {
    if (!isMobile || !mobileScrollRef.current || autoScrollPaused || reachedEnd) return;

    const scrollContainer = mobileScrollRef.current;
    let animationFrameId: number;
    
    const scrollSpeed = 0.5; // Pixels per frame
    let currentScrollPosition = scrollContainer.scrollLeft;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      currentScrollPosition += scrollSpeed;
      
      // Check if we've reached the end
      if (currentScrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
        setReachedEnd(true);
        return;
      }
      
      scrollContainer.scrollLeft = currentScrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, autoScrollPaused, reachedEnd]);

  // Handle user interaction
  const pauseAutoScroll = () => {
    setAutoScrollPaused(true);
    
    // Clear any existing timeout
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    
    // Resume auto-scroll after 3 seconds of inactivity
    autoScrollTimeoutRef.current = setTimeout(() => {
      setAutoScrollPaused(false);
    }, 3000);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      checkScrollButtons();
    };

    if (typeof window !== "undefined") {
      checkScrollButtons();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      pauseAutoScroll();
      // If we scroll left, we're not at the end anymore
      setReachedEnd(false);
    }
  };

  const scrollRight = () => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      pauseAutoScroll();
    }
  };

  const scrollToService = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "web-dev",
      ref: useRef<HTMLDivElement>(null),
      title: "Web Development",
      description:
        "We create responsive user-friendly websites and Web applications that deliver exceptional user experiences.",
      features: [
        "Custom website development",
        "Progressive Web Apps (PWAs)",
        "E-commerce solutions",
        "Content Management Systems",
        "Web application development",
        "API development and integration",
      ],
      image: "web_dev.png",
    },
    {
      id: "mobile-dev",
      ref: useRef(null),
      title: "Mobile App Development",
      description:
        "We build native and cross-platform mobile applications that engage users and drive business growth.",
      features: [
        "iOS app development",
        "Android app development",
        "Cross-platform development",
        "Mobile app UI/UX design",
        "App maintenance and support",
        "App store optimization",
      ],
      image: "mobile_app_dev.png",
    },
    {
      id: "custom-software",
      ref: useRef(null),
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your unique business challenges and requirements.",
      features: [
        "Enterprise software development",
        "Software integration services",
        "Legacy system modernization",
        "Quality assurance & testing",
        "Software maintenance & support",
        "Agile development methodologies",
      ],
      image: "custom_se.png",
    },
    {
      id: "cloud-devops",
      ref: useRef(null),
      title: "Cloud Solutions & DevOps",
      description:
        "Streamline your infrastructure with modern cloud solutions and DevOps practices for enhanced efficiency.",
      features: [
        "Cloud migration & hosting",
        "Infrastructure as code",
        "CI/CD pipeline implementation",
        "Cloud architecture design",
        "Containerization & orchestration",
        "DevOps automation",
      ],
      image: "cloud_and_devops.png",
    },
    {
      id: "ai-ml",
      ref: useRef(null),
      title: "AI & Machine Learning Solutions",
      description:
        "Leverage the power of artificial intelligence to transform your data into actionable insights and automated processes.",
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision systems",
        "Machine learning models",
        "AI integration services",
        "Data analytics solutions",
      ],
      image: "ai_ml.png",
    },
    {
      id: "cybersecurity",
      ref: useRef(null),
      title: "Cyber Security Services",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      features: [
        "Security assessments & audits",
        "Penetration testing",
        "Security architecture design",
        "Compliance management",
        "Incident response planning",
        "Security training & awareness",
      ],
      image: "cybersecurity.png",
    },
    {
      id: "consulting",
      ref: useRef(null),
      title: "IT Consulting & Digital Transformation",
      description:
        "Strategic guidance to help your business navigate the digital landscape and drive successful transformation.",
      features: [
        "Digital strategy development",
        "Technology roadmapping",
        "Business process optimization",
        "IT governance & compliance",
        "Change management",
        "Digital maturity assessment",
      ],
      image: "it.png",
    },
    {
      id: "uiux",
      ref: useRef(null),
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user experiences that delight customers and increase conversion rates.",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Interface design",
        "Usability analysis",
        "Responsive design",
        "Design systems development",
      ],
      image: "/ui_ux.png",
    },
    {
      id: "big-data",
      ref: useRef(null),
      title: "Big Data",
      description:
        "Harness the power of your data through advanced analytics and processing solutions.",
      features: [
        "Data warehouse implementation",
        "Big data processing",
        "Data visualization",
        "ETL pipelines",
        "Real-time analytics",
        "Data governance strategy",
      ],
      image: "big_data.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="text-center mb-20 bg-blue-50 rounded-lg py-12 lg:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">Our Services</h1>
        <p className="text-gray-600 max-w-3xl mx-auto px-4">
          Global Pearl Ventures (GPV) provides innovative, secure, and
          scalable technology solutions tailored to help businesses succeed in
          the digital age driving efficiency, growth, and a competitive edge.
        </p>

        {/* Service Icons */}
        <div className="relative mt-24">
          {/* Arrows for mobile view */}
          <button
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-100 hover:bg-blue-200 rounded-full p-2 z-10 shadow-md md:hidden ${
              !showLeftArrow ? 'opacity-50' : 'opacity-100'
            }`}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Icon Container */}
          <div ref={iconContainerRef} onScroll={checkScrollButtons} className="relative">
            {/* Mobile scrollable without infinite scroll */}
            <div 
              ref={mobileScrollRef} 
              className="flex md:hidden overflow-x-auto scrollbar-hide snap-x space-x-6 px-4 no-scrollbar mobile-scroll-container"
              onTouchStart={pauseAutoScroll}
              onMouseDown={pauseAutoScroll}
              onScroll={(e) => {
                pauseAutoScroll();
                // Check if we're near the end for manual scrolling
                const target = e.currentTarget;
                if (target.scrollLeft >= target.scrollWidth - target.clientWidth - 10) {
                  setReachedEnd(true);
                }
              }}
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="cursor-pointer p-4 rounded-lg flex-shrink-0 snap-center text-sm mobile-service-item"
                  style={{
                    minWidth: '100px', // Ensure all items have same width
                  }}
                  onClick={() => {
                    scrollToService(service.ref);
                    setActiveService(service.id);
                    pauseAutoScroll();
                  }}
                >
                  <div className="w-16 h-16 relative mx-auto mb-2">
                    <Image
                      src={`${service.id}-icon.png`}
                      alt={service.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-xs w-18 text-center justify-center items-center">
                    {service.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-9 gap-y-4 mx-auto mt-6 px-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`cursor-pointer p-2 rounded-lg text-center bg-white border transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-blue-100"
                      : "hover:bg-blue-50"
                  }`}
                  onClick={() => {
                    scrollToService(service.ref);
                    setActiveService(service.id);
                  }}
                >
                  <div className="w-20 h-20 md:w-12 md:h-12 relative mx-auto mb-2 gap-4">
                    <Image
                      src={`${service.id}-icon.png`}
                      alt={service.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">{service.title}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-100 hover:bg-blue-200 rounded-full p-2 z-10 shadow-md md:hidden ${
              !showRightArrow ? 'opacity-50' : 'opacity-100'
            }`}
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Service Details */}
      <div className="space-y-6 md:space-y-12 px-4">
        {services.map((service) => (
          <div
            ref={service.ref}
            key={service.id}
            id={service.id}
            className="scroll-mt-24"
          >
            <ServiceDetail
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              imagePosition={
                services.indexOf(service) % 2 === 0 ? "left" : "right"
              }
            />
          </div>
        ))}
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-10xl mx-auto text-center bg-gradient-to-r from-[#0371BC] to-[#128DBB] rounded-2xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg sm:text-xl text-white leading-relaxed mb-8">
          Let&apos;s discuss how our software solutions can help you achieve your business goals and<br />
          drive innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/get-in-touch"
            className="inline-block bg-white text-[#0371BC] font-medium text-lg px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>

      {/* CSS for scrolling behavior */}
      <style jsx global>{`
      /* Hide scrollbars but maintain functionality */
      .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;     /* Firefox */
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;             /* Chrome, Safari and Opera */
      }

      /* Smooth scroll behavior for auto/manual scrolling */
      .mobile-scroll-container {
        scroll-behavior: smooth;
      }

      /* Animation only applies on mobile */
      @media (max-width: 767px) {
        /* Mobile service items should have consistent width */
        .mobile-service-item {
          min-width: 100px;
          transition: background-color 0.3s, transform 0.3s ease-in-out;
        }

        .mobile-service-item:hover {
          background-color: rgba(219, 234, 254, 0.5);
        }
      }
    `}</style>
    </div>
  );
}