import { BgGradient } from "./components/BgGradient";
import { ChangelogBento } from "./components/ChangelogBento";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { SpeakingBento } from "./components/SpeakingBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ToolboxBento } from "./components/ToolboxBento";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { CommunityWallBento as IllustrationsBento } from "./components/IllustrationsBento";
import { AboutMeBento } from "./components/AboutMeBento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ProjectShowcase } from "./components/ProjectShowcase";
import clsx from "clsx";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-8 sm:space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="mx-auto max-w-2xl text-center text-3xl font-medium leading-tight tracking-tight text-text-primary sm:text-4xl sm:leading-[1.2] md:text-5xl md:leading-[1.2] lg:text-6xl lg:leading-[64px]"
              >
                Hey, I&apos;m Jeevakrishna! <br className="hidden sm:block" />{" "}
                Welcome to my corner of the internet!{" "}
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="text-base leading-7 text-text-secondary sm:text-lg sm:leading-8 md:text-xl md:leading-8"
                >
                  I&apos;m a developer and designer who loves creating things
                  from scratch whether it&apos;s games, websites, or
                  full-fledged SaaS products. I&apos;ve built 2D, 3D, and 2.5D
                  games in Unity, developed web apps, and I&apos;m currently
                  exploring AI/ML projects out of pure curiosity. From sketching
                  concepts to shipping real products, I enjoy every step of the
                  journey. Sometimes I even switch gears to digital
                  illustration, because for me, design isn&apos;t just pixels,
                  it&apos;s a way to tell stories visually.
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <AboutPattern /> */}
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Here&apos;s What makes my journey a little different!
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 lg:col-span-5 lg:row-span-6">
                <AboutMeBento linkTo="/about" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="/about" />
              </div>

              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <ToolboxBento linkTo="/Skills" />
              </div>

              <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                <CalendarBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* My Site Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <MySitePattern /> */}
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>My Lab</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                A collection of what I try, love, learn from, and create
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
              <span className="col-span-1 h-[276px] sm:block md:hidden lg:block">
                <ChangelogBento />
              </span>
              <SpeakingBento /> {/* Failure and Testimonals */}
              <IllustrationsBento />
              <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                <ProjectShowcase linkTo="/journey" />
              </div>
            </div>
          </GridWrapper>

          {/* Blog Section */}
          <section className="relative space-y-10 md:space-y-16">
            {/* <BlogPattern /> */}
            <div className="relative space-y-4 text-balance">
              <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
                <BgGradient />
              </span>
              <GridWrapper>
                <div className="text-center text-sm font-medium text-indigo-600">
                  <span> Testimonials </span>{" "}
                  {/* Illurations & Design like train  */}
                </div>
              </GridWrapper>
              <GridWrapper>
                <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
                  Here&apos;s how my clients describe their experience
                </h2>
              </GridWrapper>
            </div>

            <div className="z-10">
              <GridWrapper>
                <div className="h-[400px] w-full">
                  <TestimonialCarousel />
                </div>
              </GridWrapper>
            </div>
          </section>

          {/* Project Showcase Section */}
        </section>
      </div>
    </section>
  );
}
