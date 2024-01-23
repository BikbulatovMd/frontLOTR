<template>
  <div class="filter">
    <input v-model="filter" type="text" placeholder="Filter by name" class="input" />
  </div>
  <div v-auto-animate class="grid">
    <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCharactersStore } from '@/stores/characters'

import CharacterCard from '@/components/CharacterCard.vue'

export default {
  components: { CharacterCard },

  data() {
    return {
      filter: ''
    }
  },

  computed: {
    ...mapState(useCharactersStore, ['filteredCharacters', 'characters']),

    characters() {
      return this.filteredCharacters(this.filter)
    }
  }
}
</script>

<style scoped>
.filter {
  margin-bottom: 20px;
}

.input {
  background-color: white;
  border-radius: 8px;
  padding: 2px 4px;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgb(78, 49, 4);
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 20px;
}
</style>
