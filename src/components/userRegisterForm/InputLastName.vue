<template>
  <div class="input-box">
    <label for="lastName" class="label-bold">Last Name</label>
    <input v-model="lastName" name="lastName" class="input-field border-rounded bg-light-gray" />
  </div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {
  setup() {
    const lastName = ref("");

    return {
      lastName
    };
  }
};
</script>
