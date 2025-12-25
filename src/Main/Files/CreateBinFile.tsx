import { MIME_TYPES } from '@robinbobin/react-native-google-drive-api-wrapper'

import { Button, gdrive } from '../../common'

export const CreateBinFile: React.FC = () => {
  const createBinFile = async (): Promise<unknown> => {
    return await gdrive.files
      .newMultipartUploader()
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      .setData([1, 2, 3, 4, 5])
      .setDataMimeType(MIME_TYPES.application.octetStream)
      .setRequestBody({
        name: 'bin'
        //parents: ["folder_id"]
      })
      .execute()
  }

  return <Button onPress={createBinFile} title='create bin file' />
}
