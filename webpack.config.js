const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/hello.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  output: {
    filename: 'src/hello.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs2",
  },
};