"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Santhosh Buvaneswari ",
    role: "Chief Technology Officer at TRYMBKM",
    avatar: "/Santhosh.jpg",
    content:
      "He carries vision beyond the screen,building not iust interface but intent.he was not iust an intern,At TRYMBKM, he was a translator of thought into form. This is not only about what he has done, but about the professional he is becoming!",
  },
  {
    id: 2,
    name: "Dr. Rajeshwari D ",
    role: "Associate Professor at SRM University",
    avatar: "/RajeshwariD.png",
    content:
      "Jeeva delivered our website in a very short time, a creative Snake and Ladder game designed to help patients understand healthy vs. unhealthy habits. The design was wonderful, the functions worked perfectly, and the product has been a big help for both my work and my students. He patience listened to my ideas, and made the entire process easy to understand",
  },
  {
    id: 3,
    name: "Srinivasan B",
    role: "Assistant Professor III At SASTRA University",
    avatar: "/SrinivasanB.png",
    content:
      "Jeeva is an incredible technologist and one of the most promising students I’ve mentored. Over the past 2.5 years, I’ve seen his eagerness to learn new technologies from AI/ML to web development and his ability to deliver projects in remarkably short timelines. He has built impressive websites, even launched a game on the Play Store, and consistently managed his time with excellence. His growth has been outstanding, and I believe he has a long and successful journey ahead.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative">
        <div
          className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="mb-6"></div>

              <p className="mb-8 text-lg font-medium text-gray-700">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>

              <div className="flex items-center justify-center space-x-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-indigo-100">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-50"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 rounded-full bg-white p-2 shadow-md hover:bg-gray-50"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="mt-8 flex items-center justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-indigo-600" : "w-3 bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
