const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push(
  // Adds support for `.db` files for SQLite databases
  'cjs'
);

module.exports = defaultConfig;



// INSTALL THIS IF APP CRASHES AFTER FIREBASE-INSTALLATION//