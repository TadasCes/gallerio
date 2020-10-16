<template>
  <div class="input-box">
    <label for="address" class="label-bold">Address</label>
    <input
      @focus="geolocate()"
      v-model="address"
      name="address"
      class="input-field border-rounded bg-light-gray"
    />
    <div v-if="errors.length <= 0">
      <span class="error-message"></span>
    </div>
    <div v-else style="padding: 0 0.5em">
      <span v-for="error in errors" :key="error" class="error-message">{{ error }}</span>
    </div>
  </div>
</template>
<style scoped></style>

<script lang="ts">
import useInputValidator from "../../../modules/useInputValidator";
import { minLength, maxLength, required } from "@/validators";
import { onMounted, ref } from "vue";
// import {} from "googlemaps";

export default {
  emits: ["input"],
  props: {
    value: String
  },
  setup(props: any, { emit }: any) {
    const { input, errors } = useInputValidator(
      props.value,
      [minLength(3), maxLength(50), required()],
      (value: string) => emit("input", value)
    );

    const address = ref("");

    // let autocomplete: google.maps.places.Autocomplete;
    // let placeSearch: google.maps.places.PlacesService;

    // function fillInAddress() {
    //   // Get the place details from the autocomplete object.
    //   const place = autocomplete.getPlace();
    //   console.log(place);

    //   // Get each component of the address from the place details,
    //   // and then fill-in the corresponding field on the form.
    //   for (const component of place.address_components as google.maps.GeocoderAddressComponent[]) {
    //     const addressType = component.types[0];
    //     address.value = addressType;
    //     console.log(addressType);
    //     // if (componentForm[addressType]) {
    //     //   const val = component[componentForm[addressType]];
    //     //   (document.getElementById(addressType) as HTMLInputElement).value = val;
    //     // }
    //   }
    // }

    // function initAutocomplete() {
    //   autocomplete = new google.maps.places.Autocomplete(
    //     document.getElementById("autocomplete") as HTMLInputElement,
    //     { types: ["geocode"] }
    //   );

    //   autocomplete.setFields(["address_component"]);

    //   // When the user selects an address from the drop-down, populate the
    //   // address fields in the form.
    //   autocomplete.addListener("place_changed", fillInAddress);
    // }

    // // // Bias the autocomplete object to the user's geographical location,
    // // // as supplied by the browser's 'navigator.geolocation' object.
    // function geolocate() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       const geolocation = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       };
    //       const circle = new google.maps.Circle({
    //         center: geolocation,
    //         radius: position.coords.accuracy
    //       });
    //       autocomplete.setBounds(circle.getBounds());
    //     });
    //   }
    // }

    // onMounted(() => {
    //   initAutocomplete();
    // });
    return {
      input,
      errors
    };
  }
};
</script>
