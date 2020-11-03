<template>
  <div class="input-box">
    <label for="country" class="label-bold">Country</label>
    <select
      name="country"
      class="input-field border-rounded bg-light-gray"
      v-model="selectedCountry"
    >
      <option selected="selected" disabled>- Select a country -</option>
      <option
        v-for="country in countryList"
        :key="country.code"
        :value="country.name"
      >
        {{ country.name }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import countries from '@/assets/countries.json';
import state from '@/state';
import { ref, watch } from 'vue';

export default {
  setup() {
    const countryList = ref(countries);
    const selectedCountry = ref(state.userForm.address.country);

    watch(state.isFormSubmitTriggered, () => {
      console.log(selectedCountry.value);
      if (selectedCountry.value !== '') {
        state.userForm.address.country = selectedCountry.value;
      }
    });
    return {
      countryList,
      selectedCountry,
    };
  },
};
</script>
