const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
  { name: 'index', entry: './src/js/index.js', style: './src/css/index.css' },
  { name: 'silverstar', entry: './src/js/silverstar.js', style: './src/css/silverstar.css' },
];

module.exports = {
  entry: {
    main: ['./src/js/main.js', './src/css/main.css'], // Main JS and CSS
    vendor: ['sweetalert2', 'lenis'], // Vendor libraries
    ...pages.reduce((config, page) => {
      config[page.name] = {
        import: [page.entry, page.style], // Correct entry structure for each page
      };
      return config;
    }, {}),
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development', // Set the mode to 'production' to minify, otherwise use 'development'
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // Enable parallelization for faster minification
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors', // Naming the vendor file 'vendors.js'
          chunks: 'all',
        },
      },
    },
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Enable caching for Babel to speed up subsequent builds
          },
        },
      },
      {
        test: /\.css$/i, // For handling CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(mp4|webm)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'video/[name][ext]', // Keeps videos inside 'video/'
        },
      },
      {
        test: /\.ico$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]', // Keeps favicon in the root (like before)
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext]', // Keeps fonts inside 'font/'
        },
      },
      {
        test: /\.(png|jpe?g|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            // Extracts relative path from 'src/img' and maintains structure
            const relativePath = path.relative('src/img', pathData.module.resource);
            return `img/${relativePath}`;
          },
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]', // Keep SVGs in the img folder
        },
        use: [
          {
            loader: 'svgo-loader',
            options: {
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { convertColors: { shorthex: false } },
                  { removeHiddenElems: true },
                  { removeEmptyText: true },
                  { removeUselessStrokeAndFill: true },
                  { cleanupNumericValues: { floatPrecision: 2 } },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // Extract CSS into a separate file
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['imagemin-mozjpeg', { quality: 70 }],
            ['imagemin-pngquant', { quality: [0.70, 0.80] }],
          ],
        },
      },
      generator: [
        {
          type: 'asset',
          preset: 'webp',
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [['imagemin-webp', { quality: 75 }]],
          },
          filename: 'img/[name].webp',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/**/*.html',
          to({ absoluteFilename }) {
            // Preserve the original structure inside 'dist'
            return path.relative('src', absoluteFilename);
          },
        },
      ],
    }),
  ],
  watchOptions: {
    ignored: ['**/node_modules/**', '**/dist/**', '**/test/**'], // Improves performance
  },
};