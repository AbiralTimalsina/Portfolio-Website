import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-600 to-purple-800 text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl"
        >
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl mb-2 font-medium text-indigo-200"
          >
            Hey, I'm
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200"
          >
            Abiral Timalsina
          </motion.h1>
          
          <div className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 h-12">
            <TypeAnimation
              sequence={[
                'A passionate Web Developer',
                1500,
                'Frontend Specialist',
                1500,
                'MERN Stack',
                1500,
                'Full Stack Developer',
                1500,
                'Problem Solver',
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-indigo-100"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-base md:text-lg mb-8 text-indigo-100">
              Focused on building responsive web apps using React, Node.js, Express, MongoDB and Tailwind CSS.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Contact Me
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-all"
              >
                View Work
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-400/10 border-4 border-white/20 overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-indigo-300/10 rounded-full flex items-center justify-center">
              <span className="text-white/50 text-lg"><img src="./herosection.jpeg" alt="" /></span>
            </div>
          </div>
          
          {/* Animated circles for decoration */}
          <div className="absolute -inset-2 rounded-full border-2 border-white/10 animate-ping-slow"></div>
          <div className="absolute -inset-4 rounded-full border-2 border-white/5 animate-ping-slower"></div>
        </motion.div>
      </div>
      
      {/* Floating animated elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}