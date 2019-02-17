const path = require('path');
// console.log('Dirname==========');
// console.log(path.resolve(__dirname));
// https://github.com/babel/babel-loader
// https://webpack.js.org/api/cli/

// Начнём с установки npm i  webpack webpack-cli.
// Для пользователей linux-подобных ОС может потребоваться запуск с root привилегиями (sudo npm i  webpack webpack-cli).
// После установки вебпак будет доступен для запуска из терминала
// npx webpack


module.exports = {
  entry: './js/app.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
},
  mode: 'development'
};
