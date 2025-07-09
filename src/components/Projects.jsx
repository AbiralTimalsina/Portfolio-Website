import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "RionaTravels",
    description: "A travel agency website built to help users plan and book trips online. Developed using React and Tailwind.",
    link: "https://rionatravels.com.au",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    screenshot: "./riona.png"
  },
  {
    title: "Budhanilakantha Tourism",
    description: "A digital tourism platform that showcases local destinations with interactive Google Maps.",
    link: "bm.recc.com.np",
    tags: ["Javascript", "Bootstrap", "PHP"],
    screenshot: "./budhanilakantha.png"
  },
  {
    title: "E-Commerce App",
    description: "Full-stack e-commerce platform with product listings, cart functionality, and user authentication.",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
    screenshot: "./"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my featured works. Each project represents unique challenges and solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                <span className="text-gray-400 text-lg"><img src={proj.screenshot} alt={proj.title} /></span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-4">{proj.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-all"
          >
            Want to see more? Let's talk!
          </a>
        </motion.div>
      </div>
    </section>
  );
}