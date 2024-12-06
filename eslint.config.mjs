import config from '@robinbobin/ts-eslint-prettier/eslint.config.mjs'
import configPluginReactHooks from '@robinbobin/ts-eslint-prettier/eslint.config.plugin.react.hooks.mjs'
import { ts } from '@robinbobin/ts-eslint-prettier/eslintRuleOptions/index.mjs'

export default [
  ...config,
  ...configPluginReactHooks,
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
