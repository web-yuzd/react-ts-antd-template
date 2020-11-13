const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, '.', dir)

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirctory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: {
        // '@primary-color': '#12c2c2'
      },
      javascriptEnabled: true,
    },
  }),
  addWebpackAlias({
    '@': resolve('src'),
  }),
)
