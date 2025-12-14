import parentConfig from '@robinbobin/eslint-config-react-native'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  parentConfig,
  {
    rules: {
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'error',
        {
          ignoreInferredTypes: true
        }
      ]
    }
  }
])
