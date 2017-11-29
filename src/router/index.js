import Vue from 'vue';
import Router from 'vue-router';
import Curso from '@/components/Curso';
import Cur from '@/components/Cur';
import TestExample from '@/components/TestExample';
import Docente from '@/components/Docente';
import Asistencia from '@/components/Asistencia';

Vue.use(Router);

const listMenu = [
  {
    path: '/docente',
    name: 'docente',
    text: 'Docente',
    icon: 'people',
    state: true,
    component: Docente,
  },
  {
    path: '/docente/:id/curso',
    name: 'cursos',
    text: 'Cursos',
    icon: 'bubble_chart',
    state: false,
    component: Curso,
  },
  {
    path: '/test-example',
    name: 'test-example',
    icon: 'book',
    text: 'Test Example',
    state: true,
    component: TestExample,
  },
  {
    path: '/docente/:id/curso/:idC',
    name: 'asistencia',
    icon: 'bubble_chart',
    text: 'Asistencia',
    state: true,
    component: Asistencia,
  },
  {
    path: '/cur',
    name: 'asistencia-estudiante',
    icon: 'accessibility',
    text: 'Asistencia de estudiantes',
    state: true,
    component: Cur,
  },
  {
    path: '/docente',
    name: 'docente',
    icon: 'keyboard_arrow_up',
    icon_alt: 'keyboard_arrow_down',
    text: 'Docentes',
    model: false,
    state: false,
    children: [
      {
        path: '/docente/:id',
        icon: 'date_range',
        text: 'curso',
        state: false,
      },
    ],
  },
];
const routes = new Router({
  routes: listMenu,
});

export { routes, listMenu };
