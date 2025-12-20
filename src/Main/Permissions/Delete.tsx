import { Button, gdrive } from '../../common'

export const Delete: React.FC = () => {
  const _delete = async (): Promise<string> => {
    await gdrive.permissions.delete('file_id', 'permission_id')

    return 'Permission deleted'
  }

  return <Button onPress={_delete} title='delete' />
}
