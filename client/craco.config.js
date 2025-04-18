module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        console.log("Modifying Webpack config...");
        return webpackConfig;
      },
    },
  };
  