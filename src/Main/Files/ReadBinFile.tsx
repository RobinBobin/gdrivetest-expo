import { Button, gdrive } from '../../common'

export const ReadBinFile: React.FC = () => {
  const readBinFile = async (): Promise<unknown> => {
    return await gdrive.files.getBinary('bin_file_id', {
      range: '2-4'
    })
  }

  return <Button onPress={readBinFile} title='read bin file' />
}
