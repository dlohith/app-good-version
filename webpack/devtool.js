const isProduction = process.env.NODE_ENV === 'production';
const devtool = 'inline-cheap-module-source-map';
// const devtool = isProduction ? 'source-map' : 'inline-cheap-module-source-map';
module.exports = devtool;
