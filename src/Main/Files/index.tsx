import { Section } from '../../common'
import { Copy } from './Copy'
import { CreateBinFile } from './CreateBinFile'
import { CreateFolder } from './CreateFolder'
import { CreateIfNotExists } from './CreateIfNotExists'
import { CreateJsonFile } from './CreateJsonFile'
import { CreateTextFile } from './CreateTextFile'
import { Delete } from './Delete'
import { EmptyTrash } from './EmptyTrash'
import { ResumableUploadSingle } from './ResumableUploadSingle'

export const Files: React.FC = () => {
  return (
    <Section title='Files'>
      <Copy />
      <CreateBinFile />
      <CreateFolder />
      <CreateJsonFile />
      <CreateIfNotExists />
      <CreateTextFile />
      <Delete />
      <EmptyTrash />
      <ResumableUploadSingle />
    </Section>
  )
}
