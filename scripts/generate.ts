import path from 'path'
import fse from 'fs-extra'
import { COMPONENTS_PATH } from './constants'
import { vueTemplate, indexTemplate } from './template'

const output = (dir: string, fname: string) => {
  return path.join(COMPONENTS_PATH, dir, fname)
}

export const transformToComponent = async (name: string, svg: string) => {
  const dir = name.toLowerCase()
  const index = indexTemplate(name)
  const component = vueTemplate(name, svg)
  await fse.outputFile(output(dir, 'index.ts'), index)
  await fse.outputFile(output(dir, `${name}.vue`), component)
}
