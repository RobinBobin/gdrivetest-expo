import { Button, gdrive } from '../../common'

export const EmptyTrash: React.FC = () => {
  const emptyTrash = async (): Promise<string> => {
    await gdrive.files.emptyTrash()

    return 'Trash emptied'
  }

  return <Button onPress={emptyTrash} title='empty trash' />
}
