'use strict';
import webpack from 'webpack';
import path from 'path';

import { PRODUCTION } from './config';
import paths from './paths';

const entryPoints = {
  bundle: path.resolve(__dirname, paths.src.scripts),
};

export const config = {
  entry: Object.keys(entryPoints).reduce((acc, currentKey) => {
    acc[currentKey] = [entryPoints[currentKey]];
    return acc;
  }, {}),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, paths.build.scripts),
    publicPath: '/assets/js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'src/assets/js'),
          path.resolve(__dirname, 'src/assets/components'),
          path.resolve(__dirname, 'node_modules/gsap'),
          path.resolve(__dirname, 'node_modules/lazysizes'),
          path.resolve(__dirname, 'node_modules/scrollmagic'),
          path.resolve(__dirname, 'node_modules/scrollmagic-plugin-gsap'),
          path.resolve(__dirname, 'node_modules/swiper'),
        ],
        use: [
          'babel-loader',
          {
            options: {
              eslintPath: require.resolve('eslint'),
              cache: true,
              configFile: path.resolve('.eslintrc'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class',
      'react-dom-factories': 'preact-compat/lib/react-dom-factories',
      ScrollMagic: path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
      ),
      'animation.gsap': path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
      ),
    },
  },
  devtool: PRODUCTION ? undefined : 'eval',
  mode: PRODUCTION ? 'production' : 'development',
  optimization: {
  minimize: PRODUCTION,
  },
  watch: !PRODUCTION,
};

export default config;
