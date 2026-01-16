// Datos realistas de Colombia para el mapa interactivo

export interface MapLocation {
  id: string;
  name: string;
  type: 'academy' | 'court' | 'trainer' | 'route' | 'event';
  sport: string;
  lat: number;
  lng: number;
  city: string;
  description: string;
  rating?: number;
  address?: string;
  phone?: string;
  price?: string;
  image?: string;
  // Campos específicos para eventos
  eventDate?: string;
  eventTime?: string;
  spots?: number;
  spotsAvailable?: number;
  eventType?: 'torneo' | 'festival' | 'showcase' | 'clase' | 'campeonato';
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

// Ciudades disponibles con sus coordenadas
export const cities = {
  bogota: { name: 'Bogotá', lat: 4.6486, lng: -74.0628, zoom: 12 },
  medellin: { name: 'Medellín', lat: 6.2442, lng: -75.5812, zoom: 12 },
  cali: { name: 'Cali', lat: 3.4372, lng: -76.5225, zoom: 12 },
  barranquilla: { name: 'Barranquilla', lat: 10.9685, lng: -74.7813, zoom: 12 },
  bucaramanga: { name: 'Bucaramanga', lat: 7.1254, lng: -73.1198, zoom: 12 },
  cartagena: { name: 'Cartagena', lat: 10.3910, lng: -75.4794, zoom: 12 },
};

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
    city: 'Bogotá',
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
    city: 'Bogotá',
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
    city: 'Bogotá',
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
    city: 'Bogotá',
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
    city: 'Medellín',
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
    city: 'Medellín',
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
    city: 'Cali',
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
    city: 'Cali',
    description: 'Academia de salsa y baile fitness',
    rating: 4.9,
    address: 'Granada, Cali',
    phone: '+57 319 012 3456',
    price: 'Desde $120.000/mes'
  },
  // Barranquilla
  {
    id: 'acad-9',
    name: 'Junior FC Escuela de Fútbol',
    type: 'academy',
    sport: 'Fútbol',
    lat: 10.9639,
    lng: -74.7964,
    city: 'Barranquilla',
    description: 'Escuela oficial del Junior de Barranquilla',
    rating: 4.8,
    address: 'Estadio Metropolitano Roberto Meléndez',
    phone: '+57 305 111 2233',
    price: 'Desde $170.000/mes'
  },
  {
    id: 'acad-10',
    name: 'Academia de Béisbol Caribe',
    type: 'academy',
    sport: 'Béisbol',
    lat: 10.9756,
    lng: -74.7889,
    city: 'Barranquilla',
    description: 'Formación profesional en béisbol desde los 6 años',
    rating: 4.7,
    address: 'Estadio Édgar Rentería',
    phone: '+57 301 222 3344',
    price: 'Desde $140.000/mes'
  },
  {
    id: 'acad-11',
    name: 'Escuela de Voleibol Costa Atlántica',
    type: 'academy',
    sport: 'Voleibol',
    lat: 10.9812,
    lng: -74.8012,
    city: 'Barranquilla',
    description: 'Centro de entrenamiento de voleibol de playa y sala',
    rating: 4.6,
    address: 'Coliseo Humberto Perea',
    phone: '+57 302 333 4455',
    price: 'Desde $130.000/mes'
  },
  // Bucaramanga
  {
    id: 'acad-12',
    name: 'Atlético Bucaramanga Escuela',
    type: 'academy',
    sport: 'Fútbol',
    lat: 7.1192,
    lng: -73.1228,
    city: 'Bucaramanga',
    description: 'Academia oficial del club Atlético Bucaramanga',
    rating: 4.7,
    address: 'Estadio Alfonso López',
    phone: '+57 315 444 5566',
    price: 'Desde $150.000/mes'
  },
  {
    id: 'acad-13',
    name: 'Academia de Patinaje Santander',
    type: 'academy',
    sport: 'Patinaje',
    lat: 7.1156,
    lng: -73.1089,
    city: 'Bucaramanga',
    description: 'Centro de alto rendimiento en patinaje de velocidad',
    rating: 4.9,
    address: 'Parque del Agua',
    phone: '+57 316 555 6677',
    price: 'Desde $160.000/mes'
  },
  {
    id: 'acad-14',
    name: 'Club de Tenis Mesa Santander',
    type: 'academy',
    sport: 'Tenis de Mesa',
    lat: 7.1298,
    lng: -73.1156,
    city: 'Bucaramanga',
    description: 'Formación deportiva y competitiva en tenis de mesa',
    rating: 4.5,
    address: 'Coliseo Vicente Díaz Romero',
    phone: '+57 317 666 7788',
    price: 'Desde $100.000/mes'
  },
  // Cartagena
  {
    id: 'acad-15',
    name: 'Real Cartagena FC Academy',
    type: 'academy',
    sport: 'Fútbol',
    lat: 10.4195,
    lng: -75.5329,
    city: 'Cartagena',
    description: 'Escuela de formación del Real Cartagena',
    rating: 4.6,
    address: 'Estadio Jaime Morón León',
    phone: '+57 300 777 8899',
    price: 'Desde $140.000/mes'
  },
  {
    id: 'acad-16',
    name: 'Academia de Boxeo Cartagena',
    type: 'academy',
    sport: 'Boxeo',
    lat: 10.3978,
    lng: -75.4912,
    city: 'Cartagena',
    description: 'Cuna de campeones mundiales de boxeo',
    rating: 4.9,
    address: 'Barrio Getsemaní',
    phone: '+57 301 888 9900',
    price: 'Desde $100.000/mes'
  },
  {
    id: 'acad-17',
    name: 'Escuela Náutica del Caribe',
    type: 'academy',
    sport: 'Vela/Kayak',
    lat: 10.4023,
    lng: -75.5512,
    city: 'Cartagena',
    description: 'Deportes acuáticos en la bahía de Cartagena',
    rating: 4.8,
    address: 'Club Náutico de Cartagena',
    phone: '+57 302 999 0011',
    price: 'Desde $250.000/mes'
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
    city: 'Bogotá',
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
    city: 'Bogotá',
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
    city: 'Bogotá',
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
    city: 'Medellín',
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
    city: 'Cali',
    description: 'Complejo acuático de los Juegos Panamericanos',
    rating: 4.8,
    address: 'Calle 9 #34-01',
    phone: '+57 317 567 8901',
    price: '$15.000/ingreso'
  },
  // Barranquilla
  {
    id: 'court-6',
    name: 'Canchas Sintéticas La Castellana',
    type: 'court',
    sport: 'Fútbol',
    lat: 10.9823,
    lng: -74.8134,
    city: 'Barranquilla',
    description: 'Complejo con 6 canchas sintéticas profesionales',
    rating: 4.7,
    address: 'La Castellana, Barranquilla',
    phone: '+57 300 111 2222',
    price: '$110.000/hora'
  },
  {
    id: 'court-7',
    name: 'Centro Acuático Metropolitano',
    type: 'court',
    sport: 'Natación',
    lat: 10.9567,
    lng: -74.7923,
    city: 'Barranquilla',
    description: 'Piscina olímpica de los Juegos Centroamericanos',
    rating: 4.8,
    address: 'Villa Olímpica',
    phone: '+57 301 222 3333',
    price: '$20.000/ingreso'
  },
  // Bucaramanga
  {
    id: 'court-8',
    name: 'Canchas del Parque del Agua',
    type: 'court',
    sport: 'Múltiples',
    lat: 7.1134,
    lng: -73.1078,
    city: 'Bucaramanga',
    description: 'Canchas múltiples en el mejor parque de la ciudad',
    rating: 4.6,
    address: 'Parque del Agua',
    phone: '+57 315 333 4444',
    price: '$90.000/hora'
  },
  // Cartagena
  {
    id: 'court-9',
    name: 'Centro Deportivo Mamonal',
    type: 'court',
    sport: 'Múltiples',
    lat: 10.3567,
    lng: -75.5123,
    city: 'Cartagena',
    description: 'Complejo deportivo con canchas de fútbol, tenis y básquet',
    rating: 4.5,
    address: 'Zona Industrial Mamonal',
    phone: '+57 300 444 5555',
    price: '$100.000/hora'
  },
  {
    id: 'court-10',
    name: 'Club de Playa Bocagrande',
    type: 'court',
    sport: 'Voleibol Playa',
    lat: 10.3989,
    lng: -75.5567,
    city: 'Cartagena',
    description: 'Canchas de voleibol de playa frente al mar',
    rating: 4.9,
    address: 'Bocagrande, Cartagena',
    phone: '+57 301 555 6666',
    price: '$60.000/hora'
  }
];

