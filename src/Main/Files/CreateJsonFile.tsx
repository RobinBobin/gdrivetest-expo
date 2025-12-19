import { Button, gdrive } from '../../common'

export const CreateJsonFile: React.FC = () => {
  const createJsonFile = async (): Promise<unknown> => {
    return await gdrive.files
      .newMultipartUploader()
      .setDataMimeType('application/json')
      .setData(JSON.stringify({ aa: 10, bb: 20 }))
      .setRequestBody({ name: 'my json file' })
      .execute()
  }

  return <Button onPress={createJsonFile} title='create json file' />
}
