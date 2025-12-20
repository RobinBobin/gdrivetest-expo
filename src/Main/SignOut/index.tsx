import type { IWithSetIsSignedIn } from '../../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button, resetIdToken } from '../../common'

export const SignOut: React.FC<IWithSetIsSignedIn> = ({ setIsSignedIn }) => {
  const signOut = async (): Promise<void> => {
    await GoogleSignin.signOut()

    resetIdToken(setIsSignedIn)
  }

  return <Button onPress={signOut} title='Sign out' />
}
