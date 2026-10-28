<template>
  <v-container class="portfolio my-6">
    <div class="d-flex flex-wrap align-end justify-space-between mb-6 ga-4">
      <div>
        <SectionTitle tag="h2" class="portfolio-title">
          Portfólio & Cases
        </SectionTitle>
        <p class="text-body-2 opacity-80 mt-1">
          Arquiteturas corporativas desenvolvidas em empresas (sob NDA), projetos públicos e estudos de UI/UX.
        </p>
      </div>
    </div>

    <v-tabs
      v-model="activeTab"
      color="secondary"
      class="mb-8"
      show-arrows
      aria-label="Categorias do portfólio"
    >
      <v-tab value="engineering" prepend-icon="mdi-layers-triple-outline">
        Cases de Engenharia ({{ engineeringCases.length }})
      </v-tab>
      <v-tab value="public" prepend-icon="mdi-earth">
        Projetos Públicos & Acadêmicos ({{ publicProjects.length }})
      </v-tab>
      <v-tab value="behance" prepend-icon="mdi-palette-swatch-outline">
        UI/UX Design • Behance ({{ behanceProjects.length }})
      </v-tab>
    </v-tabs>

    <v-window v-model="activeTab" class="pt-1">
      <v-window-item value="engineering">
        <v-row align="stretch" class="py-2">
          <v-col
            v-for="project in engineeringCases"
            :key="project.title"
            cols="12"
            md="6"
          >
            <PortfolioCard v-bind="project" />
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item value="public">
        <v-row align="stretch" class="py-2">
          <v-col
            v-for="project in publicProjects"
            :key="project.title"
            cols="12"
            md="6"
          >
            <PortfolioCard v-bind="project" />
          </v-col>
        </v-row>
      </v-window-item>

      <v-window-item value="behance">
        <v-row v-if="activeTab === 'behance'" class="mb-6" justify="start">
          <v-col
            v-for="behance in behanceProjects"
            :key="behance"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center"
          >
            <iframe
              class="behance-iframe rounded-lg"
              :src="`https://www.behance.net/embed/project/${behance}?ilo0=1`"
              height="316"
              width="404"
              scrolling="no"
              :title="`Projeto Behance ${behance}`"
              sandbox="allow-scripts allow-same-origin allow-popups"
              allowfullscreen
              loading="lazy"
              allow="clipboard-write"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from '../components/SectionTitle.vue';
import PortfolioCard from '../components/PortfolioCard.vue';
import ptdaImg from '@/assets/PTDA.png';

const activeTab = ref('engineering');

const engineeringCases = [
  {
    title: 'Orquestrador Visual de Fluxos Interativos',
    subtitle: 'Wisedit • Recife',
    icon: 'mdi-sitemap-outline',
    badge: 'Projeto Corporativo (NDA)',
    description:
      'Desenvolvimento e manutenção de aplicações web em arquitetura de Micro Frontends e serviços back-end para construção de fluxos interativos complexos, garantindo alta escalabilidade, modularidade e estabilidade.',
    tags: ['React.js', 'TypeScript', 'React Flow', 'Go (Golang)', '.NET', 'Micro Frontends'],
  },
  {
    title: 'Super App & Backoffice para Varejo',
    subtitle: 'Mobiis • Recife',
    icon: 'mdi-shopping-outline',
    badge: 'Projeto Corporativo (NDA)',
    description:
      'Construção de um Super App e plataforma de Backoffice para o varejo brasileiro em arquitetura de Micro Frontends, estabelecendo padronização técnica e integração eficiente entre módulos independentes.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Micro Frontends', 'REST APIs'],
  },
  {
    title: 'Rastreamento de Frota & Dashboards Analíticos',
    subtitle: 'Opera Labs • Recife',
    icon: 'mdi-truck-fast-outline',
    badge: 'Projeto Corporativo (NDA)',
    description:
      'Desenvolvimento completo da camada web para logística e rastreamento veicular com dashboards analíticos de controladoria e finanças, reduzindo custos operacionais e elevando a segurança da frota.',
    tags: ['React.js', 'GraphQL', 'TDD', 'Mobile-First'],
  },
  {
    title: 'Plataforma Integrada de Gestão ERP & CRM',
    subtitle: 'Logus Tech • Recife',
    icon: 'mdi-domain',
    badge: 'Projeto Corporativo (NDA)',
    description:
      'Liderança front-end ponta a ponta desde o levantamento de requisitos com stakeholders até a entrega de um sistema ERP/CRM completo, otimizando a captação de leads e a tomada de decisão financeira.',
    tags: ['Vue.js', 'Vuetify', 'Axios / REST', 'Levantamento de Requisitos'],
  },
];

const publicProjects = [
  {
    title: 'Por Trás do Ato',
    subtitle: 'Portal de Notícias & Jornalismo',
    icon: 'mdi-newspaper-variant-outline',
    badge: 'Online',
    isPublic: true,
    image: ptdaImg,
    alt: 'Tela inicial do portal de notícias Por Trás do Ato',
    description:
      'Portal web de notícias desenvolvido como Trabalho de Conclusão de Curso, focado em leitura fluida, categorização editorial, responsividade e publicação em nuvem.',
    tags: ['Vue.js', 'Vuetify', 'SPA', 'Firebase Hosting'],
    url: 'https://portrasdoato.web.app/#/',
  },
  {
    title: 'SISI — Monitoramento e Segurança no Campus',
    subtitle: 'Projeto premiado / destaque acadêmico • UFPE & UniFG',
    icon: 'mdi-shield-alert-outline',
    badge: 'Mobile / Acadêmico',
    isPublic: false,
    description:
      'Aplicativo mobile criado com o objetivo de rastrear em tempo real pessoas em situação de perigo no campus da UFPE e acionar rapidamente a equipe de segurança local.',
    tags: ['Ionic', 'Mobile', 'Geolocalização', 'JavaScript'],
  },
];

const behanceProjects = ['152047307', '117374525', '118857649'];
</script>

<style lang="scss" scoped>
@use '../global';

.portfolio {
  height: 100%;
  font-family: global.$primary-font;

  .portfolio-title {
    font-size: 3rem;
  }

  .behance-iframe {
    border: 1px solid rgba(var(--v-theme-secondary), 0.35);
    width: 100%;
    max-width: 404px;
    overflow: hidden;
  }
}

@media (min-width: 1380px) {
  .portfolio-title {
    font-size: 4rem !important;
  }
}
</style>
