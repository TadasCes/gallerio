import { computed, reactive, Ref, ref } from "vue";
import { IAddress } from "./models/IAddress";
import { IError } from './models/IError';
import { IUser } from "./models/IUser";
import useUsers from "./modules/useUsers";

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

// User list

const userList: Ref<any[]> = ref([]);


// Errors
const errorList: Ref<IError[]> = ref([])

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
  userToBeCreated,
  userList
};

export default state;
