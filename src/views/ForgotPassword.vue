<template>
  <div class="login">
    <h1>Forgot password</h1>
    <form class="mb-3">
      <div class="input-group w-50 mx-auto pt-3">
        <label for="email" class="label-bold">Type your email</label>
        <input
          v-model="emailInput"
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
    </form>
    <button @click.prevent="submitForm" class="btn btn-primary  mr-3">
      Send a new password
    </button>
    <router-link to="/login">
      <button class="btn btn-outline-primary mr-3">Back</button>
    </router-link>
  </div>
</template>

<style scoped>
@import '../assets/syles/input-style.css';
</style>

<script lang="ts">
import { Ref, ref } from 'vue';
import useLogin from '@/modules/useLogin';
import {
  email,
  errorsFound,
  minLength,
  oneDigit,
  oneLowerCase,
  oneUpperCase,
  required,
} from '@/validators';
import useInputErrors from '@/modules/useInputErrors';
import router from '@/router';
import state from '@/state';

export default {
  setup() {
    const errors: Ref<Array<string | null>> = ref([]);
    const validators = [email(), required()];
    const { addError, errorsFound } = useInputErrors();
    const emailInput = ref('')

    async function submitForm() {
      errors.value == null;
      errors.value = validators.map(validator => validator(emailInput.value));
      if (!errorsFound(errors.value)) {
        // send email
      } else {
        console.log('Errors found');
      }
    }

    return {
      emailInput,
      errors
    };
  },
};
</script>
