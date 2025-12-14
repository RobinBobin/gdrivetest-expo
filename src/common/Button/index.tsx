import type { ButtonProps } from 'react-native'

import { Fragment } from 'react'
import { Button as RNButton, View } from 'react-native'

interface IButtonProps extends ButtonProps {
  hasMarginTop?: boolean
}

export const Button: React.FC<IButtonProps> = ({
  hasMarginTop = true,
  ...props
}) => {
  return (
    <Fragment>
      {hasMarginTop && <View style={{ height: 10 }} />}
      <RNButton {...props} />
    </Fragment>
  )
}
