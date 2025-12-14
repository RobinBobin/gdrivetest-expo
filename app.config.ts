import type { ExpoConfig } from 'expo/config'

import majorVersion from 'semver/functions/major'

import {
  name as packageJsonName,
  version as packageJsonVersion
} from './package.json'

const PROJECT_ID = '679d187d-b3dd-47bb-ae1f-bb599be45c76'
const RUNTIME_VERSION = '1.0.0'
const SCHEME = 'ru.rshalimov.gdrivetestexpo'

if (majorVersion(RUNTIME_VERSION) !== majorVersion(packageJsonVersion)) {
  throw new Error('Runtime version mismatch')
}

const config: ExpoConfig = {
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/adaptive-icon.png'
    },
    edgeToEdgeEnabled: true,
    package: SCHEME
  },
  extra: {
    eas: {
      projectId: PROJECT_ID
    }
  },
  icon: './assets/icon.png',
  ios: {
    bundleIdentifier: SCHEME,
    supportsTablet: true
  },
  name: packageJsonName,
  newArchEnabled: true,
  orientation: 'portrait',
  plugins: [
    [
      '@react-native-google-signin/google-signin',
      {
        iosUrlScheme:
          'com.googleusercontent.apps.300184074915-i47tcgqq04d7cdomhbsbme5lm53eckd8'
      }
    ],
    [
      'expo-dev-client',
      {
        launchMode: 'most-recent'
      }
    ],
    'expo-system-ui'
  ],
  runtimeVersion: RUNTIME_VERSION,
  scheme: SCHEME,
  slug: packageJsonName,
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/splash-icon.png',
    resizeMode: 'contain'
  },
  userInterfaceStyle: 'automatic',
  version: packageJsonVersion
}

export default config
