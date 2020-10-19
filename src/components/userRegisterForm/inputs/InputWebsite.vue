<template>
  <div class="input-box">

  <label for="website" class="label-bold">Website</label>
  <input v-model="website" name="website" class="input-field border-rounded bg-light-gray"/>
  </div>
</template>

<style scoped>


</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";
import state from '@/state';

export default {

  setup() {
    const website = ref("");
    const componentName = "InputWebsite";
    // const { addError } = useInputErrors();
    // const { input, errors } = useInputValidator(
    //   props.value,
    //   componentName,
    //   [minLength(3), maxLength(30), required()],
    //   (value: string) => emit("input", value)
    // );


    // watch(state.isFormSubmitTriggered, triggered => {
    //     state.userToBeCreated.name = input.value;
    // });
    
    return {
        website
    };
  }
};
</script>
