import type { IWithSetIsIdTokenValid } from '../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button, gdrive } from '../common'

export const SignIn: React.FC<IWithSetIsIdTokenValid> = ({
  setIsIdTokenValid
}) => {
  const signIn = async (): Promise<void> => {
    const hasPlayServices = await GoogleSignin.hasPlayServices()

    if (!hasPlayServices) {
      throw new Error('No play services')
    }

    const { type } = await GoogleSignin.signIn()

    if (type === 'cancelled') {
      throw new Error('Sign-in cancelled')
    }

    const { accessToken } = await GoogleSignin.getTokens()

    gdrive.accessToken = accessToken

    setIsIdTokenValid(true)
  }

  return <Button hasMarginTop={false} onPress={signIn} title='Sign in' />
}
