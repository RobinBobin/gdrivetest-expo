import type { ResumableUploadRequest } from '@robinbobin/react-native-google-drive-api-wrapper/js/src/aux/uploaders/implementations/ResumableUploader/ResumableUploadRequest'

import { useRef } from 'react'

import { Section } from '../../common'
import { Execute } from './Execute'
import { SetContentLength } from './SetContentLength'
import { UploadChunk } from './UploadChunk'

export const MultipleResumableUpload: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const contentLength = useRef(0)
  const request = useRef<ResumableUploadRequest>(undefined)

  return (
    <Section title='Multiple resumable upload'>
      <Execute requestRef={request} />
      <UploadChunk contentLengthRef={contentLength} requestRef={request} />
      <SetContentLength contentLengthRef={contentLength} requestRef={request} />
    </Section>
  )
}
