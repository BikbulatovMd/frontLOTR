<template>
  <div class="quiz-box">
    <div class="quiz-count">{{ score }}/{{ quizData.length }}</div>
    <div class="quiz-header">
      <h2 v-if="!showResult">{{ currentQuizData.question }}</h2>
      <h2 v-else>You answered correctly to {{ score }}/{{ quizData.length }} questions</h2>
      <ul v-if="!showResult" class="answer-list">
        <li class="answer-wrapper">
          <input v-model="answer" type="radio" name="answer" class="answer" value="a" />
          <label for="a">{{ currentQuizData.a }}</label>
        </li>
        <li class="answer-wrapper">
          <input v-model="answer" type="radio" name="answer" class="answer" value="b" />
          <label for="b">{{ currentQuizData.b }}</label>
        </li>
        <li class="answer-wrapper">
          <input v-model="answer" type="radio" name="answer" class="answer" value="c" />
          <label for="c">{{ currentQuizData.c }}</label>
        </li>
      </ul>
    </div>
    <div class="quiz-buttons">
      <button @click="restart" class="btn btn-secondary btn-lg me-2">Restart</button>
      <button @click="next" class="btn btn-secondary btn-lg">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      currentQuiz: 0,
      answer: '',
      showResult: false,

      quizData: [
        {
          question: 'Who possesses the ring of power at the start of the trilogy??',
          a: 'A: Gandalf',
          b: 'B: Bilbo',
          c: 'C: Sauron',
          correct: 'b'
        },
        {
          question: 'Who do the hobbits encounter at the Prancing Pony?',
          a: 'A: Aragorn',
          b: 'B: Legolas',
          c: 'C: Boromir',
          correct: 'a'
        },
        {
          question: 'How many members make up the fellowship of the ring?',
          a: 'A: Seven',
          b: 'B: Ten',
          c: 'C: Nine',
          correct: 'c'
        },
        {
          question: 'What is the name of the elf in the fellowship?',
          a: 'Merry',
          b: 'Legolas',
          c: 'Gimli',
          correct: 'b'
        },
        {
          question: 'What is the name of the dwarf in the fellowship?',
          a: 'Gimli',
          b: 'Sauron',
          c: 'Pipin',
          correct: 'a'
        }
      ]
    }
  },

  computed: {
    currentQuizData() {
      return this.quizData[this.currentQuiz]
    }
  },

  methods: {
    next() {
      if (!this.answer) return

      if (this.currentQuizData.correct === this.answer) {
        this.score++
      }

      this.currentQuiz++

      if (this.currentQuiz < this.quizData.length) {
        this.updateQuiz()
      } else {
        this.showResult = true
      }
    },
    restart() {
      this.currentQuiz = 0
      this.score = 0
      this.showResult = false
      this.updateQuiz()
    },
    updateQuiz() {
      this.answer = ''
    }
  }
}
</script>

<style scoped>
.quiz-box {
  max-width: 700px;
  margin: 0 auto;
}
</style>
