// export { default as Avatar } from './avatar'
// export { default as Badge } from './badge'
// export { default as Cell } from './Cell'
// export { default as CellGroup } from './Cell'
// export { default as Icon } from './icon'
import Avatar from './avatar'
import Badge from './badge'
import Cell from './Cell'
import Icon from './icon'

const CellGroup = Cell.Group

export {
  Avatar,
  Badge,
  Cell,
  CellGroup,
  Icon
}

// const components = {
//   Avatar,
//   Badge,
//   Cell,
//   CellGroup: Cell.group,
//   Icon
// }

// const wheel = {
//   version: '1.0.0',
//   ...components
// }

// const install = function (Vue, opts = {}) {
//   Object.keys(wheel).forEach(key => {
//     Vue.component(key, wheel[key])
//   })
// }

// // auto install
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// const API = {
//   version: '1.0.0',
//   install,
//   ...components
// }
// export default wheel
// module.exports.default = module.exports = { wheel }

// module.exports = {
//   version: '1.0.0',
//   ...components
// }

// module.exports.default = module.exports
