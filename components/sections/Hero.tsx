'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#0f2a50] to-crimson/90 text-white">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl rounded-bl-none"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-crimson/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-gold/20 border border-gold/40 text-gold text-sm font-bold tracking-wider mb-6 backdrop-blur-sm">
                        WELCOME TO NEDIKA HOPE SCHOOLS
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight mb-6 leading-tight">
                        Nurturing Minds, <br />
                        <span className="text-gold">Building Futures</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
                        Excellence in education spanning Early Years, Junior Secondary, and High School.
                        Join a community dedicated to academic success and character development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/admissions"
                            className="group bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-gold/20 flex items-center"
                        >
                            Apply for 2026
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#campus-hub"
                            className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm text-white"
                        >
                            Explore Our Campuses
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative bottom wave or divider */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-soft-gray to-transparent"></div>
        </section>
    );
}
