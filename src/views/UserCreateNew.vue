<template>
  <div class="user-register-form mt-3">
    <h3>Create new User</h3>
    <RegistrationForm></RegistrationForm>
  </div>
</template>

<style scoped>
hr {
  border-top: 1px solid rgb(146, 146, 146);
}
</style>

<script lang="ts">
import RegistrationForm from '../components/userRegisterForm/RegistrationForm.vue';

export default {
  components: {
    RegistrationForm,
  },
  setup() {
    return {};
  },
};
</script>
