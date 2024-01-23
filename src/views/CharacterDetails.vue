<template>
  <div class="character">
    <div>
      <h1>{{ character.name }}</h1>
      <div>{{ character.description }}</div>
    </div>
    <img :src="character.image" :alt="character.name" class="image" />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCharactersStore } from '@/stores/characters'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState(useCharactersStore, ['getCharacterById']),

    character() {
      return this.getCharacterById(this.id)
    }
  }
}
</script>

<style scoped>
.character {
  display: flex;
  gap: 20px;
}

.image {
  max-width: 600px;
}
</style>
