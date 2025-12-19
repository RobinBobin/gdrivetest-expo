import { Button, gdrive } from '../../common'

export const Delete: React.FC = () => {
  const _delete = async (): Promise<void> => {
    await gdrive.files.delete('1X1RWHyA3RjWEh9mSl5Qomma7aEJlVRnA')
  }

  return <Button onPress={_delete} title='delete' />
}
