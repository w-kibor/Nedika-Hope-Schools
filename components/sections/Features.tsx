'use client';

import { motion } from 'framer-motion';
import { Award, Beaker, Globe, Home } from 'lucide-react';

const features = [
    {
        title: 'Expert TSC Staff',
        description: 'Qualified and committed teachers ensuring academic excellence.',
        icon: Award,
    },
    {
        title: 'Modern Labs',
        description: 'State-of-the-art Science and Computer laboratories for practical learning.',
        icon: Beaker,
    },
    {
        title: 'Boarding Facilities',
        description: 'Safe, comfortable, and disciplined boarding environments.',
        icon: Home,
    },
    {
        title: 'Foreign Languages',
        description: 'Broadening horizons with German language programs.',
        icon: Globe,
    },
];

export function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-royal-blue mb-6 group-hover:bg-royal-blue group-hover:text-gold transition-colors duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
