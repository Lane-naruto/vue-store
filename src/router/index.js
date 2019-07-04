import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Gallery from '@/pages/gallery/Gallery'
import Maps from '@/pages/map/Map'
import List from '@/pages/list/List'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }, {
      path: '/map/:lat/:lng',
      name: 'Map',
      component: Maps
    }, {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
