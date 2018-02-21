const { join } = require('path')
const { zcPackAndWatch } = require('sparrow-packer')

const src = join(__dirname, 'src')
const dist = join(__dirname, 'dist')

zcPackAndWatch(src, dist, {
  sourceMap: true,
  uglify: false
})
