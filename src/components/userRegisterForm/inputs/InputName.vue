<template>
  <div ref="componentName" class="input-box">
    <label for="name" class="label-bold">Name</label>
    <input type="text" v-model="input" class="input-field border-rounded bg-light-gray" />
    <div v-if="errors.length <= 0">
      <span class="error-message"></span>
    </div>
    <div v-else class="padding-05">
      <span v-for="error in errors" :key="error" class="error-message">{{ error }}</span>
    </div>
  </div>
</template>

<style scoped>
.padding-05 {
  padding: 0 0.5em;
}
</style>

<script lang="ts">
import useInputValidator from "../../../modules/useInputValidator";
import { minLength, maxLength, required } from "@/validators";
import { computed, ref, watch, watchEffect } from "vue";
import useInputErrors from "@/modules/useInputErrors";
import state from "@/state";

export default {
  name: "InputName",
  emits: ["get-input-value", "input"],
  props: {
    value: String,
    submitTrigger: Number
  },
  setup(props: any, { emit }: any) {
    const { addError } = useInputErrors();
    const { input, errors } = useInputValidator(
      props.value,
      [minLength(3), maxLength(30), required()],
      (result: string) => emit("input", result)
    );

    function isInputValid() {
      state.errorList.delete("InputName");
      errors.value.forEach((error: string | null) => {
        if (error !== null) {
          addError("InputName", error);
        }
      });
      return state.doesHasErrors.value !== true ? true : false;
    }

    function submitInput() {
      const field = {name: input.value}
      state.userToBeCreated.value = {...state.userToBeCreated.value, ...field}
      emit("get-input-value", input.value);
    }

    watch(
      () => state.isFormSubmitTriggered.value,
      (triggered) => {
        if (triggered == true) {
          if (isInputValid()) {
            submitInput();
          }
          state.toggleTriggered();
        }
      }
    );

    return {
      input,
      errors
    };
  }
};
</script>
