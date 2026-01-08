import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  allMapLocations, 
  sportRoutes, 
  defaultCenter, 
  defaultZoom,
  MapLocation,
  SportRoute 
} from '@/data/mapData';
import { MapPin, GraduationCap, Users, MapIcon, Bike, PersonStanding, Mountain } from 'lucide-react';

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom icon creator
const createCustomIcon = (type: string, color: string) => {
  const iconSvg = {
    academy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="1"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>`,
    court: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"/></svg>`,
    trainer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="1"><path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>`,
    route: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="1"><path d="M13.5 5.5c1.09 0 2-.92 2-2s-.91-2-2-2-2 .92-2 2 .91 2 2 2M9.89 19.38l1-4.38L13 17v6h2v-7.5l-2.11-2 .61-3A7.35 7.35 0 0 0 19 13v-2c-1.91 0-3.5-.74-4.55-1.95L13 7.5c-.3-.36-.78-.56-1.28-.5-.5.05-.93.28-1.2.63L8 11h.01L6 12l1 2 2.5-1.6-.36 3.8L6.5 21l1.5.77z"/></svg>`
  };

  return L.divIcon({
    html: `<div class="custom-marker" style="background: ${color}; width: 36px; height: 36px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
      <div style="transform: rotate(45deg); width: 20px; height: 20px;">${iconSvg[type as keyof typeof iconSvg] || iconSvg.court}</div>
    </div>`,
    className: 'custom-div-icon',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
  });
};

// Get color based on type
const getTypeColor = (type: string): string => {
  switch (type) {
    case 'academy': return '#248223'; // Sport primary green
    case 'court': return '#FB9F1E'; // Sport accent orange
    case 'trainer': return '#6366f1'; // Indigo for trainers
    case 'route': return '#ec4899'; // Pink for routes
    default: return '#248223';
  }
};

// Route color based on type
const getRouteColor = (type: string): string => {
  switch (type) {
    case 'running': return '#ef4444'; // Red
    case 'cycling': return '#22c55e'; // Green
    case 'hiking': return '#f59e0b'; // Amber
    default: return '#248223';
  }
};

interface InteractiveMapProps {
  onLocationSelect?: (location: MapLocation | null) => void;
  onRouteSelect?: (route: SportRoute | null) => void;
  selectedFilters?: string[];
  searchQuery?: string;
}

// Map controller component for external controls
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  
  return null;
}

export function InteractiveMap({ 
  onLocationSelect, 
  onRouteSelect,
  selectedFilters = ['academy', 'court', 'trainer', 'route'],
  searchQuery = ''
}: InteractiveMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);
  const [activeRoute, setActiveRoute] = useState<SportRoute | null>(null);

  // Filter locations based on selected filters and search
  const filteredLocations = allMapLocations.filter(loc => {
    const matchesFilter = selectedFilters.includes(loc.type);
    const matchesSearch = searchQuery === '' || 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Filter routes
  const filteredRoutes = selectedFilters.includes('route') 
    ? sportRoutes.filter(route => {
        return searchQuery === '' || 
          route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          route.city.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : [];

  const handleLocationClick = (location: MapLocation) => {
    setActiveLocation(location);
    setActiveRoute(null);
    onLocationSelect?.(location);
  };

  const handleRouteClick = (route: SportRoute) => {
    setActiveRoute(route);
    setActiveLocation(null);
    onRouteSelect?.(route);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-tech-lg">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        ref={mapRef}
        className="w-full h-full z-0"
        zoomControl={false}
        attributionControl={false}
      >
        {/* Dark theme tile layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          className="map-tiles"
        />

        {/* Location markers */}
        {filteredLocations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createCustomIcon(location.type, getTypeColor(location.type))}
            eventHandlers={{
              click: () => handleLocationClick(location)
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-sm">{location.name}</h3>
                <p className="text-xs text-gray-600">{location.sport}</p>
                <p className="text-xs mt-1">{location.description}</p>
                {location.rating && (
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-xs font-semibold">{location.rating}</span>
                  </div>
                )}
                {location.price && (
                  <p className="text-xs font-semibold text-green-600 mt-1">{location.price}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Route polylines */}
        {filteredRoutes.map((route) => (
          <Polyline
            key={route.id}
            positions={route.coordinates}
            pathOptions={{
              color: getRouteColor(route.type),
              weight: 4,
              opacity: 0.8,
              dashArray: route.type === 'hiking' ? '10, 10' : undefined
            }}
            eventHandlers={{
              click: () => handleRouteClick(route)
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[180px]">
                <h3 className="font-bold text-sm">{route.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{route.distance}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    route.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    route.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {route.difficulty === 'easy' ? 'Fácil' : 
                     route.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                  </span>
                </div>
                <p className="text-xs mt-1">{route.description}</p>
                {route.elevation && (
                  <p className="text-xs text-gray-500 mt-1">↗ {route.elevation}</p>
                )}
              </div>
            </Popup>
          </Polyline>
        ))}

        {/* Route start markers */}
        {filteredRoutes.map((route) => (
          <Marker
            key={`${route.id}-start`}
            position={route.coordinates[0]}
            icon={L.divIcon({
              html: `<div style="background: ${getRouteColor(route.type)}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
              className: 'route-start-marker',
              iconSize: [12, 12],
              iconAnchor: [6, 6]
            })}
          />
        ))}
      </MapContainer>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 glass-effect rounded-xl p-3 z-[1000]">
        <div className="text-xs font-semibold mb-2 text-foreground">Leyenda</div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#248223]"></div>
            <span className="text-xs text-muted-foreground">Academias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FB9F1E]"></div>
            <span className="text-xs text-muted-foreground">Canchas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6366f1]"></div>
            <span className="text-xs text-muted-foreground">Entrenadores</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-[#ef4444]"></div>
            <span className="text-xs text-muted-foreground">Running</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-[#22c55e]"></div>
            <span className="text-xs text-muted-foreground">Ciclismo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-[#f59e0b]" style={{ borderBottom: '2px dashed' }}></div>
            <span className="text-xs text-muted-foreground">Senderismo</span>
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
        <button 
          onClick={() => mapRef.current?.zoomIn()}
          className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-lg font-bold hover:bg-sport-primary/20 transition-colors"
        >
          +
        </button>
        <button 
          onClick={() => mapRef.current?.zoomOut()}
          className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-lg font-bold hover:bg-sport-primary/20 transition-colors"
        >
          −
        </button>
      </div>
    </div>
  );
}
