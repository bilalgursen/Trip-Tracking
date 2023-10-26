module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main-grid': '1fr 3fr'
      }
    }
  },
  plugins: [require('daisyui')]
}
