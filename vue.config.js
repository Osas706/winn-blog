// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  }
}


/*svgRule
.use("babel-loader")
.loader("babel-loader")
.end()
.use("vue-svg-loader")
.loader("vue-svg-loader");
*/