// Entrenadores independientes
export const trainers: MapLocation[] = [
  // Bogotá
  {
    id: 'trainer-1',
    name: 'Carlos Mendoza - Personal Trainer',
    type: 'trainer',
    sport: 'Fitness',
    lat: 4.6723,
    lng: -74.0589,
    city: 'Bogotá',
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
    city: 'Bogotá',
    description: 'Instructora certificada Yoga Alliance 500hrs',
    rating: 4.8,
    address: 'Teusaquillo, Bogotá',
    phone: '+57 301 222 3333',
    price: '$60.000/clase'
  },
  // Medellín
  {
    id: 'trainer-3',
    name: 'Andrés Gómez - Running Coach',
    type: 'trainer',
    sport: 'Running',
    lat: 6.2512,
    lng: -75.5634,
    city: 'Medellín',
    description: 'Coach de maratón con experiencia internacional',
    rating: 4.7,
    address: 'El Poblado, Medellín',
    phone: '+57 302 333 4444',
    price: '$100.000/mes'
  },
  // Cali
  {
    id: 'trainer-4',
    name: 'Laura Vargas - CrossFit',
    type: 'trainer',
    sport: 'CrossFit',
    lat: 3.4298,
    lng: -76.5412,
    city: 'Cali',
    description: 'Coach Level 2 CrossFit certificada',
    rating: 4.6,
    address: 'Ciudad Jardín, Cali',
    phone: '+57 303 444 5555',
    price: '$150.000/mes'
  },
  // Barranquilla
  {
    id: 'trainer-5',
    name: 'Roberto Herrera - Béisbol',
    type: 'trainer',
    sport: 'Béisbol',
    lat: 10.9712,
    lng: -74.7845,
    city: 'Barranquilla',
    description: 'Ex jugador profesional, especialista en bateo y pitcheo',
    rating: 4.8,
    address: 'Norte Centro Histórico',
    phone: '+57 304 555 6666',
    price: '$90.000/sesión'
  },
  {
    id: 'trainer-6',
    name: 'Ana María Polo - Natación',
    type: 'trainer',
    sport: 'Natación',
    lat: 10.9634,
    lng: -74.7912,
    city: 'Barranquilla',
    description: 'Ex nadadora olímpica, técnica de natación para todas las edades',
    rating: 4.9,
    address: 'Riomar, Barranquilla',
    phone: '+57 305 666 7777',
    price: '$70.000/clase'
  },
  // Bucaramanga
  {
    id: 'trainer-7',
    name: 'Diego Patiño - Patinaje',
    type: 'trainer',
    sport: 'Patinaje',
    lat: 7.1178,
    lng: -73.1112,
    city: 'Bucaramanga',
    description: 'Campeón nacional de patinaje, técnicas avanzadas',
    rating: 4.9,
    address: 'Cabecera del Llano',
    phone: '+57 316 777 8888',
    price: '$85.000/sesión'
  },
  // Cartagena
  {
    id: 'trainer-8',
    name: 'Miguel Ángel Barrios - Boxeo',
    type: 'trainer',
    sport: 'Boxeo',
    lat: 10.4012,
    lng: -75.4978,
    city: 'Cartagena',
    description: 'Ex campeón nacional, entrenador de boxeo olímpico',
    rating: 4.9,
    address: 'Getsemaní, Cartagena',
    phone: '+57 300 888 9999',
    price: '$70.000/sesión'
  },
  {
    id: 'trainer-9',
    name: 'Sandra Milena - Fitness Playa',
    type: 'trainer',
    sport: 'Fitness',
    lat: 10.3945,
    lng: -75.5534,
    city: 'Cartagena',
    description: 'Entrenamientos funcionales en la playa',
    rating: 4.7,
    address: 'Bocagrande, Cartagena',
    phone: '+57 301 999 0000',
    price: '$60.000/sesión'
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
  },
  // Barranquilla
  {
    id: 'route-8',
    name: 'Running Malecón del Río',
    type: 'running',
    distance: '8 km',
    difficulty: 'easy',
    city: 'Barranquilla',
    coordinates: [
      [10.9756, -74.7812],
      [10.9712, -74.7856],
      [10.9667, -74.7901],
      [10.9623, -74.7945],
      [10.9578, -74.7989]
    ],
    description: 'Ruta panorámica a lo largo del río Magdalena',
    elevation: '15m desnivel'
  },
  {
    id: 'route-9',
    name: 'Cicloruta Vía 40',
    type: 'cycling',
    distance: '12 km',
    difficulty: 'easy',
    city: 'Barranquilla',
    coordinates: [
      [10.9934, -74.7756],
      [10.9867, -74.7812],
      [10.9789, -74.7867],
      [10.9712, -74.7923],
      [10.9634, -74.7978]
    ],
    description: 'Ciclovía principal de la ciudad',
    elevation: '20m desnivel'
  },
  // Bucaramanga
  {
    id: 'route-10',
    name: 'Senderismo Mesa de los Santos',
    type: 'hiking',
    distance: '10 km',
    difficulty: 'hard',
    city: 'Bucaramanga',
    coordinates: [
      [6.8923, -73.0945],
      [6.8867, -73.0889],
      [6.8812, -73.0834],
      [6.8756, -73.0778],
      [6.8701, -73.0723]
    ],
    description: 'Sendero con vistas panorámicas del cañón del Chicamocha',
    elevation: '600m desnivel'
  },
  {
    id: 'route-11',
    name: 'Running Parque del Agua',
    type: 'running',
    distance: '5 km',
    difficulty: 'easy',
    city: 'Bucaramanga',
    coordinates: [
      [7.1134, -73.1078],
      [7.1167, -73.1045],
      [7.1189, -73.1012],
      [7.1156, -73.0989],
      [7.1134, -73.1078]
    ],
    description: 'Circuito ideal para correr en familia',
    elevation: '25m desnivel'
  },
  // Cartagena
  {
    id: 'route-12',
    name: 'Running Murallas Históricas',
    type: 'running',
    distance: '7 km',
    difficulty: 'easy',
    city: 'Cartagena',
    coordinates: [
      [10.4234, -75.5478],
      [10.4267, -75.5423],
      [10.4212, -75.5367],
      [10.4156, -75.5312],
      [10.4189, -75.5389]
    ],
    description: 'Ruta histórica por las murallas de la ciudad amurallada',
    elevation: '10m desnivel'
  },
  {
    id: 'route-13',
    name: 'Cicloruta Bocagrande - La Boquilla',
    type: 'cycling',
    distance: '15 km',
    difficulty: 'easy',
    city: 'Cartagena',
    coordinates: [
      [10.3989, -75.5567],
      [10.4123, -75.5423],
      [10.4256, -75.5289],
      [10.4389, -75.5145],
      [10.4523, -75.5012]
    ],
    description: 'Ruta costera con vistas al mar Caribe',
    elevation: '5m desnivel'
  }
];

