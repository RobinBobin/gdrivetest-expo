import type { IWithSetIsIdTokenValid } from '../../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button, resetIdToken } from '../../common'

export const SignOut: React.FC<IWithSetIsIdTokenValid> = ({
  setIsIdTokenValid
}) => {
  const signOut = async (): Promise<void> => {
    await GoogleSignin.signOut()

    resetIdToken(setIsIdTokenValid)
  }

  return <Button onPress={signOut} title='Sign out' />
}
