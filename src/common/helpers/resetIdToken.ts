import type { IWithSetIsIdTokenValid } from '../types'

import { gdrive } from '../gdrive'

export const resetIdToken = (
  setIsIdTokenValid: IWithSetIsIdTokenValid['setIsIdTokenValid']
): void => {
  setIsIdTokenValid(false)

  gdrive.accessToken = ''
}
