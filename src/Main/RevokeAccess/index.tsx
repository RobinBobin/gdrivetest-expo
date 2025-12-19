import type { IWithSetIsIdTokenValid } from '../../common'

import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { Button, resetIdToken } from '../../common'

export const RevokeAccess: React.FC<IWithSetIsIdTokenValid> = ({
  setIsIdTokenValid
}) => {
  const revokeAccess = async (): Promise<void> => {
    await GoogleSignin.revokeAccess()

    resetIdToken(setIsIdTokenValid)
  }

  return (
    <Button hasMarginTop={false} onPress={revokeAccess} title='Revoke access' />
  )
}
