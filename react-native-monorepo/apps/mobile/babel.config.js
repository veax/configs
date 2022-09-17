module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false
      }
    ],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@root',
            rootPathSuffix: './src'
          },
          {
            rootPathPrefix: '@assets',
            rootPathSuffix: './assets'
          }
        ]
      }
    ],
    ['react-native-reanimated/plugin']
  ]
}
