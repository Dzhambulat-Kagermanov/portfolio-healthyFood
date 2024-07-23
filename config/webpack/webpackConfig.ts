import webpack from 'webpack'
import { IWebpackConfig } from './types/config'
import { webpackLoaders } from './webpackLoaders'
import { webpackResolver } from './webpackResolvers'
import { webpackPlugins } from './webpackPlugins'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { webpackDevServer } from './webpackServer'

export default ({ mode, port, paths, isDev, isProd, analyze }: IWebpackConfig): webpack.Configuration => {
  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    module: {
      rules: webpackLoaders({ mode, port, paths, isDev, isProd })
    },
    plugins: webpackPlugins({ mode, port, paths, isDev, isProd, analyze }),
    resolve: webpackResolver({ mode, port, paths, isDev, isProd }),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: webpackDevServer({ mode, port, paths, isDev, isProd })
  }
}
