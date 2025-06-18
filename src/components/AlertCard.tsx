import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import type { Alert } from '../types/Alert';

interface AlertCardProps {
  alert: Alert;
  onLocationPress: (latitude: number, longitude: number) => void;
  onPress?: () => void;
}

const severityColors = {
  low: {
    background: '#eff6ff',
    border: '#bfdbfe',
    text: '#1e40af'
  },
  medium: {
    background: '#fffbeb',
    border: '#fed7aa',
    text: '#d97706'
  },
  high: {
    background: '#fff7ed',
    border: '#fdba74',
    text: '#ea580c'
  },
  critical: {
    background: '#fef2f2',
    border: '#fca5a5',
    text: '#dc2626'
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

export function AlertCard({ alert, onLocationPress, onPress }: AlertCardProps) {
  const severityStyle = severityColors[alert.severity];
  
  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleDateString() + ' ' + timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <TouchableOpacity 
      style={[
        styles.container,
        {
          backgroundColor: severityStyle.background,
          borderColor: severityStyle.border,
        }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.emoji}>{categoryEmojis[alert.category]}</Text>
          <Text style={styles.title} numberOfLines={2}>{alert.title}</Text>
        </View>
        <View style={[styles.severityBadge, { backgroundColor: severityStyle.text }]}>
          <Text style={styles.severityText}>
            {alert.severity.toUpperCase()}
          </Text>
        </View>
      </View>
      
      <Text style={styles.description} numberOfLines={3}>
        {alert.description}
      </Text>
      
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>🕒 </Text>
          <Text style={styles.infoText}>{formatTimestamp(alert.timestamp)}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.infoRow}
          onPress={() => onLocationPress(alert.location.latitude, alert.location.longitude)}
        >
          <Text style={styles.infoLabel}>📍 </Text>
          <Text style={[styles.infoText, styles.locationText]} numberOfLines={1}>
            {alert.location.address}
          </Text>
        </TouchableOpacity>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>👮‍♂️ </Text>
          <Text style={styles.infoText}>{alert.reportedBy}</Text>
        </View>
        
        {alert.contactInfo && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>📞 </Text>
            <Text style={styles.infoText}>{alert.contactInfo}</Text>
          </View>
        )}
        
        {alert.demographics && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>👥 </Text>
            <Text style={styles.infoText}>
              Population: {alert.demographics.population?.toLocaleString()}
              {alert.demographics.vulnerabilities && 
                ` • Vulnerable: ${alert.demographics.vulnerabilities.join(', ')}`
              }
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  emoji: {
    fontSize: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
  },
  severityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  severityText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  infoSection: {
    gap: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    width: 20,
  },
  infoText: {
    fontSize: 12,
    color: '#374151',
    flex: 1,
  },
  locationText: {
    color: '#2563eb',
    textDecorationLine: 'underline',
  },
});
