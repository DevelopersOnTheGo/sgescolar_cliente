<template>
  <div>
    <div v-for="(the , i) in theme.otherstheme" :style="theme.style">
      <v-btn flat :color="the.color.first" :dark="theme.defaulttheme.dark"  @click="selectTheme(i)">Theme{{i+1}}</v-btn>
    </div>
  </div>
</template>
<script>

  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState(['theme']),
    },
    data() {
      return {
      };
    },
    methods: {
      selectTheme(id) {
        this.$store.dispatch('selectTheme', { id });
      },
    },
  };
</script>
