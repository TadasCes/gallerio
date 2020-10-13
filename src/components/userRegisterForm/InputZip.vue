<template>
  <div class="input-box">
    <label for="zipCode" class="label-bold">Zip-code</label>
    <input
      v-model="input"
      name="zipCode"
      class="input-field border-rounded bg-light-gray"
    />
    <div v-if="errors.length <= 0">
      <span class="error-message"></span>
    </div>
    <div v-else style="padding: 0 0.5em">
      <span v-for="error in errors" :key="error" class="error-message">{{ error }}</span>
    </div>
  </div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import useInputValidator from "../../modules/useInputValidator";
import { minLength, maxLength, required } from "@/validators";
import { ref } from "vue";

export default {
  emits: ["input"],
  props: {
    value: String
  },
  setup(props: any, { emit }: any) {
    const { input, errors } = useInputValidator(
      props.value,
      [minLength(3), maxLength(50), required()],
      (value: string) => emit("input", value)
    );

    return {
      input,
      errors
    };
  }
};
</script>
