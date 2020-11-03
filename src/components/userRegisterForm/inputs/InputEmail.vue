<template>
  <div class="input-box">
    <label for="email" class="label-bold">Email</label>
    <input
      v-model="input"
      name="email"
      class="input-field border-rounded bg-light-gray"
      required
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

<script lang="ts">
import { email, required } from '@/validators';
import { Ref, ref, watch } from 'vue';
import state from '@/state';
import useInputErrors from '@/modules/useInputErrors';

export default {
  setup() {
    const componentName = 'InputEmail';
    const errors: Ref<Array<string | null>> = ref([]);
    const validators = [email(), required()];
    const { addError } = useInputErrors();
    const input: Ref<string> = ref(state.userForm.email);

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
        state.userForm.email = input.value;
      }
    });

    return {
      input,
      errors,
    };
  },
};
</script>
