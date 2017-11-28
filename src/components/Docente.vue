<template>
  <v-layout>
    <v-flex xl8 lg8 md8 sm12 xs12>
      <v-layout row wrap v-if="notification.code.info==200">
        <v-flex xl8 lg10 md10 sm12 sx12 v-for="(data,i)  in docente.data" :key="i" v-if="data.docente_curso_count>=1">
          <v-list three-line>
            <v-list-tile avatar @click="select(data.id)" to="/docente/curso/">
              <v-list-tile-action>
                <v-btn icon ripple @click="">
                  <span :class="`${theme.defaulttheme.color.first}--text`">{{i+1}}</span>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{data.docente_nombre}} {{data.docente_apellidos}}</v-list-tile-title>
                <v-list-tile-sub-title>{{data.grado_academico}} : {{data.licenciatura}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{data.codigo}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <es-notification></es-notification>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>

  import { mapState } from 'vuex';
  import Notification from '@/components/Notification';

  export default {
    components: {
      'es-notification': Notification,
    },
    mounted() {
      this.$store.dispatch('LOAD_PROFESSOR_LIST');
    },
    data: () => ({
    }),
    created() {
    },
    computed: {
      ...mapState(['docente']),
      ...mapState(['notification']),
      ...mapState(['theme']),
    },
    methods: {
      select(id) {
        this.$router.push({ name: 'cursos', params: { id } });
      },
    },
  };
</script>
