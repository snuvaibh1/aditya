import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";

const Champions = () => {
  const controls = useAnimation();

  const champions = [
    {
      id: 1,
      src: "https://ik.imagekit.io/slfql4jkj/eSwFfDl_d.webp?updatedAt=1759379784689",
      name: "Vianna Shah",
      role: "Formula Car Driver",
      text: "Coach Aditya transformed the way I train for racing. My control, reflexes, and performance improved drastically!",
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/slfql4jkj/CIQsSm8_d.webp?updatedAt=1759379875435",
      name: "Trisha Darveshi",
      role: "Badminton Player",
      text: "Coach Aditya’s training elevated my stamina and agility — I feel faster, sharper, and more confident in every match.",
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/slfql4jkj/bfyagHf_d.webp?updatedAt=1759379963314",
      name: "Vajrajeet Date",
      role: "Powerlifter",
      text: "Consistency and the right mentorship brought me here. Forever grateful to the team!",
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/slfql4jkj/N6N2HUF_d.webp?updatedAt=1759380046368",
      name: "Neha Shetty",
      role: "Fitness Enthusiast",
      text: "Working with Aditya as my coach has been amazing! I’ve seen noticeable improvements in both my strength and fitness.",
    },
  ];

  const loopedChampions = [...champions, ...champions]; // doubled for smooth loop

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-50%"],
          transition: {
            duration: 40, // speed of loop — lower = faster
            ease: "linear",
          },
        });
        await controls.set({ x: 0 });
      }
    };
    loopAnimation();
  }, [controls]);

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Our Champions
        </h2>
        <p className="text-gray-300 mt-3 text-sm sm:text-base">
          See how our clients achieved their best selves with our programs.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 will-change-transform"
          animate={controls}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        >
          {loopedChampions.map((champ, i) => (
            <div
              key={i}
              className="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] bg-black/60 border border-yellow-500/20 rounded-3xl overflow-hidden p-4 shadow-md shadow-black/40"
            >
              <img
                src={champ.src}
                alt={champ.name}
                className="w-full h-56 object-cover rounded-2xl mb-4 block"
                loading="lazy"
              />
              <p className="text-gray-300 italic mb-3 text-sm sm:text-base">
                "{champ.text}"
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">{champ.name}</span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  • {champ.role}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200">
          Start Your Transformation
        </button>
      </div>
    </section>
  );
};

export default Champions;
