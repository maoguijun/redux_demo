var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool:"cheap-module-eval-source-map",
  entry:[
    "webpack-hot-middleware/client",
    "./index"
  ],
  output:{
    path:path.join(__dirname,"dist"),
    filename:"bundle.js",
    publicPath:"/static/"
  },
  plugins:[
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8000/webpack-dev-server/' }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  module:{
    loaders:[
      {
        test:"/\.js/",
        loaders:["babel"],
        exclude:/node_modules/,
        include:__dirname
      }
    ]
  }
}