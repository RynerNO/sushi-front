import Dotenv from "dotenv-webpack"
import path from "path"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"

export default {
  // Define the entry points of our application (can be multiple for different sections of a website)
  entry: {
    main: "./src/js/main.js",
  },

  // Define the destination directory and filenames of compiled resources
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "./public"),
  },

  // Define development options
  devtool: "source-map",

  // Define loaders
  module: {
    rules: [
      // Use babel for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              }
            }
          },
          "sass-loader"
        ],
      },
      // File loader for images
      {
        test: /\.(jpg|jpeg|png|git|svg)$/i,
        type: "asset/resource",
      }
    ],
  },

  // Define used plugins
  plugins: [
    // Load .env file for environment variables in JS
    new Dotenv({
      path: "./.env"
    }),

    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),

    // Copy images to the public folder
    new CopyPlugin({
      patterns: [
        {
          from: "src/images",
          to: "images",
        }
      ]
    }),

    // Inject styles and scripts into the HTML
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "src", "html", "index.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: path.resolve(process.cwd(), "src", "html", "contacts.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: path.resolve(process.cwd(), "src", "html", "product.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'category.html',
      template: path.resolve(process.cwd(), "src", "html", "category.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(process.cwd(), "src", "html", "login.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: path.resolve(process.cwd(), "src", "html", "register.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: path.resolve(process.cwd(), "src", "html", "admin.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: path.resolve(process.cwd(), "src", "html", "about.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'delivery.html',
      template: path.resolve(process.cwd(), "src", "html", "delivery.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'policy.html',
      template: path.resolve(process.cwd(), "src", "html", "policy.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'cart.html',
      template: path.resolve(process.cwd(), "src", "html", "cart.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'finish-order.html',
      template: path.resolve(process.cwd(), "src", "html", "finish-order.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'edit_user.html',
      template: path.resolve(process.cwd(), "src", "html", "edit_user.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'cabinet.html',
      template: path.resolve(process.cwd(), "src", "html", "cabinet.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'edit_product.html',
      template: path.resolve(process.cwd(), "src", "html", "edit_product.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'show_order.html',
      template: path.resolve(process.cwd(), "src", "html", "show_order.html")
    }),
  ],

  // Configure the "webpack-dev-server" plugin
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), "public")
    },
    watchFiles: [
      path.resolve(process.cwd(), "src", "html", "index.html"),
      path.resolve(process.cwd(), "src", "html", "contacts.html"),
      path.resolve(process.cwd(), "src", "html", "category.html"),
      path.resolve(process.cwd(), "src", "html", "product.html"),
      path.resolve(process.cwd(), "src", "html", "login.html"),
      path.resolve(process.cwd(), "src", "html", "register.html"),
      path.resolve(process.cwd(), "src", "html", "admin.html"),
      path.resolve(process.cwd(), "src", "html", "about.html"),
      path.resolve(process.cwd(), "src", "html", "delivery.html"),
      path.resolve(process.cwd(), "src", "html", "policy.html"),
      path.resolve(process.cwd(), "src", "html", "cart.html"),
      path.resolve(process.cwd(), "src", "html", "finish-order.html"),
      path.resolve(process.cwd(), "src", "html", "edit_user.html"),
      path.resolve(process.cwd(), "src", "html", "cabinet.html"),
      path.resolve(process.cwd(), "src", "html", "edit_product.html"),
      path.resolve(process.cwd(), "src", "html", "show_order.html"),
    ],
    compress: true,
    port: process.env.PORT || 9090,
    hot: true,
  },

  // Performance configuration
  performance: {
    hints: false
  }
};
