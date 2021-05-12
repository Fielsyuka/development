module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: true, // for IE11
    }),
    require("css-declaration-sorter")({
      order: "smacss", // alphabetical/ smacss / concentric-css
    }),
    require("css-mqpacker")({
      sort: true, //SP first
    }),
  ],
};
