export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  baseCommission: number;
}

export interface Technician {
  id: string;
  name: string;
  phone: string;
  city: string;
  serviceCategory: string;
  yearsOfExperience: number;
  pricePerService: number;
  rating: number;
  reviewCount: number;
  distance: number; // in km
  status: "approved" | "pending";
  isTopRated?: boolean;
}

export const services: Service[] = [
  {
    id: "ac-maintenance",
    name: "Entretien Climatisation",
    icon: "snowflake",
    description: "Nettoyage et maintenance professionnelle de climatisation",
    baseCommission: 18,
  },
  {
    id: "house-cleaning",
    name: "Nettoyage Domicile",
    icon: "sparkles",
    description: "Services de nettoyage approfondi à domicile",
    baseCommission: 15,
  },
  {
    id: "painter",
    name: "Peintre",
    icon: "paintbrush",
    description: "Peinture intérieure et extérieure",
    baseCommission: 20,
  },
  {
    id: "electrician",
    name: "Électricien",
    icon: "zap",
    description: "Réparations et installations électriques",
    baseCommission: 18,
  },
  {
    id: "plumber",
    name: "Plombier",
    icon: "droplet",
    description: "Réparations et installations de plomberie",
    baseCommission: 17,
  },
  {
    id: "mason",
    name: "Maçon / Constructeur",
    icon: "hammer",
    description: "Travaux de construction et maçonnerie",
    baseCommission: 20,
  },
  {
    id: "gardener",
    name: "Jardinier",
    icon: "leaf",
    description: "Entretien de jardin et aménagement paysager",
    baseCommission: 15,
  },
  {
    id: "pool-cleaning",
    name: "Nettoyage Piscine",
    icon: "waves",
    description: "Entretien et nettoyage de piscine",
    baseCommission: 18,
  },
];

export const technicians: Technician[] = [
  {
    id: "tech-1",
    name: "Ahmed Ben Ali",
    phone: "+216 12 345 678",
    city: "Tunis",
    serviceCategory: "ac-maintenance",
    yearsOfExperience: 5,
    pricePerService: 80,
    rating: 4.8,
    reviewCount: 24,
    distance: 2.5,
    status: "approved",
    isTopRated: true,
  },
  {
    id: "tech-2",
    name: "Mohamed Trabelsi",
    phone: "+216 98 765 432",
    city: "Tunis",
    serviceCategory: "ac-maintenance",
    yearsOfExperience: 3,
    pricePerService: 65,
    rating: 4.5,
    reviewCount: 18,
    distance: 3.2,
    status: "approved",
  },
  {
    id: "tech-3",
    name: "Fatma Khelifi",
    phone: "+216 11 222 333",
    city: "Ariana",
    serviceCategory: "house-cleaning",
    yearsOfExperience: 7,
    pricePerService: 120,
    rating: 4.9,
    reviewCount: 45,
    distance: 1.8,
    status: "approved",
    isTopRated: true,
  },
  {
    id: "tech-4",
    name: "Sami Jebali",
    phone: "+216 44 555 666",
    city: "Tunis",
    serviceCategory: "house-cleaning",
    yearsOfExperience: 2,
    pricePerService: 90,
    rating: 4.2,
    reviewCount: 12,
    distance: 4.1,
    status: "approved",
  },
  {
    id: "tech-5",
    name: "Karim Mezzi",
    phone: "+216 77 888 999",
    city: "Ben Arous",
    serviceCategory: "electrician",
    yearsOfExperience: 10,
    pricePerService: 150,
    rating: 4.7,
    reviewCount: 38,
    distance: 5.3,
    status: "approved",
    isTopRated: true,
  },
  {
    id: "tech-6",
    name: "Youssef Hammami",
    phone: "+216 22 333 444",
    city: "Tunis",
    serviceCategory: "electrician",
    yearsOfExperience: 4,
    pricePerService: 110,
    rating: 4.4,
    reviewCount: 21,
    distance: 2.9,
    status: "approved",
  },
  {
    id: "tech-7",
    name: "Hassan Bouslama",
    phone: "+216 55 666 777",
    city: "Tunis",
    serviceCategory: "plumber",
    yearsOfExperience: 8,
    pricePerService: 100,
    rating: 4.6,
    reviewCount: 32,
    distance: 3.7,
    status: "approved",
  },
  {
    id: "tech-8",
    name: "Nour Haddad",
    phone: "+216 33 444 555",
    city: "Ariana",
    serviceCategory: "plumber",
    yearsOfExperience: 3,
    pricePerService: 85,
    rating: 4.3,
    reviewCount: 15,
    distance: 2.1,
    status: "approved",
  },
  {
    id: "tech-9",
    name: "Omar Sassi",
    phone: "+216 66 777 888",
    city: "Tunis",
    serviceCategory: "painter",
    yearsOfExperience: 6,
    pricePerService: 200,
    rating: 4.8,
    reviewCount: 28,
    distance: 1.5,
    status: "approved",
    isTopRated: true,
  },
  {
    id: "tech-10",
    name: "Rania Bouazizi",
    phone: "+216 99 000 111",
    city: "Tunis",
    serviceCategory: "gardener",
    yearsOfExperience: 4,
    pricePerService: 70,
    rating: 4.5,
    reviewCount: 19,
    distance: 4.5,
    status: "approved",
  },
  {
    id: "tech-11",
    name: "Tarek Mansouri",
    phone: "+216 88 999 000",
    city: "Ben Arous",
    serviceCategory: "mason",
    yearsOfExperience: 12,
    pricePerService: 180,
    rating: 4.9,
    reviewCount: 52,
    distance: 6.2,
    status: "approved",
    isTopRated: true,
  },
  {
    id: "tech-12",
    name: "Lina Cherif",
    phone: "+216 00 111 222",
    city: "Tunis",
    serviceCategory: "pool-cleaning",
    yearsOfExperience: 5,
    pricePerService: 95,
    rating: 4.6,
    reviewCount: 26,
    distance: 3.0,
    status: "approved",
  },
];

export function getTechniciansByService(serviceId: string): Technician[] {
  return technicians.filter(
    (tech) => tech.serviceCategory === serviceId && tech.status === "approved"
  );
}

export function getServiceById(serviceId: string): Service | undefined {
  return services.find((service) => service.id === serviceId);
}

