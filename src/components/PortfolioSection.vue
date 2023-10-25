<template>
  <v-container class="portfolio">
    <h1 class="portfolio-title  mb-10">Portfólio</h1>
    <h2 class="portfolio-division mb-5">Behance</h2>
    <v-row>
      <v-col cols="4">
        <iframe src="https://www.behance.net/embed/project/152047307?ilo0=1" height="250" width="300" allowfullscreen
          lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
      </v-col>
      <v-col cols="4">
        <iframe src="https://www.behance.net/embed/project/117374525?ilo0=1" height="250" width="300" allowfullscreen
          lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
      </v-col>
      <v-col cols="4">
        <iframe src="https://www.behance.net/embed/project/118857649?ilo0=1" height="250" width="300" allowfullscreen
          lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
      </v-col>
    </v-row>
    <h2 class="portfolio-division my-5">Sites</h2>
    <v-row class="mb-10">
      <v-card width="500" class="mr-5">
        <v-img height="250" src="../assets/MrFat.png">
          <div class="icon-space d-flex justify-center align-center">
            <v-btn depressed target="_blank" href="https://mrfatbarbearia.com.br/" color="#1b1b1b">
              <span class="show-btn">
                https://mrfatbarbearia.com.br/
              </span>
            </v-btn>
          </div>
        </v-img>
      </v-card>
      <v-card width="500">
        <v-img height="250" src="../assets/PTDA.png">
          <div class="icon-space d-flex justify-center align-center">
            <v-btn depressed target="_blank" href="https://portrasdoato.web.app/#/" color="#1b1b1b">
              <span class="show-btn">
                https://portrasdoato.web.app/#/
              </span>
            </v-btn>
          </div>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PortfolioSection",
  data() {
    return {
      transparent: 'rgba(255, 255, 255, 0)',
    }
  },
}
</script>
<style lang="scss" scoped>
@use '../global';

.portfolio {
  height: 100%;
  font-family: global.$primary-font, monospace;

  .portfolio-title {
    font-size: 3rem;
  }

  .portfolio-division {
    font-size: 2.5rem;
  }

  .show-btn {
    color: global.$pink;
  }

  .not-show-btn {
    color: rgba(255, 255, 255, 0);
  }

  .icon-space {
    height: 100%;
  }
}

@media (min-width: 1380px) {
  .portfolio-title {
    font-size: 4rem !important;
  }
}
</style>