// Datos realistas de Colombia para el mapa interactivo

export interface MapLocation {
  id: string;
  name: string;
  type: 'academy' | 'court' | 'trainer' | 'route';
  sport: string;
  lat: number;
  lng: number;
  description: string;
  rating?: number;
  address?: string;
  phone?: string;
  price?: string;
  image?: string;
}

export interface SportRoute {
  id: string;
  name: string;
  type: 'running' | 'cycling' | 'hiking';
  distance: string;
  difficulty: 'easy' | 'medium' | 'hard';
  city: string;
  coordinates: [number, number][];
  description: string;
  elevation?: string;
}

// Academias y escuelas deportivas reales
export const academies: MapLocation[] = [
  // Bogotá
  {
    id: 'acad-1',
    name: 'Academia Elite FC',
    type: 'academy',
    sport: 'Fútbol',
    lat: 4.6865,
    lng: -74.0468,
    description: 'Academia de alto rendimiento con metodología europea',
    rating: 4.8,
    address: 'Calle 127 #15-20, Usaquén',
    phone: '+57 310 234 5678',
    price: 'Desde $150.000/mes'
  },
  {
    id: 'acad-2',
    name: 'Club Deportivo Los Millonarios',
    type: 'academy',
    sport: 'Fútbol',
    lat: 4.6241,
    lng: -74.0817,
    description: 'Escuela oficial del club profesional',
    rating: 4.9,
    address: 'Av. 68 #49-10, Estadio El Campín',
    phone: '+57 312 456 7890',
    price: 'Desde $200.000/mes'
  },
  {
    id: 'acad-3',
    name: 'Tennis Pro Academy',
    type: 'academy',
    sport: 'Tenis',
    lat: 4.6680,
    lng: -74.0544,
    description: 'Formación integral en tenis desde los 5 años',
    rating: 4.7,
    address: 'Club El Nogal, Calle 78',
    phone: '+57 315 678 9012',
    price: 'Desde $280.000/mes'
  },
  {
    id: 'acad-4',
    name: 'Natación Olímpica Bogotá',
    type: 'academy',
    sport: 'Natación',
    lat: 4.6097,
    lng: -74.0657,
    description: 'Centro acuático con piscina olímpica',
    rating: 4.6,
    address: 'Centro Internacional, Calle 26',
    phone: '+57 318 901 2345',
    price: 'Desde $180.000/mes'
  },
  // Medellín
  {
    id: 'acad-5',
    name: 'Atlético Nacional Escuela',
    type: 'academy',
    sport: 'Fútbol',
    lat: 6.2567,
    lng: -75.5905,
    description: 'Semillero del club campeón de América',
    rating: 4.9,
    address: 'Estadio Atanasio Girardot',
    phone: '+57 304 567 8901',
    price: 'Desde $180.000/mes'
  },
  {
    id: 'acad-6',
    name: 'Gimnasia Rítmica Antioquia',
    type: 'academy',
    sport: 'Gimnasia',
    lat: 6.2442,
    lng: -75.5812,
    description: 'Centro de alto rendimiento en gimnasia',
    rating: 4.8,
    address: 'Unidad Deportiva Atanasio Girardot',
    phone: '+57 311 234 5678',
    price: 'Desde $220.000/mes'
  },
  // Cali
  {
    id: 'acad-7',
    name: 'Deportivo Cali Academy',
    type: 'academy',
    sport: 'Fútbol',
    lat: 3.4186,
    lng: -76.5227,
    description: 'Cantera del club caleño',
    rating: 4.7,
    address: 'Sede Deportiva Pance',
    phone: '+57 316 789 0123',
    price: 'Desde $160.000/mes'
  },
  {
    id: 'acad-8',
    name: 'Salsa Fit Dance Studio',
    type: 'academy',
    sport: 'Baile',
    lat: 3.4372,
    lng: -76.5225,
    description: 'Academia de salsa y baile fitness',
    rating: 4.9,
    address: 'Granada, Cali',
    phone: '+57 319 012 3456',
    price: 'Desde $120.000/mes'
  }
];

