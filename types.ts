
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface OwnerProfile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
}
