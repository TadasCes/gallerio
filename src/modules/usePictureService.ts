import state from '../state';
import axios from 'axios';
import useApi from './api';
import { ErrorCodes } from 'vue';
import { TokenService } from './tokenService';

export default function usePictureService() {
  async function uploadPictures(formData: any) {
    console.log(formData);
    await axios
      .post(
        `http://localhost:3000/users/${TokenService.getLoggedUserName()}/add-pictures`,
        formData,
        {
          headers: {
            user: TokenService.getLoggedUserName(),
          },
          onUploadProgress: (event) => {
            state.uploadState.uploaded = event.loaded
            state.uploadState.total = event.total
            const percentCompleted = Math.round( (event.loaded * 100) / event.total );
            state.uploadState.percentCompleted = percentCompleted
            if (state.uploadState.percentCompleted == 100) state.uploadState.done = true
          }
        },
      )
      .then(response => {
        console.dir(response.data);
        return true;
      })
      .catch(() => {
        console.log('Error');
        return false;
      });
  }

  async function getPictures() {
    return await axios
      .get(`http://localhost:3000/users/${TokenService.getLoggedUserName()}/pictures`)
      .then(response => {
        return response.data;
      })
      .catch(() => {
        console.log('Error');
        return false;
      });
  }

  async function updateDescription(picture: string, description: string) {
    return await axios
      .put(`http://localhost:3000/users/${TokenService.getLoggedUserName()}/pictures/${picture}`, {
        description: description,
      })
      .then(response => {
        console.dir(response.data.message)
      })
      .catch(() => {
        console.log('Error');
        return false;
      });
  }

  async function deletePicture(name: string, picture: string) {
    await axios
      .delete(`http://localhost:3000/users/${name}/pictures/${picture}`)
      .then(response => {
        console.dir(response.data.message)
      })
      .catch(() => {
        console.log('Error happend');
      });
  }

  return {
    uploadPictures,
    deletePicture,
    getPictures,
    updateDescription,
  };
}
