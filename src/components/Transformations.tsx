import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Champions = () => {
  const champions = [
    {
      id: 1,
      type: "image",
      src: "https://ik.imagekit.io/slfql4jkj/eSwFfDl_d.webp?updatedAt=1759379784689",
      alt: "Champion transformation 1",
      review: {
        text: "Coach Aditya transformed the way I train for racing. My control, reflexes, and my performance at this sport have improved drastically!",
        name: "Vianna Shah",
        role: "Formula Car Driver",
      },
    },
    {
      id: 2,
      type: "group",
      media: [
        {
          type: "image",
          src: "https://ik.imagekit.io/slfql4jkj/CIQsSm8_d.webp?updatedAt=1759379875435",
          alt: "Trisha Darveshi - Badminton Image 1",
        },
        {
          type: "image",
          src: "https://ik.imagekit.io/slfql4jkj/bfyagHf_d.webp?updatedAt=1759379963314",
          alt: "Trisha Darveshi - Badminton Image 2",
        },
        {
          type: "video",
          embedCode:
            '<iframe src="https://www.youtube.com/embed/kRbWKeZf7DU?autoplay=1&loop=1&mute=1&playlist=kRbWKeZf7DU" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" class="w-full h-full rounded-2xl" title="Trisha Darveshi Badminton Video"></iframe>',
        },
      ],
      review: {
        text: "Coach Aditya’s training completely elevated my stamina and agility on the badminton court — I feel faster, sharper, and more confident in every match.",
        name: "Trisha Darveshi",
        role: "Badminton Player",
      },
    },
    {
      id: 3,
      type: "video",
      embedCode:
        '<iframe src="https://www.youtube.com/embed/DopOExnr3dU?autoplay=1&loop=1&mute=1&playlist=DopOExnr3dU" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" class="w-full h-full rounded-2xl" title="Champion transformation video 2"></iframe>',
      alt: "Champion transformation video 2",
      review: {
        text: "Consistency and the right mentorship brought me here. Forever grateful to the team!",
        name: "Vajrajeet Date",
        role: "Powerlifter",
      },
    },
    {
      id: 4,
      type: "image",
      src: "https://ik.imagekit.io/slfql4jkj/N6N2HUF_d.webp?updatedAt=1759380046368",
      alt: "Neha Shetty - Fitness Enthusiast",
      review: {
        text: "Working with Aditya as my coach has been amazing! He’s helped me stay motivated, challenge myself and I’ve seen noticeable improvements in both my strength and fitness.",
        name: "Neha Shetty",
        role: "Fitness Enthusiast",
      },
    },
  ];

  return (
    <section
      id="reviews"
      className="py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Champions
            </span>
          </h2>
        </motion.div>

        {/* Champions Rows */}
        <div className="space-y-16">
          {champions.map((champion, index) => (
            <motion.div
              key={champion.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* Media */}
              <div className="flex-1 rounded-3xl overflow-hidden shadow-lg shadow-black/50 border border-yellow-500/30 p-2 bg-black/40">
                {champion.type === "group" ? (
                  <div className="space-y-4">
                    {champion.media.map((item, idx) =>
                      item.type === "image" ? (
                        <div
                          key={idx}
                          className="rounded-2xl overflow-hidden max-h-[450px]"
                          style={{
                            willChange: "transform",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                          }}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="w-full h-full object-cover block"
                          />
                        </div>
                      ) : (
                        <div
                          key={idx}
                          className="w-full aspect-video max-h-[450px] rounded-2xl overflow-hidden"
                          dangerouslySetInnerHTML={{ __html: item.embedCode }}
                        />
                      )
                    )}
                  </div>
                ) : champion.type === "image" ? (
                  <div
                    className="rounded-2xl overflow-hidden max-h-[450px]"
                    style={{
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                  >
                    <img
                      src={champion.src}
                      alt={champion.alt}
                      loading="lazy"
                      className="w-full h-full object-cover block"
                    />
                  </div>
                ) : (
                  <div
                    className="w-full aspect-video max-h-[450px] rounded-2xl overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: champion.embedCode }}
                  />
                )}
              </div>

              {/* Review */}
              <div className="flex-1 text-white">
                <p className="text-lg md:text-xl italic mb-4 text-gray-300">
                  "{champion.review.text}"
                </p>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">{champion.review.name}</span>
                  <span className="text-gray-400 text-sm">
                    • {champion.review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Champions;
