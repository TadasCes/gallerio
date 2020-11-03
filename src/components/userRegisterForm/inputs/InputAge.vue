<template>
  <div class="input-box">
    <label for="age" class="label-bold">Age</label>
    <input
      v-model="input"
      type="number"
      name="age"
      class="input-field border-rounded bg-light-gray"
    />
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
import { minNumber, maxNumber } from '@/validators';
import { Ref, ref, watch } from 'vue';
import state from '@/state';
import useInputErrors from '@/modules/useInputErrors';

export default {
  setup() {
    const componentName = 'InputAge';
    const errors: Ref<Array<string | null>> = ref([]);
    const validators = [maxNumber(100), minNumber(3)];
    const { addError } = useInputErrors();
    const input = ref(state.userForm.age);

    function doesHaveErrors(errorList: Array<string | null>) {
      errorList.forEach(error => {
        if (error !== null) addError(componentName, error);
      });
    }

    watch(state.isFormSubmitTriggered, () => {
      if (input.value !== null) {
        errors.value == null;
        if (input.value > 0) {
          errors.value = validators.map(validator => validator(input.value));
        }
        doesHaveErrors(errors.value);
        if (state.errorList.value.length === 0) {
          state.userForm.age = input.value;
        }
      }
    });

    return {
      input,
      errors,
    };
  },
};
</script>
