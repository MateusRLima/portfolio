<template>
  <v-container class="portfolio">
    <h1 class="portfolio-title pl-6 mb-10">Portfólio</h1>
    <v-row>
      <v-col>
        <iframe src="https://www.behance.net/embed/project/152047307?ilo0=1" height="316" width="404" allowfullscreen
          lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
      </v-col>
      <v-col>
        <iframe src="https://www.behance.net/embed/project/117374525?ilo0=1" height="316" width="404" allowfullscreen
          lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
      </v-col>
      <v-col>
        <iframe src="https://www.behance.net/embed/project/118857649?ilo0=1" height="316" width="404" allowfullscreen
          lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
export default {
  name: "PortfolioSection",


}
</script>
<style lang="scss" scoped>
@use '../global';

.portfolio {
  height: 100%;

  .portfolio-title {
    font-family: global.$primary-font, monospace;
    font-size: 3rem;
  }
}

@media (min-width: 1380px) {
  .portfolio-title {
    font-size: 4rem !important;
  }
}</style>