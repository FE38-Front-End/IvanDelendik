const path = require("path");

const pages = ["index", "product", "product_roster", "product_small"];
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getHtmlPlugins = (pages) => {
  return pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `./${page}.html`,
      })
  );
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./[name].bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: getHtmlPlugins(pages),
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|otf|jpg|jpeg)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
};
