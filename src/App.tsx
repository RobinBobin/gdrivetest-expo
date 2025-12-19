import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Main } from './Main'
import { SignIn } from './SignIn'
import styles from './styles'
import { useInit } from './useInit'

export const App: React.FC = () => {
  const [isIdTokenValid, setIsIdTokenValid] = useInit()

  const Ui = isIdTokenValid ? Main : SignIn

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Ui setIsIdTokenValid={setIsIdTokenValid} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
