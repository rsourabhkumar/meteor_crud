module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    setupFiles:['<rootDir>/tests/setup.js'],
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: [
      'js',
      'jsx',
    ],
    modulePaths: [
      '<rootDir>/node_modules/',
      '<rootDir>/node_modules/jest-meteor-stubs/lib/',
    ],
    moduleNameMapper: {
      "meteor/(.*)": "<rootDir>/.meteorMocks/index.js",
    //   "meteor/(.*)": "<rootDir>/.meteor/local/build/programs/server/packages/$1.js",
    //   "meteor/(.*)": "<rootDir>/tests/$1.js",
      '^(.*):(.*)$': '$1_$2',
    },
    unmockedModulePathPatterns: [
      '/^imports\\/.*\\.jsx?$/',
      '/^node_modules/',
    ],
  };