<template>
  <div class="home">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/profile">Profile</router-link>
      <button @click="logout"  class="float-right btn btn-outline-secondary">Log out</button>
    </div>
  </div>
</template>

<script lang="ts">
import useUserService from '@/modules/useUserService';
import router from '@/router';
import state from '@/state';
import { TokenService } from '@/modules/tokenService';
import useLogin from '@/modules/useLogin';

export default {
  setup(props: any, { emit }: any) {
    const {logout} = useLogin()

    
    return { logout };
  },
};
</script>