// Eventos deportivos demo
export const events: MapLocation[] = [
  // Bogotá
  {
    id: 'event-1',
    name: 'Copa Cheer Colombia 2026',
    type: 'event',
    sport: 'Cheerleading',
    lat: 4.6576,
    lng: -74.0934,
    city: 'Bogotá',
    description: 'Festival nacional de cheerleading con más de 50 equipos participantes',
    address: 'Coliseo El Salitre, Parque Simón Bolívar',
    phone: '+57 310 555 1234',
    price: '$45.000 inscripción',
    eventDate: '2026-02-15',
    eventTime: '08:00',
    spots: 500,
    spotsAvailable: 127,
    eventType: 'festival'
  },
  {
    id: 'event-2',
    name: 'Torneo Interclubes Natación',
    type: 'event',
    sport: 'Natación',
    lat: 4.6097,
    lng: -74.0657,
    city: 'Bogotá',
    description: 'Competencia de natación para categorías infantil y juvenil',
    address: 'Piscina Olímpica Centro Internacional',
    phone: '+57 318 901 2345',
    price: '$35.000 por nadador',
    eventDate: '2026-02-22',
    eventTime: '07:00',
    spots: 200,
    spotsAvailable: 45,
    eventType: 'torneo'
  },
  {
    id: 'event-3',
    name: 'Showcase Gimnasia Artística',
    type: 'event',
    sport: 'Gimnasia',
    lat: 4.6865,
    lng: -74.0468,
    city: 'Bogotá',
    description: 'Exhibición de fin de año con presentaciones de todos los niveles',
    address: 'Club El Nogal, Usaquén',
    phone: '+57 315 678 9012',
    price: 'Entrada libre',
    eventDate: '2026-03-01',
    eventTime: '15:00',
    spots: 300,
    spotsAvailable: 189,
    eventType: 'showcase'
  },
  // Medellín
  {
    id: 'event-4',
    name: 'Festival de Baile Urbano',
    type: 'event',
    sport: 'Baile',
    lat: 6.2442,
    lng: -75.5812,
    city: 'Medellín',
    description: 'Competencia de hip-hop, breakdance y danzas urbanas',
    address: 'Unidad Deportiva Atanasio Girardot',
    phone: '+57 311 234 5678',
    price: '$30.000 por grupo',
    eventDate: '2026-02-28',
    eventTime: '10:00',
    spots: 150,
    spotsAvailable: 67,
    eventType: 'campeonato'
  },
  {
    id: 'event-5',
    name: 'Copa Fútbol Base Antioquia',
    type: 'event',
    sport: 'Fútbol',
    lat: 6.2567,
    lng: -75.5905,
    city: 'Medellín',
    description: 'Torneo regional de fútbol categorías sub-10 a sub-15',
    address: 'Estadio Atanasio Girardot',
    phone: '+57 304 567 8901',
    price: '$150.000 por equipo',
    eventDate: '2026-03-08',
    eventTime: '08:00',
    spots: 32,
    spotsAvailable: 8,
    eventType: 'torneo'
  },
  // Cali
  {
    id: 'event-6',
    name: 'Mundial de Salsa Deportiva',
    type: 'event',
    sport: 'Salsa',
    lat: 3.4372,
    lng: -76.5225,
    city: 'Cali',
    description: 'Competencia internacional de salsa con parejas de 15 países',
    address: 'Teatro Jorge Isaacs',
    phone: '+57 319 012 3456',
    price: '$80.000 inscripción',
    eventDate: '2026-03-15',
    eventTime: '18:00',
    spots: 100,
    spotsAvailable: 23,
    eventType: 'campeonato'
  },
  {
    id: 'event-7',
    name: 'Clase Abierta Patinaje Artístico',
    type: 'event',
    sport: 'Patinaje',
    lat: 3.4186,
    lng: -76.5227,
    city: 'Cali',
    description: 'Clase gratuita para principiantes con patines incluidos',
    address: 'Patinodromo Panamericano',
    phone: '+57 316 789 0123',
    price: 'Gratis',
    eventDate: '2026-02-08',
    eventTime: '09:00',
    spots: 50,
    spotsAvailable: 12,
    eventType: 'clase'
  },
  // Barranquilla
  {
    id: 'event-8',
    name: 'Torneo Voleibol Playa Caribe',
    type: 'event',
    sport: 'Voleibol',
    lat: 10.9812,
    lng: -74.8012,
    city: 'Barranquilla',
    description: 'Torneo mixto de voleibol de playa categoría abierta',
    address: 'Playa Puerto Colombia',
    phone: '+57 302 333 4455',
    price: '$60.000 por pareja',
    eventDate: '2026-02-20',
    eventTime: '07:00',
    spots: 64,
    spotsAvailable: 18,
    eventType: 'torneo'
  },
  {
    id: 'event-9',
    name: 'Festival de Artes Marciales',
    type: 'event',
    sport: 'Artes Marciales',
    lat: 10.9639,
    lng: -74.7964,
    city: 'Barranquilla',
    description: 'Exhibición y competencia de taekwondo, karate y judo',
    address: 'Coliseo Cubierto Humberto Perea',
    phone: '+57 301 222 3344',
    price: '$25.000 inscripción',
    eventDate: '2026-03-05',
    eventTime: '09:00',
    spots: 200,
    spotsAvailable: 89,
    eventType: 'festival'
  },
  // Bucaramanga
  {
    id: 'event-10',
    name: 'Campeonato Patinaje Velocidad',
    type: 'event',
    sport: 'Patinaje',
    lat: 7.1156,
    lng: -73.1089,
    city: 'Bucaramanga',
    description: 'Competencia departamental de patinaje de velocidad',
    address: 'Patinodromo Parque del Agua',
    phone: '+57 316 555 6677',
    price: '$40.000 por patinador',
    eventDate: '2026-02-25',
    eventTime: '08:00',
    spots: 120,
    spotsAvailable: 34,
    eventType: 'campeonato'
  },
  // Cartagena
  {
    id: 'event-11',
    name: 'Regata Náutica del Caribe',
    type: 'event',
    sport: 'Vela',
    lat: 10.4023,
    lng: -75.5512,
    city: 'Cartagena',
    description: 'Regata internacional con embarcaciones de vela ligera',
    address: 'Club Náutico de Cartagena',
    phone: '+57 302 999 0011',
    price: '$200.000 por embarcación',
    eventDate: '2026-03-20',
    eventTime: '06:00',
    spots: 40,
    spotsAvailable: 15,
    eventType: 'torneo'
  },
  {
    id: 'event-12',
    name: 'Showcase Boxeo Juvenil',
    type: 'event',
    sport: 'Boxeo',
    lat: 10.3978,
    lng: -75.4912,
    city: 'Cartagena',
    description: 'Velada de boxeo amateur con promesas del deporte',
    address: 'Coliseo de Combate, Getsemaní',
    phone: '+57 301 888 9900',
    price: '$20.000 entrada',
    eventDate: '2026-02-14',
    eventTime: '19:00',
    spots: 400,
    spotsAvailable: 156,
    eventType: 'showcase'
  }
];

