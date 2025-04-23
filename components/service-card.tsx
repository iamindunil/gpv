import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border  bg-white p-6 text-center border-green-200 shadow-sm transition-all hover:shadow-md hover:border-green-300">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">{icon}</div>
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
