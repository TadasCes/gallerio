import state from '../state';

export default function useInputErrors() {
  const addError = (component: string, error: string) => {
    state.errorList.value.push({ component, error });
  };

  const errorsFound = (errorList: Array<string | null>) => {
    let found = false
    errorList.forEach(error => {
      if (error != null) {
        found = true
      }
    });
    return found
  }

  return {
    addError,
    errorsFound
  };
}
