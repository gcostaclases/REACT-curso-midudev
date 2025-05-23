// eslint.config.js
import eslintConfigPrettier from "eslint-config-prettier/flat";
const react = require("eslint-plugin-react");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
		plugins: {
			react,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		rules: {
			// ... any rules you want
			"react/react-in-jsx-scope": "warn",
			"react/prop-types": "warn",
			"no-unused-vars": "warn",
		},
		eslintConfigPrettier,
	},
]);
