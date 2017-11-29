<template>
  <v-container grid-list-md >
    <p class="headline text-xs-left mt-0 mb-1" :class="`${theme.defaulttheme.color.first}--text`">{{title}}</p>
    <v-divider class="mb-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs8>
          <v-layout row wrap >
            <v-flex xs10 class="text-xs-center">
              {{content}}
            </v-flex>
            <v-flex xs2>
              <v-btn-toggle >
                <v-btn flat><span>P</span></v-btn>
                <v-btn flat><span>T</span></v-btn>
                <v-btn flat><span>F</span></v-btn>
              </v-btn-toggle>
            </v-flex>
          </v-layout>
      </v-flex>
      <v-flex xs4 class="text-xs-center">
        calendar
      </v-flex>
      <v-flex xs8>
        <div v-for="data in asistencia.data">
        <div row wrap v-for="(matricula,i) in data.matricula" v-bind:key="i">
          <v-card class="mb-2"	>
            <v-list >
              <v-list-tile>
                <v-flex xs11>
                  <span :class="`${theme.defaulttheme.color.first}--text`">{{i+1}}</span>
                  <v-list-tile-avatar >
                    <v-icon :color="`${theme.defaulttheme.color.first}`">person</v-icon>
                  </v-list-tile-avatar>
                    <span>{{ matricula.seccion_estudiante }}</span>
                </v-flex>
                <v-flex xs2>
                  <v-list-tile-action>
                    <v-radio-group row center class="mb-3" v-model="matricula['estado','PRESENTE']">
                      <v-radio bottom label="" color="red darken-3" value="PRESENTE" :aria-checked="true"></v-radio>
                      <v-radio label="" color="indigo" value="TARDE" ></v-radio>
                      <v-radio label="" color="indigo darken-3" value="FALTA" ></v-radio>
                    </v-radio-group>
                  </v-list-tile-action>
                </v-flex>

              </v-list-tile>
            </v-list>
          </v-card>
          <pre> {{matricula}}</pre>

        </div>
        </div>

      </v-flex>
      <v-flex xs4>
        <v-date-picker locale :color="`${theme.defaulttheme.color.first}`" v-model="picker" :header-color="`${theme.defaulttheme.color.first}`"></v-date-picker>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

  import { mapState } from 'vuex';

  export default {
    mounted() {
      const idD = this.$route.params.id;
      const idC = this.$route.params.idC;
      this.$store.dispatch('LOAD_ESTUDENT_COURSE', { idD, idC });
      // this.$store.dispatch('LOAD_ESTUDENT_COURSE');
    },
    data() {
      return {
        picker: null,
        checked: 'PRESENTE',
        title: 'Asistencia de estudiantes',
        grado: '6to',
        seccion: 'A',
        area: 'Matematica',
        content: 'Apellidos y Nombres de de los estudiantes',
        items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
        ],
      };
    },
    methods: {
      select(data, value) {
        console.log(data, value);
      },
    },
    computed: {
      ...mapState(['theme']),
      ...mapState(['asistencia']),
    },
  };

</script>

<style>
  .active{
  }
</style>
