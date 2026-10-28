<template>
  <v-container class="about">
    <v-row align="stretch" class="w-100">
      <v-col cols="12" md="5" class="pl-md-10">
        <div :class="{ 'about-sticky': showAllExperiences }">
          <SectionTitle tag="h2" class="about-title mb-5">
            Minha<br />
            <strong class="about-name">Trajetória</strong>
          </SectionTitle>
          <div class="about-description">
            <p class="mb-5">
              Desenvolvedor Full Stack com mais de 6 anos de experiência, especialista em
              <strong>React</strong> e <strong>Vue.js</strong>, atuando também no back-end com
              <strong>Go</strong> e <strong>.NET</strong>, com grande experiência no desenvolvimento de
              sistemas <strong>ERP</strong>, <strong>CRM</strong>, <strong>SPAs</strong> e arquiteturas de
              <strong>Micro Frontends</strong>.
            </p>
          </div>

          <v-card variant="outlined" color="secondary" class="pa-4 mb-6 education-card">
            <h3 class="education-title mb-1">
              <v-icon start color="secondary" aria-hidden="true">mdi-school-outline</v-icon>
              Educação
            </h3>
            <p class="text-body-1 font-weight-bold mb-1">
              Bacharelado em Ciência da Computação (2020)
            </p>
            <p class="text-body-2 mb-2">UniFG, Brasil</p>
            <p class="text-body-2">
              <strong>Conquista:</strong> Aplicativo SISI, desenvolvido em Ionic com o objetivo de rastrear
              pessoas em situação de perigo no campus da UFPE e alertar a segurança local.
            </p>
          </v-card>
        </div>
      </v-col>

      <v-col cols="12" md="7" align="left">
        <div class="timeline px-md-5 pb-md-5">
          <v-timeline id="career-timeline" density="compact" side="end">
            <v-timeline-item
              v-for="experience in displayedExperiences"
              :key="experience.company"
              color="secondary"
              dot-color="secondary"
              size="small"
            >
              <div class="mb-2">
                <div class="d-flex align-center flex-wrap ga-2">
                  <h3 class="timeline-title">{{ experience.company }}</h3>
                  <div v-if="experience.icons?.length" class="d-flex align-center ga-2">
                    <v-icon
                      v-for="icon in experience.icons"
                      :key="icon"
                      size="small"
                      color="secondary"
                      aria-hidden="true"
                    >
                      {{ icon }}
                    </v-icon>
                  </div>
                </div>
                <p class="timeline-meta text-body-2 font-weight-medium">
                  {{ experience.role }} • {{ experience.location }} | {{ experience.period }}
                </p>
              </div>
              <p>{{ experience.description }}</p>
            </v-timeline-item>
          </v-timeline>

          <div v-if="hiddenCount > 0" class="mt-6 pl-4">
            <v-btn
              variant="outlined"
              color="secondary"
              :prepend-icon="showAllExperiences ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              :aria-expanded="showAllExperiences"
              aria-controls="career-timeline"
              @click="toggleExperiences"
            >
              {{
                showAllExperiences
                  ? 'Mostrar menos experiências'
                  : `Ver experiências anteriores (+${hiddenCount})`
              }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionTitle from '../components/SectionTitle.vue';

const INITIAL_VISIBLE_COUNT = 2;
const showAllExperiences = ref(false);

const experiences = [
  {
    company: 'Wisedit',
    location: 'Recife',
    role: 'Desenvolvedor Full Stack',
    period: '05/2025 - Atualmente',
    description:
      'Desenvolvo e mantenho aplicações web em arquitetura de micro frontends e serviços back-end, utilizando React, TypeScript, React Flow, Go e .NET para construção de fluxos interativos complexos, garantindo alta escalabilidade, modularidade do sistema e uma experiência de usuário estável, responsiva e intuitiva, em colaboração contínua com equipes de produto e engenharia.',
  },
  {
    company: 'Mobiis',
    location: 'Recife',
    role: 'Desenvolvedor Front End',
    period: '07/2024 - 05/2025',
    description:
      'Atuei no desenvolvimento de soluções digitais para o varejo brasileiro, utilizando React, TypeScript, Next.js e arquitetura de micro frontends na construção de um super app e do backoffice da empresa, contribuindo para a padronização técnica da plataforma, integração eficiente entre módulos e evolução contínua do ecossistema de produtos.',
  },
  {
    company: 'Opera Labs',
    location: 'Recife',
    role: 'Desenvolvedor Front End',
    period: '11/2021 - 09/2022',
    description:
      'Fui responsável pelo desenvolvimento completo da camada web dos sistemas de logística, utilizando React, GraphQL, abordagem mobile-first e práticas de TDD, resultando na criação de um sistema de rastreamento de frota com dashboards analíticos que reduziram custos operacionais e aprimoraram a gestão, a controladoria e a segurança dos veículos.',
  },
  {
    company: 'Logus Tech',
    location: 'Recife',
    role: 'Desenvolvedor Front End',
    period: '10/2019 - 11/2021',
    description:
      'Atuei como único desenvolvedor front-end da empresa e liderei o desenvolvimento de um sistema ERP/CRM, utilizando Vue.js, Vuetify, Axios e levantamento de requisitos junto aos stakeholders, o que otimizou processos internos, melhorou a captação de leads e gerou dados estratégicos para decisões do setor financeiro.',
  },
];

const hiddenCount = computed(() => Math.max(0, experiences.length - INITIAL_VISIBLE_COUNT));

const displayedExperiences = computed(() =>
  showAllExperiences.value ? experiences : experiences.slice(0, INITIAL_VISIBLE_COUNT)
);

const toggleExperiences = () => {
  showAllExperiences.value = !showAllExperiences.value;
};
</script>

<style lang="scss" scoped>
@use '../global';

.about {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .about-title {
    font-family: global.$primary-font;
    font-size: 3rem;
    line-height: 1.15;
  }

  .about-name {
    font-family: global.$primary-font;
    color: rgb(var(--v-theme-secondary));
  }

  .education-card {
    color: rgb(var(--v-theme-primary));

    .education-title {
      font-family: global.$primary-font;
      font-size: 1.35rem;
      color: rgb(var(--v-theme-secondary));
    }
  }

  .timeline {
    overflow-anchor: none;

    .timeline-title {
      font-family: global.$primary-font;
      font-size: 1.5rem;
      color: rgb(var(--v-theme-secondary));
    }

    .timeline-meta {
      opacity: 0.85;
    }
  }
}

@media (min-width: 960px) {
  .about-sticky {
    position: sticky;
    top: 96px;
  }
}

@media (min-width: 1380px) {
  .about-title {
    font-size: 4rem !important;
  }

  .about-description {
    font-size: 1.25rem !important;
  }

  .timeline {
    font-size: 1.15rem !important;

    .timeline-title {
      font-size: 1.75rem !important;
    }
  }
}
</style>
