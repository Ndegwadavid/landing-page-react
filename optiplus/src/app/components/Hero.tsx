// Hero.tsx
"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';

interface NavLink {
  id: number;
  title: string;
  url: string;
}

const Hero = () => {
  const links: NavLink[] = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "About", url: "/about" },
    { id: 3, title: "Services", url: "/services" },
    { id: 4, title: "Contact", url: "/contact" }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white">
                OptiPlus
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-16 6h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-black/50 z-10" />

        {/* Main background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpeg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-20 h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  See the World
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Through Better Eyes
                  </span>
                </h1>

                <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
                  Experience premium eyewear and professional eye care services that 
                  enhance your vision and style. Your journey to perfect vision starts here.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-xl 
                    font-semibold text-lg shadow-lg hover:bg-white/30 transition-all duration-300 
                    border border-white/30">
                    Book an Eye Test
                  </button>
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 
                    text-white rounded-xl font-semibold text-lg hover:opacity-90 
                    transition-all duration-300">
                    Browse Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;