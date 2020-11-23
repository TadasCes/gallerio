import { computed, reactive, Ref, ref } from 'vue';
import { IAddress } from './models/IAddress';
import { IError } from './models/IError';
import { IPicture } from './models/IPicture';
import { IUser } from './models/IUser';
import useApi from './modules/api'

const errorList: Ref<IError[]> = ref([]);


// Forms (useRegistration, inputs, RegistraionForm)
const formState = reactive({
  submitTriggered: false,
  errorsChecked: false,
  hasErrors: true,
});

const isFormSubmitTriggered = computed(() => formState.submitTriggered);
const toggleTriggered = () => {
  formState.submitTriggered = !formState.submitTriggered;
};

const toggleErrorsChecked = () => {
  formState.errorsChecked = !formState.errorsChecked;
};


const submitForm = () => {
  errorList.value.length = 0
  toggleTriggered()
}

// Define user fields

const userAddress: IAddress = {
  country: '',
  city: '',
  streetAddress: '',
  zipCode: 0,
};

const picture: IPicture = {
  url: '',
  description: ''
}

const userForm: IUser = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  age: 0,
  website: '',
  address: userAddress,
};


// User list

const userList: Ref<IUser[]> = ref([]);

// Errors

const doesHasErrors = computed(() => formState.hasErrors);
const toggleHasErrors = (value: boolean) => {
  formState.hasErrors = value;
};



const showGallery = ref(false)

const pictureToEdit: Ref<IPicture> = ref({url: '', description: ''})

const uploadState = reactive({
  uploaded: 0,
  total: 0,
  percentCompleted: 0,
  done: false,
});

const uploadedNow = computed(() => uploadState.uploaded)
const uploadedTotal = computed(() => uploadState.total)
const uploadedPercent = computed(() => uploadState.percentCompleted)
const uploadedDone = computed(() => uploadState.done)


const state = {
  uploadState,
  uploadedDone,
  uploadedNow,
  uploadedPercent,
  uploadedTotal,
  isFormSubmitTriggered,
  toggleTriggered,
  doesHasErrors,
  toggleHasErrors,
  errorList,
  userForm,
  userList,
  submitForm,
  toggleErrorsChecked,
  showGallery,
  pictureToEdit
};

export default state;
