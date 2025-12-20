import type { IWithSetIsSignedIn } from '../../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button, resetIdToken } from '../../common'

export const RevokeAccess: React.FC<IWithSetIsSignedIn> = ({
  setIsSignedIn
}) => {
  const revokeAccess = async (): Promise<void> => {
    await GoogleSignin.revokeAccess()

    resetIdToken(setIsSignedIn)
  }

  return (
    <Button hasMarginTop={false} onPress={revokeAccess} title='Revoke access' />
  )
}
