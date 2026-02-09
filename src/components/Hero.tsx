"use client";

import { Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const letter: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const line1 = "Too Tired to Clean";
  const line2 = "Your House or Office?";

  
  const renderWords = (text: string) => {
    return text.split(" ").map((word, wordIndex) => (

      <span key={wordIndex} className="inline-block whitespace-nowrap">
        {word.split("").map((char, charIndex) => (
          <motion.span key={charIndex} variants={letter} className="inline-block">
            {char}
          </motion.span>
        ))}

        <span className="inline-block">&nbsp;</span>
      </span>
    ));
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fffbf4] via-white to-[#e9e5ff] overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-950 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB34B] opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.h1 
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-bold my-8 leading-tight text-[#8B5CF6]"
          >
            <div className="block">
              {renderWords(line1)}
            </div>

            <div className="block">
              {renderWords(line2)}
            </div>
          </motion.h1>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3.5 }} 
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 my-10">
              <Sparkles className="w-8 h-8 text-[#FDB34B]" fill="#FDB34B" />
              <p className="text-2xl animate-bounce infinite md:text-3xl text-gray-700 font-medium">
                Just call us!
              </p>
              <Sparkles className="w-8 h-8 text-[#FDB34B]" fill="#FDB34B" />
            </div>

            <div className='items-center lg:flex md:block sm:block gap-4 my-12'>
              <button
                onClick={scrollToContact}
                className="bg-[#FDB34B] hover:bg-[#f5a831] text-white px-10 py-5 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </button>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 3.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-[#8B5CF6] text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-[#8B5CF6] text-4xl font-bold mb-2">Fast</div>
              <div className="text-gray-600">Professional Service</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-[#8B5CF6] text-4xl font-bold mb-2">Eco</div>
              <div className="text-gray-600">Friendly Products</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}