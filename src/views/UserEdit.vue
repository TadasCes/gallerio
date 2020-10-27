<template>
  <h1>Edit user</h1>
  <form class="container register-form">
    <hr />

    <div class="row ">
      <div class="col-md-6 ">
        <InputName :value="name.value"></InputName>
      </div>
      <div class="col-md-6">
        <InputLastName :value="lastName"></InputLastName>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <InputEmail :value="email"></InputEmail>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputAge :value="age"></InputAge>
      </div>
      <div class="col-md-6">
        <InputWebsite :value="website"></InputWebsite>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputCountry :value="country"></InputCountry>
      </div>
      <div class="col-md-6">
        <InputCity :value="city"></InputCity>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputAddress :value="streetAddress"></InputAddress>
      </div>
      <div class="col-md-6">
        <InputZip :value="zip"></InputZip>
      </div>
    </div>
    <hr />
    <div class="form-actions float-left mt-2">
      <button @click.prevent="submitForm" class="btn btn-primary mr-3">Submit</button>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/syles/input-style.css";
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
import { computed, onMounted, reactive, ref, watch } from "vue";
``;
import InputName from "../components/userRegisterForm/inputs/InputName.vue";
import InputLastName from "../components/userRegisterForm/inputs/InputLastName.vue";
import InputEmail from "../components/userRegisterForm/inputs/InputEmail.vue";
import InputAge from "../components/userRegisterForm/inputs/InputAge.vue";
import InputWebsite from "../components/userRegisterForm/inputs/InputWebsite.vue";
import InputAddress from "../components/userRegisterForm/inputs/InputAddress.vue";
import InputCity from "../components/userRegisterForm/inputs/InputCity.vue";
import InputCountry from "../components/userRegisterForm/inputs/InputCountry.vue";
import InputZip from "../components/userRegisterForm/inputs/InputZip.vue";
import state from "@/state";
import useUsers from "../modules/useUsers";
import router from "@/router";
import { IAddress } from "@/models/IAddress";
import { IUser } from "@/models/IUser";
import useUserService from "@/modules/useUserService";

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
    InputZip
  },

  setup() {

    const { addUser } = useUsers();
    const { postUser } = useUserService();

    const passwordRepeat = ref("");
    const lastName = ref("");
    const website = ref("");
    const country = ref("");
    const streetAddress = ref("");
    const email = ref("");
    const name = ref("");
    const city = ref("");
    const zip = ref(0);
    const age = ref(0);

    function getUser() {
      name.value = state.userForm.name
      lastName.value = state.userForm.lastName
      website.value = state.userForm.website
      email.value = state.userForm.email
      age.value = state.userForm.age
      country.value = state.userForm.address.country
      streetAddress.value = state.userForm.address.streetAddress
      city.value = state.userForm.address.city
      zip.value = state.userForm.address.zipCode
      console.log()
    }

    getUser()

    function submitForm() {
      state.errorList.value.length = 0;
      state.toggleTriggered();

      setTimeout(() => {
        console.log(state.errorList.value);
        console.log(state.doesHasErrors.value);
        console.log(state.errorList.value.length);
        if (state.errorList.value.length > 0) {
          console.log("has errors");
        } else {
          addUser(state.userForm);
          console.log(state.userForm);
          postUser();
          router.push("/users");
        }
      }, 1000);
    }



    onMounted(() => {
      const userAddress: IAddress = {
        country: "",
        city: "",
        streetAddress: "",
        zipCode: 0
      };

      const userForm: IUser = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        age: 0,
        website: "",
        address: userAddress
      };

      state.userForm = userForm;
    });

    return {
      passwordRepeat,
      submitForm,
      lastName,
      website,
      country,
      streetAddress,
      email,
      name,
      city,
      zip,
      age
    };
  }
};
</script>
