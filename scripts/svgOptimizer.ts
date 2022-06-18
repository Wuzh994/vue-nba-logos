import { optimize, OptimizedSvg } from 'svgo'
import options from './svgo.config'

export const svgOptimizer = async (svg: string) => {
  const { data: svgo } = optimize(svg, options) as OptimizedSvg
  return svgo
}
