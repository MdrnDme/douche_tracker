import type { Alert } from '../types/Alert';

export const sampleAlerts: Alert[] = [
  {
    id: '1',
    title: 'Severe Weather Warning',
    description: 'High winds and heavy rain expected. Potential for flooding in low-lying areas.',
    severity: 'high',
    category: 'weather',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      address: 'Manhattan, New York, NY'
    },
    timestamp: new Date('2025-06-18T08:00:00Z'),
    isActive: true,
    reportedBy: 'National Weather Service',
    demographics: {
      ageGroup: 'All ages',
      population: 1600000,
      vulnerabilities: ['Elderly', 'Homeless population']
    }
  },
  {
    id: '2',
    title: 'Emergency Road Closure',
    description: 'Main Street blocked due to water main break. Alternate routes advised.',
    severity: 'medium',
    category: 'traffic',
    location: {
      latitude: 40.7589,
      longitude: -73.9851,
      address: 'Main Street, New York, NY'
    },
    timestamp: new Date('2025-06-18T07:30:00Z'),
    isActive: true,
    reportedBy: 'NYC DOT',
    contactInfo: '311'
  },
  {
    id: '3',
    title: 'Community Safety Alert',
    description: 'Increased police presence in area due to recent incidents. Residents advised to stay vigilant.',
    severity: 'medium',
    category: 'security',
    location: {
      latitude: 40.7505,
      longitude: -73.9934,
      address: 'Times Square, New York, NY'
    },
    timestamp: new Date('2025-06-18T06:45:00Z'),
    isActive: true,
    reportedBy: 'NYPD',
    demographics: {
      ageGroup: 'All ages',
      population: 50000,
      vulnerabilities: ['Tourists', 'Late night workers']
    }
  },
  {
    id: '4',
    title: 'Health Advisory',
    description: 'Air quality alert due to wildfire smoke. Sensitive individuals should limit outdoor activities.',
    severity: 'low',
    category: 'health',
    location: {
      latitude: 40.7831,
      longitude: -73.9712,
      address: 'Central Park, New York, NY'
    },
    timestamp: new Date('2025-06-18T09:15:00Z'),
    isActive: true,
    reportedBy: 'NYC Health Department',
    demographics: {
      ageGroup: 'All ages',
      population: 25000,
      vulnerabilities: ['Children', 'Elderly', 'Asthma sufferers']
    }
  },
  {
    id: '5',
    title: 'Critical Infrastructure Alert',
    description: 'Power outage affecting multiple blocks. Estimated restoration time: 2-4 hours.',
    severity: 'critical',
    category: 'emergency',
    location: {
      latitude: 40.7282,
      longitude: -74.0776,
      address: 'Lower Manhattan, New York, NY'
    },
    timestamp: new Date('2025-06-18T05:20:00Z'),
    isActive: true,
    reportedBy: 'Con Edison',
    contactInfo: '1-800-752-6633',
    demographics: {
      ageGroup: 'All ages',
      population: 200000,
      vulnerabilities: ['Medical equipment dependent', 'Elderly']
    }
  }
];
