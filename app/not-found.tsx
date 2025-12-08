"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Subtle animated background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div
        className={`max-w-4xl w-full relative z-10 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Peak Moment - Elegant and Memorable */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            <h1 className="text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 leading-none tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-2xl"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-400 max-w-lg mx-auto font-light">
            The page you're looking for seems to have wandered off. Let's help
            you find your way back.
          </p>
        </div>

        {/* End Moment - Clean, Easy Navigation */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/"
              className="group relative overflow-hidden flex items-center justify-between p-6 bg-white text-slate-900 rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="font-semibold text-lg">Return Home</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/products"
              className="group relative overflow-hidden flex items-center justify-between p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="font-semibold text-lg">Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Subtle navigation links */}
          <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
            <Link
              href="/about"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/blog"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Blog
            </Link>
            <span className="text-slate-600">•</span>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Minimal end note */}
        <p className="text-center text-sm text-slate-500 mt-8 font-light">
          We appreciate your visit
        </p>
      </div>
    </div>
  );
}
