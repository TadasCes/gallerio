<template>
  <div>
    <hr />
    <div class="container ">
      <div class="row " v-if="displayPictures">
        <Picture
          v-for="picture in displayedList"
          @delete-picture="deletePicture"
          :key="picture.url"
          :picture="picture"
        ></Picture>
      </div>
      <h1 v-else>No pictures yet</h1>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, onMounted, Ref, ref, watch } from 'vue';
import Picture from './Picture.vue';
import useUsersTable from '@/modules/useUsersTable';
import state from '@/state';
import { IAddress } from '@/models/IAddress';
import { IPicture } from '@/models/IPicture';
import usePictureService from '@/modules/usePictureService';

export default {
  emits: ['delete-user'],
  components: {
    Picture,
  },
  props: {
    pictures: Array,
  },
  setup(props: any, { emit }: any) {
    const pictureList: ComputedRef<IPicture[]> = computed(() => props.pictures);
    const displayedList: Ref<IPicture[]> = ref([]);

    function displayPictures(): boolean {
      return displayedList.value.length > 0 ? true : false;
    }

    watch(pictureList, () => {
      if (pictureList.value != undefined) {
        pictureList.value.forEach((picture: any) => {
          if (picture.url != null) {
            const url = picture.url
              .split('\\')
              .join('/')
              .trim();
            picture.url = `http://${process.env.VUE_APP_API}/${url}`;
          }
        });
        displayedList.value = pictureList.value;
        state.showGallery.value = true;
      }
      displayPictures();
    });

    function deletePicture(url: string) {
      pictureList.value.filter((picture: IPicture) => {
        if (picture.url === url) {
          pictureList.value.splice(pictureList.value.indexOf(picture), 1);
          displayedList.value.splice(displayedList.value.indexOf(picture), 1);
        }
      });
    }

    return {
      displayedList,
      deletePicture,
      displayPictures,
    };
  },
};
</script>
