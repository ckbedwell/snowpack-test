module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
  ],
}
