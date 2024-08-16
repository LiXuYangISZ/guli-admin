'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
    // 这里写成9001【Nginx】或者 8222【Gateway】都是可以的~
    BASE_API: '"http://localhost:9001"',
    OSS_PATH: '"https://guli-photos.oss-cn-hangzhou.aliyuncs.com"'
})