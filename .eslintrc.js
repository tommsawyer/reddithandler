module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'mocha': true,
        'jquery': true,
        'browser': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'prefer-const': ['error', {
          'destructuring': 'any',
          'ignoreReadBeforeAssign': false
        }],
        'no-var': 'error',
        'no-else-return': 'error',
        'no-extra-bind': 'error',
        'no-path-concat': 'error',
        'no-multiple-empty-lines': 'error',
        'no-trailing-spaces': 'error',
        'no-eval': ['error', {'allowIndirect': true}]
    }
};
