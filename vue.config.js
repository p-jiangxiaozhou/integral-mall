const fs=require("fs");

module.exports = {
    lintOnSave: false,
    publicPath: './',
    devServer: {
      port: 8080,
     
      disableHostCheck: true,
      hot: true,
    
      after(app) {
        app.get('/mock/:id', (req, res) => {
          const id = req.params.id
          const filePath = `./mock/${id}.json`
          const content = fs.readFileSync(filePath, {
            encoding: 'utf-8',
            flag: 'r'
          })
  
          res.send(content)
        })
      },
    },
    configureWebpack: {
      resolve: {
        alias: {},
      },
    },
  
    productionSourceMap: false,
    filenameHashing: false,
    css: {
      modules: false,
      extract: true,
      sourceMap: false,
      loaderOptions: {
   
      },
    },
  };
  