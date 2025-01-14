"use client";

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Compass, Users, Calendar, Star } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import ContactForm from '@/components/contact-form';
import DestinationCard from '@/components/destination-card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const destinations = [
  {
    title: 'Kathua, Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80',
    description: 'Discover the gateway to Jammu & Kashmir with its rich history, ancient temples, and the serene Ranjit Sagar Lake.',
  },
  {
    title: 'Bani, Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    description: 'Experience the untouched beauty of Bani Valley with its snow-capped peaks, lush meadows, and traditional Gaddi culture.',
  },
  {
    title: 'Basohli, Jammu & Kashmir',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
    description: 'Explore the birthplace of Pahari miniature paintings, featuring the historic Basohli Fort and picturesque Ranjit Sagar Dam.',
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

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Family Traveler',
    content: 'हमारी बसोहली यात्रा बेहद यादगार रही। गाइड ने स्थानीय संस्कृति और इतिहास के बारे में बहुत अच्छी जानकारी दी। परिवार के साथ एक शानदार अनुभव!',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Photography Enthusiast',
    content: 'बानी की प्राकृतिक सुंदरता अद्भुत है। पहाड़ी संस्कृति और स्थानीय व्यंजनों का अनुभव अविश्वसनीय था। टीम का आतिथ्य बेमिसाल था।',
    rating: 5,
  },
  {
    name: 'Amit Kumar',
    role: 'Adventure Seeker',
    content: 'कठुआ की यात्रा ने मेरी सारी उम्मीदों को पार कर दिया। रणजीत सागर झील के किनारे सूर्यास्त का नजारा कभी नहीं भूल पाऊंगा।',
    rating: 5,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-sora mb-6"
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 font-outfit mb-8 max-w-2xl mx-auto"
          >
            Experience the world&apos;s most breathtaking destinations with our expertly curated travel packages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Start Planning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 font-sora mb-4"
            >
              Popular Destinations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 font-outfit max-w-2xl mx-auto"
            >
              Explore our hand-picked destinations that offer unforgettable experiences and stunning landscapes.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.title} {...destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 font-sora mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 font-outfit max-w-2xl mx-auto"
            >
              We provide exceptional travel experiences with attention to every detail.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-sora mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-outfit">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 font-sora mb-4"
            >
              What Our Travelers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 font-outfit max-w-2xl mx-auto"
            >
              Read about the experiences of travelers who have explored the world with us.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-outfit mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-sora font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 font-outfit text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 font-sora mb-4"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 font-outfit mb-8"
              >
                Have questions about our travel packages? We&apos;re here to help you plan your perfect journey.
              </motion.p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600 font-outfit">Patel nagar , Kathua</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 font-outfit">+91 (962) 273-5803</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-sora font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 font-outfit">travelwithlalhal@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;