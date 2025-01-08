export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'tools' | 'other';
}

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Git', level: 80, category: 'tools' },
  { name: 'Node.js', level: 75, category: 'other' },
];