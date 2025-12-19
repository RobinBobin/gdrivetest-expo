import type { PropsWithChildren } from 'react'

import { Text, View } from 'react-native'

import styles from './styles'

interface ISectionProps extends PropsWithChildren {
  title: string
}

export const Section: React.FC<ISectionProps> = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {children}
    </View>
  )
}
