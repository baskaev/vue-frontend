const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,  // Порт, на котором будет работать ваш фронтенд
    proxy: {
      '/api': {
        target: 'http://localhost:8081',  // Порт вашего сервера Go
        changeOrigin: true,
        secure: false,  // Если используете HTTP вместо HTTPS
      },
    },
  },
})
