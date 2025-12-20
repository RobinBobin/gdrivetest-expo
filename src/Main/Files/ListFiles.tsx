import { ListQueryBuilder } from '@robinbobin/react-native-google-drive-api-wrapper'

import { Button, gdrive } from '../../common'

export const ListFiles: React.FC = () => {
  const listFiles = async (): Promise<unknown> => {
    return await gdrive.files.list({
      fields: 'files/id,files/name',
      // eslint-disable-next-line id-length
      q: new ListQueryBuilder(
        '1Nxnus5JVwVjZMTxIi6_-9aVIfT0CPRKp',
        'in',
        'parents'
      )
    })
  }

  return <Button onPress={listFiles} title='list files' />
}
