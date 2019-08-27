<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import Header from './components/Header.vue';
import RouterView from './components/RouterView.vue';

export default createComponent({
  components: { Header, RouterView },
});
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/hermanya/react-color-table/example/public/bootstrap-with-variables.css';
</style>
