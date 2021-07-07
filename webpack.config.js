const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  return {
    entry: './src/index.js',
    output: {
      filename: 'widget.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './dist',
    },
    plugins: isDevBuild ? [
      new webpack.SourceMapDevToolPlugin(),
    ] : [],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: !isDevBuild,
    },
    mode: isDevBuild ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(js|ts|tsx|jsx)$/,
          exclude: /node_modules/,
          use:
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              configFile: path.resolve(__dirname, '.babel.config.js'),
              compact: false,
              cacheDirectory: false,
              sourceMaps: false,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js'],
    },
  };
};