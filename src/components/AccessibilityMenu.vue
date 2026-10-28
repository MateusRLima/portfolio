<template>
  <div class="d-flex align-center">
    <v-btn
      icon
      variant="text"
      color="secondary"
      :aria-label="highContrast ? 'Desativar alto contraste' : 'Ativar alto contraste'"
      :aria-pressed="highContrast"
      title="Alternar Alto Contraste"
      @click="toggleHighContrast"
    >
      <v-icon aria-hidden="true">mdi-contrast-circle</v-icon>
    </v-btn>

    <v-btn
      icon
      variant="text"
      color="secondary"
      :disabled="highContrast"
      :aria-label="baseTheme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'"
      title="Alternar Tema Claro/Escuro"
      @click="toggleBaseTheme"
    >
      <v-icon aria-hidden="true">
        {{ baseTheme === 'dark' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}
      </v-icon>
    </v-btn>

    <v-menu v-model="menuOpen" :close-on-content-click="false" location="bottom end">
      <template #activator="{ props: menuProps }">
        <v-btn
          v-bind="menuProps"
          icon
          variant="text"
          color="secondary"
          aria-label="Abrir menu de acessibilidade"
          title="Opções de Acessibilidade"
        >
          <v-icon aria-hidden="true">mdi-human</v-icon>
        </v-btn>
      </template>

      <v-card min-width="300" max-width="340" class="pa-4 a11y-card" elevation="8">
        <div class="d-flex align-center justify-space-between mb-3">
          <h2 class="text-subtitle-1 font-weight-bold d-flex align-center">
            <v-icon start color="secondary" aria-hidden="true">mdi-human</v-icon>
            Acessibilidade
          </h2>
          <v-btn
            icon
            size="small"
            variant="text"
            aria-label="Fechar menu de acessibilidade"
            @click="menuOpen = false"
          >
            <v-icon aria-hidden="true">mdi-close</v-icon>
          </v-btn>
        </div>

        <v-divider class="mb-3" />

        <div class="mb-3">
          <span class="text-body-2 font-weight-medium d-block mb-2">
            Tamanho do texto ({{ fontScale }}%)
          </span>
          <div class="d-flex align-center justify-space-between ga-2" role="group" aria-label="Controle de tamanho da fonte">
            <v-btn
              variant="outlined"
              color="secondary"
              size="small"
              :disabled="fontScale <= 90"
              aria-label="Diminuir tamanho da fonte"
              @click="changeFontScale(-10)"
            >
              A-
            </v-btn>
            <v-btn
              variant="outlined"
              color="secondary"
              size="small"
              :disabled="fontScale === 100"
              aria-label="Tamanho padrão da fonte"
              @click="resetFontScale"
            >
              100%
            </v-btn>
            <v-btn
              variant="outlined"
              color="secondary"
              size="small"
              :disabled="fontScale >= 130"
              aria-label="Aumentar tamanho da fonte"
              @click="changeFontScale(10)"
            >
              A+
            </v-btn>
          </div>
        </div>

        <v-switch
          v-model="highContrast"
          color="secondary"
          density="compact"
          hide-details
          label="Alto Contraste (WCAG AAA)"
          class="mb-2"
          @update:model-value="applyAccessibilitySettings"
        />

        <v-switch
          v-model="readableFont"
          color="secondary"
          density="compact"
          hide-details
          label="Fonte Legível (Baixa Visão)"
          class="mb-2"
          @update:model-value="applyAccessibilitySettings"
        />

        <v-switch
          v-model="vlibrasEnabled"
          color="secondary"
          density="compact"
          hide-details
          label="Tradutor Libras (VLibras)"
          class="mb-3"
          @update:model-value="applyAccessibilitySettings"
        />

        <v-divider class="mb-3" />

        <v-btn
          block
          variant="tonal"
          color="secondary"
          size="small"
          prepend-icon="mdi-restore"
          @click="resetAll"
        >
          Restaurar padrões
        </v-btn>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const emit = defineEmits(['update:vlibras']);

const STORAGE_KEY = 'portfolio_a11y_prefs';
const theme = useTheme();

const menuOpen = ref(false);
const baseTheme = ref('dark');
const highContrast = ref(false);
const readableFont = ref(false);
const fontScale = ref(100);
const vlibrasEnabled = ref(true);

const applyAccessibilitySettings = () => {
  theme.global.name.value = highContrast.value ? 'highContrast' : baseTheme.value;

  const root = document.documentElement;
  root.classList.toggle('high-contrast-mode', highContrast.value);
  root.classList.toggle('readable-font', readableFont.value);
  root.style.fontSize = `${fontScale.value}%`;

  emit('update:vlibras', vlibrasEnabled.value);

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        baseTheme: baseTheme.value,
        highContrast: highContrast.value,
        readableFont: readableFont.value,
        fontScale: fontScale.value,
        vlibrasEnabled: vlibrasEnabled.value,
      })
    );
  } catch {
    // Ignorar falha de armazenamento caso cookies/localStorage estejam bloqueados
  }
};

const toggleHighContrast = () => {
  highContrast.value = !highContrast.value;
  applyAccessibilitySettings();
};

const toggleBaseTheme = () => {
  baseTheme.value = baseTheme.value === 'dark' ? 'light' : 'dark';
  applyAccessibilitySettings();
};

const changeFontScale = (delta) => {
  const next = Math.min(130, Math.max(90, fontScale.value + delta));
  fontScale.value = next;
  applyAccessibilitySettings();
};

const resetFontScale = () => {
  fontScale.value = 100;
  applyAccessibilitySettings();
};

const resetAll = () => {
  baseTheme.value = 'dark';
  highContrast.value = false;
  readableFont.value = false;
  fontScale.value = 100;
  vlibrasEnabled.value = true;
  applyAccessibilitySettings();
};

onMounted(() => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved) {
      if (saved.baseTheme === 'light' || saved.baseTheme === 'dark') {
        baseTheme.value = saved.baseTheme;
      }
      highContrast.value = Boolean(saved.highContrast);
      readableFont.value = Boolean(saved.readableFont);
      if (typeof saved.fontScale === 'number' && saved.fontScale >= 90 && saved.fontScale <= 130) {
        fontScale.value = saved.fontScale;
      }
      if (typeof saved.vlibrasEnabled === 'boolean') {
        vlibrasEnabled.value = saved.vlibrasEnabled;
      }
    }
  } catch {
    // Usar valores padrão caso ocorra erro no parse
  }
  applyAccessibilitySettings();
});
</script>
