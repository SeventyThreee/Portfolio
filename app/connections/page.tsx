import type { Metadata } from "next";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";
import Image from "next/image";

type Connection = {
  name: string;
  profile_picture: string;
  socialLink: string;
  isConnected: boolean;
  connectedDate?: Date;
};

export const metadata: Metadata = {
  title: "INspritaion | Jeevakrishna ",
  description: "Manage your connections and network",
};

const connections: Connection[] = [
  {
    name: "Tejas Kumar",
    profile_picture: "/connections/Tejas Kumar.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
  {
    name: "SUIII",
    profile_picture: "/connections/Tejas Kumar.jpeg",
    socialLink: "https://x.com/BraydonCoyer",
    isConnected: true,
  },
];

export default function ConnectionsPage() {
  const sortedConnections = [...connections].sort((a, b) => {
    if (a.isConnected === b.isConnected) {
      return a.name.localeCompare(b.name);
    }
    return a.isConnected ? -1 : 1;
  });

  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          list of people I&apos;ve inspiration from .
        </h1>
      </GridWrapper>

      <div className="relative">
        <div className="relative mb-12 grid auto-rows-auto grid-cols-3 place-items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          <span className="absolute top-0">
            <HorizontalLine />
          </span>
          {sortedConnections.map((person) => (
            <div
              key={person.name}
              className="group no-underline transition-all duration-500"
            >
              <div className="group inline-block text-center">
                <div
                  className={`relative h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 ${
                    person.isConnected
                      ? "group-hover:-translate-y-3 group-hover:border-indigo-400"
                      : ""
                  }`}
                >
                  {person.isConnected && person.connectedDate ? (
                    <div className="absolute -bottom-2 left-1/2 w-full -translate-x-1/2 text-nowrap rounded-full bg-indigo-400 px-1.5 py-1 text-center text-xs text-white">
                      <span>
                        Met on{" "}
                        <time>
                          {person.connectedDate.toLocaleDateString("en-US", {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit",
                          })}
                        </time>
                      </span>
                    </div>
                  ) : null}
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <div className={`h-14 w-14 relative rounded overflow-hidden transition-all duration-300 ${
                        !person.isConnected ? "grayscale" : ""
                      }`}>
                      <Image
                        fill
                        sizes="56px"
                        className="object-cover"
                        alt={person.name}
                        src={person.profile_picture}
                      />
                    </div>
                  </div>
                </div>
                {person.name && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">{person.name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <span className="absolute bottom-0">
            <HorizontalLine />
          </span>
        </div>
      </div>
    </div>
  );
}
