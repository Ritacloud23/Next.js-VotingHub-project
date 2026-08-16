import {
  BarChart3,
  Users,
} from 'lucide-react'

import Sidebar from '@/component/Sidebar'
import Header from '@/component/Header'
import StatCard from '@/component/StatCard'
import Candidates from '@/component/candidates'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03156e] text-white">
      <div className="flex">
        <Sidebar />

        <section className="min-w-0 flex-1 p-4 pt-20 sm:p-6 sm:pt-20 lg:p-8">
          <Header />

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <StatCard
              title="Total Candidates"
              value={4}
              icon={Users}
              iconColor="text-purple-400"
              iconBackground="bg-purple-500/10"
            />

            <StatCard
              title="Your Vote Status"
              value="Not Voted"
              icon={BarChart3}
              iconColor="text-yellow-400"
              iconBackground="bg-yellow-500/10"
            />
          </section>

          {/* Candidates */}
          <section className="mt-6">
            <Candidates />
          </section>
        </section>
      </div>
    </main>
  )
}