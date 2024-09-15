module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Utilise ts-jest pour les fichiers TypeScript
    '^.+\\.(js|jsx)$': 'babel-jest',  // Utilise babel-jest pour les fichiers JS/JSX
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',  // Pour ignorer les imports de styles
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
