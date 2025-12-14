import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Main } from './Main'
import { SignIn } from './SignIn'
import styles from './styles'
import { useConfigure } from './useConfigure'

export const App: React.FC = () => {
  const [idToken, setIdToken] = useState(GoogleSignin.getCurrentUser()?.idToken)

  useConfigure()

  const isTokenValid = typeof idToken === 'string'
  const Ui = isTokenValid ? Main : SignIn

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Ui setIdToken={setIdToken} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
