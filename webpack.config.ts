import path from 'path'
import webpack from 'webpack'
import { IWebpackPaths, TWebpackMode } from './config/webpack/types/config'
import webpackConfig from './config/webpack/webpackConfig'

export interface IConfigEnvironments {
  port?: number
  mode?: TWebpackMode
}

export default ({ mode, port }: IConfigEnvironments): webpack.Configuration => {
  const isDev: boolean = mode ? mode === 'development' : true
  const isProd: boolean = !isDev
  const paths: IWebpackPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src')
  }
  return webpackConfig({ mode: mode || 'development', paths, isDev, isProd })
}