// Canchas y centros deportivos
export const courts: MapLocation[] = [
  // Bogotá
  {
    id: 'court-1',
    name: 'Canchas Sintéticas Norte',
    type: 'court',
    sport: 'Fútbol',
    lat: 4.7110,
    lng: -74.0721,
    description: 'Complejo de 4 canchas sintéticas con iluminación LED',
    rating: 4.5,
    address: 'Calle 170 #45-20, Suba',
    phone: '+57 320 123 4567',
    price: '$120.000/hora'
  },
  {
    id: 'court-2',
    name: 'Centro de Raqueta Bogotá',
    type: 'court',
    sport: 'Tenis/Padel',
    lat: 4.6762,
    lng: -74.0340,
    description: '6 canchas de tenis y 4 de pádel',
    rating: 4.7,
    address: 'Carrera 7 #116-50',
    phone: '+57 321 234 5678',
    price: '$80.000/hora'
  },
  {
    id: 'court-3',
    name: 'Polideportivo El Salitre',
    type: 'court',
    sport: 'Múltiples',
    lat: 4.6576,
    lng: -74.0934,
    description: 'Complejo deportivo público con múltiples disciplinas',
    rating: 4.3,
    address: 'Parque Simón Bolívar',
    phone: '+57 322 345 6789',
    price: '$50.000/hora'
  },
  // Medellín
  {
    id: 'court-4',
    name: 'Canchas Laureles',
    type: 'court',
    sport: 'Fútbol',
    lat: 6.2456,
    lng: -75.5867,
    description: 'Canchas sintéticas de última generación',
    rating: 4.6,
    address: 'Laureles, Medellín',
    phone: '+57 305 456 7890',
    price: '$100.000/hora'
  },
  // Cali
  {
    id: 'court-5',
    name: 'Piscinas Panamericanas',
    type: 'court',
    sport: 'Natación',
    lat: 3.4123,
    lng: -76.5389,
    description: 'Complejo acuático de los Juegos Panamericanos',
    rating: 4.8,
    address: 'Calle 9 #34-01',
    phone: '+57 317 567 8901',
    price: '$15.000/ingreso'
  }
];

// Entrenadores independientes
export const trainers: MapLocation[] = [
  {
    id: 'trainer-1',
    name: 'Carlos Mendoza - Personal Trainer',
    type: 'trainer',
    sport: 'Fitness',
    lat: 4.6723,
    lng: -74.0589,
    description: 'Especialista en transformación corporal y nutrición deportiva',
    rating: 4.9,
    address: 'Chapinero, Bogotá',
    phone: '+57 300 111 2222',
    price: '$80.000/sesión'
  },
  {
    id: 'trainer-2',
    name: 'María Fernanda López - Yoga',
    type: 'trainer',
    sport: 'Yoga',
    lat: 4.6489,
    lng: -74.0628,
    description: 'Instructora certificada Yoga Alliance 500hrs',
    rating: 4.8,
    address: 'Teusaquillo, Bogotá',
    phone: '+57 301 222 3333',
    price: '$60.000/clase'
  },
  {
    id: 'trainer-3',
    name: 'Andrés Gómez - Running Coach',
    type: 'trainer',
    sport: 'Running',
    lat: 6.2512,
    lng: -75.5634,
    description: 'Coach de maratón con experiencia internacional',
    rating: 4.7,
    address: 'El Poblado, Medellín',
    phone: '+57 302 333 4444',
    price: '$100.000/mes'
  },
  {
    id: 'trainer-4',
    name: 'Laura Vargas - CrossFit',
    type: 'trainer',
    sport: 'CrossFit',
    lat: 3.4298,
    lng: -76.5412,
    description: 'Coach Level 2 CrossFit certificada',
    rating: 4.6,
    address: 'Ciudad Jardín, Cali',
    phone: '+57 303 444 5555',
    price: '$150.000/mes'
  }
];

