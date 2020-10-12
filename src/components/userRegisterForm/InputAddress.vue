<template>
  <div class="input-box">
    <label for="address" class="label-bold">Address</label>
    <input v-model="address" name="address" class="input-field border-rounded bg-light-gray" />
  </div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {
  setup() {
    const address = ref("");

    return {
      address
    };
  }
};
</script>
