export const vueTemplate = (name: string, svg: string) => `<script lang="ts">
import { defineComponent } from "vue";\n
export default defineComponent({
  name: '${name}',
  props: {
    size: {
      type: [String, Number],
      default: '50'
    }
  }
})
</script>\n
<template>
${svg}</template>
`

export const indexTemplate = (name: string) => `import { withInstall } from "../../utils";\n
import ${name}Vue from "./${name}.vue";\n
export const ${name} = withInstall(${name}Vue);\n
export default ${name}Vue;\n
`
export const installTemplate = `const install = (app: App) => {
  components.forEach((c: any) => {
    if (c.install) {
      app.use(c);
    } else if (c.name) {
      app.component(c.name, c);
    }
  });
};\n
export { install };
export default { install };
`

export const importTemplate = 'import { App } from \'vue\';\n'
