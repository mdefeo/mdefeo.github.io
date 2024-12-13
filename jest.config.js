module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  projects: [
    {
      displayName: 'backend',
      testMatch: ['<rootDir>/tests/backend/**/*.test.ts'],
      testEnvironment: 'node',
      globals: {
        'ts-jest': {
          tsconfig: '<rootDir>/backend/tsconfig.json'
        }
      }
    },
    {
      displayName: 'frontend',
      testMatch: ['<rootDir>/tests/frontend/**/*.test.ts'],
      testEnvironment: 'jsdom',
      globals: {
        'ts-jest': {
          tsconfig: '<rootDir>/frontend/tsconfig.json'
        }
      }
    }
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
