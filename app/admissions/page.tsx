import Image from 'next/image';
import Link from 'next/link';
import { Calendar, FileCheck, DollarSign, MapPin, Phone, Mail, Clock, Users, GraduationCap, HelpCircle, Download, CheckCircle } from 'lucide-react';

export default function AdmissionsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-navy">
                <div className="absolute inset-0">
                    <Image 
                        src="/kids watching.jpg"
                        alt="Students at Nedika Hope Schools"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Admissions 2026/2027</h1>
                        <p className="text-2xl text-gold font-semibold mb-4">Join the Nedika Hope Schools Family</p>
                        <p className="text-xl text-gray-200">Applications are now open for the upcoming academic year</p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-bold text-navy mb-6">Welcome to Our Admissions Process</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Nedika Hope Schools, we are committed to providing quality education that nurtures young minds and prepares them for success. 
                            Our admission process is designed to identify students who will thrive in our academic environment and benefit from our comprehensive 
                            educational programs. We welcome applications from students who demonstrate academic potential, good character, and a willingness to learn.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="flex justify-center mb-4">
                                <Users className="w-12 h-12 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Three Campuses</h3>
                            <p className="text-gray-600">Academy, Junior Secondary, and High School programs</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="flex justify-center mb-4">
                                <GraduationCap className="w-12 h-12 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Quality Education</h3>
                            <p className="text-gray-600">Experienced teachers and modern learning facilities</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <div className="flex justify-center mb-4">
                                <CheckCircle className="w-12 h-12 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Holistic Development</h3>
                            <p className="text-gray-600">Academic excellence with character formation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Process by Campus */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Admission Process</h2>
                    <div className="space-y-8">
                        {/* Academy Process */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <Users className="w-8 h-8 text-navy" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy">Nedika Academy</h3>
                                    <p className="text-gray-600">Early Years & Primary (Ages 3-11)</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="border-l-4 border-navy pl-4">
                                    <div className="font-bold text-navy mb-1">Step 1</div>
                                    <p className="text-sm text-gray-700">Submit application form online or in person</p>
                                </div>
                                <div className="border-l-4 border-navy pl-4">
                                    <div className="font-bold text-navy mb-1">Step 2</div>
                                    <p className="text-sm text-gray-700">Schedule campus tour and student assessment</p>
                                </div>
                                <div className="border-l-4 border-navy pl-4">
                                    <div className="font-bold text-navy mb-1">Step 3</div>
                                    <p className="text-sm text-gray-700">Submit required documents for review</p>
                                </div>
                                <div className="border-l-4 border-navy pl-4">
                                    <div className="font-bold text-navy mb-1">Step 4</div>
                                    <p className="text-sm text-gray-700">Receive acceptance and complete registration</p>
                                </div>
                            </div>
                        </div>

                        {/* Junior Secondary Process */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-red-100 p-3 rounded-lg mr-4">
                                    <Users className="w-8 h-8 text-maroon" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy">Nedika Junior Secondary</h3>
                                    <p className="text-gray-600">JSS 1-3 (Ages 11-14)</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-5 gap-4">
                                <div className="border-l-4 border-maroon pl-4">
                                    <div className="font-bold text-navy mb-1">Step 1</div>
                                    <p className="text-sm text-gray-700">Complete application form with fees</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-4">
                                    <div className="font-bold text-navy mb-1">Step 2</div>
                                    <p className="text-sm text-gray-700">Take placement test in core subjects</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-4">
                                    <div className="font-bold text-navy mb-1">Step 3</div>
                                    <p className="text-sm text-gray-700">Attend interview with counselors</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-4">
                                    <div className="font-bold text-navy mb-1">Step 4</div>
                                    <p className="text-sm text-gray-700">Submit required documents</p>
                                </div>
                                <div className="border-l-4 border-maroon pl-4">
                                    <div className="font-bold text-navy mb-1">Step 5</div>
                                    <p className="text-sm text-gray-700">Receive offer and enroll</p>
                                </div>
                            </div>
                        </div>

                        {/* High School Process */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-200 p-3 rounded-lg mr-4">
                                    <GraduationCap className="w-8 h-8 text-royal-blue" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy">Nedika Hope High School</h3>
                                    <p className="text-gray-600">SHS 1-3 (Ages 15-18)</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-5 gap-4">
                                <div className="border-l-4 border-royal-blue pl-4">
                                    <div className="font-bold text-navy mb-1">Step 1</div>
                                    <p className="text-sm text-gray-700">Submit BECE results or take entrance exam</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-4">
                                    <div className="font-bold text-navy mb-1">Step 2</div>
                                    <p className="text-sm text-gray-700">Complete application and select program</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-4">
                                    <div className="font-bold text-navy mb-1">Step 3</div>
                                    <p className="text-sm text-gray-700">Submit all required documents</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-4">
                                    <div className="font-bold text-navy mb-1">Step 4</div>
                                    <p className="text-sm text-gray-700">Attend orientation session</p>
                                </div>
                                <div className="border-l-4 border-royal-blue pl-4">
                                    <div className="font-bold text-navy mb-1">Step 5</div>
                                    <p className="text-sm text-gray-700">Complete registration process</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">How to Apply</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-navy text-white p-8 rounded-xl">
                            <div className="flex items-center mb-6">
                                <Download className="w-8 h-8 text-gold mr-4" />
                                <h3 className="text-2xl font-bold">Online Application</h3>
                            </div>
                            <ol className="space-y-4 text-gray-200">
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">1.</span>
                                    <span>Visit our website and download the application form</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">2.</span>
                                    <span>Fill out the form completely and accurately</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">3.</span>
                                    <span>Scan and attach all required documents</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">4.</span>
                                    <span>Email completed form to admissions@nedikahope.edu</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gold font-bold mr-3">5.</span>
                                    <span>Await confirmation and further instructions</span>
                                </li>
                            </ol>
                        </div>
                        <div className="bg-gold text-navy p-8 rounded-xl">
                            <div className="flex items-center mb-6">
                                <MapPin className="w-8 h-8 text-navy mr-4" />
                                <h3 className="text-2xl font-bold">In-Person Application</h3>
                            </div>
                            <ol className="space-y-4">
                                <li className="flex items-start">
                                    <span className="font-bold mr-3">1.</span>
                                    <span>Visit the school campus during office hours</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-3">2.</span>
                                    <span>Collect application form from admissions office</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-3">3.</span>
                                    <span>Complete the form with assistance if needed</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-3">4.</span>
                                    <span>Submit form with required documents and fees</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-3">5.</span>
                                    <span>Receive acknowledgment receipt and schedule</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Required Documents</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-navy mb-4 pb-3 border-b-2 border-navy">Academy</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-navy mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Birth Certificate (original & copy)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-navy mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Passport Photographs (2 copies)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-navy mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Medical/Immunization Records</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-navy mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Previous School Reports (if applicable)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-navy mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Parent/Guardian ID</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-navy mb-4 pb-3 border-b-2 border-maroon">Junior Secondary</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-maroon mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Birth Certificate (original & copy)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-maroon mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Passport Photographs (3 copies)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-maroon mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Primary School Leaving Certificate</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-maroon mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Report Cards (Primary 4, 5, 6)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-maroon mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Medical Records</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-maroon mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Parent/Guardian ID</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-navy mb-4 pb-3 border-b-2 border-royal-blue">High School</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-royal-blue mr-2 mt-0.5 flex-shrink-0" />
                                    <span>BECE Results & Certificate</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-royal-blue mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Birth Certificate (original & copies)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-royal-blue mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Passport Photographs (4 copies)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-royal-blue mr-2 mt-0.5 flex-shrink-0" />
                                    <span>JSS Report Cards (JSS 1-3)</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-royal-blue mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Medical Report & Immunization</span>
                                </li>
                                <li className="flex items-start text-gray-700">
                                    <FileCheck className="w-5 h-5 text-royal-blue mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Parent/Guardian ID</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fees & Payment */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Fees & Payment Information</h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gray-50 rounded-xl p-8 mb-8">
                            <div className="flex items-center mb-6">
                                <DollarSign className="w-8 h-8 text-gold mr-4" />
                                <h3 className="text-2xl font-bold text-navy">Fee Structure</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-navy">
                                            <th className="text-left py-3 px-4 font-bold text-navy">Item</th>
                                            <th className="text-left py-3 px-4 font-bold text-navy">Academy</th>
                                            <th className="text-left py-3 px-4 font-bold text-navy">Junior Secondary</th>
                                            <th className="text-left py-3 px-4 font-bold text-navy">High School</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Application Fee</td>
                                            <td className="py-3 px-4">GH₵ 50</td>
                                            <td className="py-3 px-4">GH₵ 100</td>
                                            <td className="py-3 px-4">GH₵ 150</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Registration Fee</td>
                                            <td className="py-3 px-4">Contact Office</td>
                                            <td className="py-3 px-4">Contact Office</td>
                                            <td className="py-3 px-4">Contact Office</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Tuition (Per Term)</td>
                                            <td className="py-3 px-4">Contact Office</td>
                                            <td className="py-3 px-4">Contact Office</td>
                                            <td className="py-3 px-4">Contact Office</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-navy text-white p-6 rounded-xl">
                                <h4 className="text-xl font-bold mb-4 text-gold">Payment Methods</h4>
                                <ul className="space-y-2 text-gray-200">
                                    <li>• Bank Transfer/Deposit</li>
                                    <li>• Mobile Money (MTN, Vodafone, AirtelTigo)</li>
                                    <li>• Cash Payment at School Office</li>
                                    <li>• Online Payment Portal (Coming Soon)</li>
                                </ul>
                            </div>
                            <div className="bg-gold text-navy p-6 rounded-xl">
                                <h4 className="text-xl font-bold mb-4">Payment Plans</h4>
                                <ul className="space-y-2">
                                    <li>• Full payment discount available</li>
                                    <li>• Installment plans can be arranged</li>
                                    <li>• Contact admissions office for details</li>
                                    <li>• Sibling discounts may apply</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Important Dates</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-center mb-6">
                                <Calendar className="w-8 h-8 text-gold mr-4" />
                                <h3 className="text-2xl font-bold text-navy">Academic Year 2026/2027</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-bold text-navy">Applications Open</span>
                                    <span className="text-gray-700">January 15, 2026</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-bold text-navy">Entrance Exams (JSS & SHS)</span>
                                    <span className="text-gray-700">April 10-12, 2026</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-bold text-navy">Interview Period</span>
                                    <span className="text-gray-700">April 15 - May 15, 2026</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-bold text-navy">Acceptance Letters Issued</span>
                                    <span className="text-gray-700">May 30, 2026</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-bold text-navy">Registration Deadline</span>
                                    <span className="text-gray-700">July 20, 2026</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-3">
                                    <span className="font-bold text-navy">Orientation Day</span>
                                    <span className="text-gray-700">August 25, 2026</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-navy">School Reopening</span>
                                    <span className="text-gray-700 font-bold text-gold">September 1, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Tours */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Schedule a Campus Tour</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image 
                                src="/playground.jpg"
                                alt="Campus Tour"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 mb-6">
                                We encourage all prospective families to visit our campus and experience firsthand the vibrant learning 
                                environment at Nedika Hope Schools. During your visit, you'll tour our facilities, meet our staff, and 
                                learn more about our academic programs.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-navy mb-4">Tour Schedule</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <Clock className="w-5 h-5 text-navy mr-2 mt-0.5" />
                                        <span><strong>Weekdays:</strong> 9:00 AM - 3:00 PM</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Clock className="w-5 h-5 text-navy mr-2 mt-0.5" />
                                        <span><strong>Saturdays:</strong> 10:00 AM - 1:00 PM</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Clock className="w-5 h-5 text-navy mr-2 mt-0.5" />
                                        <span><strong>Duration:</strong> Approximately 60 minutes</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gold p-6 rounded-xl">
                                <h4 className="font-bold text-navy mb-3">Book Your Tour</h4>
                                <p className="text-navy mb-4">Contact us to schedule your personalized campus tour</p>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-navy mr-2" />
                                        <span className="text-navy font-semibold">+254 793 772 662</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-navy mr-2" />
                                        <span className="text-navy font-semibold">nedikaschools@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Frequently Asked Questions</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start mb-3">
                                <HelpCircle className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-navy mb-2">What are the age requirements for admission?</h4>
                                    <p className="text-gray-700">Academy accepts children from age 3 (Nursery). Junior Secondary admits students ages 11-14, and High School accepts students from age 15 with BECE qualification.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start mb-3">
                                <HelpCircle className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-navy mb-2">Can I transfer my child from another school?</h4>
                                    <p className="text-gray-700">Yes, we accept transfer students at all levels. You'll need to provide previous school reports, transfer certificate, and complete our admission process including any required assessments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start mb-3">
                                <HelpCircle className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-navy mb-2">Is school transport available?</h4>
                                    <p className="text-gray-700">Yes, we provide safe and reliable school transport services to various locations. Routes and fees can be discussed during the admission process.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start mb-3">
                                <HelpCircle className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-navy mb-2">What is the student-to-teacher ratio?</h4>
                                    <p className="text-gray-700">We maintain small class sizes to ensure personalized attention. Our ratios vary by level: Academy (1:15-20), Junior Secondary (1:25-30), and High School (1:30-35).</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start mb-3">
                                <HelpCircle className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-navy mb-2">Are scholarships available?</h4>
                                    <p className="text-gray-700">We offer limited scholarships and financial assistance based on academic merit and financial need. Please contact the admissions office for more information.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start mb-3">
                                <HelpCircle className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-navy mb-2">When will I receive a response to my application?</h4>
                                    <p className="text-gray-700">Applications are typically processed within 2-3 weeks of submission. You'll be contacted to schedule assessments or interviews, and final decisions are communicated within 4-6 weeks of completing all requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Contact Admissions Office</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="text-gray-300">+254 793 772 662</p>
                            <p className="text-gray-300">+254 11 5959 538</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-gray-300">nedikaschools@gmail.com</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                            <p className="text-gray-300">Mon - Fri: 8:00 AM - 5:00 PM</p>
                            <p className="text-gray-300">Sat: 9:00 AM - 2:00 PM</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <div className="bg-gold text-navy p-6 rounded-xl inline-block">
                            <div className="flex items-center justify-center mb-2">
                                <MapPin className="w-6 h-6 mr-2" />
                                <h3 className="text-xl font-bold">Visit Us</h3>
                            </div>
                            <p className="text-lg">Nedika Hope Schools Campus</p>
                            <p>Address to be provided upon request</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mb-8">
                        <Image 
                            src="/school van.png"
                            alt="Nedika Hope Schools"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">Ready to Begin Your Journey?</h2>
                    <p className="text-xl text-gray-600 mb-8">Take the first step towards an exceptional education at Nedika Hope Schools</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact"
                            className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg"
                        >
                            Apply Now
                        </Link>
                        <Link 
                            href="/contact"
                            className="bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg"
                        >
                            Schedule a Tour
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
