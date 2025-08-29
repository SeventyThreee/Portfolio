import { HorizontalLine } from "@/app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { DownloadResumeButton } from "@/app/components/DownloadResumeButton";
import React from "react";
import { CurrentlyPlayingBento } from "@/app/components/CurrentlyPlayingBento";
import { ConnectionsBento } from "@/app/components/ConnectionsBento";
import { ScrapbookBento } from "@/app/components/ScrapbookBento";
import { ShadowBox } from "@/app/components/ShadowBox";
import { Resume } from "app/components/Resume";
import { StatsBento } from "@/app/components/StatsBento";
import { CurrentlyReadingBento } from "@/app/components/CurrentlyReadingBento";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AboutTrackPattern } from "@/app/components/AboutTrackPattern";
import { Photo } from "@/app/components/Photo";
import Image from "next/image";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative mt-14">
      <title>About | Jeevakrishna V</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:px-24">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl lg:pr-12">
              <div className="text-center text-sm font-medium text-indigo-600 lg:text-left">
                <span>{timeOfDayGreeting}</span>
              </div>
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                I&apos;m Jeevakrishna Vetrivel,
                <br />
                Software Engineer & Designer
              </h1>
            </div>
            <div className="order-1 my-12 flex-shrink-0 lg:order-2 lg:my-0">
              <div className="relative mx-auto w-full max-w-[400px]">
                <div className="relative grid grid-cols-3">
                  <div className="relative z-20 -translate-y-2">
                    <Photo
                      width={140}
                      height={140}
                      src="/Jeeva11.jpeg"
                      alt="Jeevakrishna"
                      direction="left"
                    />
                  </div>
                  <div className="relative z-30">
                    <Photo
                      width={140}
                      height={140}
                      src="/Jeeva1.png"
                      alt="Jeevakrishna"
                      direction="right"
                    />
                  </div>
                  <div className="relative z-20 translate-y-4">
                    <Photo
                      width={140}
                      height={140}
                      src="/Jeevakrishna.jpg"
                      alt="Jeevakrishna"
                      direction="left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a quick intro about me and what I love to do
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <Image
                      className="absolute left-0 top-0 rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/SubwaySurfer.png"
                      alt="SubwaySurfer"
                      width={180}
                      height={270}
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  My programming journey began in 10th grade.
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I was always curious about how computers, software, and
                  hardware really worked. During my summer holidays, I explored
                  different career paths and got inspired by games like Subway
                  Surfers. I wanted to create my own web games, so I started
                  learning game development and web development from YouTube
                  teaching myself everything step by step.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <Image
                    src="/SubwaySurfer.png"
                    alt="SubwaySurfer"
                    width={180}
                    height={270}
                    className="absolute left-0 top-0 rotate-[-8deg] rounded-lg object-cover shadow"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={288} height={378}></ShadowBox>
                    <Image
                      src="/French.png"
                      alt="French Quiz!"
                      width={280}
                      height={370}
                      className="absolute left-0 top-0 rotate-[8deg] rounded-lg object-cover shadow"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  How I Stepped into the Web
                </h2>
                <p className="leading-18 mb-5 text-base text-text-secondary">
                  Despite my love for Game development, the web kept calling my
                  name. With my eye for design, frontend felt like the perfect
                  playground. In grade 11, I started learning HTML, CSS, and
                  JavaScript and built a{" "}
                  <a
                    href="https://jeevakrishna.github.io/Asap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    French Quiz website
                  </a>{" "}
                  to help my classmates who struggled with the subject. It was
                  my 1st project that became a real game-changer for me.
                </p>
                <p className="leading-18 mb-6 text-base text-text-secondary">
                  A few months later, I joined the E-Cell at SASTRA University
                  as a frontend developer, conducting workshops and learning
                  technologies like React.js, SQL, and Node.js from my seniors.
                  Alongside this, I began freelancing, working on various
                  frontend projects that sharpened both my technical skills and
                  my ability to deliver real-world solutions
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={288} height={378}></ShadowBox>
                  <Image
                    src="/French.png"
                    alt="French Quiz!"
                    width={280}
                    height={370}
                    className="absolute left-0 top-0 rotate-[8deg] rounded-lg object-cover shadow"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 py-6 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-6">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 flex w-full flex-col items-center gap-6 lg:hidden">
                  <div className="relative h-48 w-48">
                    <ShadowBox width={192} height={192} />
                    <Image
                      src="/Voltaverse Studio.png"
                      alt="Voltaverse Studio"
                      fill
                      className="center-05 absolute top-0 rounded-lg object-contain shadow"
                    />
                  </div>
                  <div className="relative h-48 w-48">
                    <ShadowBox width={192} height={192} />
                    <Image
                      src="/Impact_store.png"
                      alt="Impact Store"
                      fill
                      className="center-0 absolute left-0 top-0 rounded-lg object-contain shadow"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Launched My 1st Game App and Clothing Brand
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I started creating web games and gradually moved into Unity
                  and C#, building 2D, 2.5D, and 3D games while learning core
                  game physics like rigidbodies and collisions etc. During this
                  journey, I launched my first hyper-casual game called{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.VoltaVerseStudio.Switch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Switch
                  </a>{" "}
                  in play store, designed to be fun and simple for players of
                  all ages, from 15 to 75, specially made for my grandmother.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Alongside game dev, I co-founded a clothing brand called The
                  Impact Store with a colleagues. At our university’s bi-annual
                  departmental events, students could design their own T-shirts,
                  and we brought those designs to life as custom merchandise.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <div className="flex flex-col items-center gap-8">
                    <div className="relative">
                      <ShadowBox width={192} height={192} />
                      <Image
                        src="/Voltaverse Studio.png"
                        alt="Voltaverse Studio"
                        width={180}
                        height={180}
                        className="absolute left-0 top-0 rotate-[-8deg] rounded-lg object-cover shadow"
                      />
                    </div>
                    <div className="relative">
                      <ShadowBox width={192} height={192} />
                      <Image
                        src="/Impact_store.png"
                        alt="Impact Store"
                        width={180}
                        height={180}
                        className="absolute left-0 top-0 rotate-[8deg] rounded-lg object-cover shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={388} height={455}></ShadowBox>
                    <Image
                      src="/Artist.png"
                      alt="Artist"
                      width={380}
                      height={470}
                      className="absolute bottom-10 right-10 rotate-[7deg] rounded-lg object-cover shadow"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  Right Now
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I am pursuing my final year of B.Tech in Information
                  Technology at SASTRA University. Recently, I&apos;ve developed
                  a strong interest in Artificial Intelligence and Machine
                  Learning. For my mini-project, I built{" "}
                  <a
                    href="https://food-focus-ai-32.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Food-Focus AI
                  </a>
                  , an open-source health web app that uses AI to detect Indian
                  foods and estimate their macronutrients.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  At present, I&apos;ve been working on my own game engine,{" "}
                  <a
                    href="https://github.com/Jeevakrishna/Totoro-GameEngine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Totoro
                  </a>
                  , while exploring AI models and large language models (LLMs).
                  As an engineer, I&apos;ve been passionate about building
                  projects with impact every year I create at least one solution
                  for special-needs children. This year, I developed Snake-Math,
                  an educational game designed for children with dyscalculia.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I created an esoteric programming language called{" "}
                  <a
                    href="https://github.com/Jeevakrishna/Zuzu-Programming-language"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Zuzu
                  </a>
                  , designed to help children with special needs learn coding in
                  a playful, visual, and easy way.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Outside of coding, I love creating football illustrations,
                  sketching portraits, and spending my free time on the field
                  playing football.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={399} height={455}></ShadowBox>
                  <Image
                    src="/Artist.png"
                    alt="setions 4 image"
                    width={380}
                    height={550}
                    className="absolute bottom-10 right-10 rotate-[7deg] rounded-lg object-cover shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My work history and achievements timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>

        <br />
        <br />
        <div className="space-y-16">
          <GridWrapper>
            <Resume />

            <br />
          </GridWrapper>
          <DownloadResumeButton />
        </div>

        {/* More Section */}
        <section className="pb-250 pt-160 relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>More</span>
              </div>
            </GridWrapper>

            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>
          {/* About Grid */}
          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:row-span-6">
                <CurrentlyPlayingBento />
              </div>
              <div className="hidden lg:col-span-7 lg:row-span-5 lg:block">
                <ScrapbookBento />
              </div>
              <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                <CurrentlyReadingBento />
              </div>
              <div className="lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div>

              <div className="lg:col-span-3 lg:row-span-4">
                <StatsBento />
              </div>
            </div>
          </GridWrapper>
        </section>
      </div>
    </div>
  );
}
