<template>
  <form class="container register-form">
    <hr />

    <div class="row ">
      <div class="col-md-6 ">
        <InputName
          @get-input-value="getInputValue"
        ></InputName>
      </div>
      <div class="col-md-6">
        <InputLastName></InputLastName>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <InputEmail></InputEmail>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputPassword></InputPassword>
      </div>
      <div class="col-md-6">
        <InputPasswordRepeat></InputPasswordRepeat>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputAge></InputAge>
      </div>
      <div class="col-md-6">
        <InputWebsite></InputWebsite>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputCountry></InputCountry>
      </div>
      <div class="col-md-6">
        <InputCity></InputCity>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <InputAddress></InputAddress>
      </div>
      <div class="col-md-6">
        <InputZip></InputZip>
      </div>
    </div>
    <hr />
    <div class="form-actions float-left mt-2">
      <button @click.prevent="submitForm" class="btn btn-primary mr-3">Submit</button>
      <button @click.prevent="clearFormFields" class="btn btn-outline-primary">
        Reset
      </button>
    </div>
  </form>
</template>

<style scoped>
@import "./style/input-style.css";
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
import InputName from "./inputs/InputName.vue";
import InputLastName from "./inputs/InputLastName.vue";
import InputEmail from "./inputs/InputEmail.vue";
import InputPassword from "./inputs/InputPassword.vue";
import InputPasswordRepeat from "./inputs/InputPasswordRepeat.vue";
import InputAge from "./inputs/InputAge.vue";
import InputWebsite from "./inputs/InputWebsite.vue";
import InputAddress from "./inputs/InputAddress.vue";
import InputCity from "./inputs/InputCity.vue";
import InputCountry from "./inputs/InputCountry.vue";
import InputZip from "./inputs/InputZip.vue";
import state from "@/state"


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


    function submitForm() {


      state.toggleTriggered()
      console.log(state.userToBeCreated.value)

    }

    function getInputValue(value: string) {
      name.value = value;
      console.log(name.value);
    }

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
      getInputValue,
      submitForm,
      lastName,
      password,
      website,
      country,
      address,
      email,
      name,
      city,
      zip,
      age
    };
  }
};
</script>
