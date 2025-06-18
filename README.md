# ICE Community Alert System - iOS App

A comprehensive React Native iOS application for community-based alert management and emergency notifications. This app provides real-time alerts with interactive mapping, filtering capabilities, and demographic data integration.

## Features

🚨 **Real-time Alerts**: Live community alerts with severity levels
🗺️ **Interactive Maps**: Location-based alert visualization with custom markers
🔍 **Smart Filtering**: Filter alerts by severity, category, date, and location
📱 **iOS Native**: Optimized for iOS with native UI patterns
👥 **Demographics**: Community population and vulnerability data
🔔 **Notifications**: Push notifications for critical alerts
📍 **Location Services**: GPS-based proximity alerts

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
git clone <repository-url>
cd ICECommunityAlert
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
├── components/          # Reusable UI components
│   ├── AlertCard.tsx   # Individual alert display
│   ├── AlertMap.tsx    # Interactive map component
│   └── FilterModal.tsx # Alert filtering interface
├── data/               # Sample data and constants
│   └── sampleAlerts.ts # Mock alert data
└── types/              # TypeScript type definitions
    └── Alert.ts        # Core data types
```

## Alert Types and Severity Levels

### Severity Levels
- 🔵 **Low**: General information, minimal impact
- 🟡 **Medium**: Moderate concern, some impact expected
- 🟠 **High**: Significant concern, considerable impact
- 🔴 **Critical**: Emergency situation, immediate action required

### Alert Categories
- 🌧️ **Weather**: Severe weather conditions
- 🚨 **Emergency**: Public safety emergencies
- 🚗 **Traffic**: Road closures and transportation
- 🏘️ **Community**: Neighborhood announcements
- 🔒 **Security**: Safety and security alerts
- 🏥 **Health**: Public health advisories

## Development

### Running the App

For iOS:
```bash
npx react-native run-ios
```

For debugging:
```bash
npx react-native start --reset-cache
```

### Building for Production

```bash
npx react-native run-ios --configuration Release
```

## Configuration

### Maps Setup
The app uses Google Maps for iOS. To set up:

1. Get a Google Maps API key
2. Add the key to `ios/ICECommunityAlert/AppDelegate.mm`
3. Enable required APIs in Google Cloud Console

### Permissions
Required iOS permissions:
- Location Services
- Push Notifications
- Camera (for reporting alerts)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ for community safety and awareness.

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
