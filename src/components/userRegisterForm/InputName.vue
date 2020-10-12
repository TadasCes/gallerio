<template>
  <div class="input-box">
    <label for="name" class="label-bold">Name</label>
    <input v-model="input" class="input-field border-rounded bg-light-gray" name="name" />
  </div>
  <div>{{errors.value}}</div>
</template>

<style scoped>
@import "input-style.css";
</style>

<script lang="ts">
import useInputValidator from "../../modules/useInputValidator";
import { minLength } from "@/validators"

export default {
  emits: ["input"],
  props: {
    value: String
  },
  setup(props: any, { emit }: any) {  
    const { input, errors } = useInputValidator(
      props.value,
      [ minLength(3) ],
			(value: string) => emit("input", value)
    )

    return {
      input,
      errors
    };
  }
};
</script>
