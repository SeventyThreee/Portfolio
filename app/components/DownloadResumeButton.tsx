"use client";

import { Button } from "./Button";

export function DownloadResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Jeevakrishna V-Resume.pdf";
    link.download = "Jeevakrishna_V-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center">
      <Button variant="secondary" onClick={handleDownload}>
        Download Resume
      </Button>
    </div>
  );
}
