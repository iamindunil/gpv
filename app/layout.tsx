import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ProgressCircle } from "@/components/progress-circle"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GPV",
  description: "We build cutting-edge software that transforms ideas into powerful digital experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <MainNav />
          {children}
          <ProgressCircle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}