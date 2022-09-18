module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-filename-extension': [0],
        'linebreak-style': [0],
        '@typescript-eslint/quotes': [0],
        'no-lone-blocks': [0],
        'arrow-body-style': [0],
        'no-trailing-spaces': [0],
        'no-console': [0],
        'max-classes-per-file': [0],
        '@typescript-eslint/lines-between-class-members': [0],
    },
};