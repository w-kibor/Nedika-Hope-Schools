'use client';

import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';

const branches = [
    {
        title: 'Nedika Academy',
        subtitle: 'Early Years & Primary',
        description: 'Laying a strong foundation for lifelong learning with a focus on holistic development.',
        color: 'bg-navy',
        icon: Users,
        href: '/academy',
        delay: 0.2,
    },
    {
        title: 'Junior Secondary',
        subtitle: 'Grades 7 - 9',
        description: 'Empowering students to explore new horizons and develop critical thinking skills.',
        color: 'bg-crimson',
        icon: GraduationCap,
        href: '/junior-secondary',
        delay: 0.4,
    },
    {
        title: 'High School',
        subtitle: 'Grades 10 - 12',
        description: 'Preparing leaders for the future with rigorous academics and character building.',
        color: 'bg-navy', // Repeating navy for consistency
        icon: GraduationCap,
        href: '/high-school',
        delay: 0.6,
    },
];

export function CampusHub() {
    return (
        <section id="campus-hub" className="py-24 bg-soft-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif mb-4">
                        Our Campuses
                    </h2>
                    <div className="h-1 w-24 bg-crimson mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Choose the right path for your child's education journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {branches.map((branch) => (
                        <motion.div
                            key={branch.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: branch.delay }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`h-32 ${branch.color} relative p-6 flex items-center justify-center overflow-hidden`}>
                                <branch.icon className="text-white/20 w-32 h-32 absolute -right-6 -bottom-6 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                <branch.icon className="text-white relative w-12 h-12 z-10" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[#002147] mb-1">{branch.title}</h3>
                                <span className="inline-block px-3 py-1 bg-gray-100 text-[#DC143C] text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
                                    {branch.subtitle}
                                </span>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {branch.description}
                                </p>
                                <Link
                                    href={branch.href}
                                    className="inline-flex items-center text-[#002147] font-bold hover:text-gold transition-colors"
                                >
                                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
