<template>
  <div class="input-box">
    <label for="name" class="label-bold">Name</label>
    <input
      type="text"
      v-model="input"
      class="input-field border-rounded bg-light-gray"
      required
    />
    <div v-if="errors.length <= 0">
      <span class="error-message"></span>
    </div>
    <div v-else class="padding-05">
      <span v-for="error in errors" :key="error" class="error-message">{{ error }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import useInputValidator from "../../../modules/useInputValidator";
import { minLength, maxLength, required } from "@/validators";
import { Ref, ref, watch } from "vue";
import useInputErrors from "@/modules/useInputErrors";
import state from "@/state";

export default {
  emits: ["input"],
  props: {
    value: String
  },
  setup(props: any, { emit }: any) {
    const componentName = "InputName";
    const errors: Ref<Array<string | null>> = ref([]);
    const validators = [minLength(3), maxLength(30), required()];
    const { addError } = useInputErrors();
    const input = ref(props.value);

    function doesHaveErrors(errorList: Array<string | null>) {
      errorList.forEach((error) => {
        if (error !== null) addError(componentName, error);
      });
    }

    watch(state.isFormSubmitTriggered, (triggered) => {
      errors.value == null;
      errors.value = validators.map((validator) => validator(input.value));
      doesHaveErrors(errors.value);
      if (state.errorList.value.length === 0) {
        state.userForm.name = input.value;
      }
    });

    return {
      input,
      errors
    };
  }
};
</script>
