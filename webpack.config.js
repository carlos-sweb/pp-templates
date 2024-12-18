const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './main.js',
  resolve: {
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, // Extrae el CSS en un archivo separado
          { 
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          { 
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins:[new MiniCssExtractPlugin({ filename: 'styles.css' })],
  optimization:{ minimizer:[ new CssMinimizerPlugin() ] }
};

