import { computed, reactive } from "vue";
import { IAddress } from "./models/IAddress";
import { IUser } from "./models/IUser";

// Registration (useRegistration, inputs, RegistraionForm)
const registrationState = reactive({
  submitTriggered: false,
  hasErrors: true
});

const isFormSubmitTriggered = computed(() => registrationState.submitTriggered);
const toggleTriggered = () => {
  registrationState.submitTriggered = !registrationState.submitTriggered;
};

// Define user fields
const userAddress: IAddress = {
  country: "",
  city: "",
  streetAddress: "",
  zipCode: 0
};

const userToBeCreated: IUser = {
  id: 0,
  name: "",
  lastName: "",
  email: "",
  password: "",
  age: 0,
  website: "",
  address: userAddress
};

// Errors
const errorList: Map<string, string> = reactive(new Map());

const doesHasErrors = computed(() => registrationState.hasErrors);
const toggleHasErrors = (value: boolean) => {
  registrationState.hasErrors = value;
};

const state = {
  isFormSubmitTriggered,
  toggleTriggered,
  doesHasErrors,
  toggleHasErrors,
  errorList,
  userToBeCreated
};

export default state;
