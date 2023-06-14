const { defineConfig } = require('@vue/cli-service');
const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
    const prefix_url = process.env.VUE_APP_PREFIX_URL;
module.exports = defineConfig({
  outputDir:prefix_url? path.resolve(__dirname,`./${prefix_url}`):'./dist',
  publicPath: process.env.NODE_ENV === 'production' && prefix_url 
   ? `/${prefix_url}/`
   : '/',
  transpileDependencies: true,
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