// Combinar todos los puntos del mapa
export const allMapLocations: MapLocation[] = [
  ...academies,
  ...courts,
  ...trainers,
  ...events
];

// Estadísticas para mostrar
export const mapStats = {
  academies: academies.length,
  courts: courts.length,
  trainers: trainers.length,
  routes: sportRoutes.length,
  events: events.length,
  cities: Object.keys(cities).length
};

// Centro del mapa (Colombia vista general)
export const defaultCenter: [number, number] = [6.2442, -74.5];
export const defaultZoom = 6;

// Función para calcular distancia entre dos puntos (fórmula de Haversine)
export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Función para obtener ubicaciones cercanas
export function getNearbyLocations(userLat: number, userLng: number, maxDistance: number = 50): MapLocation[] {
  return allMapLocations
    .map(loc => ({
      ...loc,
      distance: calculateDistance(userLat, userLng, loc.lat, loc.lng)
    }))
    .filter(loc => loc.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);
}

// Función para encontrar la ciudad más cercana
export function findNearestCity(userLat: number, userLng: number): keyof typeof cities {
  let nearestCity: keyof typeof cities = 'bogota';
  let minDistance = Infinity;

  for (const [key, city] of Object.entries(cities)) {
    const distance = calculateDistance(userLat, userLng, city.lat, city.lng);
    if (distance < minDistance) {
      minDistance = distance;
      nearestCity = key as keyof typeof cities;
    }
  }

  return nearestCity;
}
