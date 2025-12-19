import { Button, gdrive } from '../../common'

export const CreateTextFile: React.FC = () => {
  const createTextFile = async (): Promise<unknown> => {
    return await gdrive.files
      .newMultipartUploader()
      .setData('cm9iaW4=')
      .setDataMimeType('text/plain')
      .setIsBase64(true)
      .setRequestBody({
        name: 'base64 text'
      })
      .execute()
  }

  return <Button onPress={createTextFile} title='create text file' />
}
