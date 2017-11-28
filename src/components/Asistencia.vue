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
        <div row wrap v-for="item in items" v-bind:key="item.title">
          <v-card class="mb-2"	>
            <v-list >
              <v-list-tile>
                <v-flex xs11>
                  <span :class="`${theme.defaulttheme.color.first}--text`">1</span>
                  <v-list-tile-avatar >
                    <v-icon :color="`${theme.defaulttheme.color.first}`">person</v-icon>
                  </v-list-tile-avatar>
                    <span>{{ item.title }}</span>
                </v-flex>
                <v-flex xs2>
                  <v-list-tile-action>
                    <v-radio-group row center class="mb-3">
                      <v-radio bottom label="" color="red darken-3" value="red darken-3"></v-radio>
                      <v-radio label="" color="indigo" value="indigo"></v-radio>
                      <v-radio label="" color="indigo darken-3" value="indigo darken-3"></v-radio>
                    </v-radio-group>
                  </v-list-tile-action>
                </v-flex>
              </v-list-tile>
            </v-list>
          </v-card>
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
    data() {
      return {
        picker: null,
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
    computed: {
      ...mapState(['theme']),
    },
  };

</script>

<style>
  .active{
  }
</style>
