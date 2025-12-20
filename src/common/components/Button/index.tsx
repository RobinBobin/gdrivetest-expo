import type { ButtonProps } from 'react-native'

import { Fragment } from 'react'
import { Button as RNButton, View } from 'react-native'

interface IButtonProps extends Omit<ButtonProps, 'onPress'> {
  hasMarginTop?: boolean
  onPress?: (() => Promise<unknown>) | (() => unknown)
}

export const Button: React.FC<IButtonProps> = ({
  hasMarginTop = true,
  onPress,
  title,
  ...props
}) => {
  const onPressWrapper = async (): Promise<void> => {
    try {
      const rawResult = await onPress?.()
      const result = rawResult ?? `'${title}' succeeded`

      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      {hasMarginTop && <View style={{ height: 10 }} />}
      <RNButton
        {...props}
        onPress={() => void onPressWrapper()}
        title={title}
      />
    </Fragment>
  )
}
