import { useState } from 'react';
import { MapLocation, SportRoute } from '@/data/mapData';
import { 
  X, Star, MapPin, Phone, DollarSign, Calendar, 
  GraduationCap, Users, Mountain, Bike, PersonStanding,
  Clock, TrendingUp, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface MapSidebarProps {
  selectedLocation: MapLocation | null;
  selectedRoute: SportRoute | null;
  onClose: () => void;
  onRegister?: () => void;
}

export function MapSidebar({ selectedLocation, selectedRoute, onClose, onRegister }: MapSidebarProps) {
  const isOpen = selectedLocation !== null || selectedRoute !== null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'academy': return GraduationCap;
      case 'court': return MapPin;
      case 'trainer': return Users;
      case 'running': return PersonStanding;
      case 'cycling': return Bike;
      case 'hiking': return Mountain;
      default: return MapPin;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'academy': return 'Academia';
      case 'court': return 'Cancha';
      case 'trainer': return 'Entrenador';
      case 'running': return 'Running';
      case 'cycling': return 'Ciclismo';
      case 'hiking': return 'Senderismo';
      default: return type;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute right-0 top-0 h-full w-80 md:w-96 glass-effect border-l border-sport-border z-[1001] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-sport-surface/50 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Location Content */}
          {selectedLocation && (
            <div className="p-6 pt-14">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-sport-primary/10">
                  {(() => {
                    const Icon = getTypeIcon(selectedLocation.type);
                    return <Icon className="w-6 h-6 text-sport-primary" />;
                  })()}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-sport-accent uppercase tracking-wide">
                    {getTypeLabel(selectedLocation.type)}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {selectedLocation.name}
                  </h3>
                </div>
              </div>

              {/* Sport Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sport-primary/10 text-sport-primary text-sm font-medium mb-4">
                {selectedLocation.sport}
              </div>

              {/* Rating */}
              {selectedLocation.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(selectedLocation.rating!) 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{selectedLocation.rating}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-sport-text-secondary text-sm leading-relaxed mb-6">
                {selectedLocation.description}
              </p>

              {/* Details */}
              <div className="space-y-4 mb-6">
                {selectedLocation.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sport-text-muted shrink-0 mt-0.5" />
                    <span className="text-sm text-sport-text-secondary">
                      {selectedLocation.address}
                    </span>
                  </div>
                )}
                {selectedLocation.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-sport-text-muted" />
                    <span className="text-sm text-sport-text-secondary">
                      {selectedLocation.phone}
                    </span>
                  </div>
                )}
                {selectedLocation.price && (
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-sport-accent" />
                    <span className="text-sm font-semibold text-sport-accent">
                      {selectedLocation.price}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-sport-primary hover:bg-sport-primary/90"
                  onClick={() => window.open(`tel:${selectedLocation.phone}`, '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contactar
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-sport-primary text-sport-primary hover:bg-sport-primary/10"
                  onClick={onRegister}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Reservar / Inscribirse
                </Button>
              </div>
            </div>
          )}

          {/* Route Content */}
          {selectedRoute && (
            <div className="p-6 pt-14">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-sport-accent/10">
                  {(() => {
                    const Icon = getTypeIcon(selectedRoute.type);
                    return <Icon className="w-6 h-6 text-sport-accent" />;
                  })()}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-sport-primary uppercase tracking-wide">
                    Ruta de {getTypeLabel(selectedRoute.type)}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1">
                    {selectedRoute.name}
                  </h3>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="glass-effect rounded-xl p-3 text-center">
                  <TrendingUp className="w-5 h-5 mx-auto text-sport-primary mb-1" />
                  <span className="text-sm font-bold text-foreground">{selectedRoute.distance}</span>
                  <p className="text-xs text-sport-text-muted">Distancia</p>
                </div>
                <div className="glass-effect rounded-xl p-3 text-center">
                  <Mountain className="w-5 h-5 mx-auto text-sport-accent mb-1" />
                  <span className="text-sm font-bold text-foreground">{selectedRoute.elevation || 'N/A'}</span>
                  <p className="text-xs text-sport-text-muted">Desnivel</p>
                </div>
                <div className="glass-effect rounded-xl p-3 text-center">
                  <Clock className="w-5 h-5 mx-auto text-sport-highlight mb-1" />
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${getDifficultyColor(selectedRoute.difficulty)}`}>
                    {selectedRoute.difficulty === 'easy' ? 'Fácil' : 
                     selectedRoute.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                  </span>
                  <p className="text-xs text-sport-text-muted mt-1">Nivel</p>
                </div>
              </div>

              {/* City */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-sport-text-muted" />
                <span className="text-sm text-sport-text-secondary">{selectedRoute.city}, Colombia</span>
              </div>

              {/* Description */}
              <p className="text-sport-text-secondary text-sm leading-relaxed mb-6">
                {selectedRoute.description}
              </p>

              {/* CTA */}
              <Button 
                className="w-full bg-gradient-to-r from-sport-primary to-sport-accent"
                onClick={() => {
                  // Could integrate with Google Maps or similar
                  const [lat, lng] = selectedRoute.coordinates[0];
                  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
                }}
              >
                Iniciar Ruta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
