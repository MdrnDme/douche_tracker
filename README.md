# Douche Tracker: Community Accountability Platform

A React Native iOS application designed to expose and track problematic behavior in communities. Because accountability matters, and hiding behind anonymity shouldn't protect those who make spaces toxic for others.

This isn't about public shaming - it's about transparency and giving communities the tools to identify patterns of harmful behavior before they escalate.

## Core Concept

Community spaces - whether online forums, workplaces, or social groups - often struggle with individuals who consistently engage in toxic behavior while avoiding consequences. These individuals typically:

• Hide behind pseudonyms or shift between identities
• Target vulnerable community members
• Escalate gradually to test boundaries  
• Retreat when confronted, only to resurface elsewhere

This platform provides communities with tools to:

• Document patterns of problematic behavior across platforms
• Maintain verified incident reports with timestamps and context
• Identify repeat offenders who cycle through different identities
• Enable informed decision-making about community membership

## Features

🕵️ **Pattern Recognition**: Track behavior patterns across multiple platforms and identities
📍 **Location Mapping**: Visualize incident clusters and identify problem areas
🔍 **Smart Filtering**: Filter reports by severity, category, date, and verification status
📱 **iOS Native**: Optimized interface for secure, private reporting
👥 **Community Verification**: Peer-reviewed incident validation system
🔔 **Alert System**: Notifications for repeat offenders or escalating situations
📊 **Analytics Dashboard**: Community health metrics and trend analysis

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
│   ├── AlertCard.tsx   # Incident report display
│   ├── AlertMap.tsx    # Geographic incident mapping
│   └── FilterModal.tsx # Report filtering interface
├── data/               # Sample data and patterns
│   └── sampleAlerts.ts # Mock incident reports
└── types/              # TypeScript definitions
    └── Alert.ts        # Incident data structures
```

## Report Categories and Severity Levels

### Severity Classification
- 🔵 **Monitoring**: Questionable behavior worth documenting
- 🟡 **Concerning**: Clear pattern of problematic conduct
- 🟠 **Escalating**: Behavior causing measurable harm to community
- 🔴 **Critical**: Immediate threat requiring intervention

### Incident Categories
- 🎭 **Identity Manipulation**: Sockpuppeting, ban evasion, false personas
- 🎯 **Targeted Harassment**: Sustained campaigns against individuals
- 💬 **Platform Abuse**: Gaming systems, vote manipulation, spam
- 🏘️ **Community Disruption**: Trolling, derailing, inflammatory behavior
- 🔒 **Privacy Violations**: Doxxing, sharing personal information
- 🚫 **Discrimination**: Hate speech, prejudicial targeting

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
This application prioritizes user privacy and data security:

1. All incident reports are encrypted locally before transmission
2. Reporter identities are protected through secure anonymization
3. Data is stored with zero-knowledge architecture where possible
4. Geographic data is fuzzy-matched to prevent exact location tracking

### Required iOS Permissions
- Location Services (for incident mapping)
- Push Notifications (for community alerts)
- Camera (for evidence documentation)
- Secure Enclave (for identity verification)

## Ethical Framework

This platform operates under strict ethical guidelines:

**What This Is:**
- A tool for documenting verifiable harmful behavior
- A system for protecting vulnerable community members
- A way to identify patterns that might otherwise go unnoticed
- A platform for informed community decision-making

**What This Is Not:**
- A tool for harassment or vigilante justice
- A platform for unsubstantiated accusations
- A system for settling personal disputes
- A way to bypass proper legal or administrative channels

All reports must be:
- Factual and verifiable
- Related to community harm
- Submitted in good faith
- Accompanied by appropriate evidence where possible

## Contributing

Community-driven development is essential for this project. When contributing:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/CommunityProtection`)
3. Ensure your code follows privacy-first principles
4. Test thoroughly on iOS devices
5. Submit a pull request with detailed documentation

## Legal Disclaimer

This software is provided for legitimate community protection purposes. Users are responsible for:
- Ensuring compliance with local laws regarding privacy and data collection
- Using the platform ethically and in good faith
- Understanding that this tool supplements, but does not replace, proper legal channels
- Maintaining appropriate evidence standards for any reports

## Support

For technical support or ethical guidance:
- Open an issue in the repository
- Review the community guidelines
- Consult the ethical framework documentation

---

Built for communities that refuse to tolerate those who hide behind masks while making spaces unsafe for others.
