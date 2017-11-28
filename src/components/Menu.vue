<template>
  <v-list>
    <div v-for="(item, i) in menuItems">
      <v-list-group v-if="item.children" :key="i" no-action>
        <v-list-tile slot="item">
          <v-list-tile-action>
            <v-icon>{{ item.model ? item.icon : item.icon_alt }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="(child, i) in item.children" :to="child.path" active-class='active' :key="i" >
          <v-list-tile-action v-if="child.icon">
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ child.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <div v-else >
      <v-list-tile v-if="item.state" :to="item.path" active-class="active" :key="i">

          <v-list-tile-action >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
    </div>
  </v-list>
</template>
<script>

  import { listMenu } from '@/router/index';

  export default {
    name: 'AsMenu',
    mounted() {
    },
    data: () => ({
      menu: 'menu',
      menuItems: listMenu,
    }),
  };
</script>

<style>
</style>
