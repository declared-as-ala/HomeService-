import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/mock";
import { 
  Snowflake, 
  Sparkles, 
  Paintbrush, 
  Zap, 
  Droplet, 
  Hammer, 
  Leaf, 
  Waves,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  snowflake: Snowflake,
  sparkles: Sparkles,
  paintbrush: Paintbrush,
  zap: Zap,
  droplet: Droplet,
  hammer: Hammer,
  leaf: Leaf,
  waves: Waves,
};

const iconColors = [
  "from-blue-500 to-blue-600",
  "from-green-500 to-green-600",
  "from-purple-500 to-purple-600",
  "from-orange-500 to-orange-600",
  "from-pink-500 to-pink-600",
  "from-cyan-500 to-cyan-600",
  "from-emerald-500 to-emerald-600",
  "from-indigo-500 to-indigo-600",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-section">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Tous les Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sélectionnez un service pour trouver des techniciens à proximité en Tunisie
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            const colorClass = iconColors[index % iconColors.length];
            return (
              <Link key={service.id} href={`/services/${service.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border-2 hover:border-blue-300 dark:hover:border-blue-700 group bg-white dark:bg-card rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
