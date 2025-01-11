/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat_Regular', 'Montserrat_Bold', 'sans-serif'], // Montserrat como padrão para sans
      },
      colors: {
        'primary-blue': '#3c5597', // Azul principal
        'primary-blue-light': '#5579c3', // Azul claro (blue-200)
        'primary-blue-dark': '#1d2d6a', // Azul escuro

        'gray-50': '#f5f5f5', // Cinza leve (background)
        'gray-100': '#e0e0e0', // Cinza 100
        'gray-200': '#c2c2c2', // Cinza 200
        'gray-300': '#a1a1a1', // Cinza 300
        'gray-400': '#808080', // Cinza 400
        'gray-500': '#555555', // Cinza 500
        'gray-600': '#333333', // Cinza 600
        'gray-700': '#1a1a1a', // Cinza 700

        'secondary-blue': '#89a0d7', // Azul secundário, mais claro
        background: '#f5f5f5', // Cor de fundo
        'text-primary': '#333333', // Texto primário
        'text-secondary': '#555555', // Texto secundário
        success: '#4CAF50', // Verde sucesso
        warning: '#FF9800', // Laranja alerta
        error: '#F44336', // Vermelho erro
        white: '#FFFFFF', // Cor branca
        black: '#000000', // Cor preta
      },
    },
  },
  plugins: [],
};
