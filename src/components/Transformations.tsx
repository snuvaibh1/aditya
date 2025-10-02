import React from 'react';
import { motion } from 'framer-motion';

const Transformations = () => {
  const transformations = [
    {
      id: 1,
      before: 'https://images.pexels.com/photos/6740815/pexels-photo-6740815.jpeg',
      after: 'https://images.pexels.com/photos/6456037/pexels-photo-6456037.jpeg',
      alt: 'Client transformation 1'
    },
    {
      id: 2,
      before: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg',
      after: 'https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg',
      alt: 'Client transformation 2'
    },
    {
      id: 3,
      before: 'https://images.pexels.com/photos/6551122/pexels-photo-6551122.jpeg',
      after: 'https://images.pexels.com/photos/6550856/pexels-photo-6550856.jpeg',
      alt: 'Client transformation 3'
    }
  ];

  return (
    <section id="transformations" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Real Transformations. Real Results.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-gray-100 font-medium">
              See how our clients achieved their best selves with our programs.
            </span>
          </p>
        </motion.div>

        <div className="space-y-12">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Before Card */}
              <motion.div
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-yellow-500/30 shadow-lg shadow-black/50"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(234, 179, 8, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-500/50">
                    <span className="text-yellow-400 font-bold text-sm">BEFORE</span>
                  </div>
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={transformation.before}
                    alt={`${transformation.alt} - Before`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* After Card */}
              <motion.div
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-yellow-500/50 shadow-xl shadow-yellow-500/20"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(234, 179, 8, 0.4)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full shadow-lg">
                    <span className="text-black font-bold text-sm">AFTER</span>
                  </div>
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={transformation.after}
                    alt={`${transformation.alt} - After`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-200 mb-6 font-medium text-lg">
            Ready to start your transformation journey?
          </p>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScgGR33N0hRNP3ewlKgMgBLYwhUvoPx6XWr12w8QHeZkaadAA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;
