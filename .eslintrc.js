module.exports = {
    "env": {
        "browser": true,
        "es6": true,
		"commonjs":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "off",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"no-unused-vars": "off",
		"no-console": "off",
		"eqeqeq":"warn",
		"no-undef":"warn",
    }
};
