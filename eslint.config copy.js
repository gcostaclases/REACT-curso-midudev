// eslint.config.js
import react from "eslint-plugin-react";
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
		env: {
			browser: true,
			es2021: true,
			node: true,
		},
		extends: ["plugin:react/recommended", "standard", "prettier"],
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			ecmaVersion: 12,
			sourceType: "module",
		},
		plugins: ["react"],
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			//Esto es lo que más quería que es que no me salga en rojo cuando no usé una variable, me sale en amarillo
			"no-unused-vars": "warn",
		},
	},
]);
