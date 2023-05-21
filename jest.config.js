module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  bail: true,
  verbose: true,
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "vue"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  // collectCoverageFrom: [ 'src/components/**/*.{ts,vue}' ],
  coverageReporters: ["text"],
};
