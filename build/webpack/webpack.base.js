import path from 'path';
import webpack from 'webpack';
import { rootDir, absPath } from '../config';

module.exports = {
   context: rootDir.cwd,
   devtool: 'source-map',

   output: {
      chunkFilename: '[chunkhash].js',
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      filename: '[name].js'
   },

   resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: [absPath('./src'), 'node_modules']
   },

   module: {
      loaders: [
         { test: /\.html$/, loader: 'raw-loader' },
         {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
         },
         {
            test: /\.tsx?$/,
            exclude: /(node_modules)/,
            loaders: [
               'babel-loader?cacheDirectory',
               'ts-loader?' + JSON.stringify({ visualStudioErrorFormat: true }),
            ],
         },
      ],
   },

   plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.WatchIgnorePlugin(['./dist'])
   ]
};
