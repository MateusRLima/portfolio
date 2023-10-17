<template>
  <v-app>
    <v-app-bar :color="$vuetify.theme.dark ? '#1B1B1B' : '#F1F1FF'" dense app fixed flat>
      <v-tabs  v-model="window" color="secondary" fixed-tabs show-arrows>
        <v-tab v-for="page in pages" :key="page.id">{{ page.title }}</v-tab>
      </v-tabs>

    </v-app-bar>
    <v-main>
      <div class="ml-10 d-flex align-center justify-end theme-switch">
        <v-switch dense inset :prepend-icon="$vuetify.theme.dark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny' " class="ml-2" v-model="$vuetify.theme.dark"></v-switch>
      </div>
      <v-window class="slide" v-model="window">
        <v-window-item class="slide">
          <section class="sections">
            <PresentationSection />
          </section>
        </v-window-item>
        <v-window-item class="slide">
          <section class="sections">
            <AboutSection />
          </section>
        </v-window-item>
        <v-window-item class="slide">
          <section class="sections">
            <SkillSection />
          </section>
        </v-window-item>
        <v-window-item class="slide">
          <section class="sections">
            <PortfolioSection />
          </section>
        </v-window-item>
      </v-window>
    </v-main>
  </v-app>
</template>

<script>
import PresentationSection from './components/PresentationSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillSection from './components/SkillSection.vue';
import PortfolioSection from './components/PortfolioSection.vue'

export default {
  name: 'App',

  components: {
    PresentationSection,
    AboutSection,
    SkillSection,
    PortfolioSection,
  },

  data: () => ({
    pages: [
      {
        id: 1,
        title: "Apresentação",
      },
      {
        id: 2,
        title: "Minha Trajetória",
      },
      {
        id: 3,
        title: "Habilidades",
      },
      {
        id: 4,
        title: "Portfólio",
      },
    ],
    window: 0,
  }),
};
</script>

<style lang="scss">
@use 'global';

.app-bar {
  padding-left: 66px;

  .buttons {
    width: 100%;

    .buttons-nav {
      width: 100%;
      display: flex;

    }
  }
}

.slide {
}

.sections {
}
</style>
