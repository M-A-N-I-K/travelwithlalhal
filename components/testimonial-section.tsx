import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar, User2Icon } from 'lucide-react';

const testimonials = [
    {
        name: "Rajesh Sharma",
        role: "Family Traveler",
        location: "Delhi",
        date: "March 2024",
        tripDestination: "Kathua",
        content: "हमारी बसोहली यात्रा बेहद यादगार रही। गाइड ने स्थानीय संस्कृति और इतिहास के बारे में बहुत अच्छी जानकारी दी। परिवार के साथ एक शानदार अनुभव!",
        rating: 5,
        image: "",
        highlights: ["Cultural Experience", "Family-Friendly", "Knowledgeable Guide"],
        photos: [
            "/api/placeholder/200/150",
            "/api/placeholder/200/150",
            "/api/placeholder/200/150"
        ]
    },
    {
        name: "Priya Patel",
        role: "Photography Enthusiast",
        location: "Mumbai",
        date: "February 2024",
        tripDestination: "Bani",
        content: "बानी की प्राकृतिक सुंदरता अद्भुत है। पहाड़ी संस्कृति और स्थानीय व्यंजनों का अनुभव अविश्वसनीय था। टीम का आतिथ्य बेमिसाल था।",
        rating: 5,
        image: "",
        highlights: ["Scenic Beauty", "Local Cuisine", "Great Hospitality"],
        photos: [
            "/api/placeholder/200/150",
            "/api/placeholder/200/150",
            "/api/placeholder/200/150"
        ]
    },
    {
        name: "Amit Kumar",
        role: "Adventure Seeker",
        location: "Bangalore",
        date: "January 2024",
        tripDestination: "Basohli",
        content: "कठुआ की यात्रा ने मेरी सारी उम्मीदों को पार कर दिया। रणजीत सागर झील के किनारे सूर्यास्त का नजारा कभी नहीं भूल पाऊंगा।",
        rating: 5,
        image: "",
        highlights: ["Adventure Activities", "Beautiful Sunset", "Memorable Experience"],
        photos: [
            "/api/placeholder/200/150",
            "/api/placeholder/200/150",
            "/api/placeholder/200/150"
        ]
    }
];

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-600 font-medium text-lg mb-4 block">Traveler Stories</span>
                    <h2 className="text-5xl font-bold text-gray-900 font-sora mb-6">
                        Unforgettable Experiences
                    </h2>
                    <p className="text-xl text-gray-600 font-outfit max-w-2xl mx-auto">
                        Authentic stories from travelers who have explored the hidden gems of Jammu & Kashmir with us.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 z-20">
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: '#3B82F6' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="p-4 rounded-full bg-white text-blue-600 hover:text-white shadow-lg transition-all duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: '#3B82F6' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="p-4 rounded-full bg-white text-blue-600 hover:text-white shadow-lg transition-all duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>
                    </div>

                    {/* Testimonial Card */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-300`}
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-6 right-12">
                                    <motion.div
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
                                    >
                                        <Quote className="w-6 h-6 text-white" />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Left Column - Profile */}
                                    <div className="md:col-span-1">
                                        <div className="flex flex-col items-center text-center">
                                            {
                                                testimonials[currentTestimonial].image ?
                                                    <img
                                                        src={testimonials[currentTestimonial].image}
                                                        alt={testimonials[currentTestimonial].name}
                                                        className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-blue-100"
                                                    /> :
                                                    <User2Icon className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-blue-100" />
                                            }
                                            <h3 className="text-xl font-bold text-gray-900 font-sora">
                                                {testimonials[currentTestimonial].name}
                                            </h3>
                                            <p className="text-gray-600 font-outfit mb-2">
                                                {testimonials[currentTestimonial].role}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <MapPin className="w-4 h-4" />
                                                {testimonials[currentTestimonial].location}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                                <Calendar className="w-4 h-4" />
                                                {testimonials[currentTestimonial].date}
                                            </div>
                                            <div className="flex items-center mt-4">
                                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Middle Column - Content */}
                                    <div className="md:col-span-2">
                                        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                                            <p className="text-lg text-gray-700 font-outfit leading-relaxed">
                                                {testimonials[currentTestimonial].content}
                                            </p>
                                        </div>

                                        {/* Trip Highlights */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-gray-900">Trip Highlights</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {testimonials[currentTestimonial].highlights.map((highlight, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentTestimonial === index ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;