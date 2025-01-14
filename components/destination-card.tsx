"use client";

import React from 'react';
import { motion } from 'motion/react';

interface DestinationCardProps {
    title: string;
    image: string;
    description: string;
    index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, image, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
            <div className="relative h-64">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl text-gray-600 font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Learn More
                </motion.button> */}
            </div>
        </motion.div>
    );
};

export default DestinationCard;