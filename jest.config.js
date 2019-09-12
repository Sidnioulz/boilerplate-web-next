// Used by jest, not by Next.js
module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  resolver: 'jest-webpack-resolver',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: [
    '**/tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',
  setupFiles: [
    '<rootDir>/tests/enzyme.config.js',
    '<rootDir>/tests/proptypes.config.js',
  ],
};
