<template>
  <div class="home">
    <div>
      <Menu></Menu>
    </div>
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>Very nice</h1>
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
