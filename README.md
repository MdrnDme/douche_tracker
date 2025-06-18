# Douche Tracker

A ## Features

🎯 **ICE Activity Mapping**: Real-time locations of raids, checkpoints, and operations
📍 **Geographic Alerts**: Proximity warnings when ICE is reported nearby
🔍 **Activity Filtering**: Sort by operation type, time, and verification status
📱 **iOS Optimized**: Secure, anonymous reporting interface
👥 **Community Verification**: Peer-reviewed sighting validation
🚨 **Real-time Alerts**: Instant notifications for ICE activity in your area
📊 **Pattern Analysis**: Track enforcement patterns and operational schedulesive iOS app that tracks ICE movements and operations in real-time.

Communities need to know when ICE is operating in their area. This app crowdsources sightings, raids, checkpoints, and enforcement activities to keep people informed and safe.

Because knowing where they are could save someone's life.

## What It Does

ICE operates with deliberate opacity, making it hard for communities to protect themselves. This app:

• **Maps ICE activity** in real-time based on community reports
• **Tracks raid locations** and enforcement patterns
• **Identifies checkpoint locations** and times of operation
• **Documents enforcement tactics** with timestamps and locations
• **Sends alerts** when ICE activity is reported nearby

The goal is transparency. ICE wants to operate in the shadows - this app brings their activities into the light so communities can make informed decisions about their safety.

## Features

🎯 **Pattern Detection**: Spot repeat offenders across platforms and identities
📍 **Geographic Mapping**: See where incidents cluster 
🔍 **Smart Filtering**: Sort by severity, type, and verification status
📱 **iOS Optimized**: Native interface for secure reporting
👥 **Community Verification**: Peer-reviewed incident validation
� **Early Warning System**: Get notified when known troublemakers appear
📊 **Behavior Analytics**: Track escalation patterns and community health

## Technology Stack

- **React Native 0.80+**: Cross-platform mobile development
- **TypeScript**: Type-safe development
- **React Native Maps**: Interactive mapping with custom markers
- **React Navigation**: Screen navigation and routing
- **AsyncStorage**: Local data persistence
- **Geolocation Services**: Location-based features

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- React Native CLI
- Xcode (for iOS development)
- iOS Simulator or physical iOS device
- CocoaPods (for iOS dependencies)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MdrnDme/douche_tracker.git
cd douche_tracker
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies:
```bash
cd ios && pod install && cd ..
```

4. Start Metro bundler:
```bash
npm start
```

5. Run on iOS:
```bash
npm run ios
```

## Project Structure

```
src/
├── components/          # Core UI components
│   ├── AlertCard.tsx   # ICE activity report display
│   ├── AlertMap.tsx    # Geographic ICE activity mapping
│   └── FilterModal.tsx # Activity filtering interface
├── data/               # Sample data and patterns
│   └── sampleAlerts.ts # Mock ICE activity reports
└── types/              # TypeScript definitions
    └── Alert.ts        # ICE activity data structures
```

## Activity Categories and Alert Levels

### Alert Priority
- 🔵 **Routine**: Standard ICE presence, no immediate action
- 🟡 **Active**: ICE conducting operations in area
- 🟠 **Raid**: ICE conducting enforcement raids
- 🔴 **Emergency**: Large-scale operation or immediate danger

### Activity Types
- 🚐 **Vehicle Sightings**: ICE vehicles spotted in area
- � **Workplace Raids**: ICE targeting businesses and workplaces
- 🏠 **Residential Operations**: ICE activity at homes or apartments
- 🛑 **Checkpoints**: ICE checkpoints on roads or transit
- 🏛️ **Court Activity**: ICE presence at courthouses
- � **Detention**: Reports of ICE detentions or arrests

## Development Quick Start

### Running the Application

For iOS development and testing:
```bash
npx react-native run-ios
```

For debugging and cache issues:
```bash
npx react-native start --reset-cache
```

### Production Builds

```bash
npx react-native run-ios --configuration Release
```

## Configuration

### Privacy and Security
This application prioritizes reporter safety and anonymity:

1. All ICE activity reports are encrypted locally before transmission
2. Reporter identities are completely anonymized 
3. Location data is fuzzy-matched to protect exact reporting locations
4. No personal information is stored or transmitted
5. App can be used without creating accounts or providing identifying information

### Required iOS Permissions
- Location Services (for ICE activity mapping)
- Push Notifications (for proximity alerts)
- Camera (for documenting ICE presence)
- Background App Refresh (for real-time alerts)

## Usage Guidelines

This platform operates under strict safety guidelines:

**What This Is:**
- A tool for documenting ICE enforcement activity
- A community safety and awareness system  
- A way to track patterns of ICE operations
- A platform for informed decision-making about personal safety

**What This Is Not:**
- A tool for harassment or interference with law enforcement
- A platform for unverified or false reports
- A system for encouraging illegal activity
- A way to obstruct legitimate law enforcement operations

All reports should be:
- Factual observations of ICE activity
- Submitted to help community safety
- Based on direct observation when possible
- Focused on operational patterns, not individuals

## Contributing

Community safety depends on accurate information. When contributing:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/SafetyEnhancement`)
3. Ensure your code follows privacy-first principles
4. Test thoroughly on iOS devices
5. Submit a pull request with detailed documentation

## Legal Disclaimer

This software is provided for community awareness and safety purposes. Users are responsible for:
- Ensuring compliance with local laws regarding information sharing
- Using the platform to enhance community safety, not obstruct law enforcement
- Understanding this tool provides information, not legal advice
- Reporting accurate information to the best of their ability

## Support

For technical support:
- Open an issue in the repository
- Review the usage guidelines
- Check the privacy documentation

---

Built for communities that deserve transparency about enforcement activities in their neighborhoods.
