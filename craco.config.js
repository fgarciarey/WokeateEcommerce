// craco.config.js
module.exports = {
  base: '/WokeateEcommerceCliente',
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }