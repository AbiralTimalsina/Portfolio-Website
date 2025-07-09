import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k0wig3i",       // replace with your EmailJS service ID
        "template_sbqivie",      // replace with your EmailJS template ID
        form.current,
        "z2iw8Kvlnp8BGhhQB"        // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Let's <span className="text-indigo-600">Connect</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FiMail className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm">Email</h4>
                    <a href="mailto:abiraltimalsina25@gmail.com" className="text-gray-800 hover:text-indigo-600 transition-colors">
                      abiraltimalsina25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FiPhone className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm">Phone</h4>
                    <a href="tel:+9779843973509" className="text-gray-800 hover:text-indigo-600 transition-colors">
                      +977 9843973509
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FiMapPin className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-500 text-sm">Location</h4>
                    <p className="text-gray-800">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-gray-500 text-sm mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/abiraltimalsina/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <FiLinkedin className="text-gray-700 hover:text-indigo-600 text-xl" />
                  </a>
                  <a href="https://github.com/AbiralTimalsina" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                    <FiGithub className="text-gray-700 hover:text-indigo-600 text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form with EmailJS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Send me a message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"></textarea>
                </div>

                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all mt-4">
                  <FiSend className="mr-2" /> Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
