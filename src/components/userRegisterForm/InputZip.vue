<template>
  <div class="input-box">
    <label for="zipCode" class="label-bold">Zip-code</label>
    <input v-model="zipCode" name="zipCode" class="input-field border-rounded bg-light-gray" />
  </div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {
  setup() {
    const zipCode = ref("");

    return {
      zipCode
    };
  }
};
</script>
