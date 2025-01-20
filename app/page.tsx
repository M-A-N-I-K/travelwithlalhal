"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Phone, Mail, Compass, Users, Calendar, Clock, Sun, Check } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import ContactForm from '@/components/contact-form';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import TestimonialsSection from '@/components/testimonial-section';

const destinations = [
  {
    title: 'Kathua, Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80',
    description: 'Discover the gateway to Jammu & Kashmir with its rich history, ancient temples, and the serene Ranjit Sagar Lake.',
    highlights: ['Ancient Temples', 'Ranjit Sagar Lake'],
    activities: ['Temple Visits', 'Lake Boating', 'Heritage Walks'],
    duration: '2-3 days',
    bestTime: 'October to March',
  },
  {
    title: 'Bani, Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Experience the untouched beauty of Bani Valley with its snow-capped peaks, lush meadows, and traditional Gaddi culture.',
    highlights: ['Snow Peaks', 'Gaddi Culture'],
    activities: ['Trekking', 'Photography', 'Cultural Tours'],
    duration: '3-4 days',
    bestTime: 'April to September',
  },
  {
    title: 'Basohli, Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
    description: 'Explore the birthplace of Pahari miniature paintings, featuring the historic Basohli Fort and picturesque Ranjit Sagar Dam.',
    highlights: ['Basohli Fort', 'Art Gallery'],
    activities: ['Art Tours', 'Fort Visits', 'Dam Viewing'],
    duration: '2-3 days',
    bestTime: 'September to April',
  },
];

const features = [
  {
    icon: Compass,
    title: 'Expert Guidance',
    description: 'Our experienced travel experts craft perfect itineraries tailored to your preferences.',
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Travel intimately with small groups for a more personalized and authentic experience.',
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Easy booking process with free cancellation and date changes.',
  },
];

const App = () => {
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <Navbar />

      {/* Hero Section with Enhanced Parallax */}
      <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
            style={{
              backgroundImage: 'url(/bg-image.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </motion.div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white font-sora mb-6 bg-clip-text">
              Discover Your Next Adventure
            </h1>
            <p className="text-2xl text-white/90 font-outfit mb-8 max-w-3xl mx-auto">
              Experience the world&apos;s most breathtaking destinations with our expertly curated travel packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#destinations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-gray-900 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-white/25 hover:bg-gray-50"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Destinations Section with Hover Effects */}
      <section id='destinations' className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-medium text-lg mb-4 block">Explore Amazing Places</span>
            <h2 className="text-5xl font-bold text-gray-900 font-sora mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 font-outfit max-w-3xl mx-auto">
              Discover handpicked destinations that offer unforgettable experiences, rich cultural heritage,
              and breathtaking landscapes across Jammu & Kashmir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="relative pb-[75%]">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quick Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{destination.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Sun className="w-4 h-4 mr-1" />
                        <span className="text-sm">{destination.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sora">{destination.title}</h3>
                  <p className="text-gray-600 mb-6">{destination.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Activities</h4>
                    <div className="space-y-2">
                      {destination.activities.map((activity, i) => (
                        <div key={i} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 mr-2 text-green-500" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Interactive Cards */}
      <section id='services' className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-10 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8"
                >
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 font-sora mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 font-outfit">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section with Enhanced Animations */}
      <section id='contact' className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-5xl font-bold text-gray-900 font-sora mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 font-outfit mb-12">
                Have questions about our travel packages? We&apos;re here to help you plan your perfect journey.
              </p>

              <div className="space-y-8">
                {[
                  { Icon: MapPin, title: 'Our Location', content: 'Patel nagar, Kathua' },
                  { Icon: Phone, title: 'Phone', content: '+91 (962) 273-5803' },
                  { Icon: Mail, title: 'Email', content: 'travelwithlalhal@gmail.com' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-6 group"
                  >
                    <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200">
                      <item.Icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 font-sora mb-2">{item.title}</h3>
                      <p className="text-lg text-gray-600 font-outfit">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300"
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;