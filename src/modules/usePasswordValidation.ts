import { computed, Ref, ref, toRef } from "vue";
import { IUser } from "../models/IUser";
import state from "../state";
import axios, { AxiosResponse } from "axios";

export default function usePasswordValidation(firstPassword: string) {
  const password = firstPassword
  function arePasswordsEqual() {
    
  }

  return {
    arePasswordsEqual
  };
}
