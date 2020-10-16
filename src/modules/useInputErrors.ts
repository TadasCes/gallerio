import { computed, reactive, Ref, ref, watch } from "vue";
import state from "../state"

export default function useInputErrors() {
  const hasErrors = ref(false);

  const addError = (component: string, error: string) => {
    state.errorList.set(component, error);
  };

  watch(state.errorList, () => {
    if (state.errorList.size === 0) {
      state.toggleHasErrors(false);
    } else {
      state.toggleHasErrors(true);
    }
    console.log(state.errorList.size);
    console.log(state.doesHasErrors.value);

  });


  

  return {
    hasErrors: computed(() => hasErrors.value),
    addError
  };
}
