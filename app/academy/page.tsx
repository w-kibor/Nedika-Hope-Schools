import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, BookOpen, Award, Clock, MapPin } from 'lucide-react';

export default function AcademyPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-navy">
                <div className="absolute inset-0">
                    <Image 
                        src="/kids watching.jpg"
                        alt="Nedika Academy Students"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nedika Academy</h1>
                        <p className="text-2xl text-gold font-semibold mb-4">Early Years & Primary Education</p>
                        <p className="text-xl text-gray-200">Nurturing Young Minds from Age 3 to 11</p>
                    </div>
                </div>
            </section>

            {/* Age Ranges and Grade Levels */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Age Ranges & Grade Levels</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-gold mb-4">
                                <Users className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Early Years</h3>
                            <p className="text-gray-700 mb-4">Ages 3-5</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Nursery (Age 3)</li>
                                <li>• Reception (Age 4-5)</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-gold mb-4">
                                <BookOpen className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Lower Primary</h3>
                            <p className="text-gray-700 mb-4">Ages 6-8</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Year 1 (Age 6)</li>
                                <li>• Year 2 (Age 7)</li>
                                <li>• Year 3 (Age 8)</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-gold mb-4">
                                <Award className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Upper Primary</h3>
                            <p className="text-gray-700 mb-4">Ages 9-11</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Year 4 (Age 9)</li>
                                <li>• Year 5 (Age 10)</li>
                                <li>• Year 6 (Age 11)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs and Curriculum */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Programs & Curriculum</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <h3 className="text-3xl font-bold text-navy mb-6">Our Curriculum</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-gold pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Core Subjects</h4>
                                    <p className="text-gray-700">English Language Arts, Mathematics, Science, Social Studies, and French as a second language</p>
                                </div>
                                <div className="border-l-4 border-gold pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Arts & Creativity</h4>
                                    <p className="text-gray-700">Music, Visual Arts, Drama, and Creative Writing to foster imagination and expression</p>
                                </div>
                                <div className="border-l-4 border-gold pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Physical Education</h4>
                                    <p className="text-gray-700">Sports, Games, Swimming, and Movement classes promoting healthy active lifestyles</p>
                                </div>
                                <div className="border-l-4 border-gold pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Technology & Innovation</h4>
                                    <p className="text-gray-700">Computer Skills, Coding Basics, and Digital Literacy from an early age</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/computer lab.png"
                                alt="Academy Computer Lab"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities and Features */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Facilities & Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-navy text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Modern Classrooms</h4>
                            <p className="text-gray-200">Bright, spacious, and equipped with interactive learning tools</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Computer Laboratory</h4>
                            <p className="text-gray-200">State-of-the-art technology for digital learning</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Library & Reading Corner</h4>
                            <p className="text-gray-200">Extensive collection of age-appropriate books and resources</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Outdoor Play Areas</h4>
                            <p className="text-gray-200">Safe playgrounds with modern equipment for active learning</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Art & Music Studios</h4>
                            <p className="text-gray-200">Dedicated spaces for creative expression and development</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">School Transport</h4>
                            <p className="text-gray-200">Safe and reliable transportation services available</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/playground.jpg"
                                alt="Academy Playground"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/slide playground.png"
                                alt="Academy Play Equipment"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Class Schedules */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Class Schedules</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <div className="flex items-center mb-6">
                                <Clock className="w-8 h-8 text-gold mr-4" />
                                <h3 className="text-2xl font-bold text-navy">Regular School Hours</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border-l-4 border-gold pl-6">
                                    <h4 className="text-lg font-bold text-navy mb-2">Morning Session</h4>
                                    <p className="text-gray-700 mb-1"><strong>Arrival:</strong> 7:30 AM - 8:00 AM</p>
                                    <p className="text-gray-700 mb-1"><strong>Classes:</strong> 8:00 AM - 12:30 PM</p>
                                </div>
                                <div className="border-l-4 border-gold pl-6">
                                    <h4 className="text-lg font-bold text-navy mb-2">Afternoon Session</h4>
                                    <p className="text-gray-700 mb-1"><strong>Lunch:</strong> 12:30 PM - 1:30 PM</p>
                                    <p className="text-gray-700 mb-1"><strong>Classes:</strong> 1:30 PM - 3:30 PM</p>
                                    <p className="text-gray-700"><strong>Dismissal:</strong> 3:30 PM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions Information */}
            <section className="py-16 bg-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Admissions Information</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h3 className="text-2xl font-bold text-gold mb-6">How to Apply</h3>
                            <ol className="space-y-4 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">1.</span>
                                    <span><strong className="text-white">Submit Application:</strong> Complete our online application form or visit the school office</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">2.</span>
                                    <span><strong className="text-white">Assessment Visit:</strong> Schedule a campus tour and student assessment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">3.</span>
                                    <span><strong className="text-white">Document Submission:</strong> Provide required documents (birth certificate, medical records, previous school reports)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">4.</span>
                                    <span><strong className="text-white">Enrollment Confirmation:</strong> Receive acceptance letter and complete registration</span>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gold mb-6">Required Documents</h3>
                            <ul className="space-y-3 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Birth Certificate (original and photocopy)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Recent Passport-sized Photographs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Medical/Immunization Records</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Previous School Report Cards (if applicable)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Parent/Guardian Identification</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-gold text-navy rounded-lg">
                                <div className="flex items-start mb-3">
                                    <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold mb-1">Visit Our Campus</p>
                                        <p className="text-sm">Schedule a tour to see our facilities and meet our teachers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link 
                            href="/admissions"
                            className="inline-block bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg"
                        >
                            Start Your Application
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mb-8">
                        <Image 
                            src="/school van.png"
                            alt="Nedika Academy School Transport"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">Ready to Join Nedika Academy?</h2>
                    <p className="text-xl text-gray-600 mb-8">Give your child the foundation for lifelong learning and success</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/admissions"
                            className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Apply Now
                        </Link>
                        <Link 
                            href="/contact"
                            className="bg-white hover:bg-gray-50 text-navy border-2 border-navy px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
