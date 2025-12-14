import type { IWithSetIdToken } from '../../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button } from '../../common'

export const SignOut: React.FC<IWithSetIdToken> = ({ setIdToken }) => {
  const signOut = (): void => {
    const ff = async (): Promise<void> => {
      try {
        await GoogleSignin.signOut()

        setIdToken(undefined)
      } catch (error) {
        console.log('signOut() failed', error)
      }
    }

    void ff()
  }

  return <Button onPress={signOut} title='Sign out' />
}
