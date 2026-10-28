<template>
  <div role="listitem">
    <v-chip
      color="secondary"
      label
      :variant="highlight ? 'flat' : 'tonal'"
      :size="chipSize"
      :class="['skill-chip', { 'skill-chip--highlight': highlight }]"
    >
      <v-icon start :size="chipSize" aria-hidden="true">
        {{ icon }}
      </v-icon>
      <span class="chip-name">{{ chipName }}</span>
    </v-chip>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

defineProps({
  icon: {
    default: '',
    type: String,
  },
  chipName: {
    default: '',
    type: String,
  },
  highlight: {
    default: false,
    type: Boolean,
  },
});

const { mdAndDown } = useDisplay();

const chipSize = computed(() => {
  return mdAndDown.value ? 'default' : 'large';
});
</script>

<style lang="scss" scoped>
@use '../global';

.skill-chip {
  font-family: global.$primary-font;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.skill-chip--highlight {
  font-weight: 700;
}

.chip-name {
  font-size: 0.95rem;
}

@media (min-width: 1280px) {
  .chip-name {
    font-size: 1.05rem;
  }
}
</style>
