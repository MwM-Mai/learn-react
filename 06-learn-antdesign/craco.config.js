// 当前路径
const path = require("path")
// 定义一个函数(path.resolve() 它的作用是拼接路径) __dirname: 当前这个文件代表的路径
const resolve = dir => path.resolve(__dirname, dir)


module.exports = {
  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
}