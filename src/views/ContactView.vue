<template>
  <section>
    <h3 class="text-center">Feedback Form</h3>
    <!-- Form -->
    <FeedbackForm @submit="submit" />
  </section>
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm.vue'

export default {
  components: {
    FeedbackForm
  },

  methods: {
    submit(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped></style>
