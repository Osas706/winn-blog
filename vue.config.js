// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module.rules.delete("svg");

    config.module
      .rule("svg")
      .test(/\.(svg)(\?.*)?$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
