<template>
  <div class="input-box">
    <label for="email" class="label-bold">Email</label>
    <input v-model="email" name="email" class="input-field border-rounded bg-light-gray" />
  </div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {
  setup() {
    const email = ref("");

    return {
      email
    };
  }
};
</script>
