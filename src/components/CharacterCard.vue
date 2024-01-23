<template>
  <div class="card">
    <img :src="character.image" class="image" />
    <div class="info">
      <h2>{{ character.name }}</h2>
      <div class="description">{{ character.description }}</div>
    </div>

    <RouterLink :to="{ name: 'character-details', params: { id: character.id } }" class="btn">
      Read more
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },

  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 10px;
  padding: 12px;
}

.image {
  max-width: 100%;
  max-height: 200px;
}

.info {
  margin-bottom: 12px;
  color: black;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn {
  border-radius: 8px;
  background-color: rgb(143, 91, 13);
  padding: 4px 8px;
  color: white;
  text-decoration: none;
}
</style>
