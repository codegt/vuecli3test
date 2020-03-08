const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // configureWebpack: {
    //     resolve: {
    //         alias: { // 别名配置 其他地方使用 加 ~
    //             'assets': '@/assets',
    //             'common': '@/common',
    //             'components': '@/components',
    //             'network': '@/network',
    //             'views': '@/views'
    //         }
    //     }
    // },
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@assets', resolve('src/assets'))
            .set('@common', resolve('src/common'))
            .set('@components', resolve('src/components'))
            .set('@network', resolve('src/network'))
            .set('@views', resolve('src/views'))
    }

}