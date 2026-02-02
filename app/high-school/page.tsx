import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, BookOpen, Award, Clock, MapPin, GraduationCap, Globe, TrendingUp } from 'lucide-react';

export default function HighSchoolPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-royal-blue">
                <div className="absolute inset-0">
                    <Image 
                        src="/kids watching.jpg"
                        alt="High School Students"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nedika Hope High School</h1>
                        <p className="text-2xl text-gold font-semibold mb-4">Excellence in Senior Secondary Education</p>
                        <p className="text-xl text-gray-200">SHS 1 - SHS 3 (Ages 15-18)</p>
                    </div>
                </div>
            </section>

            {/* Programs and Tracks */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Academic Programs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-royal-blue mb-4">
                                <BookOpen className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">General Arts</h3>
                            <p className="text-gray-700 mb-4">Humanities & Social Sciences</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Literature & Languages</li>
                                <li>• History & Geography</li>
                                <li>• Economics & Government</li>
                                <li>• Religious Studies</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-royal-blue mb-4">
                                <TrendingUp className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">General Science</h3>
                            <p className="text-gray-700 mb-4">STEM Education Track</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Physics & Chemistry</li>
                                <li>• Biology & Mathematics</li>
                                <li>• Elective Science</li>
                                <li>• ICT & Technology</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="text-royal-blue mb-4">
                                <Globe className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Business</h3>
                            <p className="text-gray-700 mb-4">Commerce & Entrepreneurship</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Business Management</li>
                                <li>• Financial Accounting</li>
                                <li>• Economics & Costing</li>
                                <li>• Business Computing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grade Levels */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Grade Levels</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-royal-blue mb-4">
                                <Users className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">SHS 1</h3>
                            <p className="text-gray-700 mb-4">Ages 15-16</p>
                            <p className="text-gray-600">Foundation year with program selection and core subject introduction</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-royal-blue mb-4">
                                <BookOpen className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">SHS 2</h3>
                            <p className="text-gray-700 mb-4">Ages 16-17</p>
                            <p className="text-gray-600">In-depth study and development of specialized knowledge in chosen program</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="text-royal-blue mb-4">
                                <GraduationCap className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">SHS 3</h3>
                            <p className="text-gray-700 mb-4">Ages 17-18</p>
                            <p className="text-gray-600">Final year with WASSCE preparation and university readiness focus</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Details */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Comprehensive Curriculum</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <h3 className="text-3xl font-bold text-navy mb-6">What We Offer</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-royal-blue pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Core Subjects</h4>
                                    <p className="text-gray-700">English Language, Mathematics, Integrated Science, Social Studies - mandatory for all students</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">Elective Courses</h4>
                                    <p className="text-gray-700">Program-specific subjects tailored to Arts, Science, or Business track requirements</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">WASSCE Preparation</h4>
                                    <p className="text-gray-700">Intensive coaching and mock examinations for West African Senior School Certificate Examination</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-6">
                                    <h4 className="text-xl font-bold text-navy mb-2">University Counseling</h4>
                                    <p className="text-gray-700">Guidance on university applications, career pathways, and tertiary education options</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/computer lab.png"
                                alt="High School Computer Lab"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities and Features */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">World-Class Facilities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-royal-blue text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Science Laboratories</h4>
                            <p className="text-gray-200">Fully equipped Physics, Chemistry, and Biology labs for practical work</p>
                        </div>
                        <div className="bg-royal-blue text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">ICT & Computer Labs</h4>
                            <p className="text-gray-200">Modern computers with high-speed internet for research and learning</p>
                        </div>
                        <div className="bg-royal-blue text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Academic Library</h4>
                            <p className="text-gray-200">Extensive collection of textbooks, references, and digital resources</p>
                        </div>
                        <div className="bg-royal-blue text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Sports Complex</h4>
                            <p className="text-gray-200">Football pitch, basketball court, volleyball court, and athletics track</p>
                        </div>
                        <div className="bg-royal-blue text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">Auditorium</h4>
                            <p className="text-gray-200">Multi-purpose hall for assemblies, events, and presentations</p>
                        </div>
                        <div className="bg-royal-blue text-white p-6 rounded-xl">
                            <h4 className="text-xl font-bold mb-3 text-gold">School Transport</h4>
                            <p className="text-gray-200">Comfortable and safe bus services covering major routes</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/playground.jpg"
                                alt="High School Sports Facilities"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/unnamed (2).jpg"
                                alt="High School Campus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Class Schedules */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">School Schedule</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-royal-blue">
                            <div className="flex items-center mb-6">
                                <Clock className="w-8 h-8 text-royal-blue mr-4" />
                                <h3 className="text-2xl font-bold text-navy">Daily Timetable</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border-l-4 border-royal-blue pl-6">
                                    <h4 className="text-lg font-bold text-navy mb-2">Morning Session</h4>
                                    <p className="text-gray-700 mb-1"><strong>Assembly:</strong> 7:00 AM - 7:30 AM</p>
                                    <p className="text-gray-700 mb-1"><strong>Period 1-4:</strong> 7:30 AM - 11:30 AM</p>
                                    <p className="text-gray-700"><strong>Break:</strong> 11:30 AM - 12:00 PM</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-6">
                                    <h4 className="text-lg font-bold text-navy mb-2">Afternoon Session</h4>
                                    <p className="text-gray-700 mb-1"><strong>Period 5-6:</strong> 12:00 PM - 2:00 PM</p>
                                    <p className="text-gray-700 mb-1"><strong>Lunch:</strong> 2:00 PM - 2:30 PM</p>
                                    <p className="text-gray-700 mb-1"><strong>Period 7-8:</strong> 2:30 PM - 4:30 PM</p>
                                    <p className="text-gray-700"><strong>Closing:</strong> 4:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Co-Curricular Activities */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Co-Curricular Activities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="flex justify-center mb-4">
                                <Award className="w-12 h-12 text-royal-blue" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Sports Teams</h4>
                            <p className="text-gray-600">Football, Basketball, Volleyball, Athletics, and more</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="flex justify-center mb-4">
                                <Users className="w-12 h-12 text-royal-blue" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Clubs & Societies</h4>
                            <p className="text-gray-600">Debate, Science, Drama, Writers' Club, and more</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="flex justify-center mb-4">
                                <GraduationCap className="w-12 h-12 text-royal-blue" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Leadership Programs</h4>
                            <p className="text-gray-600">Student Council, Prefects, and mentorship programs</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-xl shadow-md">
                            <div className="flex justify-center mb-4">
                                <Globe className="w-12 h-12 text-royal-blue" />
                            </div>
                            <h4 className="text-lg font-bold text-navy mb-2">Competitions</h4>
                            <p className="text-gray-600">Quiz, debate, sports tournaments, and academic contests</p>
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
                            <h3 className="text-2xl font-bold text-gold mb-6">Admission Requirements</h3>
                            <ol className="space-y-4 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">1.</span>
                                    <span><strong className="text-white">BECE Results:</strong> Successful completion of Basic Education Certificate Examination</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">2.</span>
                                    <span><strong className="text-white">Application Form:</strong> Submit completed admission form with required fees</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">3.</span>
                                    <span><strong className="text-white">Placement Test:</strong> Take entrance examination (for direct applicants)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">4.</span>
                                    <span><strong className="text-white">Program Selection:</strong> Choose preferred program (Arts, Science, or Business)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">5.</span>
                                    <span><strong className="text-white">Documentation:</strong> Submit all required documents and complete registration</span>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gold mb-6">Required Documents</h3>
                            <ul className="space-y-3 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>BECE Results Slip & Certificate</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Birth Certificate (original and copies)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Recent Passport Photographs (4 copies)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Junior Secondary School Report Cards (JSS 1-3)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Medical Report & Immunization Records</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold mr-3">✓</span>
                                    <span>Parent/Guardian ID and Contact Information</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-gold text-navy rounded-lg">
                                <div className="flex items-start mb-3">
                                    <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold mb-1">Schedule a Campus Tour</p>
                                        <p className="text-sm">Visit our high school campus and speak with our counselors</p>
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
                            Apply Now
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
                            alt="High School Transport Services"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">Start Your Journey to Excellence</h2>
                    <p className="text-xl text-gray-600 mb-8">Join Nedika Hope High School and prepare for a successful future</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/admissions"
                            className="bg-royal-blue hover:bg-royal-blue/90 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Apply for Admission
                        </Link>
                        <Link 
                            href="/contact"
                            className="bg-white hover:bg-gray-50 text-royal-blue border-2 border-royal-blue px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
