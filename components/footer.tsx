import React from 'react';
import { Plane, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const socials = [
        { icon: Instagram, href: 'https://instagram.com/travelwithlalhal' },
        { icon: Mail, href: 'mailto:travelwithlalhal@gmail.com' },
    ];

    return (
        <footer className="bg-gray-900 border-t py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Plane className="w-5 h-5 text-blue-400" />
                    <span className="font-medium">
                        Travel<span className="text-blue-400">WithLalhal</span>
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target='_blank'
                            rel='noreferrer'
                            aria-label={`${social.icon.name} link`}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-600">
                    © 2024 TravelWithLalhal
                </p>
            </div>
        </footer>
    );
};

export default Footer;