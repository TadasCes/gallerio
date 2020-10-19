<template>
  <div class="input-box">
    <label for="lastName" class="label-bold">Last Name</label>
    <input type="text" v-model="input" class="input-field border-rounded bg-light-gray" />
    <div v-if="errors.length <= 0">
      <span class="error-message"></span>
    </div>
    <div v-else class="padding-05">
      <span v-for="error in errors" :key="error" class="error-message">{{ error }}</span>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import useInputValidator from "../../../modules/useInputValidator";
import { minLength, maxLength, required } from "@/validators";
import { ref, watch } from "vue";
import state from "@/state";
import useInputErrors from "@/modules/useInputErrors";

export default {
  emits: ["input"],
  props: {
    value: String
  },
  setup(props: any, { emit }: any) {
    const componentName = "InputLastName";
    const { addError } = useInputErrors();
    const { input, errors } = useInputValidator(
      props.value,
      componentName,
      [minLength(3), maxLength(50), required()],
      (value: string) => emit("input", value)
    );

    watch(state.isFormSubmitTriggered, triggered => {
        state.userToBeCreated.lastName = input.value;
    });

    return {
      input,
      errors
    };
  }
};
</script>
