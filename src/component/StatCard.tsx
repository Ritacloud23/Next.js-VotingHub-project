import type { LucideIcon } from 'lucide-react'

type StatCardProps = {
  title: string
  value: string | number
  icon: LucideIcon
  iconColor: string
  iconBackground: string
  valueColor?: string
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBackground,
  valueColor = 'text-white',
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0c0d1a] p-4 sm:p-5">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${iconBackground}`}
        >
          <Icon className={iconColor} size={24} />
        </div>

        {/* Information */}
        <div className="min-w-0">
          <p className="text-sm text-gray-400">
            {title}
          </p>

          <p className={`mt-1 text-xl font-bold sm:text-2xl ${valueColor}`}>
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}