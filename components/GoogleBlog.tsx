import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  MessageSquare,
  Heart,
  Search,
} from "lucide-react";
import { slides } from "../slidesData";

interface GoogleBlogProps {
  onBackToSearch: () => void;
  onToFB: () => void;
}

const GoogleBlog: React.FC<GoogleBlogProps> = ({ onBackToSearch, onToFB }) => {
  const blogSlides = slides.slice(10, 20);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () =>
    setActiveSlide((prev) => (prev === blogSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? blogSlides.length - 1 : prev - 1));

  const current = blogSlides[activeSlide];

  return (
    <div className="min-h-screen bg-gray-50 font-serif selection:bg-blue-100">
      {/* Blog Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1
            className="text-2xl font-black text-gray-900 tracking-tighter cursor-pointer"
            onClick={onToFB}
          >
            TECHPRIVACY.
          </h1>
          <div className="hidden md:flex space-x-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black">
              Trends
            </a>
            <a href="#" className="hover:text-black">
              Policy
            </a>
            <a href="#" className="hover:text-black">
              Security
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackToSearch}
            className="flex items-center text-sm font-medium text-blue-600 hover:underline"
          >
            <Search size={16} className="mr-1" /> Back to Search
          </button>
          <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
            TP
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
            Presentation Series
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            The Digital Footprint: Exploring Google's Privacy Nexus
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-500 text-sm">
            <img
              src="https://i.pravatar.cc/150?u=techauthor"
              className="w-8 h-8 rounded-full"
              alt="author"
            />
            <span>By Bishnu and Ija</span>
            <span>•</span>
            <span>Jan 10, 2026</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>

        {/* Carousel Section */}
        <section className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-16">
          <div className="relative aspect-video bg-black overflow-hidden group">
            <img
              src={current.image}
              className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
              alt={current.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span className="text-blue-400 font-bold uppercase text-xs mb-2 tracking-widest">
                {current.question}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {current.title}
              </h2>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-2 text-gray-400 text-xs mb-6 font-mono uppercase tracking-tighter">
              <span>Section</span>
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded">
                {activeSlide + 1}
              </span>
              <span>of</span>
              <span>{blogSlides.length}</span>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-sans">
              <ul className="space-y-6 mb-8">
                {current.points.map((p, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <span className="text-blue-600 font-bold text-2xl leading-none">
                      0{i + 1}
                    </span>
                    <span className="text-xl md:text-2xl font-medium">{p}</span>
                  </li>
                ))}
              </ul>
              {current.funLine && (
                <blockquote className="border-l-4 border-blue-600 pl-6 my-10 text-3xl italic font-serif text-gray-900 leading-tight">
                  "{current.funLine}"
                </blockquote>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-gray-100 pt-8 mt-12">
              <div className="flex space-x-6">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition">
                  <Heart size={20} /> <span>{current.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition">
                  <MessageSquare size={20} /> <span>{current.comments}</span>
                </button>
              </div>
              <button className="text-gray-500 hover:text-black transition">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Blog Footer Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 mb-20">
          <h3 className="text-3xl font-black text-gray-900">
            Closing Perspective
          </h3>
          <p>
            As we navigate the increasingly blurred lines between public utility
            and private space, the role of tech giants like Google remains under
            intense scrutiny. The presentation above highlights the fundamental
            tension of the modern era: our reliance on services that inherently
            erode the very privacy we claim to value.
          </p>
          <p>
            Whether it is the aggregation of our entire digital lives or the
            mapping of our physical doorsteps, the "Negotiated State of Privacy"
            is the new normal.
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-white font-black text-2xl tracking-tighter mb-2">
              TECHPRIVACY.
            </h2>
            <p className="text-sm">
              Demystifying digital rights in an era of mass surveillance.
            </p>
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" onClick={onToFB} className="hover:text-white underline">
              Privacy Presenter Login
            </a>
            <a href="#" className="hover:text-white">
              Newsletter
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center mt-20 text-xs border-t border-gray-800 pt-8">
          &copy; 2024 TechPrivacy. This is a satirical presentation replica.
        </div>
      </footer>
    </div>
  );
};

export default GoogleBlog;
