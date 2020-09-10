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

<script lang="ts" setup>
export { default as Header } from '@/components/Header.vue';
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/hermanya/react-color-table/example/public/bootstrap-with-variables.css';
</style>
