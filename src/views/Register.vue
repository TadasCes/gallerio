<template>
  <div class="register">
    <h1>Register</h1>
    <form class="mb-3 container">
      <div class="row">
        <div class="col-lg-6">
          <InputName></InputName>
        </div>
        <div class="col-lg-6">
          <InputLastName></InputLastName>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <InputPassword></InputPassword>
        </div>
        <div class="col-lg-6">
          <InputPasswordRepeat></InputPasswordRepeat>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <InputEmail></InputEmail>
        </div>
      </div>
    </form>
    <button @click.prevent="submitForm" class="btn btn-primary  mr-3">
      Register
    </button>
    <router-link to="/users">
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
  errorsFound,
  minLength,
  oneDigit,
  oneLowerCase,
  oneUpperCase,
  required,
} from '@/validators';
import useInputErrors from '@/modules/useInputErrors';
import router from '@/router';
import InputName from '@/components/userRegisterForm/inputs/InputName.vue';
import InputLastName from '@/components/userRegisterForm/inputs/InputLastName.vue';
import InputEmail from '@/components/userRegisterForm/inputs/InputEmail.vue';
import InputPassword from '@/components/userRegisterForm/inputs/InputPassword.vue';
import InputPasswordRepeat from '@/components/userRegisterForm/inputs/InputPasswordRepeat.vue';
import state from '@/state';
import useUserService from '@/modules/useUserService';

export default {
  components: {
    InputName,
    InputLastName,
    InputEmail,
    InputPassword,
    InputPasswordRepeat,
  },
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
    const { postUser } = useUserService();

    const username: Ref<string> = ref('');
    const password: Ref<string> = ref('');

    function submitForm() {
      state.errorList.value.length = 0;
      state.toggleTriggered();

      setTimeout(() => {
        console.log(state.errorList.value);
        console.log(state.doesHasErrors.value);
        console.log(state.errorList.value.length);
        if (state.errorList.value.length > 0) {
          console.log('has errors');
        } else {
          postUser().then(status => {
            switch (status) {
              case 200: {
                console.log('Registration successfull');
                router.push('/login');
                break;
              }
              case 401: {
                addError('InputPassword', 'Incorrect password');
                break;
              }
              case 404: {
                addError('InputName', 'User not found');
                break;
              }
            }
          });
          router.push('/users');
        }
      }, 1000);
    }

    async function loginUser() {
      usernameErrors.value == null;
      passwordErrors.value == null;
      usernameErrors.value = usernameValidators.map(validator => validator(username.value));
      passwordErrors.value = passwordValidators.map(validator => validator(password.value));
      if (!(errorsFound(usernameErrors.value) && errorsFound(passwordErrors.value))) {
        await login({
          username: username.value,
          password: password.value,
        }).then(status => {
          switch (status) {
            case 200: {
              console.log('Registration successfull');
              router.push('/login');
              break;
            }
            case 401: {
              addError('InputPassword', 'Incorrect password');
              break;
            }
            case 404: {
              addError('InputName', 'User not found');
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
      submitForm
    };
  },
};
</script>
