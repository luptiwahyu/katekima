<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Home from './views/Home.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <div class="container p-2 mx-auto">
    <div class="flex flex-row flex-wrap py-4">
      <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
        <Sidebar />
      </aside>
      <div class=" w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        <Header />
        <RouterView />
        <Footer />
      </div>
    </div>
  </div> -->

  <!-- <div class="grid grid-flow-col grid-rows-4 gap-4 h-screen">
    <div class="row-span-4">01</div>
    <div class="col-span-2">02</div>
    <div class="col-span-2 row-span-2">03</div>
    <div class="col-span-2 row-span-1">04</div>
  </div> -->

  <div class="grid grid-cols-5">
    <div class="col-span-1">
      <Sidebar></Sidebar>
    </div>
    <div class="col-span-4">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
