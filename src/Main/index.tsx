import type { IWithSetIdToken } from '../common'

import { ScrollView } from 'react-native'

import { RevokeAccess } from './RevokeAccess'
import { SignOut } from './SignOut'

export const Main: React.FC<IWithSetIdToken> = ({ setIdToken }) => {
  return (
    <ScrollView>
      <RevokeAccess setIdToken={setIdToken} />
      <SignOut setIdToken={setIdToken} />
    </ScrollView>
  )
}
