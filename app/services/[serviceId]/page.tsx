"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { getTechniciansByService, getServiceById } from "@/data/mock";
import { Star, MapPin, Phone, Award, ArrowLeft, User, Clock, DollarSign, Filter } from "lucide-react";
import Link from "next/link";

export default function TechniciansPage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  
  const service = getServiceById(serviceId);
  const allTechnicians = getTechniciansByService(serviceId);
  
  const [sortBy, setSortBy] = useState<"price" | "rating">("price");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const sortedTechnicians = useMemo(() => {
    const sorted = [...allTechnicians];
    if (sortBy === "price") {
      sorted.sort((a, b) => a.pricePerService - b.pricePerService);
    } else {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  }, [allTechnicians, sortBy]);

  if (!service) {
    return (
      <div className="min-h-screen bg-section flex items-center justify-center">
        <Card className="max-w-md border-2 rounded-2xl shadow-xl">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Service introuvable</h1>
            <Link href="/services">
              <Button>Retour aux Services</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-section">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <Link href="/services">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Retour aux Services
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              {service.name}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">{service.description}</p>
        </div>

        {/* Client Info Form */}
        <Card className="mb-8 border-2 shadow-xl bg-white dark:bg-card rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <User className="h-5 w-5" />
              Vos Informations
            </CardTitle>
            <CardDescription className="text-base">
              Entrez votre localisation et votre numéro de téléphone pour voir les techniciens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Localisation
                </label>
                <Input
                  placeholder="Entrez votre ville ou adresse"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Numéro de Téléphone
                </label>
                <Input
                  type="tel"
                  placeholder="+216 XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground font-semibold text-lg">
              {sortedTechnicians.length} technicien{sortedTechnicians.length !== 1 ? "s" : ""} disponible{sortedTechnicians.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">Trier par :</span>
            <Select value={sortBy} onValueChange={(value: "price" | "rating") => setSortBy(value)}>
              <SelectTrigger className="w-[200px] rounded-xl h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Prix le plus bas
                  </div>
                </SelectItem>
                <SelectItem value="rating">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Meilleure note
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Technicians Grid */}
        {sortedTechnicians.length === 0 ? (
          <Card className="border-2 rounded-2xl shadow-lg">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-12 text-lg">
                Aucun technicien disponible pour ce service pour le moment.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTechnicians.map((technician) => (
              <Card key={technician.id} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-700 group bg-white dark:bg-card rounded-2xl overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {technician.name}
                      </CardTitle>
                    </div>
                    {technician.isTopRated && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0 shadow-md">
                        <Award className="h-3 w-3 mr-1" />
                        Top Noté
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center gap-1 mt-2">
                    <MapPin className="h-4 w-4" />
                    {technician.city} • {technician.distance} km
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <div>
                        <span className="font-semibold text-lg">{technician.rating}</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          ({technician.reviewCount} avis)
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-muted-foreground font-medium">Prix :</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {technician.pricePerService} TND
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground p-2">
                      <Clock className="h-4 w-4" />
                      {technician.yearsOfExperience} ans d'expérience
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground p-2">
                      <Phone className="h-4 w-4" />
                      {technician.phone}
                    </div>
                    
                    <Button className="w-full mt-4 gap-2 shadow-lg hover:shadow-xl transition-all rounded-xl h-12 text-base" asChild>
                      <a href={`tel:${technician.phone}`}>
                        <Phone className="h-4 w-4" />
                        Contacter le Technicien
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
