<template>
  <v-container class="portfolio">
    <h1 class="portfolio-title  mb-10">Portfólio</h1>
    <h2 class="portfolio-division mb-5">Behance</h2>
    <v-row>
      <v-col cols="4">

        <v-card>
          <img src="../assets/PTDA.png" height="300px"/>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Por trás do ato</h3>
              <div>description</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="primary">text</v-btn>
            <v-btn flat color="primary">text</v-btn>
          </v-card-actions>
        </v-card>
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
  font-family: global.$primary-font, monospace;

  .portfolio-title {
    font-size: 3rem;
  }
  .portfolio-division {
    font-size: 2.5rem;
  }
}

@media (min-width: 1380px) {
  .portfolio-title {
    font-size: 4rem !important;
  }
}
</style>