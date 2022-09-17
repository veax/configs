/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { getDefaultConfig } = require('metro-config')
const exclusionList = require('metro-config/src/defaults/exclusionList')
const { getMetroTools, getMetroAndroidAssetsResolutionFix } = require('react-native-monorepo-tools')
const monorepoMetroTools = getMetroTools()
const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix()

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      publicPath: androidAssetsResolutionFix.publicPath,
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      })
    },
    server: {
      // ...and to the server middleware.
      enhanceMiddleware: (middleware) => {
        return androidAssetsResolutionFix.applyMiddleware(middleware)
      }
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg', 'jsx', 'js', 'ts', 'tsx', 'cjs'],
      blockList: exclusionList(monorepoMetroTools.blockList),
      extraNodeModules: monorepoMetroTools.extraNodeModules
    },
    // Add additional Yarn workspace package roots to the module map.
    // This allows importing importing from all the project's packages.
    watchFolders: monorepoMetroTools.watchFolders
  }
})()
