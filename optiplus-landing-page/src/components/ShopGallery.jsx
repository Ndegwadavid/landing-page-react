import React from 'react';
import { motion } from 'framer-motion';

const ShopGallery = () => {
  const galleryItems = [
    { id: 1, image: "/assets/gallery1.jpg", alt: "Eyewear 1" },
    { id: 2, image: "/assets/gallery2.jpg", alt: "Eyewear 2" },
    { id: 3, image: "/assets/gallery3.jpg", alt: "Eyewear 3" },
    { id: 4, image: "/assets/gallery4.jpg", alt: "Eyewear 4" },
  ];

  return (
    <section className="shop-gallery">
      <h2>Shop Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.image} alt={item.alt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopGallery;