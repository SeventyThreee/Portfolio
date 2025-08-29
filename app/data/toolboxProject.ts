type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
};

type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const softwareData1: SoftwareDataItem[] = [
  {
    title: "Python",
    imgSrc: "/python.png",
    link: "https://www.python.org/",
  },
  {
    title: "C++",
    imgSrc: "/c++.png",
    link: "https://www.cplusplus.com/",
  },
  {
    title: "C#",
    imgSrc: "/c-sharp.png",
    link: "https://www.microsoft.com/en-us/download/details.aspx?id=48145",
  },

  {
    title: "JavaScript",
    imgSrc: "/java-script.png",
    link: "https://www.javascript.com/",
  },
  {
    title: "SQL",
    imgSrc: "/sql-server.png",
    link: "https://www.microsoft.com/en-us/sql-server/",
  },
  {
    title: "TypeScript",
    imgSrc: "/typescript.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Java",
    imgSrc: "/java.png",
    link: "https://www.java.com/",
  },
  {
    title: "GO lang(Learning)",
    imgSrc: "/Go-Logo_Aqua.png",
    link: "https://golang.org/",
  },
];
const platformData: SoftwareDataItem[] = [
  {
    title: "Switch",
    imgSrc: "/Switch.png",
    link: "https://www.python.org/",
  },
  {
    title: "Food-Focus-Ai",
    imgSrc: "/unnamed.png",
    link: "https://pytorch.org/",
  },
  {
    title: "BrainyBites",
    imgSrc: "/Braintybites.png",
    link: "https://www.unity.com/",
  },
  {
    title: "VoltaVerse studio",
    imgSrc: "/main_voltaverse_studio-removebg-preview.png",
    link: "https://keras.io/",
  },
  {
    title: "Work-Ripple",
    imgSrc: "/android-chrome-512x512.png",
    link: "https://www.djangoproject.com/",
  },
  {
    title: "Flask",
    imgSrc: "/flask-8x.png",
    link: "https://flask.palletsprojects.com/",
  },
  {
    title: "Node.js",
    imgSrc: "/nodejs-8x.png",
    link: "https://nodejs.org/",
  },
];

const softwareData2: SoftwareDataItem[] = [
  {
    title: "Git",
    imgSrc: "/social.png",
    link: "https://git-scm.com/",
  },
  {
    title: "PostgreSQL",
    imgSrc: "/postgresql-original-8x.png",
    link: "https://www.postgresql.org/",
  },
  {
    title: "MySQL",
    imgSrc: "/mysql.png",
    link: "https://www.mysql.com/",
  },

  {
    title: "Prisma",
    imgSrc: "/prisma-8x.png",
    link: "https://www.prisma.io/",
  },
  {
    title: "MongoDB",
    imgSrc: "/mongodb-plain-wordmark-8x.png",
    link: "https://www.mongodb.com/",
  },
  {
    title: "Docker",
    imgSrc: "/docker.png",
    link: "https://www.docker.com/",
  },
  {
    title: "Supabase",
    imgSrc: "/icons8-supabase-144.png",
    link: "https://supabase.com/",
  },
  {
    title: "APIs",
    imgSrc: "/api.png",
    link: "#",
  },
  {
    title: "Github",
    imgSrc: "/github-sign.png",
    link: "https://github.com/",
  },
];

const softwareData3: SoftwareDataItem[] = [
  {
    title: "Unity",
    imgSrc: "/unity-dark-8x.png",
    link: "https://www.unity.com/",
  },
  {
    title: "Blender",
    imgSrc: "/blender-original-8x.png",
    link: "https://www.blender.org/",
  },
  {
    title: "Krita",
    imgSrc: "/krita-dark-8x.png",
    link: "https://krita.org/",
  },
  {
    title: "Photoshop",
    imgSrc: "/photoshop-plain-8x.png",
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    title: "Visual Studio Code",
    imgSrc: "/visual-studio-code-8x.png",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "DaVinci Resolve",
    imgSrc: "/davinciresolve-dark-8x.png",
    link: "https://www.blackmagicdesign.com/",
  },
  {
    title: "WindSurf",
    imgSrc: "/windsurf.png",
    link: "https://windsurf.io/",
  },
  {
    title: "Excel",
    imgSrc: "/Microsoft_Office_Excel_Logo_128px.png",
    link: "https://www.microsoft.com/en-us/office/excel/",
  },
];

const softwareData4: SoftwareDataItem[] = [
  {
    title: "Linux",
    imgSrc: "/linux-original-8x.png",
    link: "https://www.linux.org/",
  },
  {
    title: "Windows",
    imgSrc: "/windows11-original-8x.png",
    link: "https://www.microsoft.com/en-us/windows/",
  },
  {
    title: "MacOS",
    imgSrc: "/macOS-8x.png",
    link: "https://www.apple.com/macos/",
  },
  {
    title: "Arduino",
    imgSrc: "/arduino-plain-wordmark-8x.png",
    link: "https://www.arduino.cc/",
  },
  {
    title: "Raspberry Pi",
    imgSrc: "/raspberry-pi-logo.png",
    link: "https://www.raspberrypi.com/",
  },
];

const hardwareData: HardwareDataItem[] = [
  {
    title: "Asus Vivobook S15 (16 inch), 2022",
    description:
      "11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz (2.80 GHz) 10-core CPU, 16-core GPU, 16-core Neural Engine, 32GB unified memory, 2TB SSD storage",
    link: "https://www.asus.com/",
  },
  {
    title: "Redmi 10",
    description: "REDMI 10 (Pacific Blue, 32 GB)  (4 GB RAM)",
    link: "https://www.xiaomi.com/",
  },
  {
    title: "IPad 8th gen",
    description:
      "Apple iPad (8th Gen) 32 GB ROM 10.2 inch Processor: A12 Bionic chip with Neural Engine.",
    link: "https://www.apple.com/",
  },
  {
    title: "realme Buds 2 Wired",
    description:
      "powerful 11.2-mm bass boost driver for elevated bass response. Moreover, these stylishly designed earphones have integrated magnets which offer a hassle-free way of storing them. Also, the tangle-free cables.",
    link: "https://www.realme.com/",
  },
];

// Export platformData as softwareData for backward compatibility

export {
  hardwareData,
  platformData,
  softwareData1,
  softwareData2,
  softwareData3,
  softwareData4,
};
export const softwareData = platformData;
