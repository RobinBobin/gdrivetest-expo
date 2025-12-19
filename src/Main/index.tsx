import type { IWithSetIsIdTokenValid } from '../common'

import { ScrollView } from 'react-native'

import { About } from './About'
import { Files } from './Files'
import { RevokeAccess } from './RevokeAccess'
import { SignOut } from './SignOut'

export const Main: React.FC<IWithSetIsIdTokenValid> = ({
  setIsIdTokenValid
}) => {
  return (
    <ScrollView>
      <RevokeAccess setIsIdTokenValid={setIsIdTokenValid} />
      <SignOut setIsIdTokenValid={setIsIdTokenValid} />
      <About />
      <Files />
    </ScrollView>
  )
}
