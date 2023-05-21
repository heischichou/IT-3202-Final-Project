module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  bail: true,
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js"
  },
  transform: {
    "^.+\\.vue$": "vue-jest",
    "\\.[jt]sx?$": 'babel-jest',
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "vue"
  ],
};
