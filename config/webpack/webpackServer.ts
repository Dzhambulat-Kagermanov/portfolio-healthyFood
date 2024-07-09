import { IWebpackConfig } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const webpackDevServer = ({ port }: IWebpackConfig): DevServerConfiguration => {
  return {
    port: port || 3000,
    hot: false,
    liveReload: true,
    open: true
  }
}
