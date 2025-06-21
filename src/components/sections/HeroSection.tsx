import React, {useRef } from "react";
// import { gsap } from "gsap";
import { motion } from "framer-motion";
import { AnimatedHeadline } from "../ui/AnimatedHeadline";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  // const headlineRef = useRef<HTMLHeadingElement>(null);

  // useEffect(() => {
  //   if (headlineRef.current) {
  //     const text = headlineRef.current;

  //     // Split text into words
  //     const words = text.innerText.split(" ");
  //     text.innerHTML = "";

  //     words.forEach((word, index) => {
  //       const span = document.createElement("span");
  //       span.innerHTML = word + (index < words.length - 1 ? " " : "");
  //       // span.style.display = "inline-block";
  //       span.style.overflow = "hidden";
  //       span.style.opacity = "0";
  //       text.appendChild(span);
  //     });

  //     // Animate each word
  //     // Animate each word
  //     gsap.fromTo(
  //       text.children,
  //       { opacity: 0, y: 30 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.08,
  //         duration: 0.6,
  //         ease: "steps(-20)",
  //         delay: 0.4,
  //       }
  //     );
  //   }

  //   // Parallax effect on scroll
  //   if (heroRef.current) {
  //     const heroElement = heroRef.current;

  //     window.addEventListener("scroll", () => {
  //       const scrollPosition = window.scrollY;
  //       heroElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  //     });
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-primary"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0, 207, 255, 0.15), transparent 70%)`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-green/10 blur-[120px]"></div>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        <AnimatedHeadline />



          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-300 text-base md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed "
          >
            Creative strategies, stunning design, and digital magic to help
            brands thrive in the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#services"
              className="bg-accent-green text-primary font-semibold text-base sm:text-lg rounded-lg px-6 py-3 sm:px-8 sm:py-4 hover:bg-accent-green/90 transition duration-300"
            >
              Let's Build Something Bold
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white font-medium text-base sm:text-lg rounded-lg px-6 py-3 sm:px-8 sm:py-4 hover:bg-white/10 transition duration-300"
            >
              Get a Free Strategy Call
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
