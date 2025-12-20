import type { IProps } from './types'

import { Button } from '../../common'

export const SetContentLength: React.FC<IProps> = ({
  contentLengthRef,
  requestRef
}) => {
  const setContentLength = (): void => {
    contentLengthRef.current =
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      (requestRef.current?.transferredByteCount ?? 0) + 2

    requestRef.current?.setContentLength(contentLengthRef.current)
  }

  return <Button onPress={setContentLength} title='set content length' />
}
