type SkillItemProps = {
  skill: string;
};

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="border px-4 py-2 rounded-lg bg-accent font-medium text-xs md:text-base">
        {skill}
    </div>
  )
}
