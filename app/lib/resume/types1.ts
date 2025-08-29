export interface Position {
  title: string;
  description: string[];
}

export interface Experience {
  company: string;
  positions: Position[];
}

export interface ResumeData {
  experiences: Experience[];
  avatarUrl: string;
}
