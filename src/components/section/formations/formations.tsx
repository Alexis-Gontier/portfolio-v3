import FormationItem from '@/components/section/formations/formation-item'

export default function Formations() {

  const FORMATIONS = [
    {
      title: "Bachelor développement web",
      school: "HETIC",
      period: "2023 - 2026",
      description: "Formation orientée vers le développement web et mobile, avec un apprentissage pratique des technologies front-end et back-end.",
      skills: [
        "HTML",
        "CSS",
        "Javascript"
      ]
    }
  ]

  return (
    <div className="space-y-4">
      {FORMATIONS.map((formation, index) => (
        <FormationItem
          key={index}
          {...formation}
        />
      ))}
    </div>
  )
}
