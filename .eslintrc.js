module.exports = {
    root: true,

    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },

    extends: ['airbnb-base', 'plugin:vue/recommended'],

    globals: {
        window: true,
        document: true,
    },

    rules: {
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],
        'function-paren-newline': [0],
        indent: ['error', 4, { SwitchCase: 1 }],
        'operator-linebreak': ['error'],
        'import/extensions': [0],
        'rule-empty-line-before': [0],
        'rule-nested-empty-line-before': [0],
        'rule-non-nested-empty-line-before': [0],
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
};
