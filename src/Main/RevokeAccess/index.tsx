import type { IWithSetIdToken } from '../../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button } from '../../common'

export const RevokeAccess: React.FC<IWithSetIdToken> = ({ setIdToken }) => {
  const revokeAccess = (): void => {
    const ff = async (): Promise<void> => {
      try {
        await GoogleSignin.revokeAccess()

        setIdToken(undefined)
      } catch (error) {
        console.log('revokeAccess() failed', error)
      }
    }

    void ff()
  }

  return (
    <Button hasMarginTop={false} onPress={revokeAccess} title='Revoke access' />
  )
}
