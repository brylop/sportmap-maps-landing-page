import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Search, MapPin, Route, School, Dumbbell, User, Filter, X, Navigation, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom icons for different types
const createCustomIcon = (color: string, emoji: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background: ${color}; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3); font-size: 16px;">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  });
};

const icons = {
  academia: createCustomIcon('#10B981', '🏫'),
  cancha: createCustomIcon('#3B82F6', '⚽'),
  entrenador: createCustomIcon('#F59E0B', '👨‍🏫'),
  gimnasio: createCustomIcon('#8B5CF6', '🏋️'),
  ruta: createCustomIcon('#EF4444', '🏃'),
};

// Demo data - Academias y lugares en Bogotá
const locations = [
  {
    id: 1,
    type: 'academia',
    name: 'Academia Millonarios FC',
    address: 'Av. Calle 63 #59A-06, Bogotá',
    coords: [4.6533, -74.0836] as [number, number],
    rating: 4.8,
    students: 320,
    sports: ['Fútbol'],
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=200&fit=crop',
    price: '$180.000/mes'
  },
  {
    id: 2,
    type: 'academia',
    name: 'Club Deportivo Los Andes',
    address: 'Cra 7 #127-48, Usaquén',
    coords: [4.7044, -74.0311] as [number, number],
    rating: 4.6,
    students: 180,
    sports: ['Fútbol', 'Tenis'],
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop',
    price: '$220.000/mes'
  },
  {
    id: 3,
    type: 'academia',
    name: 'Escuela de Ciclismo Bogotá',
    address: 'Parque Simón Bolívar',
    coords: [4.6584, -74.0937] as [number, number],
    rating: 4.9,
    students: 95,
    sports: ['Ciclismo'],
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=300&h=200&fit=crop',
    price: '$150.000/mes'
  },
  {
    id: 4,
    type: 'cancha',
    name: 'Canchas Sintéticas El Campín',
    address: 'Calle 57 #30-00, Teusaquillo',
    coords: [4.6476, -74.0772] as [number, number],
    rating: 4.5,
    price: '$120.000/hora',
    amenities: ['Iluminación', 'Vestiarios', 'Parqueadero']
  },
  {
    id: 5,
    type: 'cancha',
    name: 'Centro Deportivo Salitre',
    address: 'Av. 68 #49A-47',
    coords: [4.6612, -74.1012] as [number, number],
    rating: 4.7,
    price: '$150.000/hora',
    amenities: ['Canchas múltiples', 'Gimnasio', 'Cafetería']
  },
  {
    id: 6,
    type: 'entrenador',
    name: 'Carlos Rodríguez - Running Coach',
    address: 'Zona Chapinero',
    coords: [4.6451, -74.0627] as [number, number],
    rating: 4.9,
    specialty: 'Maratón y Trail Running',
    experience: '12 años',
    price: '$80.000/sesión'
  },
  {
    id: 7,
    type: 'entrenador',
    name: 'María López - Personal Trainer',
    address: 'Zona Norte',
    coords: [4.6952, -74.0412] as [number, number],
    rating: 4.8,
    specialty: 'Entrenamiento funcional',
    experience: '8 años',
    price: '$90.000/sesión'
  },
  {
    id: 8,
    type: 'gimnasio',
    name: 'Smart Fit Unicentro',
    address: 'Cra 15 #124-30',
    coords: [4.7012, -74.0423] as [number, number],
    rating: 4.4,
    price: '$89.900/mes',
    amenities: ['24 horas', 'Clases grupales', 'Spinning']
  },
  {
    id: 9,
    type: 'academia',
    name: 'Club de Natación Compensar',
    address: 'Av. 68 #49A-47',
    coords: [4.6655, -74.1045] as [number, number],
    rating: 4.7,
    students: 450,
    sports: ['Natación'],
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=200&fit=crop',
    price: '$200.000/mes'
  },
  {
    id: 10,
    type: 'academia',
    name: 'Academia de Tenis La Sabana',
    address: 'Calle 170 #8-45, Toberín',
    coords: [4.7421, -74.0298] as [number, number],
    rating: 4.6,
    students: 120,
    sports: ['Tenis'],
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&h=200&fit=crop',
    price: '$250.000/mes'
  },
];

