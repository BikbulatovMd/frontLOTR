<script>
import { mapState } from 'pinia'

import { useStoryStore } from '@/stores/story'

export default {
  data() {
    return {}
  },

  computed: {
    ...mapState(useStoryStore, ['chapters'])
  }
}
</script>

<template>
  <div>
    <section v-for="chapter in chapters" :key="chapter.key">
      <h2>{{ chapter.title }}</h2>
      <p>{{ chapter.content }}</p>
    </section>
  </div>
</template>
