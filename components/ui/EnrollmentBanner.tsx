'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export function EnrollmentBanner() {
    return (
        <section className="bg-navy py-16 text-white relative overflow-hidden border-t-4 border-crimson">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
                <div className="absolute right-10 top-10 w-96 h-96 bg-gold rounded-full mix-blend-overlay blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center space-x-2 text-gold font-bold uppercase tracking-widest mb-4">
                        <Calendar className="w-5 h-5" />
                        <span>Admissions Open</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                        Enroll for the 2026 Academic Year
                    </h2>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
                        Secure your child's future at Nedika Hope Schools. Limited spaces available across all campuses.
                    </p>
                    <Link
                        href="/admissions"
                        className="inline-block bg-gold text-navy hover:bg-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl transform hover:scale-105"
                    >
                        Register Now
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
