import type { ResumableUploadRequest } from '@robinbobin/react-native-google-drive-api-wrapper/js/src/aux/uploaders/implementations/ResumableUploader/ResumableUploadRequest'
import type { RefObject } from 'react'

interface IBaseProps {
  requestRef: RefObject<ResumableUploadRequest | undefined>
}

interface IProps extends IBaseProps {
  contentLengthRef: RefObject<number>
}

export type { IBaseProps, IProps }
