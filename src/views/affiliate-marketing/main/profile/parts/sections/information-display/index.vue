<template>
  <div id="list-item-1">
    <div class="box border">
      <ValidationObserver ref="form">
        <div class="row p-3 justify-content-center">
          <div class="col-md-3">
            <ValidationProvider :name="$t('Image')" tag="div" vid="image" rules="image" v-slot="{ validate, errors }">
              <div class="main-img" style="height: 170px;">
                <div class="col-md-12">
                  <label for="imginput" class="form-label file-label first w-100 d-flex justify-content-center">
                    <!-- <p class="pen">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#FFBC00" />
                        <path
                          d="M23 30.75H17C11.57 30.75 9.25 28.43 9.25 23V17C9.25 11.57 11.57 9.25 17 9.25H19C19.41 9.25 19.75 9.59 19.75 10C19.75 10.41 19.41 10.75 19 10.75H17C12.39 10.75 10.75 12.39 10.75 17V23C10.75 27.61 12.39 29.25 17 29.25H23C27.61 29.25 29.25 27.61 29.25 23V21C29.25 20.59 29.59 20.25 30 20.25C30.41 20.25 30.75 20.59 30.75 21V23C30.75 28.43 28.43 30.75 23 30.75Z"
                          fill="white" />
                        <path
                          d="M16.4998 25.6901C15.8898 25.6901 15.3298 25.4701 14.9198 25.0701C14.4298 24.5801 14.2198 23.8701 14.3298 23.1201L14.7598 20.1101C14.8398 19.5301 15.2198 18.7801 15.6298 18.3701L23.5098 10.4901C25.4998 8.50006 27.5198 8.50006 29.5098 10.4901C30.5998 11.5801 31.0898 12.6901 30.9898 13.8001C30.8998 14.7001 30.4198 15.5801 29.5098 16.4801L21.6298 24.3601C21.2198 24.7701 20.4698 25.1501 19.8898 25.2301L16.8798 25.6601C16.7498 25.6901 16.6198 25.6901 16.4998 25.6901ZM24.5698 11.5501L16.6898 19.4301C16.4998 19.6201 16.2798 20.0601 16.2398 20.3201L15.8098 23.3301C15.7698 23.6201 15.8298 23.8601 15.9798 24.0101C16.1298 24.1601 16.3698 24.2201 16.6598 24.1801L19.6698 23.7501C19.9298 23.7101 20.3798 23.4901 20.5598 23.3001L28.4398 15.4201C29.0898 14.7701 29.4298 14.1901 29.4798 13.6501C29.5398 13.0001 29.1998 12.3101 28.4398 11.5401C26.8398 9.94006 25.7398 10.3901 24.5698 11.5501Z"
                          fill="white" />
                        <path
                          d="M27.8501 17.8298C27.7801 17.8298 27.7101 17.8198 27.6501 17.7998C25.0201 17.0598 22.9301 14.9698 22.1901 12.3398C22.0801 11.9398 22.3101 11.5298 22.7101 11.4098C23.1101 11.2998 23.5201 11.5298 23.6301 11.9298C24.2301 14.0598 25.9201 15.7498 28.0501 16.3498C28.4501 16.4598 28.6801 16.8798 28.5701 17.2798C28.4801 17.6198 28.1801 17.8298 27.8501 17.8298Z"
                          fill="white" />
                      </svg>
                    </p> -->
                    <div class="add-img-selected" style=" border-radius: 20px;position:relative">
                      <img class="w-100 h-100" style="border-radius: 20px" :src="imageUser" id="image_selected-2" />
                      <span id="pen" style="position:absolute; bottom: -15px; right: -15px;">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="20" fill="#FFBC00" />
                          <path
                            d="M23 30.75H17C11.57 30.75 9.25 28.43 9.25 23V17C9.25 11.57 11.57 9.25 17 9.25H19C19.41 9.25 19.75 9.59 19.75 10C19.75 10.41 19.41 10.75 19 10.75H17C12.39 10.75 10.75 12.39 10.75 17V23C10.75 27.61 12.39 29.25 17 29.25H23C27.61 29.25 29.25 27.61 29.25 23V21C29.25 20.59 29.59 20.25 30 20.25C30.41 20.25 30.75 20.59 30.75 21V23C30.75 28.43 28.43 30.75 23 30.75Z"
                            fill="#2EB9B3" />
                          <path
                            d="M16.4998 25.6901C15.8898 25.6901 15.3298 25.4701 14.9198 25.0701C14.4298 24.5801 14.2198 23.8701 14.3298 23.1201L14.7598 20.1101C14.8398 19.5301 15.2198 18.7801 15.6298 18.3701L23.5098 10.4901C25.4998 8.50006 27.5198 8.50006 29.5098 10.4901C30.5998 11.5801 31.0898 12.6901 30.9898 13.8001C30.8998 14.7001 30.4198 15.5801 29.5098 16.4801L21.6298 24.3601C21.2198 24.7701 20.4698 25.1501 19.8898 25.2301L16.8798 25.6601C16.7498 25.6901 16.6198 25.6901 16.4998 25.6901ZM24.5698 11.5501L16.6898 19.4301C16.4998 19.6201 16.2798 20.0601 16.2398 20.3201L15.8098 23.3301C15.7698 23.6201 15.8298 23.8601 15.9798 24.0101C16.1298 24.1601 16.3698 24.2201 16.6598 24.1801L19.6698 23.7501C19.9298 23.7101 20.3798 23.4901 20.5598 23.3001L28.4398 15.4201C29.0898 14.7701 29.4298 14.1901 29.4798 13.6501C29.5398 13.0001 29.1998 12.3101 28.4398 11.5401C26.8398 9.94006 25.7398 10.3901 24.5698 11.5501Z"
                            fill="#2EB9B3" />
                          <path
                            d="M27.8501 17.8298C27.7801 17.8298 27.7101 17.8198 27.6501 17.7998C25.0201 17.0598 22.9301 14.9698 22.1901 12.3398C22.0801 11.9398 22.3101 11.5298 22.7101 11.4098C23.1101 11.2998 23.5201 11.5298 23.6301 11.9298C24.2301 14.0598 25.9201 15.7498 28.0501 16.3498C28.4501 16.4598 28.6801 16.8798 28.5701 17.2798C28.4801 17.6198 28.1801 17.8298 27.8501 17.8298Z"
                            fill="#2EB9B3" />
                        </svg>
                      </span>
                    </div>
                  </label>
                  <div>
                    <input @change="uploadImage($event, validate)" class="form-control d-none" type="file"
                      id="imginput" />
                  </div>
                </div>

                <!-- <img class="rounded-circle img-person" src="@/assets/af-icons/Image.png" alt="" width="140" height="140"> -->
              </div>
              <d-error-input :errors="errors" v-if="errors.length"></d-error-input>
            </ValidationProvider>
          </div>

          <div class="m-auto text-center p-3">
            <button @click="save" class="btn-main">{{ $t('save') }}</button>
          </div>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
