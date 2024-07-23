import path from 'path'
import webpack from 'webpack'
import { IWebpackPaths, TWebpackMode } from './config/webpack/types/config'
import webpackConfig from './config/webpack/webpackConfig'

export interface IConfigEnvironments {
  port?: number
  mode?: TWebpackMode
  analyze?: boolean
}

export default ({ mode, port, analyze }: IConfigEnvironments): webpack.Configuration => {
  const isDev: boolean = mode ? mode === 'development' : true
  const isProd: boolean = !isDev
  const paths: IWebpackPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  }
  return webpackConfig({ mode: mode || 'development', paths, isDev, isProd, analyze, port })
}