// Rutas deportivas
export const sportRoutes: SportRoute[] = [
  // Bogotá
  {
    id: 'route-1',
    name: 'Cicloruta Usaquén - Centro',
    type: 'cycling',
    distance: '15 km',
    difficulty: 'medium',
    city: 'Bogotá',
    coordinates: [
      [4.6959, -74.0318],
      [4.6865, -74.0468],
      [4.6723, -74.0589],
      [4.6489, -74.0628],
      [4.6241, -74.0817]
    ],
    description: 'Ruta principal de ciclovía que conecta norte y centro',
    elevation: '150m desnivel'
  },
  {
    id: 'route-2',
    name: 'Running Parque Simón Bolívar',
    type: 'running',
    distance: '10 km',
    difficulty: 'easy',
    city: 'Bogotá',
    coordinates: [
      [4.6576, -74.0934],
      [4.6612, -74.0878],
      [4.6598, -74.0812],
      [4.6556, -74.0867],
      [4.6576, -74.0934]
    ],
    description: 'Circuito clásico del parque metropolitano',
    elevation: '30m desnivel'
  },
  {
    id: 'route-3',
    name: 'Senderismo Cerros Orientales',
    type: 'hiking',
    distance: '8 km',
    difficulty: 'hard',
    city: 'Bogotá',
    coordinates: [
      [4.6052, -74.0576],
      [4.6123, -74.0512],
      [4.6189, -74.0478],
      [4.6234, -74.0423],
      [4.6278, -74.0389]
    ],
    description: 'Ascenso a Monserrate por sendero ecológico',
    elevation: '500m desnivel'
  },
  // Medellín
  {
    id: 'route-4',
    name: 'Cicloruta Río Medellín',
    type: 'cycling',
    distance: '20 km',
    difficulty: 'easy',
    city: 'Medellín',
    coordinates: [
      [6.2912, -75.5723],
      [6.2712, -75.5812],
      [6.2512, -75.5856],
      [6.2312, -75.5923],
      [6.2112, -75.5989]
    ],
    description: 'Ruta plana siguiendo el río Medellín',
    elevation: '50m desnivel'
  },
  {
    id: 'route-5',
    name: 'Running Parque Arví',
    type: 'running',
    distance: '12 km',
    difficulty: 'medium',
    city: 'Medellín',
    coordinates: [
      [6.2834, -75.5089],
      [6.2789, -75.5012],
      [6.2756, -75.4956],
      [6.2712, -75.4923],
      [6.2678, -75.4878]
    ],
    description: 'Trail running en el parque ecológico Arví',
    elevation: '200m desnivel'
  },
  // Cali
  {
    id: 'route-6',
    name: 'Cicloruta Río Pance',
    type: 'cycling',
    distance: '18 km',
    difficulty: 'medium',
    city: 'Cali',
    coordinates: [
      [3.3912, -76.5612],
      [3.3856, -76.5534],
      [3.3789, -76.5478],
      [3.3712, -76.5412],
      [3.3656, -76.5356]
    ],
    description: 'Ruta escénica siguiendo el río Pance',
    elevation: '180m desnivel'
  },
  {
    id: 'route-7',
    name: 'Senderismo Cristo Rey',
    type: 'hiking',
    distance: '6 km',
    difficulty: 'medium',
    city: 'Cali',
    coordinates: [
      [3.4456, -76.5678],
      [3.4512, -76.5612],
      [3.4567, -76.5556],
      [3.4623, -76.5489]
    ],
    description: 'Ascenso al monumento Cristo Rey',
    elevation: '350m desnivel'
  }
];

// Combinar todos los puntos del mapa
export const allMapLocations: MapLocation[] = [
  ...academies,
  ...courts,
  ...trainers
];

// Estadísticas para mostrar
export const mapStats = {
  academies: academies.length,
  courts: courts.length,
  trainers: trainers.length,
  routes: sportRoutes.length,
  cities: 3
};

// Centro del mapa (Bogotá)
export const defaultCenter: [number, number] = [4.6486, -74.0628];
export const defaultZoom = 12;
