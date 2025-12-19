import {
  ListQueryBuilder,
  MIME_TYPES,
  ROOT_FOLDER_ID
} from '@robinbobin/react-native-google-drive-api-wrapper'

import { Button, gdrive } from '../../common'

export const CreateIfNotExists: React.FC = () => {
  const createIfNotExists = async (): Promise<unknown> => {
    return await gdrive.files.createIfNotExists(
      {
        // eslint-disable-next-line id-length
        q: new ListQueryBuilder('name', '=', 'condition_folder')
          .and('mimeType', '=', MIME_TYPES.application.vndGoogleAppsFolder)
          .and(ROOT_FOLDER_ID, 'in', 'parents')
      },
      gdrive.files.newMetadataOnlyUploader().setRequestBody({
        mimeType: MIME_TYPES.application.vndGoogleAppsFolder,
        name: 'condition_folder',
        parents: [ROOT_FOLDER_ID]
      })
    )
  }

  return <Button onPress={createIfNotExists} title='create if not exists' />
}
