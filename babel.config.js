module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage", // 必要なpollyfillのみimport
          corejs: 3, // version指定しないと2が使われる
        },
      ],
    ],
  };
};
