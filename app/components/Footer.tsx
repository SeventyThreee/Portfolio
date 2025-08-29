import Link from "next/link";
import { SocialPill } from "./SocialPill";
import { GridWrapper } from "./GridWrapper";
import Image from "next/image";

interface FooterLink {
  href: string;
  label: string;
  key: string;
  isExternal?: boolean;
  download?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "General",
    links: [
      { href: "/", label: "Home", key: "home" },
      { href: "/about", label: "About", key: "about" },
      { href: "/skills", label: "Skills", key: "skills" },

      { href: "/journey", label: "Journey", key: "journey" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/projects", label: "Projects", key: "projects" },
      { href: "/failures", label: "Failure", key: "failure" },
      { href: "/Blog", label: "Blog", key: "Blog" },
      { href: "/illustrations", label: "Illustrations", key: "illustrations" },
    ],
  },
  {
    title: "Contact Me",
    links: [
      { href: "/links", label: "Links", key: "links" },
      {
        href: "/resume/Jeevakrishna V-Resume.pdf",
        label: "Resume",
        key: "resume",
        isExternal: true,
        download: true,
      },
    ],
  },
];

export function Footer(): JSX.Element {
  const renderFooterLink = (link: FooterLink): JSX.Element => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <>
      <div className="max-w-10xl relative border-border-primary/50">
        <GridWrapper>
          <div className="max-w-10xl divide-y px-4 lg:mx-auto lg:flex lg:divide-x lg:px-4 xl:px-0">
            <div className="flex w-full py-6 text-sm">
              <div>
                <div className="flex-grow space-y-6">
                  <Link className="inline-block" href="/">
                    <Image
                      src="/JKlogo.svg"
                      alt="JeevaKrishna's Logo"
                      width={400}
                      height={400}
                      className="h-20 w-20"
                    />
                  </Link>
                  <p className="w-60 leading-5 text-gray-500">
                    {/* I&apos;m*/} &quot;I WANT TO PUT A DING IN THE
                    UNIVERSE&quot;- Steve Jobs
                  </p>
                </div>
                {/* <p className="mt-6 text-gray-500">
                  Original design by{" "}
                  <a
                    href="https://braydoncoyer.dev/"
                    className="hover:underline"
                  >
                    Braydon Coyer
                  </a>
                </p> */}
                <p className="mt-6 text-gray-500">
                  Built by JeevaKrishna • {new Date().getFullYear()}
                </p>
              </div>
              <div className="flex w-full items-end justify-end pr-16">
                <SocialPill />
              </div>
            </div>
            <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
              <div className="ld:space-x-0 flex w-full justify-between md:justify-start md:space-x-36 lg:justify-between">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <span className="mb-4 inline-block text-base font-medium text-text-primary">
                      {section.title}
                    </span>
                    <ul className="space-y-2 text-sm text-gray-500">
                      {section.links.map((link) => (
                        <li className="hover:text-text-primary" key={link.href}>
                          {renderFooterLink(link)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
      </div>
      <div className="relative h-8 w-full [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}

{
  /** { href: "/connections", label: "Inspiration", key: "connections" }, */
}
