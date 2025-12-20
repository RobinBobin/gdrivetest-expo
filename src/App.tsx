import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Main } from './Main'
import { SignIn } from './SignIn'
import styles from './styles'
import { useInit } from './useInit'

export const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useInit()

  const Ui = isSignedIn ? Main : SignIn

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Ui setIsSignedIn={setIsSignedIn} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
