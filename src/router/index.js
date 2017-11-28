import Vue from 'vue';
import Router from 'vue-router';
import Curso from '@/components/Curso';
import TestExample from '@/components/TestExample';
import Docente from '@/components/Docente';

Vue.use(Router);

const listMenu = [
  {
    path: '/docente',
    name: 'docente',
    text: 'Docente',
    icon: 'bubble_chart',
    component: Docente,
  },
  {
    path: '/curso',
    name: 'Curso',
    text: 'Cursos',
    icon: 'bubble_chart',
    component: Curso,
  },
  {
    path: '/test-example',
    name: 'test-example',
    icon: 'book',
    text: 'Test Example',
    component: TestExample,
  },
  {
    path: '/estudiante',
    name: 'Estudiante',
    icon: 'bubble_chart',
    text: 'Estudiantes',
  },
  {
    path: '/asistencia-estudiante',
    name: 'asistencia-estudiante',
    icon: 'accessibility',
    text: 'Asistencia de estudiantes',
  },
  {
    path: '/docente',
    name: 'docente',
    icon: 'keyboard_arrow_up',
    icon_alt: 'keyboard_arrow_down',
    text: 'Docentes',
    model: false,
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
