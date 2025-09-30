import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: `I still remember the first day Mahika came to train. She was apprehensive and worried, but by the end of the session, she had a big smile. She enjoyed it thoroughly and eagerly looked forward to every session. Under Adi's coaching, she improved her agility, reaction time, and motivation. Her achievements include:
      - 9th in 47th Maharashtra State Open (Under-13)
      - 8th in Matunga Gymkhana Open (Under-13)
      - 3rd in Dunlop Maharashtra State Closed Open
      She also performed very well in SFA games and Matunga Club Open finals.`
    },
    {
      text: `Being 45 and traveling internationally, maintaining fitness was a challenge. With Adi's coaching, I went from 83kg to 74kg, feeling lighter, energetic, and confident. His workout regime, nutritional guidance, and intermittent fasting plan made all the difference. Beyond physical changes, my mental strength and endurance have increased dramatically.`
    },
    {
      text: `Adi's coaching is exceptional! His easy-going style, motivational guidance, and focus on results make even senior students feel comfortable while pushing their limits. The positive changes are visible not just in physique but in confidence and overall performance.`
    },
    {
      text: `One fun complaint: I never expected to have to change my wardrobe after 6 months! All my old shirts and trousers became too loose and had to be replaced. This is proof of the incredible transformation under Adi's guidance.`
    },
    {
      text: `Adi’s coaching is suitable for athletes of all ages. His techniques help improve agility, speed, strength, and confidence. Whether preparing for competitions or general fitness, the results speak for themselves.`
    }
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Success Stories
        </h2>
        <p className="text-gray-300 text-lg mb-16">
          Discover how our clients have transformed their lives through personalized coaching and dedication. Each story inspires and motivates.
        </p>

        <div className="relative h-80 flex items-center justify-center">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev} 
            className="absolute left-0 z-10 p-3 bg-black/30 rounded-full hover:bg-yellow-500/70 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/30 shadow-lg shadow-black/40 w-full max-w-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-10 h-10 text-yellow-400" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-0.5" />
                ))}
              </div>

              <p className="text-gray-100 text-base md:text-lg leading-relaxed font-medium">
                "{testimonials[index].text}"
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-b-xl"></div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button 
            onClick={handleNext} 
            className="absolute right-0 z-10 p-3 bg-black/30 rounded-full hover:bg-yellow-500/70 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-yellow-400 scale-125" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
