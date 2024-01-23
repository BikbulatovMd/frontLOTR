<template>
  <form class="form">
    <div class="form-input">
      <label for="name" class="label">Name</label>
      <input v-model="name" type="text" name="name" id="name" placeholder="Name" class="input" />
      <small class="form-error-feedback"></small>
    </div>
    <div class="form-input">
      <label for="email" class="label">E-mail</label>
      <input
        v-model="email"
        type="text"
        name="email"
        id="email"
        placeholder="E-mail"
        class="input"
      />
    </div>
    <div class="form-input">
      <label for="text" class="label">Your comment on the project</label>
      <textarea
        v-model="text"
        name="text"
        id="text"
        placeholder="Your comments"
        rows="5"
        class="input textarea"
      ></textarea>
    </div>
    <div class="form-input checkbox-input">
      <input v-model="check" type="checkbox" id="check" class="checkbox" />
      <label for="check" class="label">Consent to the processing of personal data</label>
    </div>
    <button @click.prevent="submit" type="submit" id="form-btn">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      text: '',
      check: false
    }
  },

  emits: ['submit'],

  methods: {
    submit() {
      if (!this.name || !this.email || !this.text || !this.check) {
        alert('Please fill in all fields')
        return
      }

      this.$emit('submit', {
        name: this.name,
        email: this.email,
        text: this.text
      })

      this.name = ''
      this.email = ''
      this.text = ''
      this.check = false
    }
  }
}
</script>

<style scoped>
.form {
  max-width: 600px;
  margin: 20px auto 0;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px 32px;
}

.label {
  color: black;
}
</style>
