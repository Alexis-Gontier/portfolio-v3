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

type FormationItemProps = {
    title: string
    contract: string
    enterprise: string
    period: string
    description: string
    skills: string[]
}

export default function FormationItem({ title, contract, enterprise, period, description, skills }: FormationItemProps) {
  return (
    <Card>
        <CardHeader>
            <h3 className="flex items-center gap-2 text-primary text-2xl font-semibold">{title} <Badge variant="outline">{contract}</Badge></h3>
            <h4 className="text-muted-foreground text-lg font-medium">{enterprise}</h4>
            <p className="text-muted-foreground">{period}</p>
        </CardHeader>
        <CardContent className="space-y-2">
            <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
            </div>
        </CardFooter>
    </Card>
  )
}

