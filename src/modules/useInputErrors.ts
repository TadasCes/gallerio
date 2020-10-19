import { computed, ref, watch } from "vue";
import state from "../state";

export default function useInputErrors() {
  const hasErrors = ref(false);

  const addError = (component: string, error: string) => {
    state.errorList.set(component, error);
  };

  watch(state.errorList, () => {
    console.log(state.errorList);
    if (state.errorList.size === 0) {
      state.toggleHasErrors(false);
    } else {
      state.toggleHasErrors(true);
    }
  });

  return {
    hasErrors: computed(() => hasErrors.value),
    addError
  };
}
