import type { IProps } from './types'

import { Button } from '../../common'

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const data = Array.from(Array(256 * 1024)).map((__, index) => index)

export const UploadChunk: React.FC<IProps> = ({
  contentLengthRef,
  requestRef
}) => {
  const uploadChunk = async (): Promise<void> => {
    const chunk =
      contentLengthRef.current ?
        data.slice(
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          0,
          contentLengthRef.current -
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            (requestRef.current?.transferredByteCount ?? 0)
        )
      : data

    console.log(await requestRef.current?.uploadChunk(chunk))
    console.log(await requestRef.current?.requestUploadStatus())

    console.log(
      'requestRef.current?.transferredByteCount',
      requestRef.current?.transferredByteCount
    )
  }

  return <Button onPress={uploadChunk} title='upload chunk' />
}
