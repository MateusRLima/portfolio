<template>
  <div class="social-links mt-8">
    <h2 v-if="title" class="mb-4">{{ title }}</h2>

    <div class="cta-buttons d-flex flex-wrap">
      <v-btn
        :size="btnSize"
        color="secondary"
        variant="flat"
        prepend-icon="mdi-card-account-mail-outline"
        class="font-weight-bold"
        @click="contactDialog = true"
      >
        Entrar em Contato
      </v-btn>

      <v-btn
        v-if="resumeUrl"
        :size="btnSize"
        :href="resumeUrl"
        download="Curriculo-Mateus-Rosa.pdf"
        color="secondary"
        variant="outlined"
        prepend-icon="mdi-file-download-outline"
      >
        Baixar Currículo (PDF)
      </v-btn>
    </div>

    <v-dialog v-model="contactDialog" max-width="520">
      <v-card class="contact-card pa-4" rounded="lg">
        <div class="d-flex align-start justify-space-between mb-2">
          <div>
            <h2 class="contact-card-title">Mateus Rosa de Lima</h2>
            <p class="text-body-2 opacity-80">
              Desenvolvedor Full Stack • Pernambuco
            </p>
          </div>
          <v-btn
            icon
            variant="text"
            size="small"
            aria-label="Fechar cartão de contato"
            @click="contactDialog = false"
          >
            <v-icon aria-hidden="true">mdi-close</v-icon>
          </v-btn>
        </div>

        <v-divider class="my-3" />

        <v-list lines="two" class="bg-transparent pa-0">
          <v-list-item
            v-for="link in sanitizedLinks"
            :key="link.icon + link.title"
            rounded="lg"
            class="contact-item mb-2 px-3"
          >
            <template #prepend>
              <v-avatar color="secondary" variant="tonal" size="40">
                <v-icon color="secondary" aria-hidden="true">mdi-{{ link.icon }}</v-icon>
              </v-avatar>
            </template>

            <v-list-item-title class="font-weight-bold">
              {{ link.title || link.label }}
            </v-list-item-title>
            <v-list-item-subtitle class="contact-value">
              {{ link.displayValue || link.url }}
            </v-list-item-subtitle>

            <template #append>
              <div class="d-flex align-center ga-1">
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="secondary"
                  :aria-label="`Copiar ${link.title || link.label}`"
                  :title="`Copiar ${link.copyValue || link.displayValue || link.url}`"
                  @click="copyContact(link)"
                >
                  <v-icon aria-hidden="true">
                    {{ copiedKey === link.icon + link.title ? 'mdi-check' : 'mdi-content-copy' }}
                  </v-icon>
                </v-btn>

                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="secondary"
                  :href="link.url"
                  :target="link.isExternal ? '_blank' : '_self'"
                  :rel="link.isExternal ? 'noopener noreferrer' : undefined"
                  :aria-label="link.label || `Abrir ${link.title}`"
                  :title="link.label || `Abrir ${link.title}`"
                >
                  <v-icon aria-hidden="true">mdi-open-in-new</v-icon>
                </v-btn>
              </div>
            </template>
          </v-list-item>
        </v-list>

        <template v-if="resumeUrl">
          <v-divider class="my-3" />
          <v-btn
            block
            variant="tonal"
            color="secondary"
            prepend-icon="mdi-file-download-outline"
            :href="resumeUrl"
            download="Curriculo-Mateus-Rosa.pdf"
          >
            Baixar Currículo Completo (PDF)
          </v-btn>
        </template>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbar"
      :timeout="2500"
      color="secondary"
      location="bottom"
    >
      <div class="d-flex align-center">
        <v-icon start aria-hidden="true">mdi-check-circle-outline</v-icon>
        <span>{{ snackbarText }}</span>
      </div>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  resumeUrl: {
    type: String,
    default: '/Curriculo-Mateus-Rosa.pdf',
  },
  links: {
    type: Array,
    required: true,
  },
});

const contactDialog = ref(false);
const snackbar = ref(false);
const snackbarText = ref('');
const copiedKey = ref('');

const ALLOWED_PROTOCOLS = ['https:', 'mailto:', 'tel:'];

const isSafeUrl = (rawUrl) => {
  try {
    const parsed = new URL(rawUrl);
    return ALLOWED_PROTOCOLS.includes(parsed.protocol);
  } catch {
    return false;
  }
};

const sanitizedLinks = computed(() =>
  props.links
    .filter((link) => typeof link?.url === 'string' && isSafeUrl(link.url))
    .map((link) => ({
      ...link,
      isExternal: link.url.startsWith('https:'),
    }))
);

const copyContact = async (link) => {
  const valueToCopy = link.copyValue || link.displayValue || link.url;
  try {
    await navigator.clipboard.writeText(valueToCopy);
    copiedKey.value = link.icon + link.title;
    snackbarText.value = `${link.title || 'Contato'} copiado: ${valueToCopy}`;
    snackbar.value = true;
    setTimeout(() => {
      if (copiedKey.value === link.icon + link.title) {
        copiedKey.value = '';
      }
    }, 2000);
  } catch {
    snackbarText.value = `Valor: ${valueToCopy}`;
    snackbar.value = true;
  }
};

const { mdAndDown } = useDisplay();
const btnSize = computed(() => (mdAndDown.value ? 'default' : 'large'));
</script>

<style lang="scss" scoped>
@use '../global';

.cta-buttons {
  gap: 16px 20px;
}

.contact-card {
  font-family: global.$primary-font;

  .contact-card-title {
    font-size: 1.5rem;
    color: rgb(var(--v-theme-secondary));
  }

  .contact-item {
    border: 1px solid rgba(var(--v-theme-secondary), 0.35);
  }

  .contact-value {
    opacity: 0.9;
    user-select: all;
  }
}
</style>
