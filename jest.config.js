module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  verbose: true,
  detectOpenHandles: true,
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
};
