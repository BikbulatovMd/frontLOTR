<template>
  <div class="movies">
    <section v-for="movie in movies" :key="movie.id">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <p class="movie-description">
        {{ movie.description }}
      </p>

      <v-carousel hide-delimiters class="slider">
        <v-carousel-item
          v-for="image in movie.images"
          :key="image"
          :src="image"
          cover
        ></v-carousel-item>
      </v-carousel>
    </section>
  </div>
</template>

<script>
import { mapState } from 'pinia'

import { useMoviesStore } from '@/stores/movies'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapState(useMoviesStore, ['movies'])
  }
}
</script>

<style scoped>
.movies {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.movie-title {
  margin-bottom: 16px;
}

.movie-description {
  margin-bottom: 16px;
}

.slider {
  max-width: 900px;
  margin: 0 auto;
}
</style>
