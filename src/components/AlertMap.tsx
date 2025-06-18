import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import type { Alert, MapRegion } from '../types/Alert';

interface AlertMapProps {
  alerts: Alert[];
  region: MapRegion;
  onRegionChange: (region: MapRegion) => void;
  onMarkerPress: (alert: Alert) => void;
}

const getMarkerColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return '#dc2626'; // red
    case 'high':
      return '#ea580c'; // orange
    case 'medium':
      return '#d97706'; // yellow
    case 'low':
      return '#2563eb'; // blue
    default:
      return '#6b7280'; // gray
  }
};

const categoryEmojis = {
  weather: '🌧️',
  emergency: '🚨',
  traffic: '🚗',
  community: '🏘️',
  security: '🔒',
  health: '🏥'
};

export function AlertMap({ alerts, region, onRegionChange, onMarkerPress }: AlertMapProps) {
  const activeAlerts = alerts.filter(alert => alert.isActive);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={onRegionChange}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        toolbarEnabled={false}
      >
        {activeAlerts.map((alert) => (
          <Marker
            key={alert.id}
            coordinate={{
              latitude: alert.location.latitude,
              longitude: alert.location.longitude,
            }}
            title={alert.title}
            description={alert.description}
            pinColor={getMarkerColor(alert.severity)}
            onPress={() => onMarkerPress(alert)}
          >
            <View style={[
              styles.customMarker,
              { backgroundColor: getMarkerColor(alert.severity) }
            ]}>
              <Text style={styles.markerEmoji}>
                {categoryEmojis[alert.category]}
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
      
      {/* Legend */}
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Alert Levels</Text>
        <View style={styles.legendItems}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#dc2626' }]} />
            <Text style={styles.legendText}>Critical</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#ea580c' }]} />
            <Text style={styles.legendText}>High</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#d97706' }]} />
            <Text style={styles.legendText}>Medium</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#2563eb' }]} />
            <Text style={styles.legendText}>Low</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  customMarker: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  markerEmoji: {
    fontSize: 16,
  },
  legend: {
    position: 'absolute',
    bottom: 50,
    left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  legendTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  legendItems: {
    gap: 4,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 10,
    color: '#374151',
  },
});
