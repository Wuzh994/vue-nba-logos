import { OptimizeOptions } from 'svgo'

export default {
  js2svg: {
    indent: 2,
    pretty: true
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          inlineStyles: {
            onlyMatchedOnce: false
          }
        }
      }
    },
    {
      name: 'convertStyleToAttrs',
      params: {
        keepImportant: true
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attribute: ':width="size" :height="size"'
      }
    }
  ]
} as OptimizeOptions
