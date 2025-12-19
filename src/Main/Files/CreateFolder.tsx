import {
  MIME_TYPES,
  ROOT_FOLDER_ID
} from '@robinbobin/react-native-google-drive-api-wrapper'

import { Button, gdrive } from '../../common'

export const CreateFolder: React.FC = () => {
  const createFolder = async (): Promise<unknown> => {
    return await gdrive.files
      .newMetadataOnlyUploader()
      .setRequestBody({
        mimeType: MIME_TYPES.application.vndGoogleAppsFolder,
        name: 'Folder',
        parents: [ROOT_FOLDER_ID]
      })
      .execute()
  }

  return <Button onPress={createFolder} title='create folder' />
}
