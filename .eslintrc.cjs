module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: ['@hckrnews/eslint-config'],
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint',
        babelOptions: {
            configFile: 'babel.config.js',
        },
    },
    rules: {
        'import/extensions': [
            'error',
            {
                js: 'never',
                mjs: 'always',
                json: 'always',
            },
        ],
        'arrow-parens': ['error', 'always'],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
