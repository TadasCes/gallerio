import state from '../state';
import axios from 'axios';

export default function useUserService() {
  async function fetchAllUsers() {
    await axios
      .get('http://localhost:3000/users')
      .then(response => {
        state.userList.value = response.data;
        return true;
      })
      .catch(() => {
        console.log('No users created');
        return false;
      });
  }

  async function fetchOneUser(name: string) {
    await axios
      .get('http://localhost:3000/users/' + name)
      .then(response => {
        state.userForm = response.data;
      })
      .catch(() => {
        console.log('No user');
      });
  }

  async function postUser() {
    await axios
      .post('http://localhost:3000/users', state.userForm)
      .then(() => {
        console.log('User created successfully');
      })
      .catch(() => {
        console.log('Error happend');
      });
  }

  async function updateUser(name: string) {
    await axios
      .put(`http://localhost:3000/users/${name}`, state.userForm)
      .then(() => {
        console.log('User updated successfully');
      })
      .catch(() => {
        console.log('Error happend');
      });
  }

  async function deleteUser(name: string) {
    await axios
      .delete(`http://localhost:3000/users/${name}`)
      .then(() => {
        console.log('User deleted successfully');
      })
      .catch(() => {
        console.log('Error happend');
      });
  }

  return {
    fetchAllUsers,
    postUser,
    fetchOneUser,
    updateUser,
    deleteUser,
  };
}
