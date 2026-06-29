import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0EB] font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif text-[#1C1917] mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-serif text-[#1C1917] mb-6"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-8 max-w-md"
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/"
            className="px-8 py-3 bg-[#1C1917] text-[#F5F0EB] text-sm tracking-[0.2em] uppercase hover:bg-[#333] transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            to="/#services"
            className="px-8 py-3 border border-[#1C1917] text-[#1C1917] text-sm tracking-[0.2em] uppercase hover:bg-[#1C1917] hover:text-[#F5F0EB] transition-colors"
          >
            Our Services
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
