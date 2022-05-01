module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  configureWebpack: {
    rules: [
      {
        test: /\.(pdf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'files/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}
