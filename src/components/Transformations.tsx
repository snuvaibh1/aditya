import React from 'react';
import { motion } from 'framer-motion';

const Transformations = () => {
  const transformations = [
    {
      id: 1,
      name: 'Rahul Sharma',
      achievement: 'Lost 15kg in 3 months',
      before: 'https://ik.imagekit.io/slfql4jkj/image.png?updatedAt=1759926810865',
      after: 'https://ik.imagekit.io/slfql4jkj/image.png?updatedAt=1759926810865',
    },
    {
      id: 2,
      name: 'Priya Patel',
      achievement: 'Gained 8kg muscle mass',
      before: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg',
      after: 'https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg',
    },
    {
      id: 3,
      name: 'Amit Kumar',
      achievement: 'Transformed body composition',
      before: 'https://images.pexels.com/photos/6551122/pexels-photo-6551122.jpeg',
      after: 'https://images.pexels.com/photos/6550856/pexels-photo-6550856.jpeg',
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      achievement: 'Lost 20kg in 4 months',
      before: 'https://images.pexels.com/photos/6740815/pexels-photo-6740815.jpeg',
      after: 'https://images.pexels.com/photos/6456037/pexels-photo-6456037.jpeg',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      achievement: 'Built 12kg lean muscle',
      before: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg',
      after: 'https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg',
    },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedTransformations = [...transformations, ...transformations];

  return (
    <section id="transformations" className="py-20 px-4 bg-black overflow-hidden">
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

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Animated Scroll Track */}
          <div className="flex animate-scroll-left hover:pause-animation">
            {duplicatedTransformations.map((transformation, index) => (
              <div
                key={`${transformation.id}-${index}`}
                className="flex-shrink-0 w-[400px] mx-4"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-yellow-500/30 shadow-xl shadow-black/50 hover:border-yellow-500/60 hover:shadow-yellow-500/20 transition-all duration-300">
                  {/* Before and After Images */}
                  <div className="grid grid-cols-2 gap-0">
                    {/* Before */}
                    <div className="relative">
                      <div className="absolute top-3 left-3 z-10">
                        <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-500/50">
                          <span className="text-yellow-400 font-bold text-xs">BEFORE</span>
                        </div>
                      </div>
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={transformation.before}
                          alt={`${transformation.name} - Before`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative">
                      <div className="absolute top-3 left-3 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1.5 rounded-full shadow-lg">
                          <span className="text-black font-bold text-xs">AFTER</span>
                        </div>
                      </div>
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={transformation.after}
                          alt={`${transformation.name} - After`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-2">{transformation.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
                      <p className="text-yellow-400 font-semibold text-sm">{transformation.achievement}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Transformations;
