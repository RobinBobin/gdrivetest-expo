import { Button, gdrive } from '../../common'

export const Copy: React.FC = () => {
  const copy = async (): Promise<unknown> => {
    return await gdrive.files.copy('1o_-rYoJH1WO6bHOWrATC_TdcGZG_8wZY')
  }

  return <Button onPress={copy} title='Copy' />
}
