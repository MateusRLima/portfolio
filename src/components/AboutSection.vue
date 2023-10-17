<template>
  <v-container class="about">
    <v-row align="center">
      <v-col sm="5" class="pl-10">
        <h1 class="about-title mb-0">Minha</h1>
        <strong class="about-name mb-5">Trajetória</strong>
        <div class="about-description">
          <p class="mb-5">
            Minha trajetória profissional até o momento me proporcionou um sólido conjunto de habilidades em
            desenvolvimento mobile e web, utilizando tecnologias como React Native, Vue.js e React.js. 
            Sou apaixonado por aprender e estar sempre atualizado com as tendências e melhores práticas da indústria.
          </p>
          <p>
            Estou constantemente buscando desafios que me permitam crescer e me aprimorar profissionalmente. Meu
            objetivo é contribuir com meu conhecimento e experiência para o sucesso de projetos inovadores, onde possa trabalhar em
            equipe e colaborar com outros profissionais talentosos. Estou animado para explorar novas oportunidades e
            enfrentar novos desafios em minha carreira como desenvolvedor.
          </p>
        </div>
      </v-col>
      <v-col align="left">
        <div class="timeline pa-5">
          <v-timeline dense>
            <v-timeline-item color="secondary">
              <h2 class="timeline-title mb-2">Tupi Consultoria</h2>
              Comecei minha carreira na Tupi Consultorias, onde atuei como desenvolvedor mobile, utilizando React Native
              para a criação de um aplicativo de distribuição de cupons. Durante os 4 meses em que estive lá, pude aprimorar minhas
              habilidades de desenvolvimento e aprender a trabalhar em equipe de forma eficiente.
            </v-timeline-item>
            <v-timeline-item color="secondary">
              <h2 class="timeline-title mb-2">LogusTech</h2>
              Posteriormente, ingressei na LogusTech como estagiário, onde tive a oportunidade de trabalhar com Vue.js e
              Vuetify. Durante meus 2 anos na empresa, fui promovido a desenvolvedor Júnior, o que demonstra meu
              comprometimento e crescimento profissional. Nessa experiência, adquiri um profundo conhecimento dessas
              tecnologias e desenvolvi habilidades sólidas de frontend.
            </v-timeline-item>
            <v-timeline-item color="secondary">
              <h2 class="timeline-title mb-2">Operalabs</h2>
              Em seguida, fui contratado pela Operalabs, uma empresa dinâmica e inovadora, onde trabalhei com React.js.
              Minhas principais responsabilidades envolviam a criação de dashboards financeiros, de controladoria e
              logística. Nessa posição, pude aplicar meu conhecimento técnico para desenvolver soluções eficientes e de alto
              desempenho. Além disso, a experiência na Operalabs me permitiu aprofundar meu entendimento sobre o desenvolvimento web e
              ampliar minha capacidade de trabalhar em projetos complexos.
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: "AboutSection",
}

</script>
<style lang="scss" scoped>
@use '../global';

.about {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .about-title {
    font-family: global.$primary-font, monospace;
    font-size: 3rem;
  }

  .about-name {
    font-family: global.$primary-font, monospace;
    font-size: 3rem;
    color: global.$pink;
  }

  .timeline{ 
      overflow-y: scroll;
      height: 500px;
    .timeline-title {
      font-family: global.$primary-font, monospace;
      color: global.$pink;
    }
  }

}

@media (min-width: 1380px) {
  .about-title {
    font-size: 4rem !important;
  }

  .about-name {
    font-size: 4rem !important;
  }

  .about-description{
    font-size: 1.3rem !important;
  }

  .timeline {
    font-size: 1.3rem !important;
    overflow: hidden !important;
    height: 100% !important;
  }
}
</style>