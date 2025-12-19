import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wrench, UserPlus } from "lucide-react";

export function Nav() {
  return (
    <nav className="border-b bg-white/95 dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex items-center gap-2">
            <Link href="/services">
              <Button variant="ghost" className="gap-2">
                <Wrench className="h-4 w-4" />
                Services
              </Button>
            </Link>
            <Link href="/technician/register">
              <Button variant="outline" className="gap-2">
                <UserPlus className="h-4 w-4" />
                Devenir Technicien
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

