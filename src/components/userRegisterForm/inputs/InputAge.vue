<template>
  <div class="input-box">
    <label for="age" class="label-bold">Age</label>
    <input v-model="input" name="age" class="input-field border-rounded bg-light-gray" />
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
import { minNumber, maxNumber } from "@/validators";
import { ref, watch } from "vue";
import state from "@/state";

export default {
  emits: ["input"],
  props: {
    value: String
  },
  setup(props: any, { emit }: any) {
    const componentName = "InputAge";
    const { input, errors } = useInputValidator(
      props.value,
      componentName,
      [minNumber(1), maxNumber(120)],
      (value: string) => emit("input", value)
    );

    watch(state.isFormSubmitTriggered, (triggered) => {
      state.userToBeCreated.age = parseInt(input.value);
    });

    return {
      input,
      errors
    };
  }
};
</script>
