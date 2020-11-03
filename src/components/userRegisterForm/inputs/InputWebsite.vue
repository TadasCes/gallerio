<template>
  <div class="input-box">
    <label for="website" class="label-bold">Website</label>
    <input
      v-model="website"
      name="website"
      class="input-field border-rounded bg-light-gray"
    />
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { Ref, ref, watch } from 'vue';
import state from '@/state';
import useInputErrors from '@/modules/useInputErrors';
import { minLength } from '@/validators';

export default {
  setup() {
    const componentName = 'InputWebsite';
    const errors: Ref<Array<string | null>> = ref([]);
    const validators = [minLength(3)];
    const { addError } = useInputErrors();
    const input: Ref<string> = ref(state.userForm.website);

    function doesHaveErrors(errorList: Array<string | null>) {
      errorList.forEach(error => {
        if (error !== null) addError(componentName, error);
      });
    }

    watch(state.isFormSubmitTriggered, () => {
      errors.value == null;
      errors.value = validators.map(validator => validator(input.value));
      doesHaveErrors(errors.value);
      if (state.errorList.value.length === 0) {
        state.userForm.website = input.value;
      }
    });

    return {
      input,
      errors,
    };
  },
};
</script>
