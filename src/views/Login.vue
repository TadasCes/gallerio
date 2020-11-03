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
      </div>
      <div class="input-group w-50 mx-auto pb-3">
        <label for="password" class="label-bold">Password</label>
        <input
          v-model="password"
          name="password"
          class="input-field border-rounded bg-light-gray"
          required
        />
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
import { ref } from 'vue';
import useLogin from '@/modules/useLogin';

export default {
  setup() {
    const { login } = useLogin();

    const username = ref('');
    const password = ref('');

    function loginUser() {
      login({ username: username.value, password: password.value });
    }

    return {
      username,
      password,
      loginUser,
    };
  },
};
</script>
