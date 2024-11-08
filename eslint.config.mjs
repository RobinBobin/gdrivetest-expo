import config from '@robinbobin/ts-eslint-prettier/eslint.config.mjs'
import { ts } from '@robinbobin/ts-eslint-prettier/eslintRuleOptions/index.mjs'

export default [
  ...config,
  {
    ignores: ['babel.config.js']
  },
  {
    rules: {
      '@typescript-eslint/no-shadow': [
        'error',
        {
          ...ts.noShadow,
          allow: ['StyleSheet', 'Text']
        }
      ]
    }
  }
]
