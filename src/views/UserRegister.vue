<template>
  <div class="user-register-form mt-3">
    <h3>Create new User</h3>
    <form class="container register-form">
      <hr />

      <div class="row ">
        <div class="col-md-6 ">
          <InputName v-model="name"></InputName>
        </div>
        <div class="col-md-6">
          <InputLastName v-model="lastName"></InputLastName>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <InputEmail v-model="email"></InputEmail>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <InputPassword v-model="password"></InputPassword>
        </div>
        <div class="col-md-6">
          <InputPasswordRepeat v-model="passwordRepeat"></InputPasswordRepeat>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <InputAge v-model="age"></InputAge>
        </div>
        <div class="col-md-6">
          <InputWebsite v-model="website"></InputWebsite>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <InputCountry v-model="country"></InputCountry>
        </div>
        <div class="col-md-6">
          <InputCity v-model="city"></InputCity>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <InputAddress v-model="address"></InputAddress>
        </div>
        <div class="col-md-6">
          <InputZip v-model="zip"></InputZip>
        </div>
      </div>
      <hr />
      <div class="form-actions float-left mt-2">
        <button class="btn btn-primary mr-3">Submit</button>
        <button @click.prevent="clearFormFields" class="btn btn-outline-primary">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.register-form {
  max-width: 50%;
}
hr {
  border-top: 1px solid rgb(146, 146, 146);
}
</style>

<script lang="ts">
import { computed, reactive, ref, watch } from "vue";
import InputName from "../components/userRegisterForm/InputName.vue";
import InputLastName from "../components/userRegisterForm/InputLastName.vue";
import InputEmail from "../components/userRegisterForm/InputEmail.vue";
import InputPassword from "../components/userRegisterForm/InputPassword.vue";
import InputPasswordRepeat from "../components/userRegisterForm/InputPasswordRepeat.vue";
import InputAge from "../components/userRegisterForm/InputAge.vue";
import InputWebsite from "../components/userRegisterForm/InputWebsite.vue";
import InputAddress from "../components/userRegisterForm/InputAddress.vue";
import InputCity from "../components/userRegisterForm/InputCity.vue";
import InputCountry from "../components/userRegisterForm/InputCountry.vue";
import InputZip from "../components/userRegisterForm/InputZip.vue";

export default {
  components: {
    InputName,
    InputLastName,
    InputEmail,
    InputPassword,
    InputPasswordRepeat,
    InputAge,
    InputWebsite,
    InputAddress,
    InputCity,
    InputCountry,
    InputZip
  },
  setup() {
    const passwordRepeat = ref("");
    const lastName = ref("");
    const password = ref("");
    const website = ref("");
    const country = ref("");
    const address = ref("");
    const email = ref("");
    const name = ref("");
    const city = ref("");
    const zip = ref("");
    const age = ref(0);

    function clearFormFields() {
      passwordRepeat.value = "";
      lastName.value = "";
      password.value = "";
      website.value = "";
      country.value = "";
      address.value = "";
      email.value = "";
      name.value = "";
      city.value = "";
      zip.value = "";
      age.value = 0;
    }

    return {
      clearFormFields,
      passwordRepeat,
      lastName,
      password,
      website,
      country,
      address,
      email,
      name,
      city,
      zip,
      age,
    };
  }
};
</script>
