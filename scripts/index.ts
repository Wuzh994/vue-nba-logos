import path from 'path'
import fse from 'fs-extra'
import { fetchLogo } from './fetchLogo'
import { svgOptimizer } from './svgOptimizer'
import { transformToComponent } from './generate'
import { collect } from './collect'
import { TEAM_ID, PKG_PATH } from './constants'

const cleanUp = async () => {
  fse.emptyDir(path.join(PKG_PATH, 'components'))
}

;(async () => {
  await cleanUp()
  const names = Object.keys(TEAM_ID)
  await Promise.all(
    names.map(async (name) => {
      const id = TEAM_ID[name]
      const svg = await fetchLogo(id)
      const svgo = await svgOptimizer(svg)
      await transformToComponent(name, svgo)
    })
  )
  await collect()
})()

