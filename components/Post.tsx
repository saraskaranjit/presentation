import React, { useState } from "react";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  X,
  Globe,
} from "lucide-react";
import { Slide } from "../types";

interface PostProps {
  slide: Slide;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Post: React.FC<PostProps> = ({
  slide,
  onNext,
  onPrev,
  isFirst,
  isLast,
}) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 mb-6 w-full animate-in fade-in duration-500">
      {/* Header */}
      <div className="p-3 flex justify-between items-start">
        <div className="flex space-x-2 items-center">
          <img
            src={`https://i.pravatar.cc/150?u=${slide.author}`}
            className="w-10 h-10 rounded-full cursor-pointer hover:opacity-90"
            alt="author"
          />
          <div>
            <div className="font-bold text-sm cursor-pointer hover:underline">
              {slide.author}
            </div>
            <div className="flex items-center text-xs text-gray-500 space-x-1">
              <span>{slide.timestamp}</span>
              <span>•</span>
              <Globe size={12} />
            </div>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <MoreHorizontal className="cursor-pointer hover:bg-gray-100 rounded-full p-1" />
          <X className="cursor-pointer hover:bg-gray-100 rounded-full p-1" />
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-2">
        <p className="text-blue-600 font-bold mb-1 uppercase tracking-tight text-xs">
          {slide.question}
        </p>
        <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
        <ul className="space-y-3 mb-4">
          {slide.points.map((point, i) => (
            <li
              key={i}
              className="flex items-start space-x-2 text-gray-800 text-lg"
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {slide.funLine && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg my-4 italic text-gray-700">
            "{slide.funLine}"
          </div>
        )}
      </div>

      {/* Slide Image */}
      <div
        className="relative group overflow-hidden bg-black cursor-pointer"
        onClick={() => setIsImageOpen(true)}
      >
        <img
          src={slide.image}
          className="w-full object-cover max-h-[400px] transition-transform duration-700 group-hover:scale-105"
          alt="Slide"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Stats */}
      <div className="px-3 py-2 border-b border-gray-200 flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <div className="flex -space-x-1">
            <div className="bg-blue-500 text-white rounded-full p-1 border border-white">
              <ThumbsUp size={12} fill="white" />
            </div>
            <div className="bg-red-500 text-white rounded-full p-1 border border-white">
              <span className="text-[8px] font-bold">❤️</span>
            </div>
          </div>
          <span>{slide.likes}</span>
        </div>
        <div className="flex space-x-3">
          <span>{slide.comments} comments</span>
          <span>{slide.shares} shares</span>
        </div>
      </div>

      {/* Actions */}
      <div className="p-1 px-3 flex justify-around">
        <ActionButton icon={<ThumbsUp size={20} />} label="Like" active />
        <ActionButton icon={<MessageCircle size={20} />} label="Comment" />
        <ActionButton icon={<Share2 size={20} />} label="Share" />
      </div>

      {/* Image Popup Modal */}
      {isImageOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-in fade-in duration-300">
          <button
            className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black rounded-full p-2"
            onClick={() => setIsImageOpen(false)}
          >
            <X size={24} />
          </button>

          <img
            src={slide.image}
            alt="Enlarged Slide"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

const ActionButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}> = ({ icon, label, active }) => (
  <button
    className={`flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
      active ? "text-[#1877f2]" : "text-gray-500 font-semibold"
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </button>
);

export default Post;
