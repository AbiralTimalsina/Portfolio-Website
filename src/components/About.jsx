import { motion } from "framer-motion";
import { FaCode, FaPalette, FaServer, FaMobileAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            {/* Profile image placeholder - replace with your image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 border-4 border-white shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-lg"><img src="pp.jpeg" alt="About image" /></span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              CSIT Student & Web Developer
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate CSIT student with a strong focus on creating clean, efficient code and 
              intuitive user experiences. I specialize in building modern web applications that are fast, 
              responsive, and accessible to everyone.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-4 rounded-lg border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <FaCode className="text-indigo-500 text-xl mr-3" />
                  <h4 className="font-medium text-gray-800">Frontend Development</h4>
                </div>
                <p className="text-sm text-gray-600">
                  React, Next.js, Tailwind CSS, JavaScript/TypeScript
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-4 rounded-lg border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <FaServer className="text-indigo-500 text-xl mr-3" />
                  <h4 className="font-medium text-gray-800">Backend Development</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Node.js, Express, MongoDB, REST APIs
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-4 rounded-lg border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <FaPalette className="text-indigo-500 text-xl mr-3" />
                  <h4 className="font-medium text-gray-800">UI/UX Design</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Figma, Adobe XD, User-Centered Design
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-4 rounded-lg border border-gray-100"
              >
                <div className="flex items-center mb-2">
                  <FaMobileAlt className="text-indigo-500 text-xl mr-3" />
                  <h4 className="font-medium text-gray-800">Responsive Design</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Mobile-first approach, cross-browser compatibility
                </p>
              </motion.div>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-all"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}