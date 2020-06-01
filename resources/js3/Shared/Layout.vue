<template>
  <div id="app">
    <Navbar :url="url()" />
    <div class="container">
        <div v-if="$page.flash.message" class="alert">
          {{ $page.flash.message }}
        </div>      
        <slot />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    url() {
      return location.pathname.substr(1)
    },
  },  
}
</script>

<style>
  * {
    font-family: 'Roboto';
  }

  body {
    background-color:#ccdef5;
  }
</style>