// Rutas deportivas en Bogotá
const routes = [
  {
    id: 'r1',
    name: 'Cicloruta Parque Simón Bolívar',
    type: 'Ciclismo',
    distance: '8.5 km',
    difficulty: 'Fácil',
    color: '#10B981',
    coords: [
      [4.6584, -74.0937],
      [4.6612, -74.0912],
      [4.6645, -74.0945],
      [4.6672, -74.0978],
      [4.6698, -74.1012],
      [4.6655, -74.1045],
      [4.6612, -74.1012],
      [4.6584, -74.0937],
    ] as [number, number][]
  },
  {
    id: 'r2',
    name: 'Ruta Running Parque 93',
    type: 'Running',
    distance: '5.2 km',
    difficulty: 'Moderado',
    color: '#EF4444',
    coords: [
      [4.6765, -74.0486],
      [4.6789, -74.0512],
      [4.6823, -74.0534],
      [4.6856, -74.0498],
      [4.6834, -74.0456],
      [4.6798, -74.0445],
      [4.6765, -74.0486],
    ] as [number, number][]
  },
  {
    id: 'r3',
    name: 'Sendero Cerros Orientales',
    type: 'Senderismo',
    distance: '12 km',
    difficulty: 'Difícil',
    color: '#F59E0B',
    coords: [
      [4.6012, -74.0534],
      [4.6056, -74.0478],
      [4.6123, -74.0423],
      [4.6189, -74.0389],
      [4.6256, -74.0356],
      [4.6312, -74.0334],
    ] as [number, number][]
  },
  {
    id: 'r4',
    name: 'Ciclovía Dominical - Séptima',
    type: 'Ciclismo',
    distance: '26 km',
    difficulty: 'Moderado',
    color: '#3B82F6',
    coords: [
      [4.5512, -74.0723],
      [4.5789, -74.0678],
      [4.6123, -74.0612],
      [4.6456, -74.0578],
      [4.6789, -74.0512],
      [4.7123, -74.0423],
      [4.7456, -74.0312],
    ] as [number, number][]
  },
];

interface SportMapProps {
  onRegisterClick?: () => void;
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 13, { duration: 1.5 });
  }, [center, map]);
  return null;
}

