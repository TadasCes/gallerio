<template>
  <div class="about">
    <div>
      <Menu></Menu>
    </div>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

export default {
  components: {
    Menu,
  },
};
</script>
