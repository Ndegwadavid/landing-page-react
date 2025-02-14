// Features.tsx
import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const Features = () => {
  const features: Feature[] = [
    {
      title: "Expert Eye Care",
      description: "Professional optometrists using cutting-edge technology for comprehensive eye examinations.",
      icon: "👁️"
    },
    {
      title: "Premium Eyewear",
      description: "Curated collection of designer frames and premium lenses for every style and need.",
      icon: "👓"
    },
    {
      title: "Digital Protection",
      description: "Advanced lens coatings to protect your eyes from harmful blue light and UV rays.",
      icon: "🛡️"
    },
    {
      title: "Custom Fitting",
      description: "Personalized fitting service ensuring your frames perfectly match your face shape.",
      icon: "⚙️"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-400 to-purple-400 mb-4">
            Why Choose OptiPlus
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Experience the perfect blend of style, comfort, and cutting-edge eye care technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 
                hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4 bg-gradient-to-br from-blue-500 to-purple-500 
                w-16 h-16 rounded-xl flex items-center justify-center group-hover:rotate-12 
                transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;