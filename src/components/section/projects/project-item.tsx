import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"
import { Badge } from "@/components/shadcn-ui/badge"
import { Button } from "@/components/shadcn-ui/button"
import { Lens } from "@/components/magicui/lens";
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type ProjectItemProps = {
    image: string
    title: string
    description: string
    techStack: string[]
    codeLink?: string
    demoLink?: string
}

export default function ProjectItem({
    image,
    title,
    description,
    techStack,
    codeLink,
    demoLink
}: ProjectItemProps) {
  return (
    <Card className="group pt-px px-px rounded-card">
        <Lens
            zoomFactor={2}
            lensSize={100}
            isStatic={false}
            ariaLabel="Zoom Area"
        >
            <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="object-cover rounded-xl"
            />
        </Lens>
        <CardContent className="space-y-2">
            <CardTitle className="duration-300 transition-all group-hover:text-primary">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <div className="flex flex-wrap gap-1">
                {techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                        {tech}
                    </Badge>
                ))}
            </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2">
            {codeLink && (
                <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                    asChild
                >
                    <Link href={codeLink} target="_blank" rel="noopener noreferrer">
                        <Github />
                        Code
                    </Link>
                </Button>
            )}
            {demoLink && (
                <Button
                    size="sm"
                    className="cursor-pointer"
                    asChild
                >
                    <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink />
                        Demo
                    </Link>
                </Button>
            )}
        </CardFooter>
    </Card>
  )
}
