import { Button, gdrive } from '../../common'

export const Create: React.FC = () => {
  const create = async (): Promise<unknown> => {
    return await gdrive.permissions.create('file_id', {
      role: 'reader',
      type: 'anyone'
    })
  }

  return <Button onPress={create} title='create' />
}
