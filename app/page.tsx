"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/mock";
import { AnimatedBackground } from "@/components/animated-background";
import { 
  Snowflake, 
  Sparkles, 
  Paintbrush, 
  Zap, 
  Droplet, 
  Hammer, 
  Leaf, 
  Waves,
  ArrowRight,
  Search,
  Users,
  Star,
  MapPin,
  Shield,
  TrendingUp,
  CheckCircle2,
  Award,
  Clock
} from "lucide-react";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-background relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative bg-hero py-20 md:py-32 overflow-hidden z-10">
        {/* Background Image - Using Unsplash directly to avoid 404 */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
            }}
          />
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85 dark:from-gray-900/85 dark:via-gray-900/75 dark:to-gray-900/85" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 mb-6 text-sm font-medium shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="h-4 w-4" />
              <span>Service en Tunisie</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent">
                Trouvez des services à domicile
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-100">
                fiables près de chez vous
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connectez-vous avec des techniciens professionnels dans votre région. 
              Comparez les prix et les avis pour trouver le service parfait.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="text-lg px-8 py-7 gap-2 shadow-xl hover:shadow-2xl transition-all bg-blue-600 hover:bg-blue-700 text-white group">
                    <Search className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Choisir un service
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/technician/register">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="text-lg px-8 py-7 gap-2 border-2 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    Devenir Technicien
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium flex items-center justify-center gap-1">
                  <Users className="h-3 w-3" />
                  Techniciens
                </div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium flex items-center justify-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Types de Services
                </div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  Note Moyenne
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-section py-20 md:py-24 relative z-10">
        {/* Section Background Overlay */}
        <div className="absolute inset-0 bg-white/60 dark:bg-background/60 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Nos Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Services à domicile professionnels livrés par des techniciens de confiance à travers la Tunisie
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              const colorClass = iconColors[index % iconColors.length];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.id}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border-2 hover:border-blue-300 dark:hover:border-blue-700 group bg-white dark:bg-card rounded-2xl overflow-hidden">
                        <CardHeader className="pb-4">
                          <motion.div 
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 shadow-lg`}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent className="h-8 w-8 text-white" />
                          </motion.div>
                          <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {service.name}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white dark:bg-background py-20 md:py-28 relative z-10">
        {/* Section Background Overlay */}
        <div className="absolute inset-0 bg-white/70 dark:bg-background/70 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Comment ça marche
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Obtenez vos services à domicile en trois étapes simples
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: "1", title: "Choisissez un service", desc: "Parcourez notre large gamme de services à domicile et sélectionnez ce dont vous avez besoin", icon: Search },
              { num: "2", title: "Sélectionnez un technicien", desc: "Comparez les techniciens à proximité par prix et note pour trouver votre correspondance parfaite", icon: Users },
              { num: "3", title: "Faites faire le travail", desc: "Contactez votre technicien choisi et faites effectuer votre service de manière professionnelle", icon: CheckCircle2 },
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="text-center border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-white dark:bg-card rounded-2xl shadow-lg hover:shadow-xl">
                      <CardContent className="pt-8 pb-8">
                        <motion.div 
                          className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl relative"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="absolute">{step.num}</span>
                        </motion.div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
                          <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-section py-20 md:py-24 relative z-10">
        {/* Section Background Overlay */}
        <div className="absolute inset-0 bg-white/60 dark:bg-background/60 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Techniciens Vérifiés", desc: "Tous les techniciens sont vérifiés et approuvés par notre équipe", bgClass: "bg-green-100 dark:bg-green-900/30", iconClass: "text-green-600 dark:text-green-400" },
              { icon: Star, title: "Meilleures Notes", desc: "Comparez les techniciens sur la base d'avis clients réels", bgClass: "bg-blue-100 dark:bg-blue-900/30", iconClass: "text-blue-600 dark:text-blue-400" },
              { icon: TrendingUp, title: "Meilleurs Prix", desc: "Trouvez des prix compétitifs et comparez facilement les options", bgClass: "bg-purple-100 dark:bg-purple-900/30", iconClass: "text-purple-600 dark:text-purple-400" },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border-2 bg-white dark:bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all">
                      <CardContent className="pt-8 pb-8">
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className={`w-14 h-14 rounded-xl ${feature.bgClass} flex items-center justify-center flex-shrink-0 shadow-md`}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent className={`h-7 w-7 ${feature.iconClass}`} />
                          </motion.div>
                          <div>
                            <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technician CTA */}
      <section className="bg-white dark:bg-background py-20 relative z-10">
        {/* Section Background Overlay */}
        <div className="absolute inset-0 bg-white/70 dark:bg-background/70 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-950/50 dark:via-blue-900/50 dark:to-blue-950/50 border-2 border-blue-200 dark:border-blue-800 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="pt-12 pb-12">
                <div className="text-center max-w-2xl mx-auto">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="h-10 w-10 text-white" />
                  </motion.div>
                  <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Vous êtes technicien ?
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Rejoignez notre plateforme et connectez-vous avec des clients dans votre région. 
                    Développez votre activité avec HomeService.
                  </p>
                  <Link href="/technician/register">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="gap-2 shadow-xl hover:shadow-2xl bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group">
                        <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        Devenir Technicien
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
