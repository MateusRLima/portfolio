import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F1F1FF',
          surface: '#F1F1FF',
          dark: '#1B1B1B',
          light: '#F1F1FF',
          primary: '#1B1B1B',
          // Contraste 6.11:1 sobre #F1F1FF (aprovado WCAG AA para textos normais e grandes)
          secondary: '#9E2A7B',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#1B1B1B',
          surface: '#1B1B1B',
          dark: '#1B1B1B',
          light: '#F1F1FF',
          primary: '#F1F1FF',
          // Contraste 5.92:1 sobre #1B1B1B (aprovado WCAG AA)
          secondary: '#D975BB',
        },
      },
      highContrast: {
        dark: true,
        colors: {
          background: '#000000',
          surface: '#000000',
          dark: '#000000',
          light: '#FFFFFF',
          primary: '#FFFFFF',
          // Contraste 19.56:1 sobre #000000 (aprovado WCAG AAA para baixa visão)
          secondary: '#FFFF00',
        },
      },
    },
  },
})
