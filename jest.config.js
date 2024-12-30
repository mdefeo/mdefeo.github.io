// jest.config.js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.ts'],
  testEnvironment: 'jsdom',
};
