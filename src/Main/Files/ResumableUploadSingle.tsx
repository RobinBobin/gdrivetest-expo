import { MIME_TYPES } from '@robinbobin/react-native-google-drive-api-wrapper'

import { Button, gdrive } from '../../common'

export const ResumableUploadSingle: React.FC = () => {
  const createFile = async (): Promise<unknown> => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const data = Array.from(Array(256 * 1024)).map((__, index) => index)

    const uploadRequest = await gdrive.files
      .newResumableUploader()
      .setDataMimeType(MIME_TYPES.application.octetStream)
      .setRequestBody({
        name: `resumable bin ${Date.now()}`
      })
      .execute()

    uploadRequest.setContentLength(data.length)

    return await uploadRequest.uploadChunk(data)
  }
  return <Button onPress={createFile} title='resumable upload (single)' />
}
