import { JobListing } from '@/types';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Clock, GraduationCap, Mail, Phone } from 'lucide-react';

interface JobListingsProps {
    jobs: JobListing[];
}

export default function JobListings({ jobs }: JobListingsProps) {
    // console.log("Jobs data:", jobs);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="p-6 pb-24">
                        <h2 className="text-2xl font-bold text-cyan-800 mb-2">{job.jobTitle}</h2>
                        <div className="flex items-center text-slate-600 mb-2">
                            <MapPin size={18} className="mr-2 text-cyan-600" />
                            <span className="text-slate-800">{job.location || 'Location not specified'}</span>
                        </div>
                        <div className="flex items-center text-slate-600 mb-2">
                            <DollarSign size={18} className="mr-2 text-cyan-600" />
                            <span className="text-slate-800">{job.salary || 'Salary not specified'}</span>
                        </div>
                        <div className="flex items-center text-slate-600 mb-2">
                            <Clock size={18} className="mr-2 text-cyan-600" />
                            <span className="text-slate-800">{job.experience || 'Experience not specified'}</span>
                        </div>
                        <div className="flex items-center text-slate-600 mb-2">
                            <GraduationCap size={18} className="mr-2 text-cyan-600" />
                            <span className="text-slate-800">
                                {job.qualification || 'Qualification not specified'}
                            </span>
                        </div>
                        <p className="text-slate-700 mb-2">
                            <span className='font-bold'>Key Responsibilities: <br/></span>
                            {job.keyResponsibilities || 'No responsibilities specified'}
                        </p>
                        <div className="flex items-center text-slate-600 mb-2">
                            <Mail size={18} className="mr-2 text-cyan-600" />
                            <a href={`mailto:${job.contactEmail}`} className="text-slate-800 hover:text-cyan-800 transition-colors text-wrap">
                                {job.contactEmail || 'No email provided'}
                            </a>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <Phone size={18} className="mr-2 text-cyan-600" />
                            <a href={`tel:${job.phone}`} className="text-slate-800 hover:text-cyan-800 transition-colors">
                                {"(+91) "+job.phone || 'No phone number provided'}
                            </a>
                        </div>
                    </div>
                    <div className="absolute bg-cyan-800 p-4 bottom-0 left-0 right-0">
                        <button className="w-full bg-white text-cyan-800 font-semibold py-2 px-4 rounded-md hover:bg-cyan-100 transition-colors">
                            Apply Now
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

