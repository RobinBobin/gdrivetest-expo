import type { IWithSetIsSignedIn } from '../types'

import { gdrive } from '../gdrive'

export const resetIdToken = (
  setIsSignedIn: IWithSetIsSignedIn['setIsSignedIn']
): void => {
  setIsSignedIn(false)

  gdrive.accessToken = ''
}