export function SportMap({ onRegisterClick }: SportMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<typeof routes[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>(['academia', 'cancha', 'entrenador', 'gimnasio']);
  const [showRoutes, setShowRoutes] = useState(true);
  const [mapCenter, setMapCenter] = useState<[number, number]>([4.6533, -74.0836]);

  const filteredLocations = locations.filter(loc => {
    const matchesFilter = activeFilters.includes(loc.type);
    const matchesSearch = searchQuery === '' || 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filters = [
    { id: 'academia', label: 'Academias', icon: School, color: 'bg-emerald-500' },
    { id: 'cancha', label: 'Canchas', icon: MapPin, color: 'bg-blue-500' },
    { id: 'entrenador', label: 'Entrenadores', icon: User, color: 'bg-amber-500' },
    { id: 'gimnasio', label: 'Gimnasios', icon: Dumbbell, color: 'bg-purple-500' },
  ];

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden border border-sport-border shadow-2xl">
      {/* Search & Filters Bar */}
      <div className="absolute top-4 left-4 right-4 z-[1000] flex flex-col md:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Busca academias, canchas o entrenadores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background/95 backdrop-blur-sm border-sport-border shadow-lg"
          />
        </div>
        
        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all shadow-md ${
                activeFilters.includes(filter.id)
                  ? `${filter.color} text-white`
                  : 'bg-background/95 text-muted-foreground hover:bg-muted'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{filter.label}</span>
            </button>
          ))}
          <button
            onClick={() => setShowRoutes(!showRoutes)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all shadow-md ${
              showRoutes
                ? 'bg-red-500 text-white'
                : 'bg-background/95 text-muted-foreground hover:bg-muted'
            }`}
          >
            <Route className="w-4 h-4" />
            <span className="hidden sm:inline">Rutas</span>
          </button>
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={[4.6533, -74.0836]}
        zoom={12}
        className="w-full h-full z-0"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController center={mapCenter} />
        
        {/* Location Markers */}
        {filteredLocations.map(location => (
          <Marker
            key={location.id}
            position={location.coords}
            icon={icons[location.type as keyof typeof icons]}
            eventHandlers={{
              click: () => {
                setSelectedLocation(location);
                setSelectedRoute(null);
              }
            }}
          >
            <Popup>
              <div className="font-sans min-w-[200px]">
                <h3 className="font-bold text-base">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.address}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-medium">{location.rating}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Route Polylines */}
        {showRoutes && routes.map(route => (
          <Polyline
            key={route.id}
            positions={route.coords}
            pathOptions={{ 
              color: route.color, 
              weight: 4,
              opacity: 0.8,
              dashArray: route.type === 'Senderismo' ? '10, 10' : undefined
            }}
            eventHandlers={{
              click: () => {
                setSelectedRoute(route);
                setSelectedLocation(null);
              }
            }}
          />
        ))}
      </MapContainer>

      {/* Selected Location Panel */}
      {selectedLocation && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:top-20 md:bottom-auto md:w-80 z-[1000] bg-background/95 backdrop-blur-sm rounded-xl border border-sport-border shadow-2xl p-4 animate-slide-up">
          <button 
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </button>
          
          {selectedLocation.image && (
            <img 
              src={selectedLocation.image} 
              alt={selectedLocation.name}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
          )}
          
          <div className="space-y-2">
            <Badge variant="outline" className="capitalize">
              {selectedLocation.type}
            </Badge>
            <h3 className="font-bold text-lg">{selectedLocation.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {selectedLocation.address}
            </p>
            
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-medium">{selectedLocation.rating}</span>
              </div>
              {selectedLocation.students && (
                <span className="text-muted-foreground">{selectedLocation.students} alumnos</span>
              )}
            </div>

            {selectedLocation.sports && (
              <div className="flex gap-1 flex-wrap">
                {selectedLocation.sports.map(sport => (
                  <Badge key={sport} variant="secondary" className="text-xs">
                    {sport}
                  </Badge>
                ))}
              </div>
            )}

            {selectedLocation.specialty && (
              <p className="text-sm"><strong>Especialidad:</strong> {selectedLocation.specialty}</p>
            )}

            <div className="pt-2 border-t border-border">
              <p className="text-lg font-bold text-sport-primary">{selectedLocation.price}</p>
            </div>

            <div className="flex gap-2 pt-2">
              <Button className="flex-1 bg-sport-primary hover:bg-sport-primary/90">
                Reservar
              </Button>
              <Button variant="outline" className="flex-1">
                Ver más
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Selected Route Panel */}
      {selectedRoute && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:top-20 md:bottom-auto md:w-80 z-[1000] bg-background/95 backdrop-blur-sm rounded-xl border border-sport-border shadow-2xl p-4 animate-slide-up">
          <button 
            onClick={() => setSelectedRoute(null)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: selectedRoute.color }}
              />
              <Badge variant="outline">{selectedRoute.type}</Badge>
            </div>
            
            <h3 className="font-bold text-lg">{selectedRoute.name}</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Navigation className="w-5 h-5 mx-auto mb-1 text-sport-primary" />
                <p className="text-lg font-bold">{selectedRoute.distance}</p>
                <p className="text-xs text-muted-foreground">Distancia</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <Clock className="w-5 h-5 mx-auto mb-1 text-sport-accent" />
                <p className="text-lg font-bold">{selectedRoute.difficulty}</p>
                <p className="text-xs text-muted-foreground">Dificultad</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button className="flex-1 bg-sport-primary hover:bg-sport-primary/90">
                <Navigation className="w-4 h-4 mr-2" />
                Iniciar Ruta
              </Button>
              <Button variant="outline" className="flex-1">
                Compartir
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] hidden md:flex gap-2">
        <div className="bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-sport-border shadow-lg">
          <p className="text-xs text-muted-foreground">Academias</p>
          <p className="text-lg font-bold text-sport-primary">{locations.filter(l => l.type === 'academia').length}+</p>
        </div>
        <div className="bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-sport-border shadow-lg">
          <p className="text-xs text-muted-foreground">Rutas</p>
          <p className="text-lg font-bold text-sport-accent">{routes.length}+</p>
        </div>
        <div className="bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-sport-border shadow-lg">
          <p className="text-xs text-muted-foreground">Ciudades</p>
          <p className="text-lg font-bold text-sport-highlight">15+</p>
        </div>
      </div>

      {/* CTA Button */}
      {onRegisterClick && (
        <div className="absolute bottom-4 right-4 z-[1000] md:hidden">
          <Button 
            onClick={onRegisterClick}
            className="bg-sport-primary hover:bg-sport-primary/90 shadow-lg"
          >
            Registrar mi academia
          </Button>
        </div>
      )}
    </div>
  );
}