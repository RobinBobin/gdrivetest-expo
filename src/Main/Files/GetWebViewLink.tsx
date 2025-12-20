import { Button, gdrive } from '../../common'

export const GetWebViewLink: React.FC = () => {
  const getWebViewLink = async (): Promise<unknown> => {
    return await gdrive.files.getMetadata('some_id', {
      fields: 'webViewLink'
    })
  }

  return <Button onPress={getWebViewLink} title='get webViewLink' />
}
