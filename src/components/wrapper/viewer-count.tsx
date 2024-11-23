'use client'

import { useState, useEffect } from 'react'
import { Users, UserCheck } from 'lucide-react'

export default function ViewerCount() {
    const [stats, setStats] = useState<{ activeUsers: number | null; totalVisitors: number | null }>({
        activeUsers: null,
        totalVisitors: null,
    })

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/active-users')
                const data = await response.json()
                setStats({
                    activeUsers: data.activeUsers,
                    totalVisitors: data.totalVisitors,
                })
            } catch (error) {
                console.error('Error fetching visitor stats:', error)
                setStats({ activeUsers: null, totalVisitors: null })
            }
        }

        fetchStats()
        const interval = setInterval(fetchStats, 60000) // Update every minute

        return () => clearInterval(interval)
    }, [])

    if (stats.activeUsers === null || stats.totalVisitors === null) return null

    return (
        <div className="fixed bottom-4 text-white left-4 flex flex-col items-start space-y-2">
            <div className="bg-slate-950 p-3 px-4 rounded-full shadow-lg flex items-center space-x-2">
                <UserCheck size={18} />
                <span className="font-bold">{stats.activeUsers}</span>
                <span className="hidden sm:inline">online now</span>
            </div>
            <div className="bg-slate-950 p-3 px-4 rounded-full shadow-lg flex items-center space-x-2">
                <Users size={18} />
                <span className="font-bold">{stats.totalVisitors.toLocaleString()}</span>
                <span className="hidden sm:inline">total visitors</span>
            </div>
        </div>
    )
}