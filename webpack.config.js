const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src/client/index.tsx",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(jps|png|svg|gif|jpg|jpeg)$/i,
        use: ["url-loader", "img-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  plugins: [htmlWebpackPlugin],
};
