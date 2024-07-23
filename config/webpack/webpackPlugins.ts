import { IWebpackConfig } from './types/config'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const webpackPlugins = ({ paths, isProd, analyze }: IWebpackConfig): webpack.WebpackPluginInstance[] => {
  const result: any[] = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    isProd
      ? new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8.css]'
        })
      : undefined,
    new webpack.ProgressPlugin(),
    analyze &&
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
  ]

  return result
}
