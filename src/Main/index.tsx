import type { IWithSetIsSignedIn } from '../common'

import { ScrollView } from 'react-native'

import { About } from './About'
import { Files } from './Files'
import { RevokeAccess } from './RevokeAccess'
import { SignOut } from './SignOut'

export const Main: React.FC<IWithSetIsSignedIn> = ({ setIsSignedIn }) => {
  return (
    <ScrollView>
      <RevokeAccess setIsSignedIn={setIsSignedIn} />
      <SignOut setIsSignedIn={setIsSignedIn} />
      <About />
      <Files />
    </ScrollView>
  )
}
