import { IWebpackConfig } from './types/config'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const webpackLoaders = ({ isDev, isProd }: IWebpackConfig): webpack.RuleSetRule[] => {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: '/node_modules/',
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/'
  }
  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
    exclude: '/node_modules/'
  }
  const sassLoader = {
    test: /\.s[ac]ss$/,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[name]_[local]--[hash:base64:6]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ],
    exclude: '/node_modules/'
  }
  const assetImages = {
    test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'static/[hash][ext]'
    }
  }
  const assetFonts = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'static/[hash][ext]'
    }
  }

  return [babelLoader, tsLoader, assetImages, assetFonts, cssLoader, sassLoader]
}
