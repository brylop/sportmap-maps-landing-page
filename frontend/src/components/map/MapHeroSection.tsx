import { useState, useCallback } from 'react';
import { Search, Filter, MapPin, GraduationCap, Users, Route, Navigation, Loader2, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InteractiveMap } from './InteractiveMap';
import { MapSidebar } from './MapSidebar';
import { MapLocation, SportRoute, mapStats, cities } from '@/data/mapData';
import { motion } from 'framer-motion';
import { EscuelasRegistroModal } from '@/components/modals/EscuelasRegistroModal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MapHeroSectionProps {
  onScrollToFeatures?: () => void;
}

const filterOptions = [
  { id: 'academy', label: 'Academias', icon: GraduationCap, count: mapStats.academies },
  { id: 'court', label: 'Canchas', icon: MapPin, count: mapStats.courts },
  { id: 'trainer', label: 'Entrenadores', icon: Users, count: mapStats.trainers },
  { id: 'route', label: 'Rutas', icon: Route, count: mapStats.routes },
  { id: 'event', label: 'Eventos', icon: CalendarDays, count: mapStats.events },
];

export function MapHeroSection({ onScrollToFeatures }: MapHeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['academy', 'court', 'trainer', 'route', 'event']);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<SportRoute | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const toggleFilter = useCallback((filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  }, []);

  const handleLocationSelect = useCallback((location: MapLocation | null) => {
    setSelectedLocation(location);
    setSelectedRoute(null);
  }, []);

  const handleRouteSelect = useCallback((route: SportRoute | null) => {
    setSelectedRoute(route);
    setSelectedLocation(null);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setSelectedLocation(null);
    setSelectedRoute(null);
  }, []);

  const handleCityChange = useCallback((cityKey: string) => {
    setSelectedCity(cityKey);
    if (cityKey !== 'all') {
      // Filter search to show city name
      setSearchQuery(cities[cityKey as keyof typeof cities].name);
    } else {
      setSearchQuery('');
    }
  }, []);

  // Combine search query with city filter
  const effectiveSearchQuery = selectedCity !== 'all' && !searchQuery.includes(cities[selectedCity as keyof typeof cities]?.name || '')
    ? searchQuery
    : searchQuery;

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0">
        <InteractiveMap 
          onLocationSelect={handleLocationSelect}
          onRouteSelect={handleRouteSelect}
          selectedFilters={selectedFilters}
          searchQuery={effectiveSearchQuery}
          userLocation={userLocation}
          onUserLocationChange={setUserLocation}
        />
      </div>

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none z-10" />

      {/* Search & Filters Bar */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-3 shadow-tech-lg border border-sport-primary/20"
        >
          {/* Title */}
          <div className="text-center mb-3">
            <h1 className="text-lg md:text-xl font-bold text-foreground">
              🗺️ El <span className="text-sport-primary">Mapa Vivo</span> del Deporte en Colombia
            </h1>
            <p className="text-xs text-sport-text-muted mt-1">
108:               {mapStats.cities} ciudades • {mapStats.academies} academias • {mapStats.events} eventos • {mapStats.routes} rutas
109:             </p>
          </div>

          {/* Search Row */}
          <div className="flex gap-2">
            {/* City Selector */}
            <Select value={selectedCity} onValueChange={handleCityChange}>
              <SelectTrigger className="w-[140px] md:w-[180px] bg-background/50 border-sport-border">
                <SelectValue placeholder="Ciudad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">🇨🇴 Toda Colombia</SelectItem>
                {Object.entries(cities).map(([key, city]) => (
                  <SelectItem key={key} value={key}>
                    📍 {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sport-text-muted" />
              <Input
                type="text"
                placeholder="Busca academias, canchas, rutas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 text-base rounded-xl border-sport-border focus:border-sport-primary bg-background/50"
              />
              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                  isFiltersOpen ? 'bg-sport-primary text-white' : 'hover:bg-sport-surface'
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <motion.div 
            initial={false}
            animate={{ height: isFiltersOpen ? 'auto' : 0, opacity: isFiltersOpen ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-sport-border/50">
              {filterOptions.map((filter) => {
                const isActive = selectedFilters.includes(filter.id);
                return (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-sport-primary text-white shadow-glow-primary'
                        : 'bg-sport-surface/50 text-sport-text-secondary hover:bg-sport-surface'
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20' : 'bg-sport-primary/10 text-sport-primary'
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 glass-effect border-t border-sport-border/30 py-4 z-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Stats */}
            <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-sport-primary">{mapStats.academies}+</span>
                <p className="text-xs text-sport-text-muted">Academias</p>
              </div>
              <div className="w-px h-8 bg-sport-border hidden md:block" />
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-rose-500">{mapStats.events}+</span>
                <p className="text-xs text-sport-text-muted">Eventos</p>
              </div>
              <div className="w-px h-8 bg-sport-border hidden md:block" />
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-sport-accent">{mapStats.routes}+</span>
                <p className="text-xs text-sport-text-muted">Rutas</p>
              </div>
              <div className="w-px h-8 bg-sport-border hidden md:block" />
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-sport-highlight">{mapStats.cities}</span>
                <p className="text-xs text-sport-text-muted">Ciudades</p>
              </div>
              <div className="w-px h-8 bg-sport-border hidden md:block" />
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-indigo-500">{mapStats.trainers}+</span>
                <p className="text-xs text-sport-text-muted">Entrenadores</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              {userLocation && (
                <span className="text-xs text-sport-success flex items-center gap-1">
                  <Navigation className="w-3 h-3" />
                  Ubicación activa
                </span>
              )}
              <Button 
                variant="outline"
                className="border-sport-primary text-sport-primary hover:bg-sport-primary/10"
                onClick={onScrollToFeatures}
              >
                Ver todas las rutas
              </Button>
              <Button 
                className="bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-accent"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Registrar mi academia
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sidebar */}
      <MapSidebar
        selectedLocation={selectedLocation}
        selectedRoute={selectedRoute}
        onClose={handleCloseSidebar}
        onRegister={() => setIsRegisterModalOpen(true)}
      />

      {/* Register Modal */}
      <EscuelasRegistroModal 
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </section>
  );
}
