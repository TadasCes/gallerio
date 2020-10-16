import { computed, reactive, ReactiveEffect, Ref, ref, watch } from "vue";
import useInputErrors from './modules/useInputErrors';


// Registration (useRegistration, inputs, RegistraionForm)
const registrationState = reactive({
  submitTriggered: false,
  hasErrors: false
});

const isFormSubmitTriggered = computed(() => registrationState.submitTriggered);
const toggleTriggered = () => {
  registrationState.submitTriggered = !registrationState.submitTriggered;
};

// Add user fields
const userToBeCreated = ref({})


// Errors
const errorList: Map<string, string> = reactive(new Map());

const doesHasErrors = computed(() => registrationState.hasErrors);
const toggleHasErrors = (value: boolean) => {
  registrationState.hasErrors = value
}


const state = {
  isFormSubmitTriggered,
  toggleTriggered,
  doesHasErrors,
  toggleHasErrors,
  errorList,
  userToBeCreated
};

export default state;
