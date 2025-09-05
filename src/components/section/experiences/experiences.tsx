import ExperienceItem from '@/components/section/experiences/experience-item'

export default function Experiences() {

  const EXPERIENCES = [
    {
      title: "Développeur Full Stack",
      contract: "Alternance",
      enterprise: "Plume SAS",
      period: "09/2024 - 09/2025",
      description: "Description...",
      skills: [
        "Drupal",
        "Twig",
        "Sass",
        "PHP",
        "Ubuntu",
        "ddev",
        "Reminna",
        "FileZilla",
        "Figma"
      ]
    },
    {
      title: "Développeur Frontend",
      contract: "Stage",
      enterprise: "TCP Innovation",
      period: "06/2024 - 07/2024",
      description: "Description...",
      skills: [
        "Joomla",
        "HTML",
        "CSS",
        "JavaScript",
        "Figma"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {EXPERIENCES.map((experience, index) => (
        <ExperienceItem
          key={index}
          {...experience}
        />
      ))}
    </div>
  )
}
