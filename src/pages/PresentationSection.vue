<template>
  <v-container class="presentation">
    <v-row align="center">
      <v-col cols="12" sm="5" class="pl-sm-10" align="left">
        <SectionTitle tag="h1" class="presentation-title">
          Olá, me chamo<br /> <strong class="presentation-name">Mateus Rosa</strong>
        </SectionTitle>
        <div>
          <p class="presentation-job mb-1">Desenvolvedor Full Stack</p>
          <p class="presentation-location mb-4">
            <v-icon size="small" color="secondary" aria-hidden="true" class="mr-1">mdi-map-marker</v-icon>
            Pernambuco
          </p>
          <div
            class="tech-icons d-flex flex-wrap align-center"
            role="img"
            aria-label="Tecnologias principais: React, Vue.js, TypeScript, JavaScript, Go, .NET, HTML5 e CSS3"
          >
            <v-icon size="x-large" aria-hidden="true">mdi-react</v-icon>
            <v-icon size="x-large" aria-hidden="true">mdi-vuejs</v-icon>
            <v-icon size="x-large" aria-hidden="true">mdi-language-typescript</v-icon>
            <v-icon size="x-large" aria-hidden="true">mdi-language-javascript</v-icon>
            <v-icon size="x-large" aria-hidden="true">mdi-language-go</v-icon>
            <v-icon size="x-large" aria-hidden="true">mdi-dot-net</v-icon>
            <v-icon size="x-large" aria-hidden="true">mdi-language-html5</v-icon>
            <v-icon size="x-large" aria-hidden="true">mdi-language-css3</v-icon>
          </div>
        </div>
        <SocialLinks
          title="Vamos nos conhecer:"
          resume-url="/Curriculo-Mateus-Rosa.pdf"
          :links="socialLinks"
        />
      </v-col>
      <v-col cols="12" sm="7" align="center">
        <v-img
          :src="mateusImg"
          alt="Foto de Mateus Rosa de perfil utilizando um computador"
          class="presentation-img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import SocialLinks from '../components/SocialLinks.vue';
import mateusImg from '@/assets/Mateus2.png';

const socialLinks = [
  {
    icon: 'email-outline',
    title: 'E-mail',
    displayValue: 'mateus2010limas@gmail.com',
    copyValue: 'mateus2010limas@gmail.com',
    label: 'Enviar e-mail para mateus2010limas@gmail.com',
    url: 'mailto:mateus2010limas@gmail.com',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    displayValue: '(81) 99812-0775',
    copyValue: '+5581998120775',
    label: 'Conversar pelo WhatsApp (81) 99812-0775',
    url: 'https://wa.me/5581998120775',
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    displayValue: 'linkedin.com/in/mateus-r-de-lima',
    copyValue: 'https://www.linkedin.com/in/mateus-r-de-lima/',
    label: 'Abrir perfil no LinkedIn',
    url: 'https://www.linkedin.com/in/mateus-r-de-lima/',
  },
  {
    icon: 'github',
    title: 'GitHub',
    displayValue: 'github.com/MateusRLima',
    copyValue: 'https://github.com/MateusRLima',
    label: 'Abrir perfil no GitHub',
    url: 'https://github.com/MateusRLima',
  },
  {
    icon: 'phone',
    title: 'Telefone',
    displayValue: '(81) 99812-0775',
    copyValue: '+5581998120775',
    label: 'Ligar para (81) 99812-0775',
    url: 'tel:+5581998120775',
  },
];
</script>

<style lang="scss" scoped>
@use '../global';

.presentation {
  font-family: global.$primary-font;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .presentation-img {
    max-height: 425px;
  }

  .presentation-title {
    font-size: 3rem;

    .presentation-name {
      color: rgb(var(--v-theme-secondary));
    }
  }

  .presentation-job {
    font-size: 1.5rem;
  }

  .presentation-location {
    font-size: 1rem;
    opacity: 0.9;
  }

  .tech-icons {
    gap: 12px 16px;
  }
}

@media (min-width: 1380px) {
  .presentation-title {
    font-size: 4rem !important;
  }

  .presentation-img {
    max-height: 550px !important;
  }
}
</style>
