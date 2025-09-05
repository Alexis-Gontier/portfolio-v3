import SkillItem from "@/components/section/skills/skill-item";

export default function Skills() {

  const SKILLS = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "Sass",
    "Git",
    "GitHub",
    "Gitlab",
    "prisma",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Docker",
    "ubuntu",
    "Vercel",
    "Drupal",
    "PHP",
    "Twig",
    "pnpm",
    "Figma",
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {SKILLS.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  )
}
