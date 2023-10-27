<template lang="">
  <div>
    <v-chip
      class="ma-2"
      color="secondary"
      label
      outlined
      text-color="primary"
      :large="isLarge"
    >
      <v-icon color="secondary" left :large="isLarge">
        {{ icon }}
      </v-icon>
      <span class="chip-name">{{ chipName }}</span>
    </v-chip>
  </div>
</template>
<script>

export default {
  name: "SkillChip",

  props: {
    icon: {
      default: "",
      type: String,
    },
    chipName: {
      default: "",
      type: String
    }
  },

  computed: {
    isLarge() {
      return !this.$vuetify.breakpoint.mdAndDown;
    }
  },
}
</script>
<style lang="scss">
@use '../global';

.chip-name {
  font-size: large;
  font-family: global.$primary-font, monospace;
}

@media (min-width: 1280px) {
  .chip-name {
    font-size: x-large;
  }
}
</style>