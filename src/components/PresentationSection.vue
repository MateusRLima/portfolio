<template>
  <v-container class="presentation">
    <v-row align="center">
      <v-col sm="5" class="pl-10" align="left">
        <h1 class="presentation-title">Olá, me chamo<br /> <strong class="presentation-name">Mateus
            Rosa</strong></h1>
        <span>
          <p class="presentation-job">Desenvolvedor Web</p>
          <v-icon x-large>mdi-language-html5</v-icon>
          <v-icon x-large class="mx-5">mdi-language-javascript</v-icon>
          <v-icon x-large>mdi-language-css3</v-icon>
        </span>
        <div class="mt-10">
          <h2 class="mb-5">Vamos nos falar:</h2>
          <v-btn :large="isLarge" target="_blank" href="https://wa.me/5581998120775" dark outlined color="secondary"><v-icon :large="isLarge"
              color="secondary">mdi-whatsapp</v-icon></v-btn>
          <v-btn :large="isLarge" dark outlined color="secondary" class="mx-5"
            href="https://www.linkedin.com/in/mateus-r-de-lima/" target="_blank"><v-icon :large="isLarge"
              color="secondary">mdi-linkedin</v-icon></v-btn>
          <v-btn :large="isLarge" dark outlined color="secondary" class="mr-5" href="https://github.com/MateusRLima"
            target="_blank"><v-icon :large="isLarge" color="secondary">mdi-github</v-icon></v-btn>
          <v-btn :large="isLarge" dark outlined color="secondary" href="tel:+5581998120775"><v-icon :large="isLarge"
              color="secondary">mdi-phone</v-icon></v-btn>
        </div>
        <!-- <v-btn dark outlined color="#fc4dc7" href="https://drive.google.com/uc?export=download&id=151GCe6SavYxAG2ZtD2HeL-Lqh3oCCOKi" large>Baixe o meu currículo<v-icon color="#fc4dc7"
            class="ml-2">mdi-file-download</v-icon></v-btn> -->
      </v-col>
      <v-col align="center">
        <img src="@/assets/Mateus 2.png" alt="Mateus de perfil com um computado a sua frente" class="presentation-img">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PresentationSection",

  computed: {
    isLarge() {
      return !this.$vuetify.breakpoint.mdAndDown;
    }
  },
}

</script>

<style lang="scss" scoped>
@use '../global';

.presentation {
  font-family: global.$primary-font, monospace;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .presentation-img {
    height: 425px;
  }

  .presentation-title {
    font-size: 3rem;

    .presentation-name {
      color: global.$pink;
    }
  }

  .presentation-job {
    font-size: 1.5rem;
  }
}

@media (min-width: 1380px) {
  .presentation-title {
    font-size: 4rem !important;
  }

  .presentation-img {
    height: 550px !important;
  }
}
</style>