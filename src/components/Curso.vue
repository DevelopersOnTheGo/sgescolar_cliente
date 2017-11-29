<template>
  <v-container grid-list-lg text-xs-center class="pt-0">
    <p class="headline text-xs-left mt-0 mb-1" :class="`${theme.defaulttheme.color.first}--text`">{{curso.title}}</p>
    <v-divider red class="mb-3"></v-divider>
    <v-layout row wrap v-if="notification.code.info==200">
      <v-flex xs6 md4 v-for="(data,i)  in curso.data" :key="i" class="mb-3">
        <v-card>
          <v-layout row wrap >
            <v-flex xs6 >
              <v-card-title primary-title>
                <div class="subheading text-xs-left">{{data.area}}</div>
              </v-card-title>
              <v-card-title>
                <div class="caption text-xs-center">{{data.grado}} {{data.seccion}}</div>
              </v-card-title>
            </v-flex>
            <v-flex xs6 class="pl-0">
              <v-card class="mr-2">
              <v-card-media class="white--text" height="120px" src="./static/img/glasses.jpg">
              </v-card-media>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card-actions>
                <v-btn flat :color="theme.defaulttheme.color.first" small class="ma-0">Ver</v-btn>
                <v-btn flat :color="theme.defaulttheme.color.first" small class="ma-0" @click="select(data.mis_areas)">Asistencia</v-btn>
              </v-card-actions>
            </v-flex>
            {{data}}
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <es-notification></es-notification>
    </v-layout>
  </v-container>
</template>
<script>

  import { mapState } from 'vuex';
  import Notification from '@/components/Notification';

  export default {
    components: {
      'es-notification': Notification,
    },
    mounted() {
      const id = this.$route.params.id;
      this.$store.dispatch('LOAD_COURSES_PROFESSOR', { id });
    },
    data: () => ({
    }),
    created() {
    },
    computed: {
      ...mapState(['curso']),
      ...mapState(['notification']),
      ...mapState(['theme']),
    },
    methods: {
      select(idc) {
        const id = this.$route.params.id;
        this.$router.push({ name: 'asistencia', params: { id, idC: idc } });
      },
    },
  };
</script>
<style>
  h1{
    font-size: 40px !important;
    text-shadow: 2px 2px #3e4c71;
  }
</style>
