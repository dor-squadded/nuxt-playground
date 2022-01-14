module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
	],
	globals: {
		spyOn: true,
		jasmine: true,
	},
	// add your custom rules here
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'no-tabs': 'off',
		'object-shorthand': 'off',
		semi: ['error', 'always'],
		'space-before-function-paren': 'off',
		'vue/html-indent': ['error', 'tab'],
		indent: [
			'error',
			'tab',
			{
				flatTernaryExpressions: true,
			},
		],
		'multiline-ternary': 'off',
		'vue/no-mutating-props': 'warn',
	},
};
