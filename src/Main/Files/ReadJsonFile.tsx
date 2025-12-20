import { Button, gdrive } from '../../common'

export const ReadJsonFile: React.FC = () => {
  const readJsonFile = async (): Promise<unknown> => {
    return await gdrive.files.getJson('json_file_id')
  }

  return <Button onPress={readJsonFile} title='read json file' />
}
