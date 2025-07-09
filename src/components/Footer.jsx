import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-4">Abiral Timalsina</h3>
            <p className="mb-4">
              A passionate web developer focused on building responsive, user-friendly applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/AbiralTimalsina" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FiGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/abiraltimalsina/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="https://www.instagram.com/timalsina_official/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <AiFillInstagram className="text-xl" />
              </a>
              <a href="https://www.facebook.com/AbiralT17/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <AiFillFacebook className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:abiraltimalsina25@gmail.com" className="hover:text-white transition-colors">abiraltimalsina25@gmail.com</a>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+9779843973509" className="hover:text-white transition-colors">+977 9843973509</a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0" />
                <span>Syuchatar-07, Nagarjun, Kathmandu, Nepal</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on my latest projects and articles.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900 bg-white"
                required
              />
              <button 
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p>
            &copy; {new Date().getFullYear()} Abiral Timalsina. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Made with ❤️ using React and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}