module.exports = {
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 0 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 0,
    },
    parserOptions: {
        "parser": 'babel-eslint',
        "sourceType": "module",
        "ecmaVersion": 6
    },
    extends: ["plugin:vue/base"]
    // "parserOptions": {
    //     "sourceType": "module"
    // },
    // "parser": "babel-eslint"
};