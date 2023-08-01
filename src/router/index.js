import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Pokedex from '@/views/Pokedex.vue'
import PokemonView from '@/views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex
    },
    {
      path: '/pokedex/:pokemon',
      name: 'pokemon',
      component: PokemonView
    }
  ]
})

export default router;