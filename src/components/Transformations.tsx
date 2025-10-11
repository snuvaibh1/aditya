import React from "react";
import { motion } from "framer-motion";

const Transformations = () => {
  const transformations = [
    {
      id: 1,
      before: "https://ik.imagekit.io/dsauihjso/image.png?updatedAt=1760183145405",
      after: "https://ik.imagekit.io/slfql4jkj/image.png?updatedAt=1759929069728",
    },
    {
      id: 2,
      before:
        "https://ik.imagekit.io/slfql4jkj/WhatsApp%20Image%202025-10-08%20at%2018.04.16_336a1c8c.jpg?updatedAt=1759928815307",
      after:
        "https://ik.imagekit.io/slfql4jkj/WhatsApp%20Image%202025-10-08%20at%2018.04.22_8c6d808d.jpg?updatedAt=1759928869357",
    },
    {
      id: 3,
      before:
        "https://ik.imagekit.io/slfql4jkj/WhatsApp%20Image%202025-10-08%20at%2018.04.44_853f0aeb.jpg?updatedAt=1759928901552",
      after:
        "https://ik.imagekit.io/slfql4jkj/WhatsApp%20Image%202025-10-08%20at%2018.05.41_c3f56ca0.jpg?updatedAt=1759928932234",
    },
    {
      id: 4,
      before:
        "https://ik.imagekit.io/h7eyqsxl7/WhatsApp%20Image%202025-10-10%20at%2000.01.52_90b45950.jpg?updatedAt=1760161843187",
      after:
        "https://ik.imagekit.io/h7eyqsxl7/WhatsApp%20Image%202025-10-10%20at%2000.01.52_cd09e1d8.jpg?updatedAt=1760161887946",
    },
  ];

  const repeated = [...transformations, ...transformations];

  return (
    <section id="transformations" className="py-16 px-3 md:py-20 md:px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Real Transformations. Real Results.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-gray-100 font-medium">
              See how our clients achieved their best selves with our programs.
            </span>
          </p>
        </motion.div>

        {/* Infinite Scroll */}
        <div className="relative w-full overflow-hidden">
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="slider-track flex animate-scroll">
            {repeated.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 w-[200px] sm:w-[260px] md:w-[380px] mx-1.5 sm:mx-3 md:mx-4"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-3xl overflow-hidden border border-yellow-500/30 shadow-xl shadow-black/50 hover:border-yellow-500/60 hover:shadow-yellow-500/20 transition-all duration-300">
                  <div className="grid grid-cols-2">
                    {/* Before */}
                    <div className="relative">
                      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-3 z-10">
                        <div className="bg-black/80 px-1.5 py-[2px] sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-full border border-yellow-500/50">
                          <span className="text-yellow-400 font-bold text-[8px] sm:text-[10px] md:text-xs">
                            BEFORE
                          </span>
                        </div>
                      </div>
                      <div className="aspect-[3/4] overflow-hidden">
                        <img src={t.before} alt="Before" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative">
                      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 md:top-3 md:left-3 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-1.5 py-[2px] sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
                          <span className="text-black font-bold text-[8px] sm:text-[10px] md:text-xs">
                            AFTER
                          </span>
                        </div>
                      </div>
                      <div className="aspect-[3/4] overflow-hidden">
                        <img src={t.after} alt="After" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-200 mb-4 md:mb-6 font-medium text-base md:text-lg">
            Ready to start your transformation journey?
          </p>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScgGR33N0hRNP3ewlKgMgBLYwhUvoPx6XWr12w8QHeZkaadAA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation
          </motion.a>
        </motion.div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Transformations;
