<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# ICE Community Alert System - iOS App

This is a React Native iOS application for community alert management. The app provides real-time alerts with location-based mapping and filtering capabilities.

## Technology Stack
- React Native 0.80+
- TypeScript
- React Native Maps
- React Navigation
- iOS-specific features and APIs

## Key Features
- Interactive map with alert markers
- Alert filtering by severity and category
- Location-based notifications
- Real-time alert updates
- Demographic data integration
- Search functionality

## Development Guidelines
- Follow React Native best practices
- Use TypeScript for type safety
- Implement proper error handling for location services
- Ensure iOS-specific UI/UX patterns
- Optimize for performance on mobile devices
- Handle permissions properly for location and notifications

## Components Structure
- `AlertCard`: Displays individual alert information
- `AlertMap`: Interactive map with alert markers
- `FilterModal`: Filter interface for alerts
- Main App component manages state and navigation

## Data Types
- `Alert`: Core alert data structure
- `Filter`: Filter criteria for alerts
- `MapRegion`: Map viewport configuration
