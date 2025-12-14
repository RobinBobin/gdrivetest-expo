import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useEffect } from 'react'

export const useGoogleSignin = (): void => {
  useEffect(() => {
    const init = async (): Promise<void> => {
      try {
        GoogleSignin.configure({
          scopes: ['https://www.googleapis.com/auth/drive'],
          webClientId:
            '300184074915-mfinacbun435ivbu16g3rtq83cdan7g9.apps.googleusercontent.com'
        })

        const hasPlayServices = await GoogleSignin.hasPlayServices()

        if (!hasPlayServices) {
          console.log('No play services')

          return
        }

        const response = await GoogleSignin.signIn()

        console.log('response', response)
      } catch (error) {
        console.log('error', error)
      }
    }

    void init()
  }, [])
}
