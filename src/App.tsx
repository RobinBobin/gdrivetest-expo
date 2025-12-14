import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import styles from './styles'
import { useGoogleSignin } from './useGoogleSignin'

export const App: React.FC = () => {
  useGoogleSignin()

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar />
    </View>
  )
}
