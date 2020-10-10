module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // 专门支持了 eslint-plugin-react
    'prettier/react',
    // 专门支持了 @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        // import 模块时，不写后缀将尝试导入的后缀，出现频率高的文件类型放前面
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {
        // directory: [resolve('./src/tsconfig.json'), resolve('./scripts/tsconfig.json')],
      },
    },
  },
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/no-extra-semi': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never', json: 'never', js: 'never' },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 'array-bracket-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-curly-spacing': ['error', 'always'],
  },
}
