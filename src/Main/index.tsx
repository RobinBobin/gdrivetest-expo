import type { IWithSetIsSignedIn } from '../common'

import { ScrollView } from 'react-native'

import { About } from './About'
import { Files } from './Files'
import { MultipleResumableUpload } from './MultipleResumableUpload'
// eslint-disable-next-line @typescript-eslint/no-shadow
import { Permissions } from './Permissions'
import { RevokeAccess } from './RevokeAccess'
import { SignOut } from './SignOut'

export const Main: React.FC<IWithSetIsSignedIn> = ({ setIsSignedIn }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RevokeAccess setIsSignedIn={setIsSignedIn} />
      <SignOut setIsSignedIn={setIsSignedIn} />
      <About />
      <Files />
      <MultipleResumableUpload />
      <Permissions />
    </ScrollView>
  )
}
