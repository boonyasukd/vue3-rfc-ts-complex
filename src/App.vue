<template>
  <div id="app">
    <app-header></app-header>
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
import AppHeader from './components/AppHeader.vue';
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/hermanya/react-color-table/example/public/bootstrap-with-variables.css';
</style>
