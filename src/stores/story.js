import { defineStore } from 'pinia'

import data from '@/data.json'

export const useStoryStore = defineStore('story', {
  state: () => ({
    chapters: data.story
  })
})
