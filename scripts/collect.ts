import path from "path"
import fse from 'fs-extra'
import { COMPONENTS_PATH } from "./constants"
import { importTemplate, installTemplate, declareTemplateToVue } from "./template"

export const collect = async () => {
  const names = await fse.readdir(COMPONENTS_PATH)

  const imports = names.map((i) => `import { ${i.toUpperCase()} } from './${i}/index';`).join('\n')
  const exports = names.map((i) => `export * from './${i}';`).join('\n')
  const components = `const components = [${names.map(i => i.toUpperCase())}];\n`

  const outer = [importTemplate, imports, components, installTemplate, exports].join('\n')
  const resolvePath = path.join(COMPONENTS_PATH, 'index.ts')
  await fse.writeFile(resolvePath, outer)
  
  const declarePath = path.join(COMPONENTS_PATH, 'index.d.ts');
  //声明文件
  await fse.writeFile(declarePath, declareTemplateToVue);
}
