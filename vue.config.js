module.exports = {
  // options...
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Fruity Bloom'
        return args
      })
  }
}
