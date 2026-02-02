import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, BookOpen, Award, Clock, MapPin, Target, Microscope } from 'lucide-react';

export default function JuniorSecondaryPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-maroon">
                <div className="absolute inset-0">
                    <Image 
                        src="/unnamed (1).jpg"
                        alt="Junior Secondary Students"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nedika Junior Secondary</h1>
                        <p className="text-2xl text-gold font-semibold mb-4">Building Strong Foundations for Success</p>
                        <p className="text-xl text-gray-200">JSS 1 - JSS 3 (Ages 11-14)</p>
                    </div>
                </div>
            </section>

            {/* Age Ranges and Grade Levels */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Grade Levels</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-red-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-maroon mb-4">
                                <Users className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">JSS 1</h3>
                            <p className="text-gray-700 mb-4">Ages 11-12</p>
                            <p className="text-gray-600">Foundation year introducing students to secondary school curriculum and expectations</p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-maroon mb-4">
                                <BookOpen className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">JSS 2</h3>
                            <p className="text-gray-700 mb-4">Ages 12-13</p>
                            <p className="text-gray-600">Intermediate year deepening knowledge and developing critical thinking skills</p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-maroon mb-4">
                                <Award className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">JSS 3</h3>
                            <p className="text-gray-700 mb-4">Ages 13-14</p>
                            <p className="text-gray-600">Preparation year for BECE and transition to senior secondary school</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs and Curriculum */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Academic Programs & Curriculum</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <h3 className="text-3xl font-bold text-navy mb-6">Our Curriculum</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-maroon pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Core Subjects</h4>
                                    <p className="text-gray-700">English Language, Mathematics, Integrated Science, Social Studies, French, Information Technology, Religious & Moral Education</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Vocational & Technical</h4>
                                    <p className="text-gray-700">Basic Design & Technology, Home Economics, Visual Arts, and Technical Skills Development</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Physical & Creative Arts</h4>
                                    <p className="text-gray-700">Physical Education, Music, Dance, and Drama fostering holistic development</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">BECE Preparation</h4>
                                    <p className="text-gray-700">Comprehensive preparation program for Basic Education Certificate Examination in JSS 3</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/unnamed.png"
                                alt="Junior Secondary Computer Lab"
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
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Facilities & Learning Environment</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-maroon text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Science Laboratories</h4>
                            <p className="text-gray-200">Well-equipped labs for Physics, Chemistry, and Biology practical work</p>
                        </div>
                        <div className="bg-maroon text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">ICT Center</h4>
                            <p className="text-gray-200">Modern computer lab with internet access for digital learning</p>
                        </div>
                        <div className="bg-maroon text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Library & Resources</h4>
                            <p className="text-gray-200">Extensive collection of reference books and study materials</p>
                        </div>
                        <div className="bg-maroon text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Sports Facilities</h4>
                            <p className="text-gray-200">Playing fields and courts for football, volleyball, athletics, and more</p>
                        </div>
                        <div className="bg-maroon text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Technical Workshops</h4>
                            <p className="text-gray-200">Workshops for woodwork, metalwork, and technical skills training</p>
                        </div>
                        <div className="bg-maroon text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">School Transport</h4>
                            <p className="text-gray-200">Safe and reliable bus services to various locations</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/playground.jpg"
                                alt="Junior Secondary Sports Field"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/slide playground.png"
                                alt="Junior Secondary Campus"
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
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">School Schedule</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Clock className="w-8 h-8 text-maroon mr-4" />
                                <h3 className="text-2xl font-bold text-navy">Daily Timetable</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border-l-4 border-maroon pl-6">
                                    <h4 className="text-lg font-bold text-navy mb-2">Morning Session</h4>
                                    <p className="text-gray-700 mb-1"><strong>Assembly:</strong> 7:30 AM - 8:00 AM</p>
                                    <p className="text-gray-700 mb-1"><strong>Period 1-4:</strong> 8:00 AM - 12:00 PM</p>
                                    <p className="text-gray-700"><strong>Break:</strong> 10:30 AM - 11:00 AM</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-6">
                                    <h4 className="text-lg font-bold text-navy mb-2">Afternoon Session</h4>
                                    <p className="text-gray-700 mb-1"><strong>Lunch:</strong> 12:00 PM - 1:00 PM</p>
                                    <p className="text-gray-700 mb-1"><strong>Period 5-8:</strong> 1:00 PM - 4:00 PM</p>
                                    <p className="text-gray-700"><strong>Closing:</strong> 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Programs */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Special Programs & Activities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="flex justify-center mb-4">
                                <Target className="w-12 h-12 text-maroon" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Leadership Training</h4>
                            <p className="text-gray-600">Developing future leaders through prefectship and clubs</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="flex justify-center mb-4">
                                <Award className="w-12 h-12 text-maroon" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Academic Competitions</h4>
                            <p className="text-gray-600">Quiz competitions, debates, and science fairs</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="flex justify-center mb-4">
                                <Users className="w-12 h-12 text-maroon" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Clubs & Societies</h4>
                            <p className="text-gray-600">Science Club, Drama Club, Sports, and more</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-xl">
                            <div className="flex justify-center mb-4">
                                <Microscope className="w-12 h-12 text-maroon" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">STEM Programs</h4>
                            <p className="text-gray-600">Enhanced Science, Technology, Engineering & Math focus</p>
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
                            <h3 className="text-2xl font-bold text-gold mb-6">Enrollment Process</h3>
                            <ol className="space-y-4 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">1.</span>
                                    <span><strong className="text-white">Application Form:</strong> Complete and submit the admission form with required fees</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">2.</span>
                                    <span><strong className="text-white">Entrance Assessment:</strong> Take placement test in English, Mathematics, and Science</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">3.</span>
                                    <span><strong className="text-white">Interview:</strong> Meet with academic counselors and administrators</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">4.</span>
                                    <span><strong className="text-white">Document Review:</strong> Submit all required documents for verification</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">5.</span>
                                    <span><strong className="text-white">Acceptance & Registration:</strong> Receive offer letter and complete enrollment</span>
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
                                    <span>Recent Passport Photographs (3 copies)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Primary School Leaving Certificate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Previous School Report Cards (Primary 4, 5, 6)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Medical/Health Records & Immunization Card</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Parent/Guardian Identification Documents</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-gold text-navy rounded-lg">
                                <div className="flex items-start mb-3">
                                    <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold mb-1">Campus Tours Available</p>
                                        <p className="text-sm">Schedule a visit to explore our facilities and meet our staff</p>
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
                            Apply for Admission
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mb-8">
                        <Image 
                            src="/unnamed.jpg"
                            alt="Junior Secondary School Transport"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">Join Nedika Junior Secondary</h2>
                    <p className="text-xl text-gray-600 mb-8">Empowering students with knowledge, skills, and character for excellence</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/admissions"
                            className="bg-maroon hover:bg-maroon/90 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Enroll Now
                        </Link>
                        <Link 
                            href="/contact"
                            className="bg-white hover:bg-gray-50 text-maroon border-2 border-maroon px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
