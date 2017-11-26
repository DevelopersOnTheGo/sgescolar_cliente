<template>
  <div>
    <h2>{{curso.title}}</h2>
    <v-content v-if="curso.code==200">
      <form v-on:submit.prevent="save(curso.temp.id)">
        <input type="text" v-model="curso.temp.nombre">
        <input type="text" v-model="curso.temp.codigo">
        <input type="submit" value="Envar">
      </form>
      <div v-for="(data, index) in curso.data" :key="curso.id">
        <span>{{index+1}} - </span>
        <span>{{data.nombre}}</span>
        <span>{{data.codigo}}</span>
        <input type="submit" v-on:click="remove(data.id, index)" value="X">
        <input type="submit" v-on:click="select(data, index)" value="editar">
      </div>
    </v-content>
    <es-notavailable></es-notavailable>
    <div>
      <p>{{curso.available}}</p>
      <p>{{curso.code}}</p>
      <p>-------------------------</p>
      <pre>{{curso.message_available}}</pre>
    </div>
  </div>
</template>

<script>

  import { mapState } from 'vuex';
  import NotAvailable from '@/components/NotAvailable';

  export default {
    components: {
      'es-notavailable': NotAvailable,
    },
    name: 'Curso',
    mounted() {
      this.$store.dispatch('LOAD_PROJECT_LIST');
    },
    created() {
    },
    data: () => ({
      title: 'Cursos',
    }),
    computed: {
      ...mapState(['curso']),
    },
    methods: {
      save(id) {
        if (id) {
          this.$store.dispatch('EDIT_PROJECT', { id });
        } else {
          this.$store.dispatch('ADD_NEW_PROJECT');
        }
      },
      remove(id, index) {
        this.$store.dispatch('DELETE_COMPLETED', { id, index });
      },
      select(curso, index) {
        this.curso.temp.nombre = curso.nombre;
        this.curso.temp.codigo = curso.codigo;
        this.curso.temp.estado = curso.estado;
        this.curso.temp.id = curso.id;
        this.curso.temp.index = index;
      },
      clear() {
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
