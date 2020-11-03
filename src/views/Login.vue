<template>
  <div class="login">
    <h1>Login</h1>
    <form class="mb-3">
      <div class="input-group w-50 mx-auto pb-3">
        <label for="username" class="label-bold">Username</label>
        <input
          v-model="username"
          name="username"
          class="input-field border-rounded bg-light-gray"
          required
        />
        <div v-if="usernameErrors.length <= 0">
          <span class="error-message"></span>
        </div>
        <div v-else class="padding-05">
          <span
            v-for="error in usernameErrors"
            :key="error"
            class="error-message"
            >{{ error }}</span
          >
        </div>
      </div>

      <div class="input-group w-50 mx-auto pb-3">
        <label for="password" class="label-bold">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="input-field border-rounded bg-light-gray"
          required
        />
        <div v-if="passwordErrors.length <= 0">
          <span class="error-message"></span>
        </div>
        <div v-else class="padding-05">
          <span
            v-for="error in passwordErrors"
            :key="error"
            class="error-message"
            >{{ error }}</span
          >
        </div>
      </div>
    </form>
    <button @click.prevent="loginUser" class="btn btn-primary  mr-3">
      Login
    </button>
    <button class="btn btn-primary-outline">Register</button>
  </div>
</template>

<style scoped>
@import '../assets/syles/input-style.css';
</style>

<script lang="ts">
import { Ref, ref } from 'vue';
import useLogin from '@/modules/useLogin';
import {
  errorsFound,
  minLength,
  oneDigit,
  oneLowerCase,
  oneUpperCase,
  required,
} from '@/validators';
import useInputErrors from '@/modules/useInputErrors';
import router from '@/router';

export default {
  setup() {
    const usernameErrors: Ref<Array<string | null>> = ref([]);
    const passwordErrors: Ref<Array<string | null>> = ref([]);
    const passwordValidators = [
      minLength(8),
      required(),
      oneLowerCase(),
      oneUpperCase(),
      oneDigit(),
    ];
    const usernameValidators = [required(), minLength(3)];
    const { addError } = useInputErrors();
    const { login } = useLogin();

    const username: Ref<string> = ref('');
    const password: Ref<string> = ref('');

    function loginUser() {
      usernameErrors.value == null;
      passwordErrors.value == null;
      usernameErrors.value = usernameValidators.map(validator =>
        validator(username.value)
      );
      passwordErrors.value = passwordValidators.map(validator =>
        validator(password.value)
      );
      if (
        !(
          errorsFound(usernameErrors.value) && errorsFound(passwordErrors.value)
        )
      ) {
        login({
          username: username.value,
          password: password.value,
        }).then(status => {
          switch (status) {
            case 200: {
              console.log('Login successfull');
              router.push('/home');
              break;
            }
            case 401: {
              passwordErrors.value.push('Incorrect password');
              break;
            }
            case 404: {
              usernameErrors.value.push('User not found');
              break;
            }
          }
        });
      }
    }

    return {
      username,
      password,
      loginUser,
      usernameErrors,
      passwordErrors,
    };
  },
};
</script>
