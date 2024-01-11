<template>
  <v-container class="skills mb-10">
    <h1 class="skills-title pl-6 mb-10">Habilidades</h1>
    <v-row class="pl-10">
      <v-col class="pl-0">
        <div>
          <h2 class="skill-division">Hard Skill</h2>
          <h3 class="mb-5 skill-categories">Front-end</h3>
          <v-row>
            <SkillChip chip-name="HTML5" icon="mdi-language-html5" />
            <SkillChip chip-name="CSS3" icon="mdi-language-css3" />
            <SkillChip chip-name="Javascript" icon="mdi-language-javascript" />
            <SkillChip chip-name="Typescript" icon="mdi-language-typescript" />
            <SkillChip chip-name="SASS" icon="mdi-sass" />
            <SkillChip chip-name="Bootstrap" icon="mdi-bootstrap" />
            <SkillChip chip-name="VueJS" icon="mdi-vuejs" />
            <SkillChip chip-name="Vuetify" icon="mdi-vuetify" />
            <SkillChip chip-name="Nuxt" icon="mdi-nuxt" />
            <SkillChip chip-name="Angular" icon="mdi-angular" />
            <SkillChip chip-name="ReactJS" icon="mdi-react" />
          </v-row>
          <h3 class="mb-5 mt-10 skill-categories">Versionamento</h3>
          <v-row>
            <SkillChip chip-name="Git" icon="mdi-git" />
            <SkillChip chip-name="Bitbucket" icon="mdi-bitbucket" />
            <SkillChip chip-name="Github" icon="mdi-github" />
            <SkillChip chip-name="Gitlab" icon="mdi-gitlab" />
          </v-row>
          <h3 class="mb-5 mt-10 skill-categories">Outros</h3>
          <v-row>
            <SkillChip chip-name="Webpack" icon="mdi-webpack" />
            <SkillChip chip-name="NodeJS" icon="mdi-nodejs" />
            <SkillChip chip-name="Graphql" icon="mdi-graphql" />
          </v-row>
        </div>
      </v-col>
      <v-col class="pl-0">
        <div>
          <h2 class="skill-division">Soft Skill</h2>
          <v-row>
            <SkillChip chip-name="Trabalho em equipe" icon="mdi-account-group" />
            <SkillChip chip-name="Gerenciamento de tempo" icon="mdi-account-clock" />
            <SkillChip chip-name="Comunicação" icon="mdi-account-tie-voice" />
            <SkillChip chip-name="Organização" icon="mdi-account-tie" />
            <SkillChip chip-name="Atenção a detalhes" icon="mdi-account-eye" />
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SkillChip from './SkillChip.vue';

export default {
  name: "SkillSection",

  components: {
    SkillChip,
  },

  computed: {
    isVertical(){
      return !this.$vuetify.breakpoint.mdAndDown;
    }
  },
}
</script>
<style lang="scss" scoped>
@use '../global';

.skills {
  .skills-title {
    font-family: global.$primary-font, monospace;
    font-size: 3rem;
  }

  .skill-division {
    font-size: 2.5rem;
  }

  .skill-categories {
    font-size: 2rem;
  }

  h2,
  h3 {
    font-family: global.$primary-font, monospace;
  }
}

@media (min-width: 1380px) {
  .skills-title {
    font-size: 4rem !important;
  }
}
</style>