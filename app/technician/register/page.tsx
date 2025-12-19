"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/data/mock";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, User, Phone, MapPin, Wrench, Clock, DollarSign, Info } from "lucide-react";

export default function TechnicianRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    serviceCategory: "",
    yearsOfExperience: "",
    pricePerService: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-section flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-2 rounded-2xl shadow-2xl">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Inscription Soumise</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                Votre compte est en attente d'approbation. Nous examinerons votre candidature et vous notifierons une fois approuvé.
              </p>
              <Link href="/">
                <Button size="lg" className="px-8">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-section">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-2xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Devenir Technicien
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Remplissez le formulaire ci-dessous pour vous inscrire en tant que technicien sur notre plateforme
          </p>
        </div>

        <Card className="border-2 rounded-2xl shadow-xl bg-white dark:bg-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <User className="h-6 w-6" />
              Formulaire d'Inscription
            </CardTitle>
            <CardDescription className="text-base">
              Tous les champs sont obligatoires. Votre compte sera examiné avant approbation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Nom Complet
                </label>
                <Input
                  required
                  placeholder="Entrez votre nom complet"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Numéro de Téléphone
                </label>
                <Input
                  required
                  type="tel"
                  placeholder="+216 XX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Ville / Zone
                </label>
                <Input
                  required
                  placeholder="Entrez votre ville ou zone"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  Catégorie de Service
                </label>
                <Select
                  required
                  value={formData.serviceCategory}
                  onValueChange={(value) => handleChange("serviceCategory", value)}
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Sélectionnez une catégorie de service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Années d'Expérience
                </label>
                <Input
                  required
                  type="number"
                  min="0"
                  placeholder="Entrez vos années d'expérience"
                  value={formData.yearsOfExperience}
                  onChange={(e) => handleChange("yearsOfExperience", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Prix par Service (TND)
                </label>
                <Input
                  required
                  type="number"
                  min="0"
                  placeholder="Entrez votre prix par service"
                  value={formData.pricePerService}
                  onChange={(e) => handleChange("pricePerService", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full h-12 text-lg rounded-xl shadow-lg hover:shadow-xl" size="lg">
                  Soumettre l'Inscription
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-2 border-blue-200 dark:border-blue-800 rounded-2xl shadow-lg">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold mb-3 text-base">Informations sur la Plateforme :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Abonnement mensuel : 25-30 TND</li>
                  <li>Commission de la plateforme : 15-20% par service</li>
                  <li>Votre compte sera examiné dans les 24-48 heures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
