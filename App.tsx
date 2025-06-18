import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
  Alert as RNAlert,
} from 'react-native';
import { AlertCard } from './src/components/AlertCard';
import { FilterModal } from './src/components/FilterModal';
import { sampleAlerts } from './src/data/sampleAlerts';
import type { Alert, Filter } from './src/types/Alert';

function App(): React.JSX.Element {
  const [alerts] = useState<Alert[]>(sampleAlerts);
  const [filter, setFilter] = useState<Filter>({
    severity: [],
    category: [],
    dateRange: { start: null, end: null }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const filteredAlerts = useMemo(() => {
    return alerts.filter(alert => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        if (!alert.title.toLowerCase().includes(searchLower) &&
            !alert.description.toLowerCase().includes(searchLower) &&
            !alert.location.address.toLowerCase().includes(searchLower)) {
          return false;
        }
      }

      // Severity filter
      if (filter.severity.length > 0 && !filter.severity.includes(alert.severity)) {
        return false;
      }

      // Category filter
      if (filter.category.length > 0 && !filter.category.includes(alert.category)) {
        return false;
      }

      // Date range filter
      if (filter.dateRange.start && alert.timestamp < filter.dateRange.start) {
        return false;
      }
      if (filter.dateRange.end && alert.timestamp > filter.dateRange.end) {
        return false;
      }

      return true;
    });
  }, [alerts, filter, searchTerm]);

  const criticalAlertsCount = filteredAlerts.filter(alert => 
    alert.severity === 'critical' && alert.isActive
  ).length;

  const activeFiltersCount = filter.severity.length + filter.category.length;

  const handleLocationPress = (latitude: number, longitude: number) => {
    RNAlert.alert(
      'Location',
      `Coordinates: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
      [{ text: 'OK' }]
    );
  };

  const renderAlertItem = ({ item }: { item: Alert }) => (
    <AlertCard
      alert={item}
      onLocationPress={handleLocationPress}
      onPress={() => {
        RNAlert.alert(
          item.title,
          item.description,
          [
            { text: 'OK', style: 'default' },
            {
              text: 'View Location',
              style: 'default',
              onPress: () => handleLocationPress(item.location.latitude, item.location.longitude),
            },
          ]
        );
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.titleSection}>
            <Text style={styles.appTitle}>🚨 ICE Community Alert</Text>
            {criticalAlertsCount > 0 && (
              <View style={styles.criticalBadge}>
                <Text style={styles.criticalText}>
                  {criticalAlertsCount} Critical
                </Text>
              </View>
            )}
          </View>
          
          <TouchableOpacity
            style={[styles.filterButton, activeFiltersCount > 0 && styles.filterButtonActive]}
            onPress={() => setIsFilterModalVisible(true)}
          >
            <Text style={styles.filterButtonText}>
              🔍 {activeFiltersCount > 0 ? `${activeFiltersCount}` : 'Filter'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search alerts by title, description, or location..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>
              {filteredAlerts.filter(a => a.isActive).length} Active Alerts
            </Text>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => RNAlert.alert('Coming Soon', 'Add new alert feature will be available soon!')}
            >
              <Text style={styles.addButtonText}>+ Add Alert</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredAlerts
              .filter(alert => alert.isActive)
              .sort((a, b) => {
                const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
                return severityOrder[a.severity] - severityOrder[b.severity];
              })
            }
            renderItem={renderAlertItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>

      {/* Filter Modal */}
      <FilterModal
        visible={isFilterModalVisible}
        filter={filter}
        onFilterChange={setFilter}
        onClose={() => setIsFilterModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginRight: 12,
  },
  criticalBadge: {
    backgroundColor: '#dc2626',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  criticalText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  filterButton: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterButtonActive: {
    backgroundColor: '#3b82f6',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1f2937',
  },
  content: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  addButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 100,
  },
});

export default App;
