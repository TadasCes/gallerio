<template>
  <div class="input-box">

  <label for="website" class="label-bold">Website</label>
  <input v-model="website" name="website" class="input-field border-rounded bg-light-gray"/>
  </div>
</template>

<style scoped>
@import "input-style.css";

</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {

  setup() {
    const website = ref("");

    return {
        website
    };
  }
};
</script>
