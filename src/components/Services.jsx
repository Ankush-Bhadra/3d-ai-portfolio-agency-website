import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "3D Websites",
      desc: "Modern interactive websites with 3D animation and smooth UI",
    },
    {
      title: "Frontend Dev",
      desc: "Responsive and fast UI using React and modern tools",
    },
    {
      title: "Full Stack",
      desc: "Complete web apps with backend, database and API",
    },
  ];

  return (
    <div className="py-24 px-6 bg-[#050008] text-white">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-purple-600/20 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              {item.title}
            </h3>

            <p className="text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}