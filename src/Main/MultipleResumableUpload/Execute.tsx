import type { IBaseProps } from './types'

import { Button, gdrive } from '../../common'

export const Execute: React.FC<IBaseProps> = ({ requestRef }) => {
  const execute = async (): Promise<void> => {
    requestRef.current = await gdrive.files
      .newResumableUploader()
      .setRequestBody({ name: `resumable bin ${Date.now()}` })
      .setShouldUseMultipleRequests(true)
      .execute()
  }

  return <Button onPress={execute} title='execute' />
}
