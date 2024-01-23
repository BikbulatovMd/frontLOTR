import { defineStore } from 'pinia'

import data from '@/data.json'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: data.characters
  }),

  getters: {
    filteredCharacters: (state) => (search) => {
      return state.characters.filter((character) => {
        return character.name.toLowerCase().includes(search.trim().toLowerCase())
      })
    },

    getCharacterById: (state) => (id) => {
      return state.characters.find((character) => character.id == id)
    }
  }
})
