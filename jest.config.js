module.exports = {
  roots: ['src/'],
  verbose: true,
  collectCoverage: true,
  // file paths from where report needs to be collected
  // ! at the start means ignore the files matching the given regex
  collectCoverageFrom : [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!src/**/test/**/*",
    "!src/**/index.jsx",
    "!dist/*"
  ],
  // path to the directory where coverage report is to be stored
  coverageDirectory: 'coverage/',
  moduleFileExtensions: ['js', 'jsx'],
  // to mock the imports of modules like scss and images that are not necessarily needed for testing 
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};