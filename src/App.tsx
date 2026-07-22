import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Main } from './Main'
import { SignIn } from './SignIn'
import styles from './styles'
import { useInit } from './useInit'

export const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useInit()

  const Ui = isSignedIn ? Main : SignIn
  const expoVersion = Constants.expoConfig?.sdkVersion?.split('.')[0]

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.expoVersion}>Expo {expoVersion}</Text>
        <Ui setIsSignedIn={setIsSignedIn} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
