<template>
  <div class="input-box">
    <label for="country" class="label-bold">Country</label>
    <select name="country" class="input-field border-rounded bg-light-gray" >
        <option selected="selected" disabled>- Select a country -</option>
      <option v-for="country in countryList" :key="country.code" :value="country.code">
        {{country.name}}
      </option>
    </select>

  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { computed, onMounted, reactive, Ref, ref, watch } from "vue";
import countries from "@/assets/countries.json"

export default {
  setup() {
    const countryList= ref(countries);


    return {
      countryList
    };
  }
};
</script>
