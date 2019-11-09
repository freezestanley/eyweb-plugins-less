module.exports = {
    configureWebpack: config => {
        config
            .entry('index')
                .add(path.resolve(cwd, './src/index.js'))
                .end()
            .output
                .path(path.resolve(cwd, './dist'))
                .filename('[name].[hash:8].js')
                // .publicPath()
                .library('other')
                .libraryTarget('umd')
                }
}