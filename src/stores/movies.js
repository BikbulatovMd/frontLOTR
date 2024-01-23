import { defineStore } from 'pinia'

import data from '@/data.json'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: data.movies
  })
})
