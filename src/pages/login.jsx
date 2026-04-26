import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password dao");
      return;
    }

    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-[#050008] text-white flex items-center justify-center overflow-hidden relative">
      {/* background glow */}
      <div className="absolute w-[450px] h-[450px] bg-purple-700 rounded-full blur-[160px] opacity-40 -top-20 -left-20"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-700 rounded-full blur-[140px] opacity-30 bottom-0 right-0"></div>

      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[360px] p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8 text-sm">
          Login to enter your 3D world
        </p>

        <label className="text-sm text-gray-300">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-2 mb-5 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-purple-500 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-sm text-gray-300">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mt-2 mb-6 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-purple-500 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-700/30"
        >
          Login
        </button>

        <p className="text-center text-gray-400 text-sm mt-6">
          New here? <span className="text-purple-400">Create account</span>
        </p>
      </motion.form>
    </div>
  );
}