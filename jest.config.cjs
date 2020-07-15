module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', '.mjs', 'cjs'],

    transform: {
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.mjs?$': 'babel-jest',
        '^.+\\.cjs?$': 'babel-jest',
    },

    transformIgnorePatterns: ['/node_modules/'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx|mjs|cjs)',
    ],

    testURL: 'http://localhost/',

    collectCoverage: true,
    collectCoverageFrom: ['src/*.js', 'src/*.mjs', 'src/*.cjs'],
};
