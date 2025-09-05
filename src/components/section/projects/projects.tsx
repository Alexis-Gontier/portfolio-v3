import React from 'react'
import ProjectItem from './project-item'

const PROJECTS = [
  {
    image: "/project/image1.png",
    title: "Run Together",
    description: "Project description goes here.",
    techStack: ["Nextjs", "TypeScript"],
    codeLink: "https://github.com/your-repo",
    demoLink: "https://your-demo-link.com",
  },
  {
    image: "/project/image1.png",
    title: "Another Project",
    description: "Another project description.",
    techStack: ["Next.js", "TailwindCSS"],
    codeLink: "https://github.com/your-repo",
  }
]

export default function Projects() {
  return (
    <div id="projects" className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {PROJECTS.map((project, idx) => (
        <ProjectItem
          key={idx}
          {...project}
        />
      ))}
    </div>
  )
}
