import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050008] text-white overflow-hidden">
      <nav className="relative z-30 flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold text-purple-400">My3D</h1>

        <div className="flex gap-6 text-sm text-gray-300">
            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-purple-600/30 hover:text-white transition cursor-pointer">
                Home
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-purple-600/30 hover:text-white transition cursor-pointer">
                Work
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-purple-600/30 hover:text-white transition cursor-pointer">
                Contact 
            </span>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <Spline scene="https://prod.spline.design/hJYiFLFKGvpCj0z9/scene.splinecode" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-[#050008]/55"></div>

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-700 blur-[180px] opacity-30 z-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-5xl md:text-7xl font-bold leading-tight"
        >
          Build Future <br /> Digital Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 text-gray-300 mt-6 max-w-lg"
        >
          We create modern websites with 3D animation, smooth UI and powerful
          experience text.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-20 mt-8 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
        >
          Explore Work
        </motion.button>
      </section>
    </div>
  );
}