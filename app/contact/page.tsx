import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, Building, User, MessageSquare } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-navy">
                <div className="absolute inset-0">
                    <Image 
                        src="/kids watching.jpg"
                        alt="Contact Nedika Hope Schools"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
                        <p className="text-xl text-gray-200">We'd love to hear from you. Reach out to us for any inquiries.</p>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <div className="bg-navy text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Phone</h3>
                            <p className="text-gray-300 text-sm mb-2">Main Line</p>
                            <p className="text-white font-semibold">+254 793 772 662</p>
                            <p className="text-gray-300 text-sm mt-3 mb-2">Admissions</p>
                            <p className="text-white font-semibold">+254 11 5959 538</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Email</h3>
                            <p className="text-gray-300 text-sm mb-2">General Inquiries</p>
                            <p className="text-white font-semibold text-sm">nedikaschools@gmail.com</p>
                            <p className="text-gray-300 text-sm mt-3 mb-2">Admissions</p>
                            <p className="text-white font-semibold text-sm">nedikaschools@gmail.com</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Location</h3>
                            <p className="text-gray-300 text-sm mb-2">Campus Address</p>
                            <p className="text-white">Old Malindi Rd, Mombasa</p>
                            <p className="text-gray-300 text-sm mt-2">2P34+FH Mombasa</p>
                        </div>
                        <div className="bg-navy text-white p-6 rounded-xl text-center hover:shadow-xl transition-shadow">
                            <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-navy" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                            <p className="text-gray-300 text-sm mb-2">Monday - Friday</p>
                            <p className="text-white font-semibold">8:00 AM - 5:00 PM</p>
                            <p className="text-gray-300 text-sm mt-3 mb-2">Saturday</p>
                            <p className="text-white font-semibold">9:00 AM - 2:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Send Us a Message</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-navy mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                                            placeholder="your.email@gmail.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-navy mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                                            placeholder="+254 XXX XXX XXX"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-navy mb-2">
                                        Subject *
                                    </label>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <select
                                            id="subject"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent appearance-none"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="admissions">Admissions Inquiry</option>
                                            <option value="academy">Academy Program</option>
                                            <option value="junior-secondary">Junior Secondary Program</option>
                                            <option value="high-school">High School Program</option>
                                            <option value="fees">Fees and Payment</option>
                                            <option value="transport">School Transport</option>
                                            <option value="general">General Information</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">
                                        Message *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                                            placeholder="Type your message here..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-navy hover:bg-navy/90 text-white py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-navy mb-4">Why Contact Us?</h3>
                                <p className="text-gray-700 mb-6">
                                    Whether you're a prospective parent seeking information about our programs, a current parent with 
                                    questions, or simply interested in learning more about Nedika Hope Schools, we're here to help.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="bg-gold rounded-full p-1 mr-3 mt-1">
                                            <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Quick response within 24-48 hours</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gold rounded-full p-1 mr-3 mt-1">
                                            <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Personalized assistance from our team</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gold rounded-full p-1 mr-3 mt-1">
                                            <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Detailed information about our programs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gold rounded-full p-1 mr-3 mt-1">
                                            <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Campus tour scheduling assistance</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                                <Image 
                                    src="/school van.png"
                                    alt="Nedika Hope Schools Campus"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="bg-gold text-navy rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
                                <p className="mb-4">
                                    Experience our facilities firsthand! Schedule a campus tour to see our classrooms, 
                                    laboratories, sports facilities, and meet our dedicated staff.
                                </p>
                                <a 
                                    href="/admissions" 
                                    className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-navy/90 transition-all"
                                >
                                    Schedule a Tour
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Contacts */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Department Contacts</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-navy">
                            <h3 className="text-xl font-bold text-navy mb-3">Admissions Office</h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">+254 11 5959 538</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">nedikaschools@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-navy">
                            <h3 className="text-xl font-bold text-navy mb-3">Academy Head</h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">+254 793 772 662</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">nedikaschools@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-maroon">
                            <h3 className="text-xl font-bold text-navy mb-3">Junior Secondary Head</h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2 text-maroon" />
                                    <span className="text-sm">+254 793 772 662</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-maroon" />
                                    <span className="text-sm">nedikaschools@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-royal-blue">
                            <h3 className="text-xl font-bold text-navy mb-3">High School Head</h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2 text-royal-blue" />
                                    <span className="text-sm">+254 793 772 662</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-royal-blue" />
                                    <span className="text-sm">nedikaschools@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-navy">
                            <h3 className="text-xl font-bold text-navy mb-3">Finance Department</h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">+254 11 5959 538</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">nedikaschools@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-navy">
                            <h3 className="text-xl font-bold text-navy mb-3">Transport Services</h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">+254 793 772 662</span>
                                </p>
                                <p className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 text-navy" />
                                    <span className="text-sm">nedikaschools@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-navy text-center mb-12">Find Us</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8246844454433!2d39.66407!3d-4.043747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18400a5d8e9e9e9d%3A0x1234567890abcdef!2sOld%20Malindi%20Rd%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                        <div>
                            <h3 className="text-3xl font-bold text-navy mb-6">How to Reach Us</h3>
                            <div className="mb-6 bg-gold p-4 rounded-lg">
                                <p className="text-navy font-bold mb-2">📍 Our Location</p>
                                <p className="text-navy">Old Malindi Rd, Mombasa, Kenya</p>
                                <p className="text-sm text-navy/80">Google Plus Code: 2P34+FH Mombasa</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-gold rounded-full p-3 mr-4">
                                        <MapPin className="w-6 h-6 text-navy" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1">By Car</h4>
                                        <p className="text-gray-700">Our campus is easily accessible by private vehicle. Ample parking is available for visitors.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold rounded-full p-3 mr-4">
                                        <Building className="w-6 h-6 text-navy" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1">By Public Transport</h4>
                                        <p className="text-gray-700">Several public transport routes serve the area. Contact us for specific directions from your location.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold rounded-full p-3 mr-4">
                                        <Clock className="w-6 h-6 text-navy" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1">Visit Hours</h4>
                                        <p className="text-gray-700">We welcome visitors Monday to Saturday during office hours. Please call ahead to schedule your visit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-navy text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Our friendly team is ready to assist you with any inquiries about admissions, programs, or facilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="tel:+254793772662" 
                            className="bg-gold hover:bg-gold-hover text-navy px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg"
                        >
                            Call Us Now
                        </a>
                        <a 
                            href="/admissions" 
                            className="bg-white hover:bg-gray-100 text-navy px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg"
                        >
                            View Admissions
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
