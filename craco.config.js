/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const handleAnalyzerProd = (env) => {
  if (env === 'production') {
    return [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false },
      }),
    ];
  }

  return [];
};

module.exports = {
  plugins: [],
  webpack: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-router-dom': path.resolve('./node_modules/react-router-dom'),
      '@material-ui/core': path.resolve('./node_modules/@material-ui/core'),
      '@material-ui/pickers': path.resolve(
        './node_modules/@material-ui/pickers'
      ),
      '@src': path.resolve('./src'),
      '@pages': path.resolve('./src/pages'),
      '@components': path.resolve('./src/components'),
      '@constants': path.resolve('./src/constants'),
      '@assets': path.resolve('./src/assets'),
    },
    plugins: [...handleAnalyzerProd(process.env.NODE_ENV)],
  },
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-optional-chaining'],
    ],
  },
};
