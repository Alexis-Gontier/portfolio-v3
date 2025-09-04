import Link from "next/link";
import { Button } from "@/components/shadcn-ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background px-4">
            <h1 className="text-center text-2xl font-bold text-foreground md:text-4xl">404 - Page Not Found</h1>
            <p className="text-center text-muted-foreground text-sm md:text-base">
                Désolé, la page que vous recherchez n&apos;existe pas.
            </p>
            <Button asChild>
                <Link href="/">
                    Retour à l&apos;accueil
                </Link>
            </Button>
        </div>
    );
}