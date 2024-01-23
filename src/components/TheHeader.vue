<template>
  <header class="header">
    <nav class="navbar">
      <div class="container menu-wrapper">
        <RouterLink class="brand" :to="{ name: 'home' }">
          LOTR
          <img
            src="/img/logo2.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top ms-2"
          />
        </RouterLink>
        <ul class="menu">
          <li v-for="link in links" :key="link.id" class="menu-item">
            <RouterLink class="menu-link" :to="{ name: link.path }">{{ link.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  },

  data() {
    return {
      links: [
        {
          id: 1,
          name: 'Home',
          path: 'home'
        },
        {
          id: 2,
          name: 'Movies',
          path: 'movies'
        },
        {
          id: 3,
          name: 'Quiz',
          path: 'quiz'
        },
        {
          id: 4,
          name: 'Characters',
          path: 'characters'
        },
        {
          id: 5,
          name: 'Contact',
          path: 'contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #f8f9fa;
}

.navbar {
  padding: 10px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  text-decoration: none;
  color: #000000e6;
}

.menu-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  display: flex;
  align-items: center;
}

.menu-item {
}

.menu-link {
  padding: 10px;
  text-decoration: none;
  color: #0000008c;
  display: block;
}

.router-link-exact-active {
  color: #000000e6;
}
</style>
