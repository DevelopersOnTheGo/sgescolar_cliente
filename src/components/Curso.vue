<template>
  <v-container  text-xs-center>
    <v-layout row wrap>
      <div  v-if="notification.code.info==200">
        <v-card color="pink darken" class="white--text">
          <v-container fluid grid-list-lg>
            <h4>{{title}}</h4>
          </v-container>
        </v-card>
        <v-card light color="white">
          <v-container fluid grid-list-lg>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field label="Nombre" v-model="curso.temp.nombre" :counter="100" required></v-text-field>
              <v-text-field label="Codigo" v-model="curso.temp.codigo" :counter="20" required></v-text-field>
              <v-card-actions>
                <v-btn @click="save(curso.temp.id)" :disabled="!valid">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </div>
      <v-flex xl12 lg12 md12 sm12 xs12>
        <v-layout >
          <v-card>
            <table>
              <thead>
              <tr>
                <th v-for="i in curso.objectKeysHead" @click="Order()">{{i}}</th>
              </tr>
              </thead>
              <tfoot>
              <tr>
                <td><v-btn>aquiq</v-btn></td>
                <td><v-btn>aquiq</v-btn></td>
                <td><v-btn>aquiq</v-btn></td>
                <td>$180</td>
              </tr>
              </tfoot>
              <tbody>

              <tr v-for="(data, i) in curso.data"  @click="select(data, i)">
                <td>{{i+1}}</td>
                  <td v-for="td in curso.objectKeysBody">{{data[td]}}</td>
                  <td>
                    <v-list-tile-action>
                      <v-btn  @click="remove(data.id, i)">
                        <v-icon color="red lighten-1">remove</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </td>

              </tr>

              <tr>
                <td>February</td>
                <td>$80</td>
              </tr>
              </tbody>
            </table>
          </v-card>
        </v-layout>
      </v-flex>
      <v-list-tile-action>
        <v-btn icon @click="remove(data.id, i)">
          <v-icon color="red lighten-1">delete</v-icon>
        </v-btn>
        <v-btn icon ripple @click="remove(data.id, i)">
          <v-icon color="red lighten-1">delete</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-flex xl6 lg6 md6 sm6 xs6>

        <v-layout>
          <es-notification></es-notification>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  import { mapState, mapGetters } from 'vuex';
  import Notification from '@/components/Notification';

  export default {
    components: {
      'es-notification': Notification,
    },
    name: 'Curso',
    mounted() {
      this.$store.dispatch('LOAD_PROJECT_LIST');
    },
    created() {
    },
    data: () => ({
      title: 'Cursos',
      valid: false,
      nameRules: [
        v => !!v || 'Campo Obligatorio ',
        v => (v && v.length) <= 30 || 'No mas de 30 caractéres',
      ],
      descripcionRules: [
        v => !!v || 'Campo Obligatorio ',
        v => (v && v.length) <= 200 || 'No mas de 200 caractéres',
      ],
    }),
    computed: {
      ...mapState(['curso']),
      ...mapState(['notification']),
      ...mapGetters(['selectObjectKey']),
      cabecera() {
        return Object.keys(this.head[0]);
      },
    },
    methods: {
      save(id) {
        if (id) {
          this.$store.dispatch('EDIT_PROJECT', { id });
        } else {
          this.$store.dispatch('ADD_NEW_PROJECT');
        }
      },
      clear() {
        this.$refs.form.reset();
      },
      remove(id, index) {
        this.$store.dispatch('DELETE_COMPLETED', { id, index });
      },
      select(curso, index) {
        this.curso.temp.nombre = curso.nombre;
        this.curso.temp.descipcion = curso.descipcion;
        this.curso.temp.codigo_local = curso.codigo_local;
        this.curso.temp.id = curso.id;
        this.curso.temp.index = index;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    border-collapse:collapse;
    width: 100%;
  }
  tr:hover{
    background: rgba(113, 108, 101, 0.85);

  }
  tr:nth-child(even) {background-color: #f2f2f2;}
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
