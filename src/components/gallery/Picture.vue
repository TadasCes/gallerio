<template>
  <div class="p-3 mx-auto">
    <div class="row image-box mb-2">
      <div class="overlay">
        <img :src="pictureUrl" class="border image" @click="editPicture" />
      </div>
    </div>
    <button class="btn btn-info btn-sm mr-3" @click="editPicture">Edit</button>
    <button class="btn btn-danger btn-sm" @click="deleteOnePicture">Delete</button>
  </div>
</template>

<style>
.image-box {
  display: block;
  height: 250px;
  width: 250px;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: white;
}

.image {
  height: 250px;
  width: 250px;
  object-fit: cover;
  background: #fff;
  display: block;
}

.overlay {
  height: 250px;
  width: 250px;
}

.image-box:hover .overlay {
  background-color: #000;
  z-index: 100;
}

.image-box:hover img {
  opacity: 0.5;
}

.border {
  border: 1px solid #f3f3f3;
  padding: 2px;
}
</style>

<script lang="ts">
import useUserService from '@/modules/useUserService';
import router from '@/router';
import { computed, ComputedRef, ref } from 'vue';
import { IPicture } from '@/models/IPicture';
import usePictureService from '@/modules/usePictureService';
import { TokenService } from '@/modules/tokenService';
import state from '@/state';

export default {
  emits: ['delete-picture'],
  props: {
    picture: Object,
  },
  setup(props: any, { emit }: any) {
    const pictureList: ComputedRef<IPicture> = computed(() => props.picture);
    const pictureUrl = ref(pictureList.value.url);
    const { deletePicture } = usePictureService();
    const pictureName = pictureList.value.url.split('/').slice(-1)[0];

    function deleteOnePicture() {
      deletePicture(TokenService.getLoggedUserName()!, pictureName);
      emit('delete-picture', pictureList.value.url);
    }
    function editPicture() {
      state.pictureToEdit.value = pictureList.value;
      router.push({
        name: `PictureEdit`,
        params: { url: pictureUrl.value, description: pictureList.value.description },
      });
    }

    return {
      pictureUrl,
      deleteOnePicture,
      editPicture,
    };
  },
};
</script>
