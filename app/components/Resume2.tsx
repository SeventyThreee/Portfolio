"use client";

import { ResumeData } from "../lib/resume/types1";
import dynamic from "next/dynamic";
import { TimelineProps } from "./Timeline";

// Dynamically import Timeline with SSR disabled
const Timeline = dynamic<{}>(
  () => import("./Timeline").then((mod) => mod.Timeline),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-full w-full">
        <div className="absolute -left-0.5 z-10 flex h-9 w-9 items-center justify-center">
          <div className="h-9 w-9 rounded-full border-2 border-bg-primary bg-gray-200 shadow-md" />
        </div>
        <div className="absolute bottom-0 left-1/2 top-0 w-2 -translate-x-1/2 rounded-full bg-[#E8ECEF] shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.32)]" />
      </div>
    ),
  },
) as React.ComponentType<TimelineProps>;

const resumeData: ResumeData = {
  experiences: [
    {
      company: "07 March 2005",
      positions: [
        {
          title: "Born",
          description: [
            "A Monday morning in Thanjavur, Tamil Nadu as the sun rose at 7:00 AM, I arrived, a tiny baby with a curious spark in my eyes.",
          ],
        },
      ],
    },

    {
      company: "1.5 years later",
      positions: [
        {
          title: "First Steps",
          description: [
            "I wobbled into the world, tiny feet learning how to chase big dreams step by step, baby walk by baby walk.",
          ],
        },
      ],
    },

    {
      company: "2 years later",
      positions: [
        {
          title: "First Words",
          description: [
            "The first sounds of my voice calling out Appa and Amma simple words that meant the world.",
          ],
        },
      ],
    },

    {
      company: "2008 - 2014",
      positions: [
        {
          title: "Primary School Days",
          description: [
            "Joined Yagappa Matriculation School in Kindergarten and stayed through Grade 5.",
            "Made my first friends, faced my first homework battles, and learned how fun competitions could be from fancy dress to art contests, winning a few along the way.",
            "Discovered passions football, cricket, drawing and built habits of discipline, curiosity, and time management that shaped everything later.",
            "School became my foundation it taught me to learn, speak up, write well, and dream bigger.",
          ],
        },
      ],
    },

    {
      company: "2012",
      positions: [
        {
          title: "First Computer (My First Love)",
          description: [
            "At 7 years old, my father brought home a Windows 7 desktop, a massive monitor and a mysterious CPU box.",
            "I couldn't wait to rush home from school to explore it. From MS Paint doodles to browsing YouTube, that machine became my playground.",
            "With every click, I learned something new from origami tutorials to my first steps in programming the computer and the internet opened up a world far bigger than I'd ever imagined.",
          ],
        },
      ],
    },

    {
      company: "Aug 2012",
      positions: [
        {
          title: "The Day Glasses Became My Window",
          description: [
            "Evenings glued to the old TV strained my eyes, and by Grade 2 I was prescribed spectacles starting at -1.2 power, now at -6.1.",
            "Those lenses became part of me, helping me see clearly through every high, low, and everything in between.",
          ],
        },
      ],
    },
    {
      company: "2014 - 2018",
      positions: [
        {
          title: "Middle School",
          description: [
            "Jumping from primary school to middle school, small short into pants, grow up height little, more activity and stubborness.",
            "Joined my school football training and explored everything: from social science to physics and computer science (my favorites).",
            "This was my chatterbox phase teachers and friends wondered if I'd ever stop talking.",
            "Learned paper origami cranes, frogs, toys and loved teaching it to friends. It taught me patience and a calm mindset.",
            "Ran relay races, won a few medals, and learned how teamwork matters more than individual speed.",
          ],
        },
      ],
    },

    {
      company: "24 May 2015",
      positions: [
        {
          title: "Becoming a Mumbai Indians Fan",
          description: [
            "Watched cricket seriously for the first time with my dad, a huge Sachin Tendulkar fan.",
            "In IPL 2015, MI started terribly (2 wins out of 7), but my dad said: 'Wait till the end.' They turned it around and beat CSK twice including the final. That’s when I became a die-hard MI fan.",
          ],
        },
      ],
    },

    {
      company: "June 2015",
      positions: [
        {
          title: "Manchester United (My Second Love)",
          description: [
            "Started collecting football pictures from newspapers with friends saw Rooney and instantly fell in love with Manchester United.",
            "First match I watched: Martial’s debut goal against Liverpool. From that day, it’s United till I die.",
            "Players like Rooney, Rashford, and De Gea taught me to never give up the 'Comeback Kings.' Iconic No.7 matched my favorite number. United became part of my identity.",
          ],
        },
      ],
    },

    {
      company: "2018 - 2020",
      positions: [
        {
          title: "Middle to Secondary School",
          description: [
            "Focused on studies while exploring my passions.",
            "Started freelancing by posting pencil portraits and football freestyle videos on Instagram. Soon, juniors and seniors started asking for custom portraits — I’d charge ₹100 or even chocolate.",
            "These small wins gave me huge self-confidence and showed me my skills had real value.",
          ],
        },
      ],
    },

    {
      company: "8 Aug 2018",
      positions: [
        {
          title: "Zonal Football Match",
          description: [
            "Played my first official match as a Left Winger, nervous but excited.",
            "Missed a penalty in the opener, but my team won the tournament with a final assist from me.",
            "In the next zonal event, I bounced back: scored two goals and an assist in one match, then scored again against the toughest side in the finals.",
            "Even though we lost 1-3, that moment when I equalized 1-1 and the whole stadium cheered pure goosebumps, a core memory.",
          ],
        },
      ],
    },

    {
      company: "2018 - 2022",
      positions: [
        {
          title: "Higher Secondary & First Programming Steps",
          description: [
            "Started understanding people, reality, and staying focused on education.",
            "COVID hit in 2019. Board exams were canceled and marks were given based on past performance I scored 319/500. Not great, but I stayed calm.",
            "During lockdown, I decided to become a software engineer. Learned HTML, CSS, and JS from YouTube, and even started C# to make games.",
            "In Grade 11, chose French as a third language created an HTML/CSS quiz website to help classmates with French and Chemistry.",
            "Started freelancing in website design and development, earning a bit on the side. Finished Grade 12 with 465/600.",
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
                key={`${experience.company}`}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
                suppressHydrationWarning={true}
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
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
                          <p
                            key={`${experience.company}-${position.title}-desc-${i}`}
                            className="text-gray-600"
                          >
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
        </div>
      </div>
    </div>
  );
}
