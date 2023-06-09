module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  bail: true,
  verbose: true,
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "vue"],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/styleMock.ts',
  },
  testEnvironment: "jsdom",
  clearMocks: true,
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: [ 
    'src/components/**/*.{ts,vue}',
    "./tests/unit/**/*.{js,jsx,ts,tsx,vue}",
    "!./tests/unit/**/_*.{js,jsx,ts,tsx,vue}",
  ],  
  coverageReporters: ["text"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testMatch: [
    "<rootDir>/tests/unit/**/*.spec.ts",
  ],
};
