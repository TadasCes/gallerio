<template>
  <div class="container">
    <router-link to="/profile/gallery">
      <button class="btn btn-outline-primary mr-3  mb-3">Back</button>
    </router-link>

    <div class="row mb-3">
      <img :src="pictureUrl" class="border pic mx-auto d-block" />
    </div>
    <div class=" mx-auto input-group w-50 mb-3">
      <div class="input-group-append">
        <span class="input-group-text">Image description</span>
      </div>
      <textarea class="form-control"  v-model="pictureDescription" />
    </div>
    <button @click="updatePhotoDescription" class="btn btn-info">Update description</button>
  </div>
</template>

<style>
.pic {
  height: 80vh;
  width: 80vh;
  object-fit: contain;
}
.border {
  border: 1px solid #f3f3f3;
  padding: 2px;
}
</style>

<script lang="ts">
import useUserService from '@/modules/useUserService';
import router from '@/router';
import { computed, ComputedRef, onBeforeMount, onBeforeUnmount, onBeforeUpdate, ref } from 'vue';
import { IPicture } from '@/models/IPicture';
import usePictureService from '@/modules/usePictureService';
import { TokenService } from '@/modules/tokenService';
import state from '@/state';

export default {
  setup(props: any, { emit }: any) {
    const { updateDescription } = usePictureService();
    const pictureUrl = ref(state.pictureToEdit.value.url);
    const pictureDescription = ref(state.pictureToEdit.value.description);
    const pictureName = pictureUrl.value.split('/').slice(-1)[0];

    function updatePhotoDescription() {
      updateDescription(pictureName, pictureDescription.value);
    }

    onBeforeUnmount(() => {
      pictureUrl.value = '';
      pictureDescription.value = '';
    });
    return {
      pictureUrl: computed(() => pictureUrl.value),
      pictureDescription,
      updatePhotoDescription,
    };
  },
};
</script>
