<template>
  <h1>Edit user</h1>
  <form class="container register-form" v-if="dataLoaded == true">
    <hr />

    <div class="row ">
      <div class="col-md-6 ">
        <InputName :startingValue="name"></InputName>
      </div>
      <div class="col-md-6">
        <InputLastName :startingValue="lastName.value"></InputLastName>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <InputEmail :startingValue="email.value"></InputEmail>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputAge :startingValue="parseInt(age.value)"></InputAge>
      </div>
      <div class="col-md-6">
        <InputWebsite :startingValue="website.value"></InputWebsite>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputCountry :startingValue="country.value"></InputCountry>
      </div>
      <div class="col-md-6">
        <InputCity :startingValue="city.value"></InputCity>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputAddress :startingValue="streetAddress.value"></InputAddress>
      </div>
      <div class="col-md-6">
        <InputZip :startingValue="parseInt(zip.value)"></InputZip>
      </div>
    </div>
    <hr />
    <div class="form-actions float-left mt-2">
      <button @click.prevent="updateForm" class="btn btn-primary mr-3">
        Edit
      </button>
      <router-link to="/users">
        <button class="btn btn-outline-primary mr-3">Back</button>
      </router-link>
    </div>
  </form>
</template>

<style scoped>
@import '../assets/syles/input-style.css';
@media screen and (min-width: 1002px) {
  .register-form {
    max-width: 60%;
  }
}

@media screen and (max-width: 768px) {
  .register-form {
    max-width: 100%;
  }
}

hr {
  border-top: 1px solid rgb(146, 146, 146);
}
</style>

<script lang="ts">
import { onBeforeMount, onUnmounted, ref } from 'vue';
``;
import InputName from '../components/userRegisterForm/inputs/InputName.vue';
import InputLastName from '../components/userRegisterForm/inputs/InputLastName.vue';
import InputEmail from '../components/userRegisterForm/inputs/InputEmail.vue';
import InputAge from '../components/userRegisterForm/inputs/InputAge.vue';
import InputWebsite from '../components/userRegisterForm/inputs/InputWebsite.vue';
import InputAddress from '../components/userRegisterForm/inputs/InputAddress.vue';
import InputCity from '../components/userRegisterForm/inputs/InputCity.vue';
import InputCountry from '../components/userRegisterForm/inputs/InputCountry.vue';
import InputZip from '../components/userRegisterForm/inputs/InputZip.vue';
import state from '@/state';
import router from '@/router';
import useUserService from '@/modules/useUserService';

export default {
  components: {
    InputName,
    InputLastName,
    InputEmail,
    InputAge,
    InputWebsite,
    InputAddress,
    InputCity,
    InputCountry,
    InputZip,
  },

  setup() {
    const dataLoaded = ref(false);

    const { updateUser } = useUserService();

    const passwordRepeat = ref('');
    const lastName = ref('');
    const website = ref('');
    const country = ref('');
    const streetAddress = ref('');
    const email = ref('');
    const name = ref('');
    const city = ref('');
    const zip = ref(0);
    const age = ref(0);

    function updateForm() {
      state.errorList.value.length = 0;
      state.toggleTriggered();
      const userToUpdateName = name.value;

      setTimeout(() => {
        if (state.errorList.value.length > 0) {
          console.log('has errors');
        } else {
          updateUser(userToUpdateName);
          console.log(state.userForm);
          router.push('/users');
        }
      }, 1000);
    }

    onBeforeMount(() => {
      console.log(state.userForm);
      name.value = state.userForm.name;
      lastName.value = state.userForm.lastName;
      website.value = state.userForm.website;
      email.value = state.userForm.email;
      age.value = state.userForm.age;
      country.value = state.userForm.address.country;
      streetAddress.value = state.userForm.address.streetAddress;
      city.value = state.userForm.address.city;
      zip.value = state.userForm.address.zipCode;
      dataLoaded.value = true;
      console.log(name.value);
    });

    onUnmounted(() => {
      dataLoaded.value = false;
    });

    return {
      passwordRepeat,
      updateForm,
      lastName,
      website,
      country,
      streetAddress,
      dataLoaded,
      email,
      name,
      city,
      zip,
      age,
    };
  },
};
</script>
