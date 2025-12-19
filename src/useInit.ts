import type { Dispatch, SetStateAction } from 'react'

import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useEffect, useState } from 'react'

import { gdrive } from './common'

type TUseInitReturnType = [boolean, Dispatch<SetStateAction<boolean>>]

export const useInit = (): TUseInitReturnType => {
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const ff = async (): Promise<void> => {
      try {
        GoogleSignin.configure({
          scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.appfolder'
          ],
          webClientId:
            '300184074915-mfinacbun435ivbu16g3rtq83cdan7g9.apps.googleusercontent.com'
        })

        const { type } = await GoogleSignin.signInSilently()

        if (type === 'success') {
          const { accessToken } = await GoogleSignin.getTokens()

          gdrive.accessToken = accessToken

          setIsValid(true)
        }
      } catch (error) {
        console.log('useInit() failed', error)
      }
    }

    void ff()
  }, [])

  return [isValid, setIsValid]
}
