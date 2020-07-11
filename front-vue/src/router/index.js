import Vue from 'vue'
import Router from 'vue-router'
import ShowAll from '@/components/ShowAll'
import Detail from '@/components/Detail'
import Edit from '@/components/Edit'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowAll',
      component: ShowAll
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
