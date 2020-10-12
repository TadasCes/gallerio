<template>
  <div class="input-box">
    <label for="city" class="label-bold">City</label>
    <input v-model="city" name="city" class="input-field border-rounded bg-light-gray" />
  </div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {
  setup() {
    const city = ref("");

    return {
      city
    };
  }
};
</script>
