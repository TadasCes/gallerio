<template>
  <div class="input-box">

  <label for="age" class="label-bold">Age</label>
  <input v-model="age" name="age"  class="input-field border-rounded bg-light-gray"/>
  </div>

</template>

<style scoped>
@import "input-style.css";

</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";

export default {

  setup() {
    const age = ref(0);

    return {
        age
    };
  }
};
</script>
