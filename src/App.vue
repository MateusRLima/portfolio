<template>
  <v-app>
    <a href="#main-content" class="skip-link">
      Pular para o conteúdo principal
    </a>

    <v-navigation-drawer
      v-if="smAndDown"
      v-model="drawer"
      temporary
      aria-label="Menu principal"
    >
      <v-list nav>
        <v-list-item
          v-for="section in sections"
          :key="section.id"
          :prepend-icon="section.icon"
          :title="section.title"
          :active="activeSection === section.id"
          color="secondary"
          @click="scrollToSection(section.id)"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :color="appBarColor"
      density="compact"
      flat
    >
      <template v-if="smAndDown" #prepend>
        <v-app-bar-nav-icon
          aria-label="Abrir menu de navegação"
          @click="drawer = !drawer"
        />
      </template>

      <v-app-bar-title v-if="smAndDown" class="mobile-brand">
        Mateus Rosa
      </v-app-bar-title>

      <v-tabs
        v-else
        v-model="activeSection"
        color="secondary"
        align-tabs="center"
        class="w-100"
        aria-label="Seções do portfólio"
      >
        <v-tab
          v-for="section in sections"
          :key="section.id"
          :value="section.id"
          :prepend-icon="section.icon"
          @click="scrollToSection(section.id)"
        >
          {{ section.title }}
        </v-tab>
      </v-tabs>

      <template #append>
        <AccessibilityMenu @update:vlibras="vlibrasEnabled = $event" />
      </template>
    </v-app-bar>

    <v-main id="main-content" tabindex="-1">
      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        v-intersect="{
          handler: (isIntersecting) => onSectionIntersect(section.id, isIntersecting),
          options: { threshold: [0.35] }
        }"
        :aria-label="section.title"
        class="sections"
      >
        <component :is="section.component" />
      </section>
    </v-main>

    <VLibrasWidget :enabled="vlibrasEnabled" />
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTheme, useDisplay, useGoTo } from 'vuetify';
import PresentationSection from './pages/PresentationSection.vue';
import AboutSection from './pages/AboutSection.vue';
import SkillSection from './pages/SkillSection.vue';
import PortfolioSection from './pages/PortfolioSection.vue';
import AccessibilityMenu from './components/AccessibilityMenu.vue';
import VLibrasWidget from './components/VLibrasWidget.vue';

const theme = useTheme();
const { smAndDown } = useDisplay();
const goTo = useGoTo();

const drawer = ref(false);
const activeSection = ref('apresentacao');
const isScrollingProgrammatically = ref(false);
const vlibrasEnabled = ref(true);

const sections = [
  {
    id: 'apresentacao',
    title: 'Apresentação',
    icon: 'mdi-home-outline',
    component: PresentationSection,
  },
  {
    id: 'trajetoria',
    title: 'Minha Trajetória',
    icon: 'mdi-timeline-text-outline',
    component: AboutSection,
  },
  {
    id: 'habilidades',
    title: 'Habilidades',
    icon: 'mdi-code-tags',
    component: SkillSection,
  },
  {
    id: 'portfolio',
    title: 'Portfólio',
    icon: 'mdi-briefcase-outline',
    component: PortfolioSection,
  },
];

// Allowlist estrita de IDs permitidos para prevenir injeção de seletores via hash da URL
const allowedSectionIds = new Set(sections.map((section) => section.id));

const appBarColor = computed(() => {
  const current = theme.global.name.value;
  if (current === 'highContrast') return '#000000';
  return current === 'dark' ? '#1B1B1B' : '#F1F1FF';
});

const scrollToSection = async (sectionId) => {
  if (!allowedSectionIds.has(sectionId)) return;

  activeSection.value = sectionId;
  drawer.value = false;
  isScrollingProgrammatically.value = true;

  if (window.history?.replaceState) {
    window.history.replaceState(null, '', `#${sectionId}`);
  }

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  await goTo(`#${sectionId}`, {
    duration: prefersReducedMotion ? 0 : 500,
    offset: -48,
    easing: 'easeInOutCubic',
  });

  setTimeout(() => {
    isScrollingProgrammatically.value = false;
  }, 100);
};

const onSectionIntersect = (sectionId, isIntersecting) => {
  if (isIntersecting && !isScrollingProgrammatically.value) {
    activeSection.value = sectionId;
  }
};

onMounted(() => {
  const initialHash = window.location.hash.replace(/^#/, '');
  if (allowedSectionIds.has(initialHash)) {
    scrollToSection(initialHash);
  }
});
</script>

<style lang="scss">
@use 'global';

html {
  scroll-behavior: smooth;

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
}

.mobile-brand {
  font-family: global.$primary-font;
}

.sections {
  min-height: calc(100dvh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  scroll-margin-top: 48px;
}
</style>
