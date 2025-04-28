"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-services", label: "Our Services" },
    { href: "/why-choose-us", label: "Why Choose Us?" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-blue-50 via-emerald-50 to-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600"><Image src="logo.png" alt="logo" /></span>
        </Link>
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="md:hidden p-5 flex items-center justify-center min-h-[64px] min-w-[64px]"
            >
              {isMenuOpen ? (
                <X className="h-12 w-12" />
              ) : (
                <Menu className="h-12 w-12" />
              )}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
                <nav className="flex flex-col p-4 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-blue-600",
                        pathname === item.href
                          ? "text-blue-600"
                          : "text-gray-600"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/get-in-touch"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Contact Us
                    </Button>
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  pathname === item.href
                    ? "text-blue-600 underline underline-offset-4 decoration-2"
                    : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/get-in-touch">
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                Get in Touch
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
