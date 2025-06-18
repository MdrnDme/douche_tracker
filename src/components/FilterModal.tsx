import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Switch,
} from 'react-native';
import type { Filter } from '../types/Alert';

interface FilterModalProps {
  visible: boolean;
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  onClose: () => void;
}

const severityOptions = [
  { value: 'low', label: 'Low', color: '#2563eb' },
  { value: 'medium', label: 'Medium', color: '#d97706' },
  { value: 'high', label: 'High', color: '#ea580c' },
  { value: 'critical', label: 'Critical', color: '#dc2626' }
];

const categoryOptions = [
  { value: 'weather', label: 'Weather', icon: '🌧️' },
  { value: 'emergency', label: 'Emergency', icon: '🚨' },
  { value: 'traffic', label: 'Traffic', icon: '🚗' },
  { value: 'community', label: 'Community', icon: '🏘️' },
  { value: 'security', label: 'Security', icon: '🔒' },
  { value: 'health', label: 'Health', icon: '🏥' }
];

export function FilterModal({ visible, filter, onFilterChange, onClose }: FilterModalProps) {
  const [localFilter, setLocalFilter] = useState(filter);

  const handleSeverityToggle = (severity: string) => {
    const newSeverities = localFilter.severity.includes(severity)
      ? localFilter.severity.filter(s => s !== severity)
      : [...localFilter.severity, severity];
    
    const newFilter = { ...localFilter, severity: newSeverities };
    setLocalFilter(newFilter);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = localFilter.category.includes(category)
      ? localFilter.category.filter(c => c !== category)
      : [...localFilter.category, category];
    
    const newFilter = { ...localFilter, category: newCategories };
    setLocalFilter(newFilter);
  };

  const applyFilters = () => {
    onFilterChange(localFilter);
    onClose();
  };

  const clearAllFilters = () => {
    const clearedFilter: Filter = {
      severity: [],
      category: [],
      dateRange: { start: null, end: null },
      location: undefined
    };
    setLocalFilter(clearedFilter);
    onFilterChange(clearedFilter);
  };

  const activeFiltersCount = localFilter.severity.length + localFilter.category.length;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Filters</Text>
          <TouchableOpacity onPress={applyFilters}>
            <Text style={styles.applyButton}>Apply</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Severity Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⚠️ Severity Level</Text>
            {severityOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.filterItem}
                onPress={() => handleSeverityToggle(option.value)}
              >
                <View style={styles.filterItemLeft}>
                  <View style={[styles.severityIndicator, { backgroundColor: option.color }]} />
                  <Text style={styles.filterLabel}>{option.label}</Text>
                </View>
                <Switch
                  value={localFilter.severity.includes(option.value)}
                  onValueChange={() => handleSeverityToggle(option.value)}
                  trackColor={{ false: '#d1d5db', true: option.color }}
                  thumbColor="#ffffff"
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Category Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📋 Category</Text>
            {categoryOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.filterItem}
                onPress={() => handleCategoryToggle(option.value)}
              >
                <View style={styles.filterItemLeft}>
                  <Text style={styles.categoryIcon}>{option.icon}</Text>
                  <Text style={styles.filterLabel}>{option.label}</Text>
                </View>
                <Switch
                  value={localFilter.category.includes(option.value)}
                  onValueChange={() => handleCategoryToggle(option.value)}
                  trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
                  thumbColor="#ffffff"
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Active Filters Summary */}
          <View style={styles.summarySection}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>
                {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active
              </Text>
              <TouchableOpacity onPress={clearAllFilters}>
                <Text style={styles.clearButton}>Clear all</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  cancelButton: {
    fontSize: 16,
    color: '#6b7280',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  applyButton: {
    fontSize: 16,
    color: '#3b82f6',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  section: {
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  filterItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  severityIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  filterLabel: {
    fontSize: 16,
    color: '#374151',
  },
  summarySection: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#6b7280',
  },
  clearButton: {
    fontSize: 14,
    color: '#3b82f6',
  },
});
