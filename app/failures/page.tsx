import { ShadowBox } from "@/app/components/ShadowBox";
import { Button } from "@/app/components/Button";
import { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";
import { VideoCard } from "@/app/components/VideoCard";
import Image from "next/image";
import { AnimatedMobilePhotos } from "@/app/components/AnimatedMobilePhotos";
import { PageSection } from "../components/PageSection";
import { ContentLink } from "../components/ContentLink";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/app/components/Tabs";
import { Photo } from "@/app/components/Photo";

interface Talk {
  title: string;
  description: string;
  learnedFrom: string;
}

const talksAndPresentations: Talk[] = [
  {
    title: "Hackathon Finalists:",
    description:
      "My first ever offline hackathon! It was a 3-day event where our product got great feedback from mentors and reviewers. I was super confident on Day 1 and 2, but I completely messed up the final presentation, nerves hit me hard. Instead of winning, we landed as finalists. That’s the day I decided to seriously work on my communication and presentation skills.",
    learnedFrom:
      "Improving how I speak in front of people, staying calm, and building self-confidence.",
  },

  {
    title: "Backlogs:",
    description:
      "In my 2nd semester, I ended up with 5 backlogs. The jump from school to university exams was tough, I didn’t manage my time well and ignored internal tests. By finals, I was stressed and anxious, which made things worse. It taught me a huge lesson about planning and consistency.",
    learnedFrom:
      "Making proper schedules for every task to stay calm, reduce anxiety, and stay focused.",
  },

  {
    title: "Football Match:",
    description:
      "In my 3rd year, we had a quarterfinal football match against seniors. Some misunderstanding during the game led to a fight, and I lost my cool even though it wasn’t my fault. We almost lost the match because of my temper, later somehow we won 2-1 in a match. Still, I realized anger never helps.",
    learnedFrom:
      "Staying calm under pressure and because in the end, calm always wins.",
  },

  {
    title: "Tried Building a Media Player:",
    description:
      "As a kid, I loved VLC media player, so I tried making my own version using Electron and CMake. I hit a lot of errors and couldn’t finish it yet, but building something I’ve always admired was fun. The project is paused for now while I figure out CMake still learning as I go!",
    learnedFrom:
      "Trying new tech even when it’s not easy, failing, learning, and repeating the process.",
  },

  {
    title: "Physics Exam Overconfidence:",
    description:
      "Physics was always my favorite subject, so in Grade 12 I thought I had it covered. I got overconfident, didn’t prepare properly, and ended up with lower marks than expected. It was a wake-up call about ego and overconfidence.",
    learnedFrom:
      "Ego and overconfidence are the fastest way to mess things up.",
  },

  {
    title: "Switch Game:",
    description:
      "I built a hyper-casual game called Switch for people aged 20-65 to help reduce stress and improve focus. The launch didn’t blow up — only around 100+ downloads — but I was still proud of it. I learned that making a good game is one thing, reaching an audience is another.",
    learnedFrom:
      "Planning strategically and executing well is what gets real results.",
  },

  {
    title: "Side Projects That Didn’t Launch:",
    description:
      "Not every idea makes it to launch and that’s okay. I’ve tried building so many things just to explore tools, test concepts, and level up my skills. Even when they didn’t ship, they taught me how to experiment freely and think differently.",
    learnedFrom:
      "Exploring new tools, solving tricky problems, and building smarter solutions while sharpening creative and dev skills.",
  },
];

export default function SpeakingPage() {
  return (
    <div className="relative">
      <title>Failures | Jeevakrishna V</title>
      <div className="relative space-y-16">
        <GridWrapper>
          <h1 className="max-w-3/5 mx-auto mt-16 text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            Growth through the things that didn&apos;t work
          </h1>
        </GridWrapper>

        {/*
        <div className="text-center">
          <GridWrapper className="py-4">
            <Button
              variant="primary"
              href="https://forms.gle/hyhqN12A2BGForzq6"
            >
              Invite me to speak
            </Button>
          </GridWrapper>
        </div>
        */}

        <div>
          {/* Photos */}
          <div className="mb-8 mt-16 hidden items-center justify-center space-x-12 lg:flex">
            <div className="relative">
              <ShadowBox width={278} height={278}></ShadowBox>
              <span className="absolute left-1 top-2 rotate-[-8deg]">
                <Photo
                  width={270}
                  height={270}
                  src="/main_voltaverse_studio-removebg-preview.png"
                  alt="Voltaverse Studio my game studio."
                  direction="right"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={412} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[8deg]">
                <Photo
                  width={404}
                  height={270}
                  src="/hackthon_finalists.png"
                  alt="hackthon_finalists"
                  direction="left"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={188} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[-8deg]">
                <Photo
                  width={180}
                  height={270}
                  src="/impact_store.png"
                  alt="Impact_store"
                  direction="right"
                />
              </span>
            </div>
          </div>
          {/* Mobile Photos */}
          <AnimatedMobilePhotos delay={0.1} />
        </div>

        <div className="relative space-y-32">
          <div className="space-y-16">
            <PageSection title={<h2>Failures projects/Lessons </h2>}>
              <p className="text-sm/8 text-text-primary">
                Projects/lessons I learned lots from but never went far
              </p>
              <div className="mt-8 max-w-2xl space-y-10 text-balance">
                {talksAndPresentations.map((talk) => (
                  <ContentLink
                    key={talk.title}
                    title={talk.title}
                    description={talk.description}
                    learnedFrom={talk.learnedFrom}
                  />
                ))}
              </div>
            </PageSection>
          </div>
        </div>
      </div>
    </div>
  );
}
