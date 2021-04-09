
// 打包vue2  单文件组件（Single-File Components ）
import vue from 'rollup-plugin-vue2'

import scss from 'rollup-plugin-scss';

import babel from 'rollup-plugin-babel';

// let target = 'input/index.jsx'
// let out = 'lib/input/index.js';

let target = 'index.js';
let out = 'lib/ea/index.js';


module.exports = {
  input: './src/packages/' + target,
  output: {
    file: out,
    format: 'umd',
    name: 'aaa'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      "plugins": [
        //"babel-plugin-transform-vue-jsx",
        "@babel/plugin-syntax-jsx",
      ],
    }),
    scss(),
    vue(),
  ]
}