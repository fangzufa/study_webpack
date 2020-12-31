import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

// // 引入第三方模块
// import _ from 'lodash'
// console.log(_.each)

const sumRes = sum(10, 20)
console.log('sumRes', sumRes)

// // 开启热更新之后的代码逻辑
// if (module.hot) {
//   module.hot.accept(['./math'], () => {
//     const sumRes = sum(10, 20)
//     console.log('sumRes in hot', sumRes)
//   })
// }

// console.log('window.ENV', ENV)

// 引入图片
function insertImgElem(imgFile) {
  const img = new Image()
  img.src = imgFile
  document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)

// 引入动态数据 - 懒加载
setTimeout(() => {
  // 回顾 Vue React 异步组件
  // 定义 chunk
  import('./dynamic-data.js').then(res => {
    console.log(res.default.message) //注意这里的 default
  })
}, 1500)