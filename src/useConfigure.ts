import { GoogleSignin } from '@react-native-google-signin/google-signin'

export const useConfigure = (): void => {
  try {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive'],
      webClientId:
        '300184074915-mfinacbun435ivbu16g3rtq83cdan7g9.apps.googleusercontent.com'
    })
  } catch (error) {
    console.log('useConfigure() failed', error)
  }
}
