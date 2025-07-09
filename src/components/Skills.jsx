import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaLinux, FaPython } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPhp } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" size={24} />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={24} />, level: 85 },
  { name: "Express", icon: <SiExpress className="text-gray-800" size={24} />, level: 80 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" size={24} />, level: 95 },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={24} />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={24} />, level: 70 },
  { name: "PHP", icon: <SiPhp className="text-[#777BB4]" size={24} />, level: 65 },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} />, level: 85 },
  { name: "Linux", icon: <FaLinux className="text-[#000]" size={24} />, level: 80 },
  { name: "Python", icon: <FaPython className="text-[#61DAFB]" size={24} />, level: 90 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            My <span className="text-indigo-600">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies I've worked with and my proficiency level in each
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="ml-auto text-indigo-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-400 to-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <span className="ml-auto text-indigo-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-400 to-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Also familiar with:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["JavaScript", "TypeScript", "HTML5", "CSS3", "REST APIs", "Jest", "Docker", "AWS Basics"].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}