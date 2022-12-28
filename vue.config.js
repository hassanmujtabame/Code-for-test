const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {

    port: 8050,
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "disabled"
      })
    ]
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
})
