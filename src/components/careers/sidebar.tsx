import { useState } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { JobListing } from '@/types';

interface SidebarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    sortBy: keyof JobListing | '';
    setSortBy: (field: keyof JobListing | '') => void;
    sortOrder: 'asc' | 'desc';
    setSortOrder: (order: 'asc' | 'desc') => void;
    isCollapsed: boolean;
    setIsCollapsed: (collapsed: boolean) => void;
}

const sortOptions: (keyof JobListing)[] = ['salary', 'location', 'experience'];

export default function Sidebar({
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    isCollapsed,
    setIsCollapsed,
}: SidebarProps) {
    return (
        <aside
            className={`bg-cyan-800 text-white pt-10 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            <div className="p-4">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="mb-4 text-cyan-300 hover:text-cyan-100 transition-colors"
                >
                    {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
                </button>
                {!isCollapsed && (
                    <>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-cyan-700 text-white placeholder-cyan-300 border-cyan-600 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                            <Search className="absolute right-3 top-2.5 text-cyan-300" size={18} />
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Sort by</h3>
                            {sortOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        if (sortBy === option) {
                                            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                                        } else {
                                            setSortBy(option);
                                            setSortOrder('asc');
                                        }
                                    }}
                                    className={`block w-full text-left py-1 px-2 rounded-md transition-colors ${sortBy === option
                                            ? 'bg-cyan-700 text-white'
                                            : 'text-cyan-300 hover:bg-cyan-700 hover:text-white'
                                        }`}
                                >
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                    {sortBy === option && (
                                        <ArrowUpDown className="inline-block ml-2" size={16} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}

