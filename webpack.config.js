const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "public/assets"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false, // url()を取り込まない
            },
          },
          "postcss-loader",
          "sass-loader",
          "import-glob-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "./style.css" })],
};
