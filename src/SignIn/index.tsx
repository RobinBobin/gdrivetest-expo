import type { IWithSetIdToken } from '../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button } from '../common'

export const SignIn: React.FC<IWithSetIdToken> = ({ setIdToken }) => {
  const signIn = (): void => {
    const ff = async (): Promise<void> => {
      try {
        const hasPlayServices = await GoogleSignin.hasPlayServices()

        if (!hasPlayServices) {
          console.log('No play services')

          return
        }

        const response = await GoogleSignin.signIn()

        setIdToken(response.data?.idToken)
      } catch (error) {
        console.log('signIn() failed', error)
      }
    }

    void ff()
  }

  return <Button hasMarginTop={false} onPress={signIn} title='Sign in' />
}
