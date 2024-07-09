export interface IWebpackPaths {
  html: string
  src: string
  output: string
  entry: string
}
export type TWebpackMode = 'development' | 'production'

export interface IWebpackConfig {
  mode: TWebpackMode
  paths: IWebpackPaths
  port?: number
  isDev?: boolean
  isProd?: boolean
}
