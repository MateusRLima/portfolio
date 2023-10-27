import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({

  theme: {
    dark: true,
    themes: {
      light: {
        light: '#F1F1FF',
        dark: '#1B1B1B',
        primary: '#1B1B1B',
        secondary: '#D975BB',
      },
      dark: {
        dark: '#1B1B1B',
        light: '#F1F1FF',
        primary: '#F1F1FF',
        secondary: '#D975BB',
      }
    }
  }

});
