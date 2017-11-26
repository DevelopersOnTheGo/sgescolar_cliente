<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{texto}}</p>
    <es-acctions></es-acctions>
    <es-modules></es-modules>
    <es-getters></es-getters>
  </div>
</template>

<script>

  import Actions from '@/components/Actions';
  import Getters from '@/components/Getters';
  import Modules from '@/components/Modules';

  export default {
    components: {
      'es-acctions': Actions,
      'es-getters': Getters,
      'es-modules': Modules,
    },
    created() {
    },
    data() {
      return {
        texto: 'para test de interfaz o renderizado',
        title: 'Ejemplo para la pruebas unitarias con VUEX',
      };
    },
  };
</script>
