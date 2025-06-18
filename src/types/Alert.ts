export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'weather' | 'emergency' | 'traffic' | 'community' | 'security' | 'health';
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  timestamp: Date;
  isActive: boolean;
  reportedBy: string;
  contactInfo?: string;
  demographics?: {
    ageGroup?: string;
    population?: number;
    vulnerabilities?: string[];
  };
}

export interface Filter {
  severity: string[];
  category: string[];
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  location?: {
    latitude: number;
    longitude: number;
    radius: number;
  };
}

export interface MapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface CustomMarker {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
  severity: string;
  category: string;
}
