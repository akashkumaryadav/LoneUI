const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: "./src/index.tsx", // Entry point
    output: {
      path: path.resolve(__dirname, "dist"), // Output directory
      filename: "bundle.js", // Output file name
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"], // File extensions to resolve
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, // Match .ts and .tsx files
          use: "babel-loader", // Use Babel for TypeScript files
          exclude: /node_modules/, // Exclude node_modules
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // HTML template
      }),
    ],
    devServer: {
      static: path.join(__dirname, "dist"), // Serve static files from dist
      port: 3003, // Port for the dev server
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
  };
};
