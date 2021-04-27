
// 打包vue2  单文件组件（Single-File Components ）
import vue from 'rollup-plugin-vue2'

import scss from 'rollup-plugin-scss';

import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

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

    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      //include: 'node_modules/**',
     // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',

      // ignores indent and generates the smallest code
      compact: true, // Default: false

      // generate a named export for every property of the JSON object
      namedExports: true // Default: true
    })
  ]
}