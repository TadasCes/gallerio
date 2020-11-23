<template>
  <div class="user-list">
    <router-link to="/profile">
      <button class="btn btn-outline-primary">Back</button>
    </router-link>
    <div class="container">
      <form
        action="/multiple-upload"
        method="POST"
        enctype="multipart/form-data"
        class="mx-auto w-50"
        @submit.prevent="submitFiles"
      >
        <div class="form-group">
          <label for="example-input-file"> </label>
          <input
            type="file"
            name="multi-files"
            id="input-multi-files"
            class="form-control-file border"
            multiple
            @change="selectFiles($event)"
          />
        </div>
        <div v-if="loading == true">
          <span>
            Progress
          </span>
          <div
            id="progressBar"
            class="progress-bar"
            value="0"
            max="100"
            :style="{ width: percentUploaded + '%' }"
          >
            {{ percentUploaded + '%' }}
          </div>
        </div>
        <hr />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <GalleryView :pictures="pictures"></GalleryView>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  background: rgb(75, 202, 58);
  width: 100%;
  height: 20px;
  border-radius: 10px;
}
</style>

<script lang="ts">
import UserTable from '@/components/UserTable.vue';
import { computed, onBeforeMount, onMounted, reactive, Ref, ref, watch } from 'vue';
import usePictureService from '../modules/usePictureService';
import state from '../state';
import Menu from '@/components/Menu.vue';
import GalleryView from '@/components/gallery/GalleryView.vue';
import { TokenService } from '@/modules/tokenService';
import { config } from '@vue/test-utils';

export default {
  components: {
    GalleryView,
  },
  setup() {
    const { uploadPictures, getPictures } = usePictureService();
    const dataLoaded = ref(false);
    const files = ref();
    const pictures = ref();
    const percentUploaded = ref(0);
    const loading = ref(false);

    function selectFiles(event: any) {
      files.value = event.target.files;
    }

    async function getAllPictures() {
      pictures.value = [];
      await getPictures().then(data => {
        pictures.value = data.pictures;
      });

      dataLoaded.value = true;
    }

    async function submitFiles() {
      const formData = new FormData();
      loading.value = true;
      state.showGallery.value = true

      for (let i = 0; i < files.value.length; i++) {
        const file = files.value[i];
        console.log(files.value[i].name);
        formData.append('files', file);
      }
      await uploadPictures(formData);

      formData.delete('files');
      await getAllPictures().then(() => {
        files.value.length = 0;
        percentUploaded.value = 0;
        loading.value = false;
      });
    }

    watch(state.uploadedPercent, percent => {
      console.log(state.uploadState.percentCompleted);
      console.log(percent);
      percentUploaded.value = percent;
    });

    onBeforeMount(() => {
      getAllPictures();
      loading.value = false;
    });

    return {
      selectFiles,
      submitFiles,
      getAllPictures,
      files,
      percentUploaded,
      loading: computed(() => loading.value),
      pictures: computed(() => pictures.value),
    };
  },
};
</script>
