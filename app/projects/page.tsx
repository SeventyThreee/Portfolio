import { GridWrapper } from "@/app/components/GridWrapper";

import { StaticImageData } from "next/image";

type ImageSource = string | StaticImageData;

interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  url: string;
  github?: string | string[];
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Switch",
    description:
      "Switch is a fast-paced, colorful game designed to keep you hooked. You control a bouncing ball, dodging and hitting blocks that constantly move around. Each collision scores points and ramps up the excitement. The gameplay is simple to learn, yet surprisingly challenging to master. It’s the kind of game you pick up for a minute — and end up playing for hours..",
    image: "/projects/1switch.png",
    url: "https://play.google.com/store/apps/details?id=com.VoltaVerseStudio.Switch",
    techStack: ["Unity", "C#", "2D Game Development", "Visual Studio"],
  },
  {
    title: "BrainyBites",
    description:
      "Brainy Bites is a pixel-style math game that makes learning fun for kids. You guide an adorable baby snake as it slithers toward the correct answers to simple math problems. Every bite helps the snake grow while sharpening young minds. The gameplay is easy to understand, colorful, and rewarding. It’s the perfect mix of learning and play in one charming little game",
    image: "/projects/BrainyBites.png",
    url: "#",
    techStack: [
      "Unity",
      "C#",
      "Pixel Art Design",
      "2D Game Development",
      "Visual Studio",
    ],
    github: ["https://github.com/Jeevakrishna/Brainy-Bites"],
  },
  {
    title: "Food-Focus AI",
    description:
      "This open-source web app, inspired by HealthifyMe, identifies Indian foods from images and shows their macronutrient breakdown using a custom Vision Transformer (ViT). To improve accuracy, the project uses Mutually Guided Image Filtering (MuGIF) to clean the dataset and remove noise. Features are then extracted using the VGG architecture to analyze food images in detail. A hybrid model combining Vision Transformer and Swin Transformer takes advantage of both methods’ strengths. Hyperparameters are optimized using the Improved Discrete Bat Algorithm (IDBA), making the system faster and more accurate. Tests show the model achieves 99.83% accuracy, far better than existing approaches. This demonstrates how hybrid transformers and smart preprocessing can improve food recognition for nutrition tracking and personalized diet recommendations.",
    image: "/projects/Screenshot 2025-08-23 214900.png",
    url: "https://food-focus-ai-32.vercel.app/",
    techStack: [
      "Vision Transformer(ViT)",
      "Swin Transformer",
      "Mutually Guided Image Filtering(MuGIF)",
      "VGG",
      "Improved Discrete Bat Algorithm(IDBA)",
      "python",
      "Pytorch",
      "Tensorflow",
      "Flask",
    ],
    github: ["https://github.com/Jeevakrishna/Main-food-focus"],
  },
  {
    title: "Work Ripple AI (Productivity, PWA):",
    description:
      "I built a productivity-focused Progressive Web App (PWA) that combines a Pomodoro timer, to-do list, lofi music playlist, dark mode, and local settings storage for a smooth offline experience. The app is designed for focus and flexibility, with cross-device sync planned for future updates. It’s built using React, TypeScript, Tailwind CSS, and service workers to enable PWA capabilities. The clean UI and responsive design ensure it works seamlessly on desktop and mobile. This setup makes it lightweight, fast, and perfect for everyday productivity.",
    image: "/projects/WorkRipple.png",
    url: "https://workripple.vercel.app/",
    github: ["https://github.com/Jeevakrishna/Work-Ripple"],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Progressive Web App (PWA)",
    ],
  },
  {
    title: "PromptPDF",
    description:
      "I built a platform that lets users interact with PDFs using Retrieval-Augmented Generation (RAG). The system embeds PDF content into PineconeDB and uses OpenAI to answer questions in a conversational way. Files are uploaded securely via AWS S3, and user authentication is handled by Clerk. The full-stack app is powered by Next.js 15 with ShadCN UI on the frontend, while DrizzleORM and PostgreSQL manage the backend data. This combination delivers a secure, scalable, and smooth experience for working with PDF documents.",
    image: "/projects/PRomptPDF.png",
    url: "https://prompt-pdf.vercel.app/",
    techStack: [
      "Next.js 15",
      "React",
      "ShadCN UI",
      "TypeScript",
      "RAG (Retrieval-Augmented Generation)",
      "OpenAI API",
      "PineconeDB",
      "AWS S3",
      "Clerk",
      "DrizzleORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    github: ["https://github.com/Jeevakrishna/PromptPDF"],
  },
];
//PromptPDF

import Image from "next/image";

function ProjectImage({
  src,
  alt,
  customDimensions,
}: {
  src: ImageSource;
  alt: string;
  customDimensions?: { width: number; height: number };
}) {
  const isCustomSize = customDimensions !== undefined;
  const aspectRatio = isCustomSize
    ? `${customDimensions.width}/${customDimensions.height}`
    : "16/9";

  return (
    <div className="flex w-full justify-center">
      <div
        className="relative overflow-hidden rounded-xl shadow-lg"
        style={{
          ...(isCustomSize && {
            width: "100%",
            maxWidth: `${customDimensions.width}px`,
            aspectRatio: aspectRatio,
          }),
        }}
      >
        <Image
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          width={customDimensions?.width || 1200}
          height={customDimensions?.height || 630}
          priority
        />
      </div>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
      </GridWrapper>

      <GridWrapper className="space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="space-y-12">
            <GridWrapper className="px-4 sm:px-6 lg:px-8">
              <ProjectImage
                src={project.image}
                alt={project.title}
                customDimensions={
                  project.title === "Food-Focus AI"
                    ? { width: 936, height: 734 }
                    : undefined
                }
              />
            </GridWrapper>
            <GridWrapper className="px-4 sm:px-6 lg:px-8">
              <div className="mx-auto w-full max-w-[90rem] text-balance">
                <h2 className="mb-3 text-2xl font-medium leading-6 tracking-tight text-slate-900 md:leading-none">
                  {project.title}
                </h2>
                <p className="mb-6 text-lg leading-7 text-text-secondary">
                  {project.description}
                </p>
                <div className="mb-6">
                  <span className="text-sm font-medium text-text-primary">
                    Tech Stack:{" "}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="inline-flex items-center text-sm font-medium text-indigo-600 hover:underline"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                    <svg
                      className="relative ml-1.5 mt-px overflow-visible"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                  {project.github && (
                    <div className="flex flex-col gap-2">
                      {Array.isArray(project.github) ? (
                        project.github.map((repo, index) => (
                          <a
                            key={index}
                            className="inline-flex items-center text-sm font-medium text-gray-600 hover:underline"
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg
                              className="mr-1.5 h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            View Code
                            {project.github && project.github.length > 1
                              ? ` (${index + 1})`
                              : ""}
                          </a>
                        ))
                      ) : (
                        <a
                          className="inline-flex items-center text-sm font-medium text-gray-600 hover:underline"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            className="mr-1.5 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </GridWrapper>
          </div>
        ))}
      </GridWrapper>
    </div>
  );
}
