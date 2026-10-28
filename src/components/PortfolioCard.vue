<template>
  <v-card
    variant="outlined"
    rounded="lg"
    class="portfolio-card h-100 d-flex flex-column"
  >
    <v-img
      v-if="image"
      height="210"
      :src="image"
      :alt="alt || title"
      cover
      class="portfolio-card-img"
    />

    <div class="pa-6 d-flex flex-column flex-grow-1">
      <div class="d-flex align-start justify-space-between ga-3 mb-3">
        <div class="d-flex align-center ga-3">
          <v-avatar
            v-if="icon"
            color="secondary"
            variant="tonal"
            size="44"
            rounded="lg"
          >
            <v-icon color="secondary" size="24" aria-hidden="true">{{ icon }}</v-icon>
          </v-avatar>

          <div>
            <h3 class="card-title">{{ title }}</h3>
            <span v-if="subtitle" class="text-caption opacity-80">{{ subtitle }}</span>
          </div>
        </div>

        <v-chip
          v-if="badge"
          size="x-small"
          color="secondary"
          :variant="isPublic ? 'flat' : 'tonal'"
          label
          class="font-weight-bold flex-shrink-0"
        >
          <v-icon
            start
            size="12"
            aria-hidden="true"
          >
            {{ isPublic ? 'mdi-earth' : 'mdi-shield-lock-outline' }}
          </v-icon>
          {{ badge }}
        </v-chip>
      </div>

      <p class="card-description text-body-2 mb-4 flex-grow-1">
        {{ description }}
      </p>

      <div
        v-if="tags?.length"
        class="d-flex flex-wrap ga-2 mb-4"
        role="list"
        :aria-label="`Tecnologias utilizadas em ${title}`"
      >
        <v-chip
          v-for="tag in tags"
          :key="tag"
          role="listitem"
          size="small"
          color="secondary"
          variant="tonal"
          label
        >
          {{ tag }}
        </v-chip>
      </div>

      <div v-if="url" class="mt-auto pt-2">
        <v-btn
          variant="flat"
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          :href="url"
          :aria-label="`Acessar projeto ${title} (abre em nova aba)`"
          prepend-icon="mdi-open-in-new"
          class="font-weight-bold"
          block
        >
          Acessar Projeto Online
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  badge: {
    type: String,
    default: '',
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  image: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
@use '../global';

.portfolio-card {
  font-family: global.$primary-font;
  border-color: rgba(var(--v-theme-secondary), 0.35);
  transition: border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgb(var(--v-theme-secondary));
    transform: translateY(-2px);
  }

  .portfolio-card-img {
    border-bottom: 1px solid rgba(var(--v-theme-secondary), 0.25);
  }

  .card-title {
    font-family: global.$primary-font;
    font-size: 1.25rem;
    line-height: 1.25;
    color: rgb(var(--v-theme-secondary));
  }

  .card-description {
    line-height: 1.6;
    opacity: 0.92;
  }
}
</style>
