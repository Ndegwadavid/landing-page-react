import React from 'react';
import { motion } from 'framer-motion';

const Offers = () => {
  const offers = [
    {
      title: "Complete Eye Exam Package",
      originalPrice: "5,000",
      discountedPrice: "3,500",
      features: [
        "Comprehensive vision test",
        "Eye pressure check",
        "Digital retinal imaging",
        "Free frame consultation"
      ],
      popular: true
    },
    {
      title: "Designer Frame Bundle",
      originalPrice: "15,000",
      discountedPrice: "12,000",
      features: [
        "Premium designer frame",
        "High-index lenses",
        "Anti-reflective coating",
        "UV protection"
      ],
      popular: false
    },
    {
      title: "Contact Lens Package",
      originalPrice: "8,000",
      discountedPrice: "6,500",
      features: [
        "Contact lens fitting",
        "3-month supply of lenses",
        "Cleaning solution kit",
        "Follow-up care"
      ],
      popular: false
    }
  ];

  return (
    <section className="offers-section section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-subtle -z-10" />
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl"
            style={{
              width: Math.random() * 400 + 100 + 'px',
              height: Math.random() * 400 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.1)`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Special Offers</h2>
          <p className="section-subtitle">
            Take advantage of our limited-time offers and save on premium eye care services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`glass-card p-8 ${offer.popular ? 'border-2 border-blue-500' : ''}`}>
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {offer.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-gray-500 line-through">
                      Ksh {offer.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-blue-600">
                      Ksh {offer.discountedPrice}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            * Offers valid for a limited time only. Terms and conditions apply.
          </p>
          <button className="btn-secondary">
            View All Offers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;