// 'use client'

// import { useState, useEffect } from 'react'
// import { Users, UserCheck } from 'lucide-react'

// export default function ViewerCount() {
//     const [stats, setStats] = useState<{ activeUsers: number | null; totalVisitors: number | null }>({
//         activeUsers: null,
//         totalVisitors: null,
//     })
//     const [error, setError] = useState(false)

//     useEffect(() => {
//         const fetchStats = async () => {
//             try {
//                 const response = await fetch('/api/active-users')
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch stats')
//                 }
//                 const data = await response.json()
//                 // Ensure we have valid numbers
//                 setStats({
//                     activeUsers: typeof data.activeUsers === 'number' ? data.activeUsers : 0,
//                     totalVisitors: typeof data.totalVisitors === 'number' ? data.totalVisitors : 0,
//                 })
//                 setError(false)
//             } catch (error) {
//                 console.error('Error fetching visitor stats:', error)
//                 setError(true)
//                 setStats({ activeUsers: 0, totalVisitors: 0 })
//             }
//         }

//         fetchStats()
//         const interval = setInterval(fetchStats, 60000) // Update every minute

//         return () => clearInterval(interval)
//     }, [])

//     // Don't render if there's an error
//     if (error) return null

//     // Ensure we have valid numbers before rendering
//     const activeUsers = stats.activeUsers ?? 0
//     const totalVisitors = stats.totalVisitors ?? 0

//     return (
//         <div className="fixed bottom-4 text-white left-4 flex flex-col items-start space-y-2">
//             <div className="bg-slate-950 p-3 px-4 rounded-full shadow-lg flex items-center space-x-2">
//                 <UserCheck size={18} />
//                 <span className="font-bold">{activeUsers}</span>
//                 <span className="hidden sm:inline">online now</span>
//             </div>
//             <div className="bg-slate-950 p-3 px-4 rounded-full shadow-lg flex items-center space-x-2">
//                 <Users size={18} />
//                 <span className="font-bold">
//                     {typeof totalVisitors === 'number' ? totalVisitors.toLocaleString() : '0'}
//                 </span>
//                 <span className="hidden sm:inline">total visitors</span>
//             </div>
//         </div>
//     )
// }

