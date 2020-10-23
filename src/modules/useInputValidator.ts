import state from "@/state";
import { Ref, ref, watch } from "vue";
import useInputErrors from "./useInputErrors";

export default function(
  startVal: string,
  componentName: string,
  validators: Array<Function>,
) {
  const { addError } = useInputErrors();
  const input = ref(startVal);
  const errors: Ref<any> = ref([]);

  watch(input, (value) => {
    errors.value = validators.map((validator) => validator(value));
    state.errorList.delete(componentName);
    errors.value.forEach((error: string | null) => {
      if (error !== null) {
        addError(componentName, error);
      }
    });
    
  });

  return {
    input,
    errors
  };
}
