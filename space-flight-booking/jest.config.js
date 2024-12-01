module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest', // Usar ts-jest para transformar archivos .ts
  },
  moduleFileExtensions: ['ts', 'js'], // Asegura que Jest pueda reconocer los archivos .ts y .js
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Asegúrate de que apunte a tu archivo tsconfig.json
    },
  },
};
