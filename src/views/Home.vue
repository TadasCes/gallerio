<template>
  <div class="home">
    <div>
      <Menu></Menu>
    </div>
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Menu,
  },
})
export default class Home extends Vue {}
</script>
