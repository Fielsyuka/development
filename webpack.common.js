const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/assets/js/main.js", "./src/assets/sass/style.scss"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./assets/js/[name].bundle.js",
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
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: "3000",
      server: { baseDir: ["public"] },
      online: true,
      open: "external",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/index.html",
          to: "./",
        },
      ],
    }),
    new MiniCssExtractPlugin({ filename: "./css/style.css" }),
  ],
};
