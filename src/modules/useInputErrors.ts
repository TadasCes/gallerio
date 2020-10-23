import { computed, ref, watch } from "vue";
import state from "../state";

export default function useInputErrors() {
  const addError = (component: string, error: string) => {
    state.errorList.value.push({component, error})
  };

  return {
    addError
  };
}
