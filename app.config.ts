import type { ExpoConfig } from 'expo/config'

import { version } from './package.json'

const config: ExpoConfig = {
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/adaptive-icon.png'
    }
  },
  extra: {
    eas: {
      projectId: '4862def2-c563-4a26-b7c7-5ed34f8f2ebc'
    }
  },
  icon: './assets/icon.png',
  ios: {
    supportsTablet: true
  },
  name: 'gdrivetest',
  orientation: 'portrait',
  owner: 'robinbobin',
  slug: 'gdrivetest',
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/splash.png',
    resizeMode: 'contain'
  },
  userInterfaceStyle: 'light',
  version
}

export default config
