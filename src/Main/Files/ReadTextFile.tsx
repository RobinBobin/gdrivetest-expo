import { Button, gdrive } from '../../common'

export const ReadTextFile: React.FC = () => {
  const readTextFile = async (): Promise<unknown> => {
    return await gdrive.files.getText('text_file_id', {
      range: '1-5'
    })
  }

  return <Button onPress={readTextFile} title='read text file' />
}
