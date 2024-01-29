// rollup.config.mjs
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
	input: 'src/main.js',
	output: [
		{
			file: 'build/bundle.js',
			format: 'cjs'
		},
		{
			file: 'build/bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: [ json(), nodeResolve(), commonjs()]
};