<template>
  <div class="user-register-form mt-3">
    <div class="container w-50">
      <router-link to="/users">
        <button class="btn btn-outline-primary mr-5 float-left ">
          <i class="material-icons align-middle">arrow_back</i>
          Back
        </button>
      </router-link>
      <h3 class="d-inline align-middle">Create new User</h3>
    </div>
    <NewUserForm></NewUserForm>
  </div>
</template>

<style scoped>
hr {
  border-top: 1px solid rgb(146, 146, 146);
}
</style>

<script lang="ts">
import NewUserForm from '../components/userRegisterForm/NewUserForm.vue';

export default {
  components: {
    NewUserForm,
  },
  setup() {
    return {};
  },
};
</script>
