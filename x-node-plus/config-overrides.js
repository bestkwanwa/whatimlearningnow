const { override, fixBabelImports,addWebpackPlugin } = require('customize-cra');
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
module.exports = override(
    // 按需加载组件和样式
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // addWebpackPlugin(new AntdDayjsWebpackPlugin()),
);