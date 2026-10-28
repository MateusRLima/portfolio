<template>
  <v-container class="skills my-6">
    <div class="d-flex flex-wrap align-end justify-space-between mb-8 ga-4">
      <SectionTitle tag="h2" class="skills-title">
        Habilidades
      </SectionTitle>

      <div class="d-flex align-center flex-wrap ga-3" aria-label="Legenda de nível de destaque">
        <v-chip color="secondary" variant="flat" label size="small" class="legend-chip font-weight-bold">
          <v-icon start size="small" aria-hidden="true">mdi-star-four-points</v-icon>
          Especialidade Principal
        </v-chip>
        <v-chip color="secondary" variant="tonal" label size="small" class="legend-chip">
          Domínio Prático
        </v-chip>
      </div>
    </div>

    <v-row align="stretch">
      <v-col
        v-for="category in bentoCategories"
        :key="category.title"
        cols="12"
        md="6"
      >
        <v-card
          variant="outlined"
          rounded="lg"
          class="bento-card h-100 pa-6 d-flex flex-column"
        >
          <div class="d-flex align-center mb-5">
            <v-avatar
              color="secondary"
              variant="tonal"
              size="48"
              rounded="lg"
              class="mr-4"
            >
              <v-icon color="secondary" size="26" aria-hidden="true">
                {{ category.icon }}
              </v-icon>
            </v-avatar>

            <div>
              <h3 class="bento-title">{{ category.title }}</h3>
              <p class="bento-subtitle text-body-2">{{ category.subtitle }}</p>
            </div>
          </div>

          <v-divider class="mb-5" />

          <div
            role="list"
            :aria-label="`Habilidades em ${category.title}`"
            class="chips-grid d-flex flex-wrap"
          >
            <SkillChip
              v-for="skill in category.skills"
              :key="skill.name"
              :chip-name="skill.name"
              :icon="skill.icon"
              :highlight="skill.highlight"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SkillChip from '../components/SkillChip.vue';
import SectionTitle from '../components/SectionTitle.vue';

const bentoCategories = [
  {
    title: 'Front-end & Mobile',
    subtitle: 'Frameworks reativos, tipagem estática, estilização e interfaces ricas',
    icon: 'mdi-monitor-dashboard',
    skills: [
      { name: 'React.js', icon: 'mdi-react', highlight: true },
      { name: 'Vue.js', icon: 'mdi-vuejs', highlight: true },
      { name: 'TypeScript', icon: 'mdi-language-typescript', highlight: true },
      { name: 'Next.js', icon: 'mdi-triangle-outline', highlight: true },
      { name: 'JavaScript (ES6+)', icon: 'mdi-language-javascript' },
      { name: 'Nuxt', icon: 'mdi-nuxt' },
      { name: 'React Flow', icon: 'mdi-sitemap-outline' },
      { name: 'Vuetify', icon: 'mdi-vuetify' },
      { name: 'SASS / CSS3', icon: 'mdi-sass' },
      { name: 'HTML5', icon: 'mdi-language-html5' },
      { name: 'Bootstrap', icon: 'mdi-bootstrap' },
      { name: 'Ionic', icon: 'mdi-code-braces' },
    ],
  },
  {
    title: 'Back-end & APIs',
    subtitle: 'Serviços distribuídos, comunicação de dados e sistemas corporativos',
    icon: 'mdi-server-network',
    skills: [
      { name: 'Go (Golang)', icon: 'mdi-language-go', highlight: true },
      { name: '.NET', icon: 'mdi-dot-net', highlight: true },
      { name: 'Microsserviços', icon: 'mdi-lan', highlight: true },
      { name: 'REST', icon: 'mdi-api', highlight: true },
      { name: 'gRPC', icon: 'mdi-transit-connection-variant' },
      { name: 'Node.js', icon: 'mdi-nodejs' },
      { name: 'GraphQL', icon: 'mdi-graphql' },
      { name: 'Sistemas ERP & CRM', icon: 'mdi-domain' },
    ],
  },
  {
    title: 'Arquitetura, Qualidade & Ferramentas',
    subtitle: 'Padrões de engenharia, boas práticas de código, testes e build',
    icon: 'mdi-layers-triple-outline',
    skills: [
      { name: 'Micro Frontends', icon: 'mdi-view-grid-plus-outline', highlight: true },
      { name: 'Clean Code', icon: 'mdi-code-tags-check', highlight: true },
      { name: 'TDD (Testes)', icon: 'mdi-test-tube', highlight: true },
      { name: 'Git', icon: 'mdi-git', highlight: true },
      { name: 'Arquitetura SPA & SSR', icon: 'mdi-application-brackets-outline' },
      { name: 'Mobile-First', icon: 'mdi-cellphone-link' },
      { name: 'Vite / Webpack', icon: 'mdi-webpack' },
      { name: 'GitHub / GitLab / Bitbucket', icon: 'mdi-source-branch' },
    ],
  },
  {
    title: 'Liderança, Produto & Soft Skills',
    subtitle: 'Alinhamento com negócio, visão de produto e colaboração em equipe',
    icon: 'mdi-account-group-outline',
    skills: [
      { name: 'Liderança Técnica', icon: 'mdi-account-star', highlight: true },
      { name: 'Levantamento de Requisitos', icon: 'mdi-clipboard-text-search-outline', highlight: true },
      { name: 'Colaboração Multidisciplinar', icon: 'mdi-handshake-outline' },
      { name: 'Comunicação com Stakeholders', icon: 'mdi-account-tie-voice' },
      { name: 'Trabalho em Equipe', icon: 'mdi-account-group' },
      { name: 'Gerenciamento de Tempo', icon: 'mdi-account-clock' },
      { name: 'Organização', icon: 'mdi-account-tie' },
      { name: 'Atenção a Detalhes', icon: 'mdi-account-eye' },
    ],
  },
];
</script>

<style lang="scss" scoped>
@use '../global';

.skills {
  font-family: global.$primary-font;

  .legend-chip {
    font-family: global.$primary-font;
  }

  .bento-card {
    border-color: rgba(var(--v-theme-secondary), 0.35);
    transition: border-color 0.25s ease, transform 0.25s ease;

    &:hover {
      border-color: rgb(var(--v-theme-secondary));
    }
  }

  .bento-title {
    font-family: global.$primary-font;
    font-size: 1.4rem;
    line-height: 1.25;
    color: rgb(var(--v-theme-secondary));
  }

  .bento-subtitle {
    opacity: 0.8;
  }

  .chips-grid {
    gap: 10px;
  }
}

@media (min-width: 1380px) {
  .skills-title {
    font-size: 4rem !important;
  }

  .bento-title {
    font-size: 1.6rem !important;
  }
}
</style>
