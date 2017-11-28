<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-media>
          <v-toolbar :color="theme.defaulttheme.color.first" :dark="theme.defaulttheme.dark">
            <v-toolbar-title >Notificacion</v-toolbar-title>
          </v-toolbar>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{title}}</h3>
            <div>{{content}}</div>
          </div>
        </v-card-title>
        <v-card-text class="subheading">{{report}}</v-card-text>
        <v-card-actions>
          <v-btn flat :color="theme.defaulttheme.color.first" @click.native.stop="dialog = true">Reportar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{report_firebse}}</v-card-title>
        <v-card-text>{{content_report}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :color="theme.defaulttheme.color.first"  flat="flat" @click.native="dialog = false">cancelar</v-btn>
          <v-btn :color="theme.defaulttheme.color.first"  flat="flat" @click.native="send()">enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data: () => ({
      dialog: false,
      title: 'SERVICIO TEMPORALMETE NO DISPONIBLE',
      content: 'Vuenva en unos minutos',
      report: 'De no ser asi : Reporte el problema',
      report_firebse: '¿ Desea reportar el Problema ?',
      content_report: 'El problema sera reportado, atenderemos de inmediato el problema ',
    }),
    methods: {
      send() {
        this.dialog = false;
        this.$store.commit('SEND_ERROR_INFORMATION');
      },
    },
    computed: {
      ...mapState(['theme']),
    },
  };
</script>