export default {
  name: "display-info-item",
  props: ["currentUser"],
  data: vm => {
    return {
      urlTmp: null,
      imageUrl: vm.currentUser.image,
      itemForm: {
        image: null,
        bio: vm.currentUser.bio
      }
    };
  },
  computed: {
    imageUser() {
      return this.currentUser.image;
    }
  },
  methods: {
    async save(evt) {
      if (evt) evt.preventDefault();
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        return;
      }
      let formData = new FormData();
      Object.keys(this.itemForm).forEach(key => {
        formData.append(`${key}`, this.itemForm[key]);
      });

      try {
        let { data } = await userAPI.postDisplayInformation(formData);
        if (data.success) {
          window.successMsg(data.message);
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status == 422) {
            this.$refs.form.setErrors(error.response.data.errors);
          }
        }
      }
    },
    async uploadImage(evt, validate) {
      let valid = await validate(evt);
      if (!valid.valid) {
        this.itemForm.image = null;
        if (this.urlTmp) {
          URL.revokeObjectURL(this.urlTmp);
          this.urlTmp = null;
        }
        return;
      }
      this.itemForm.image = evt.target.files[0];
      if (this.itemForm.image)
        this.urlTmp = URL.createObjectURL(this.itemForm.image);
      else {
        URL.revokeObjectURL(this.urlTmp);
        this.urlTmp = null;
      }
    }
  }
};
</script>

<style scoped>
.file-label {
  border: 0;
}

.add-img-selected {
  width: 150px;
  height: 150px;
}
</style>