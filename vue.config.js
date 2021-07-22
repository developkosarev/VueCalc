// vue.config.js
module.exports = {
  publicPath: "./",
  filenameHashing: false,
  
  devServer: {  
    port: 8080,  
    proxy: {
      '/': {
        target: 'http://localhost:3000'        
      }
    }
  }    
};
