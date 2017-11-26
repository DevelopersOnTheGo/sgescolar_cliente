<template>
  <v-app>
    <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <es-menu></es-menu>
    </v-navigation-drawer>
    <v-toolbar :color="theme.defaulttheme.color.first" :dark="theme.defaulttheme.dark" fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" :dark="theme.defaulttheme.dark"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :dark="theme.defaulttheme.dark" @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon :dark="theme.defaulttheme.dark" @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon :dark="theme.defaulttheme.dark" @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <es-theme></es-theme>
    </v-footer>
  </v-app>
</template>
<script>

  import Menu from '@/components/Menu';
  import Theme from '@/components/Theme';
  import { mapState } from 'vuex';

  export default {
    components: {
      'es-menu': Menu,
      'es-theme': Theme,
    },
    created() {
    },
    computed: {
      ...mapState(['theme']),
    },
    data() {
      return {
        type: true,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire',
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
      };
    },
    methods: {
      select(id) {
        this.$store.commit('SELECT_THEME', { id });
      },
    },
  };
</script>
