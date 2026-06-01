// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",

//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

//   moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },

//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//     "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
//   },
// };
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
