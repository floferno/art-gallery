module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        '4xl': ['52px', '1'],
        '3xl': ['40px', '1.10'],
        '2xl': ['32px', '1.20'],
        xl: ['24px', '1.20'],
        lg: ['20px', '1.40'],
        base: ['16px', '1.40'],
        sm: ['14px', '1.40'],
        xs: '12px',
        '2xs': '10px',
      },
      colors: {
        brand: {
          primary: '#CCA035',
          secondary: '#FFDC8F',
          tertiary: '#906C28',
          quaternary: '#1F2227',
          quinary: '#262931',
        },
        neutral: {
          100: '#000000',
          90: '#0F1010',
          80: '#232425',
          70: '#343536',
          60: '#5E6061',
          50: '#8D9093',
          40: '#BEC2C5',
          30: '#D4D9DB',
          20: '#E2E6EA',
        },
      },
      backgroundImage: {
        'navbar-bg': 'linear-gradient(180deg, #1F2227 36.7%, #262931 112.44%)',
      },
    },
  },
  plugins: [],
};
