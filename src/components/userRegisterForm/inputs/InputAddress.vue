<template>
  <div class="input-box">
    <label for="address" class="label-bold">Address</label>
    <input
      v-model="input"
      name="address"
      class="input-field border-rounded bg-light-gray"
      @input="onChange"
      required
    />
    <ul v-show="isOpen" class="suggestion-box">
      <li
        v-for="(result, i) in suggestions"
        :key="i"
        @click="selectAnAddress(result)"
      >
        {{ result }}
      </li>
    </ul>

    <div v-if="errors.length <= 0">
      <span class="error-message"></span>
    </div>
    <div v-else class="padding-05">
      <span v-for="error in errors" :key="error" class="error-message">{{
        error
      }}</span>
    </div>
  </div>
</template>
<style scoped></style>

<script lang="ts">
import useInputValidator from '../../../modules/useInputValidator';
import { minLength, maxLength, required } from '@/validators';
import { onMounted, Ref, ref, watch } from 'vue';
import state from '@/state';
import useInputErrors from '@/modules/useInputErrors';
import addresses from '../../../assets/addresses.json';
import { IAddress } from '@/models/IAddress';

export default {
  setup() {
    const componentName = 'InputStreetAddress';

    const errors: Ref<Array<string | null>> = ref([]);
    const validators = [minLength(3), maxLength(30)];
    const { addError } = useInputErrors();
    const input: Ref<string> = ref(state.userForm.address.streetAddress);
    const suggestions: Ref<string[]> = ref([]);
    const addressList = addresses;
    const isOpen = ref(false);

    function doesHaveErrors(errorList: Array<string | null>) {
      errorList.forEach(error => {
        if (error !== null) addError(componentName, error);
      });
    }

    function autocompleteAddress(searchString: string) {
      suggestions.value = [];
      addresses.filter(address => {
        if (
          address.streetAddress
            .toLowerCase()
            .indexOf(searchString.toLowerCase()) !== -1
        ) {
          suggestions.value.push(address.streetAddress);
        }
      });
    }

    function selectAnAddress(address: string) {
      input.value = address;
      isOpen.value = false;
    }

    function onChange() {
      if (input.value !== '') {
        isOpen.value = true;
      } else {
        isOpen.value = false;
      }
      autocompleteAddress(input.value);
    }

    watch(state.isFormSubmitTriggered, () => {
      errors.value == null;
      errors.value = validators.map(validator => validator(input.value));
      doesHaveErrors(errors.value);
      if (state.errorList.value.length === 0) {
        state.userForm.address.streetAddress = input.value;
      }
    });

    return {
      input,
      errors,
      suggestions,
      isOpen,
      onChange,
      selectAnAddress,
    };
  },
};
</script>
