import React, { useEffect, useState } from "react";
import { Award, Target, Trophy, Heart } from "lucide-react";

const CoachSection: React.FC = () => {
  const certifications = [
    { name: "Certified Personal Trainer", icon: Award },
    { name: "Sports Nutrition Specialist", icon: Target },
    { name: "Bodybuilding Coach", icon: Trophy },
    { name: "Wellness Coach", icon: Heart },
  ];

  // 👇 Your Aditya Sandu images
  const images = [
    "https://ik.imagekit.io/slfql4jkj/WhatsApp%20Image%202025-09-01%20at%2019.29.08_1b5e6228.jpg?updatedAt=1759379667960",
    "https://ik.imagekit.io/dsauihjso/WhatsApp%20Image%202025-10-11%20at%2015.50.39_8d847d6a.jpg?updatedAt=1760241877521",
    "https://ik.imagekit.io/dsauihjso/WhatsApp%20Image%202025-09-01%20at%2019.34.23_93db261f.jpg?updatedAt=1760241903098",
  ];

  const [current, setCurrent] = useState(0);

  // ⏱ Change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about-coach" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated Image Area */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Coach Aditya ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                    ${index === current ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4"}`}
                />
              ))}
            </div>

            <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg">
              <p className="text-black font-bold">Founder</p>
            </div>
          </div>

          {/* Text + Certifications */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Your <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Coach Aditya
              </span>
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed">
              My story with fitness started long before I ever thought of coaching.
              As a kid, I was obsessed with running fast and jumping farther than anyone else —
              a passion that took me from school grounds to national tracks as a sprinter and long jumper,
              and eventually to representing India in international football (U17).
              <br /><br />
              The thrill of testing my limits led me into powerlifting, where I became a
              3-time national gold medalist and earned the title of “Strong Boy of India.”
              I’ve pushed my endurance through the 21 km Satara Hill Marathon and the Ladakh High-Altitude Marathon,
              and even challenged my discipline in competitive bodybuilding.
              <br /><br />
              Every sport, every medal, and every failure taught me something deeper about the human body and mind.
              Today, my mission is to help others discover that same strength within themselves —
              whether you’re an athlete chasing medals or someone ready to transform your body and mindset.
            </p>

            {/* Certifications */}
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-7 h-7 text-yellow-400" />
                <h3 className="text-yellow-400 text-lg font-semibold">
                  Accreditations
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 flex items-center space-x-3 hover:bg-yellow-500/20 transition-all duration-300"
                  >
                    <cert.icon className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-200">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLScgGR33N0hRNP3ewlKgMgBLYwhUvoPx6XWr12w8QHeZkaadAA/viewform?usp=dialog",
                  "_blank"
                )
              }
            >
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
