import { ResolveOptions } from 'webpack'
import { IWebpackConfig } from './types/config'

export const webpackResolver = ({ paths }: IWebpackConfig): ResolveOptions => {
  const resolve = {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    preferAbsolute: true,
    alias: {
      '*': paths.src
    }
  }
  paths.public && resolve.modules.push(paths.public)
  return resolve
}
