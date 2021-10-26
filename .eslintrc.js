module.exports = {
    'end': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
    },
    'extends': [
        'google',
    ],
    'parserOptions': {
        'ecmaVersion': 13,
    },
    'rules': {
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
    },
};