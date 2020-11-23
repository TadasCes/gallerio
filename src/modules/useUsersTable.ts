import { ComputedRef, Ref, ref } from 'vue';
import { IUser } from '../models/IUser';

export default function useUsersTable() {
  const searchResult: Ref<IUser[]> = ref([]);
  let sortedByName = false;
  let sortedByAge = false;
  let sortedByEmail = false;

  function useSortByName(userList: Ref<IUser[]>) {
    userList.value.sort((first: IUser, second: IUser) => {
      if (!sortedByName) {
        if (first.name < second.name) return -1;
        if (first.name > second.name) return 1;
      } else {
        if (first.name < second.name) return 1;
        if (first.name > second.name) return -1;
      }
      return 0;
    });
    sortedByName = !sortedByName;
    return userList;
  }

  function useSortByAge(userList: Ref<IUser[]>) {
    userList.value.sort((first: IUser, second: IUser) => {
      if (!sortedByAge) {
        if (first.age < second.age) return -1;
        if (first.age > second.age) return 1;
      } else {
        if (first.age < second.age) return 1;
        if (first.age > second.age) return -1;
      }
      return 0;
    });
    sortedByAge = !sortedByAge;
    return userList;
  }

  function useSortByEmail(userList: Ref<IUser[]>) {
    userList.value.sort((first: IUser, second: IUser) => {
      if (!sortedByEmail) {
        if (first.email < second.email) return -1;
        if (first.email > second.email) return 1;
      } else {
        if (first.email < second.email) return 1;
        if (first.email > second.email) return -1;
      }
      return 0;
    });
    sortedByEmail = !sortedByEmail;
    return userList;
  }

  function useSearchUser(userList: ComputedRef<IUser[]>, searchString: string) {
    searchResult.value = [];
    userList.value.filter(user => {
      if (user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
        searchResult.value.push(user);
      }
    });
    return searchResult.value;
  }

  return {
    useSortByName,
    useSortByAge,
    useSortByEmail,
    useSearchUser,
  };
}
