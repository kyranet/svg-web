/** @type {import('prettier').Config} */
module.exports = {
	endOfLine: 'lf',
	printWidth: 150,
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: '*.yml',
			options: {
				tabWidth: 2,
				useTabs: false
			}
		}
	],
	plugins: [require.resolve('prettier-plugin-css-order'), require.resolve('prettier-plugin-tailwindcss')]
};
