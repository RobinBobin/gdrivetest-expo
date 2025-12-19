import { STANDARD_PARAMETERS_FIELDS_ALL } from '@robinbobin/react-native-google-drive-api-wrapper'

import { Button, gdrive } from '../../common'

export const Get: React.FC = () => {
  const get = async (): Promise<unknown> => {
    return await gdrive.about.get(STANDARD_PARAMETERS_FIELDS_ALL)
  }

  return <Button onPress={get} title='Get' />
}
