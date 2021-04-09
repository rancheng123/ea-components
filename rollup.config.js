
// 打包vue2  单文件组件（Single-File Components ）
import vue from 'rollup-plugin-vue2'

// 提取css
//import css from 'rollup-plugin-css-only';

import scss from 'rollup-plugin-scss';

import babel from 'rollup-plugin-babel';

import jsx from 'rollup-plugin-jsx-js';


// import { eslint } from 'rollup-plugin-eslint';
// eslint({
//   include: ['src/packages/**'],
//   exclude: ['node_modules/**']
// }),


module.exports = {
  input: './src/packages/input2/index.js',
  output: {
    file: 'lib/button/index.js',
    format: 'umd',
    name: 'aaa'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',

      runtimeHelpers: true,
      "plugins": ["babel-plugin-transform-vue-jsx"],
      //"presets": [ "@babel/preset-env", "vue" ],
    }),
    //css(),
    scss(),
    vue(),
    //jsx({precise: true}),




  ]
}