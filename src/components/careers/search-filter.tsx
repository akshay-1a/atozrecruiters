import React, { useState, useEffect } from 'react';
import { JobListing } from '@/types';
import { X, RefreshCw, PlusIcon } from 'lucide-react';
import { Clip } from '../animations/clip';
// import { PlusIcon } from '@heroicons/react/24/solid';

interface SearchAndFilterProps {
    jobs: JobListing[];
    onFilter: (filteredJobs: JobListing[]) => void;
}

export function SearchAndFilter({ jobs, onFilter }: SearchAndFilterProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    // Removed: const [selectedSalaryRange, setSelectedSalaryRange] = useState<string>('');

    const locations = Array.from(new Set(jobs.map(job => job.location).filter(Boolean)));

    // Removed: const salaryRanges = [ ... ];

    // Removed: const parseSalary = (salary: string): number => { ... };

    useEffect(() => {
        const filteredJobs = jobs.filter(job => {
            const matchesSearch =
                job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.keyResponsibilities.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location);

            return matchesSearch && matchesLocation;
        });

        onFilter(filteredJobs);
    }, [searchTerm, selectedLocations, jobs, onFilter]);

    const resetSearch = () => {
        setSearchTerm('');
    };

    const clearFilters = () => {
        setSelectedLocations([]);
        // Removed: setSelectedSalaryRange('');
    };

    return (
        <Clip start='centerY' className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <div className="flex mb-4">
                <div className="relative flex-grow">
                    <input
                        type="text"
                        placeholder="Search job titles and responsibilities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 pr-10 border border-gray-300 rounded-md"
                    />
                    {searchTerm && (
                        <button
                            onClick={resetSearch}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap gap-4">
                <div className="flex-grow">
                    <div className='flex justify-between items-center pb-4'>
                        <h3 className="font-semibold mb-2">Filter by Location:</h3>
                        <button
                            onClick={clearFilters}
                            className="ml-4 px-4 py-2 bg-slate-900 text-slate-200 rounded-md hover:bg-slate-700 flex items-center"
                        >
                            <PlusIcon size={18} className="mr-2 rotate-45" />
                            Clear Filters
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {locations.map(location => (
                            <button
                                key={location}
                                onClick={() => setSelectedLocations(prev =>
                                    prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
                                )}
                                className={`px-3 py-1 rounded-full text-sm ${selectedLocations.includes(location)
                                        ? 'bg-cyan-600 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                {location}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Clip>
    );
}




                {/* <div className="flex-grow">
                    <h3 className="font-semibold mb-2">Filter by Salary:</h3>
                    <div className="flex flex-wrap gap-2">
                        {salaryRanges.map(range => (
                            <button
                                key={range.label}
                                onClick={() => setSelectedSalaryRange(prev => prev === range.label ? '' : range.label)}
                                className={`px-3 py-1 rounded-full text-sm ${selectedSalaryRange === range.label
                                        ? 'bg-cyan-600 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                    }`}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>
                </div> */}