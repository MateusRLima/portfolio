<template>
  <div
    v-show="enabled"
    vw
    class="enabled"
    aria-label="Tradutor de Libras (VLibras)"
  >
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
  enabled: {
    type: Boolean,
    default: true,
  },
});

const VLIBRAS_SCRIPT_ID = 'vlibras-Official-script';
const VLIBRAS_SCRIPT_SRC = 'https://vlibras.gov.br/app/vlibras-plugin.js';
const VLIBRAS_APP_URL = 'https://vlibras.gov.br/app';

onMounted(() => {
  if (document.getElementById(VLIBRAS_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = VLIBRAS_SCRIPT_ID;
  script.src = VLIBRAS_SCRIPT_SRC;
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.onload = () => {
    if (window.VLibras?.Widget) {
      new window.VLibras.Widget(VLIBRAS_APP_URL);
    }
  };
  document.body.appendChild(script);
});
</script>
