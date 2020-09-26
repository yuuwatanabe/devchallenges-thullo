const path = require("path")
const ts = require('typescript');
const ReactDocgenTypescriptPlugin = require("react-docgen-typescript-plugin").default;

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./app/main.tsx",
  // ファイルの出力設定
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "app"),
    hot: true,
    historyApiFallback: { index: "./public/index.html" }
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // ts-loader → babel-loaderの順にコンパイルする
        loader: ['babel-loader', 'ts-loader'],
      }
    ]
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // react-docgen-typescript-pluginのための設定
  plugins: [
    // Will default to loading your root tsconfig.json
    new ReactDocgenTypescriptPlugin(),
  ],
};