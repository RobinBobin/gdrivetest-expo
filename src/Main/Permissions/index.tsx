import { Section } from '../../common'
import { Create } from './Create'
import { Delete } from './Delete'

// eslint-disable-next-line @typescript-eslint/no-shadow
export const Permissions: React.FC = () => {
  return (
    <Section title='Permissions'>
      <Create />
      <Delete />
    </Section>
  )
}
