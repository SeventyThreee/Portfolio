"use client";

import { useState } from "react";
import { GridWrapper } from "@/app/components/GridWrapper";
import Image from "next/image";
import { PageTitle } from "@/app/components/PageTitle";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { X } from "lucide-react";

interface Illustration {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "digital-art" | "illustration" | "sketch";
  date: string;
}

const illustrations: Illustration[] = [
  {
    id: "1",
    title: "De ligt",
    description: "",
    image: "/illustrations/000MDL4.jpg",
    category: "digital-art",
    date: "2024-03-15",
  },
  {
    id: "20",
    title: "Bruno Fernandes 24/25",
    description: "",
    image: "/illustrations/MAIN.png",
    category: "sketch",
    date: "2024-02-28",
  },
  {
    id: "10",
    title: "Scott McTominay ",
    description: "",
    image: "/illustrations/GtSzDgZbsAAnSLw.jpg",
    category: "digital-art",
    date: "2024-03-15",
  },
  {
    id: "6",
    title: "Bruno Fernandes FA cup 23/24",
    description: "",
    image: "/illustrations/bruno.jpg",
    category: "digital-art",
    date: "2024-02-15",
  },
  {
    id: "64",
    title: "Leny Yoro",
    description: "",
    image: "/illustrations/YORO.jpg",
    category: "digital-art",
    date: "2024-02-15",
  },
  {
    id: "4",
    title: "Alejandro Garnacho",
    description: "",
    image: "/illustrations/7.jpg",
    category: "digital-art",
    date: "2024-01-20",
  },
  {
    id: "30",
    title: "Phil Jones",
    description: "",
    image: "/illustrations/main2.jpg",
    category: "illustration",
    date: "2024-04-05",
  },
  {
    id: "62",
    title: "Cristiano Ronaldo",
    description: "",
    image: "/illustrations/suiii.jpg",
    category: "digital-art",
    date: "2024-02-15",
  },
  {
    id: "40",
    title: "Lionel Messi",
    description: "",
    image: "/illustrations/messi1.jpg",
    category: "digital-art",
    date: "2024-01-20",
  },
  {
    id: "3",
    title: "Morgan Rogers",
    description: "",
    image: "/illustrations/4roger.png",
    category: "illustration",
    date: "2024-04-05",
  },

  {
    id: "5",
    title: "Bukayo Saka",
    description: "",
    image: "/illustrations/7saka.jpg",
    category: "illustration",
    date: "2024-03-10",
  },
  {
    id: "61",
    title: "Cole Palmer",
    description: "",
    image: "/illustrations/Palmer1.jpg",
    category: "digital-art",
    date: "2024-02-15",
  },
  {
    id: "2",
    title: "Alexendar Isak",
    description: "",
    image: "/illustrations/1isak.png",
    category: "sketch",
    date: "2024-02-28",
  },

  {
    id: "60",
    title: "Lamine Yamal and Nico Williams",
    description: "",
    image: "/illustrations/Yama37.jpg",
    category: "digital-art",
    date: "2024-02-15",
  },
];

function IllustrationCard({
  illustration,
  onClick,
}: {
  illustration: Illustration;
  onClick: () => void;
}) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
      onClick={onClick}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={illustration.image}
          alt={illustration.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{illustration.title}</h3>
            <p className="text-sm text-gray-200">{illustration.description}</p>
            <div className="mt-2 flex flex-wrap gap-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageModal({
  isOpen,
  onClose,
  image,
}: {
  isOpen: boolean;
  onClose: () => void;
  image: { src: string; alt: string } | null;
}) {
  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -right-12 top-0 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={1200}
            className="max-h-[80vh] w-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function IllustrationsPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: string, alt: string) => {
    setSelectedImage({ src: image, alt });
    setIsModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable body scroll when modal is closed
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative">
      <GridWrapper>
        <div className="space-y-8 py-12">
          <div className="space-y-2 text-center">
            <PageTitle title="Illustrations & Digital Art" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A collection of my creative works and visual explorations
            </p>
          </div>

          <HorizontalLine />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {illustrations.map((illustration) => (
              <IllustrationCard
                key={illustration.id}
                illustration={illustration}
                onClick={() =>
                  handleImageClick(illustration.image, illustration.title)
                }
              />
            ))}
          </div>

          <div className="pt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              More artwork coming soon...
            </p>
          </div>
        </div>
      </GridWrapper>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}
