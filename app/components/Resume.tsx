import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";
import Image from "next/image";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Freelancer",
      period: "April 2022 - Present",
      // periodName: "#",
      positions: [
        {
          title: "Web Developer",
          description: [
            "I designed and developed French Quiz and Chemistry Test websites using HTML, CSS, and JavaScript to support students during online learning at my school.",
            "I developed an interactive JavaScript game to improve student engagement and problem-solving skills.",
            "I created and released an educational web game in React.js to help children with special needs develop fine motor skills.",
            "I built a digital Snake & Ladder game in TypeScript to raise hypertension awareness among doctors through gamification.",
          ],
        },
        {
          title: "Game Developer",
          description: [
            "Developed a 2.5D hyper-casual endless runner ball game in Unity with Rigidbody and Collider physics.",
            "Built a prototype 2D endless runner featuring one-button control and retro 8-bit graphics, with artwork created using Krita.",
            "Designed pixel-art characters and a custom UI for a cohesive game style, with assets created in Krita.",
            "Created and modeled a game character weapon in Blender, demonstrating strong 3D asset design skills.",
            "Published an augmented reality filter on Instagram using Spark AR.",
            "Designed immersive and interactive environments in Unity to enhance player experience.",
          ],
        },
      ],
    },
    {
      company: "The Impact Store",
      // periodName: "Creative Merchandise Venture",
      period: "May 2023 - Dec 2023",
      positions: [
        {
          title: "Co-founder",
          description: [
            "Co-founder of Impact Store, a creative merchandise venture launched in my first year of college to provide students with customizable apparel and event branding.",
            "Led creative direction and production, designing high-impact cultural and departmental tees with a focus on premium print quality.",
            "Established the brand's digital presence through visual storytelling and social media marketing, boosting reach and simplifying order collection.",
          ],
        },
        {
          title: "Designer",
          description: [
            "User-Initiated Design: Implemented a user-driven design workflow that enabled students and departments to request custom artwork tailored to their events.",
          ],
        },
      ],
    },
    {
      company: "VoltaVerse Studio \n Indie Game Studio",
      //   periodName: "Indie Game Studio",
      period: "March 2024 – Present",
      positions: [
        {
          title: "Founder",
          description: [
            "I assisted in developing a reusable UI component library and worked closely with a multi-million dollar airline client to gather requirements.",
            "Conducted testing and debugging for a smooth user experience. Managed the full development lifecycle, from concept to release. Gained expertise in mobile game publishing and app store optimization.",
          ],
        },
        {
          title: "Game Developer",
          description: [
            "Developed and published SWITCH, a 2D hyper-casual game, on the Google Play Store. Created engaging gameplay mechanics using Unity. Designed and implemented features like character movement, obstacles, and scoring.",
            "SWIRL 3D, an Endless Runner: Developed a 3D vortex-motion endless runner game in Unity with high-score tracking and optimized performance across devices.",
            "I built educational AR anatomy of human parts experiences for students (grades 5–10) using Vuforia SDK.",
            "I created and launched an AR filter on Snapchat that received over 40K impressions.",
            "MathSnake, an Educational Unity Game: Designed an educational Unity game where players solve math problems to progress, tailored to support students with dyscalculia.",
          ],
        },
      ],
    },
    {
      company: "TRYMBKM ",
      //  periodName: "",
      period: "Sep 01, 2024 - Jan 01, 2025",
      positions: [
        {
          title: "Frontend Developer Intern",
          description: [
            "UI/UX Development: I designed responsive layouts with modern animations and transitions to enhance user interaction and visual appeal.",
            "Frontend Engineering: I developed creative components and maintained responsive web applications using Node.js and JavaScript, while contributing to code reviews, testing, and debugging.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/Jeeva.jpg",
};
export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="absolute left-[calc(28%_-_1rem)] top-0 h-full w-8">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
