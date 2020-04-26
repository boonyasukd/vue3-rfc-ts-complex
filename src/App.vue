<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: { Header },
});
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/hermanya/react-color-table/example/public/bootstrap-with-variables.css';
</style>
