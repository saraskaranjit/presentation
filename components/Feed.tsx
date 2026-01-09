import React, { useState, useEffect } from "react";
import { slides } from "../slidesData";
import Post from "./Post";
import { User, Image, Video, Smile } from "lucide-react";

const Feed: React.FC = () => {
  // Only show first 10 slides (indices 0-9)
  const fbSlides = slides.slice(0, 10);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Allow keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        if (currentSlideIndex < fbSlides.length - 1)
          setCurrentSlideIndex((prev) => prev + 1);
      } else if (e.key === "ArrowLeft") {
        if (currentSlideIndex > 0) setCurrentSlideIndex((prev) => prev - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlideIndex, fbSlides.length]);

  const handleNext = () => {
    if (currentSlideIndex < fbSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-4 pb-20">
      {/* Create Post Header */}
      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <div className="flex space-x-3 items-center mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <User />
          </div>
          <div className="bg-[#f0f2f5] hover:bg-gray-200 transition px-4 py-2 rounded-full flex-1 text-gray-500 cursor-pointer">
            What's, Privacy Pro?
          </div>
        </div>
        <hr className="mb-2" />
        <div className="flex justify-around">
          <PostOption
            icon={<Video className="text-red-500" />}
            label="Live Video"
          />
          <PostOption
            icon={<Image className="text-green-500" />}
            label="Photo/video"
          />
          <PostOption
            icon={<Smile className="text-yellow-500" />}
            label="Feeling/activity"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden">
        <div
          className="bg-[#1877f2] h-1.5 transition-all duration-500"
          style={{
            width: `${((currentSlideIndex + 1) / fbSlides.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* The Actual Slide/Post */}
      <Post
        slide={fbSlides[currentSlideIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
        isFirst={currentSlideIndex === 0}
        isLast={currentSlideIndex === fbSlides.length - 1}
      />
    </div>
  );
};

const PostOption: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <div className="flex items-center space-x-2 p-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors flex-1 justify-center">
    {icon}
    <span className="font-semibold text-gray-600 text-sm">{label}</span>
  </div>
);

export default Feed;
