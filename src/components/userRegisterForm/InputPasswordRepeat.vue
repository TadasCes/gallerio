<template>
  <div class="input-box">
    <label for="password" class="label-bold">Repeat password</label>
    <input v-model="password" name="password" class="input-field border-rounded bg-light-gray" />
  </div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {
  setup() {
    const password = ref("");

    return {
      password
    };
  }
};
</script>
