<template>
  <d-dialog-large
    :group="group"
    :openDialog="openDialog"
    :close-dialog="closeDialog"
    :loading="loading"
  >
    <ValidationObserver ref="form">
      <div class="add-portfolio m-3 p-0">
        <div class="m-auto">
          <div class="col-md-12">
            <label for="imginput" class="form-label file-label first w-100">
              <div class="text-center p-5">
                <img
                  :src="`${publicPath}assets/svg/empty-image.svg`"
                  height="96"
                  width="96"
                />

                <p class="m-c">{{ $t("add-display-image") }}</p>
              </div>
              <div class="add-img-selected w-100">
                <img
                  class="image-selected-dialog"
                  src="none"
                  :id="idImage"
                  width="100%"
                  height="236"
                />
              </div>
            </label>
            <ValidationProvider
              :name="$t('Image')"
              vid="image"
              rules="required|image"
              v-slot="{ validate, errors }"
            >
              <input
                @change="uploadImage($event, validate) || validate($event)"
                class="form-control opacity-0"
                type="file"
                id="imginput"
              />
              <div v-if="errors.length !== 0" class="col-12 text-input-error">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('name_company_ar')"
              vid="ar.name_company"
              rules="required"
              v-slot="{ errors }"
            >
              <d-text-input
                :errors="errors"
                type="text"
                v-model="offer.title"
                class="form-control"
                :label="$t('name_company_ar')"
              >
              </d-text-input>
            </ValidationProvider>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('name_company_en')"
              vid="en.name_company"
              rules="required"
              v-slot="{ errors }"
            >
              <d-text-input
                :errors="errors"
                type="text"
                v-model="offer.title_en"
                class="form-control"
                :label="$t('name_company_en')"
              >
              </d-text-input>
            </ValidationProvider>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('start_date')"
              vid="start_date"
              rules="required"
              v-slot="{ errors }"
            >
              <d-text-input
                :errors="errors"
                type="text"
                v-model="offer.start_date"
                class="form-control"
                :label="$t('start_date')"
              >
              </d-text-input>
            </ValidationProvider>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('during_day')"
              vid="day"
              rules="required"
              v-slot="{ errors }"
            >
              <d-text-input
                :errors="errors"
                type="text"
                v-model="offer.day"
                class="form-control"
                :label="$t('during_day')"
              >
              </d-text-input>
            </ValidationProvider>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('link')"
              vid="link"
              rules="required"
              v-slot="{ errors }"
            >
              <d-text-input
                :errors="errors"
                type="text"
                v-model="offer.link"
                class="form-control"
                :label="$t('link')"
              >
              </d-text-input>
            </ValidationProvider>
          </div>
          <div class="col-12 mb-3">
            <ValidationProvider
              :name="$t('Category')"
              vid="category_id"
              rules="required"
              v-slot="{ errors }"
            >
              <d-select-input
                v-model="offer.category_id"
                :label="$t('Category')"
              >
                <option selected disabled>{{ $t("Category") }}</option>
                <option v-for="(cat, i) in categories" :key="i" :value="cat.id">
                  {{ cat.name }}
                </option>
              </d-select-input>
              <div v-if="errors.length !== 0" class="col-12 text-input-error">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>

          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('short_description_ar')"
              vid="ar.short_description"
              rules=""
              v-slot="{ errors }"
            >
              <d-textarea-input
                :errors="errors"
                v-model="offer.short_description"
                class="form-control"
                rows="5"
                :label="$t('short_description_ar')"
              ></d-textarea-input>
            </ValidationProvider>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('short_description_en')"
              vid="en.short_description"
              rules=""
              v-slot="{ errors }"
            >
              <d-textarea-input
                :errors="errors"
                v-model="offer.short_description_en"
                class="form-control"
                rows="5"
                :label="$t('short_description_en')"
              ></d-textarea-input>
            </ValidationProvider>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('description_ar')"
              vid="ar.description"
              rules="required"
              v-slot="{ errors }"
            >
              <d-textarea-input
                :errors="errors"
                v-model="offer.description"
                class="form-control"
                rows="10"
                :label="$t('description_ar')"
              ></d-textarea-input>
            </ValidationProvider>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <ValidationProvider
              :name="$t('description_en')"
              vid="en.description"
              rules="required"
              v-slot="{ errors }"
            >
              <d-textarea-input
                :errors="errors"
                v-model="offer.description_en"
                class="form-control"
                rows="10"
                :label="$t('description_en')"
              ></d-textarea-input>
            </ValidationProvider>
          </div>
        </div>
      </div>
    </ValidationObserver>

    <template v-slot:actions>
      <button @click="save" type="button" class="btn btn-main">
        {{ $t("save") }}
      </button>
    </template>
  </d-dialog-large>
</template>
<script>
import offersAPI from "@/services/api/offers";
export default {
  data: (vm) => {
    return {
      loading: false,
      group: "add-dialog",
      showDialog: false,
      categories: [],
      tags: [],
      idImage: `image-selected-${vm.generateRandomString(8)}`,
      url: `${vm.publicPath}assets/svg/empty-image.svg`,
      file: null,
      offer: {
        title: "",
        title_en: "",
        description: "",
        description_en: "",
        short_description: "",
        short_description_en: "",
        category_id: null,
        link: "",
        day: "",
        start_date: "",
      },
    };
  },
  methods: {
    async save() {
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        this.loading = false;
        return;
      }
      let formData = new FormData();
      formData.append("link", this.offer.link);
      formData.append("start_date", this.offer.start_date);
      formData.append("day", this.offer.day);

      formData.append("ar[name_company]", this.offer.title);
      formData.append("en[name_company]", this.offer.title_en);
      formData.append("ar[description]", this.offer.description);
      formData.append("en[description]", this.offer.description_en);
      formData.append("ar[short_description]", this.offer.short_description);
      formData.append("en[short_description]", this.offer.short_description_en);
      formData.append("file", this.file);

      //for ( i = 0; i < this.offer.category.length; i++) {
      formData.append("category_id", this.offer.category_id);
      // }
      try {
        let { data } = await offersAPI.addOffer(formData);
        if (data.success) {
          console.log("success", data);
          window.EventBus.fire("list-coupon-update");
          this.closeDialog();
        }
      } catch (error) {
        //
        if (error.response) {
          let response = error.response;
          console.log("error", response);
          if (response.status == 422) {
            if (response.data.errors)
              this.$refs.form.setErrors(response.data.errors);
          }
        }
      }
      this.loading = false;
    },
    makeImageEmpty() {
      this.file = null;
      window
        .$("#" + this.idImage)
        .attr("src", "none")
        .css("opacity", "0");
    },
    async uploadImage(evt, validate) {
      let resValid = await validate(evt);
      if (!resValid.valid) {
        this.makeImageEmpty();
        return;
      }
      if (!evt.target.files && !evt.target.files[0]) {
        this.makeImageEmpty();
        return;
      }

      this.file = evt.target.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log("result", e, this.idImage);
        window
          .$("#" + this.idImage)
          .attr("src", e.target.result)
          .css("opacity", "1");
      };
      reader.readAsDataURL(this.file);
    },
    async loadCategories() {
      try {
        let { data } = await offersAPI.getCategories();
        if (data.success) {
          this.categories = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    openDialog() {
      this.loading = false;
      this.url = `${this.publicPath}assets/svg/empty-image.svg`;
      this.file = null;
      this.offer.title = "";
      this.offer.title_en = "";
      this.offer.description = "";
      this.offer.description_en = "";
      this.offer.short_description = "";
      this.offer.short_description_en = "";
      this.offer.category_id = null;
      this.offer.link = "";
      this.offer.day = "";
      this.offer.start_date = "";
      //this.$refs.form.reset()
      window
        .$("#" + this.idImage)
        .attr("src", "none")
        .css("opacity", "0");
      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      return true;
    },
  },
  created() {
    //window.EventBus.listen(this.group+'-open-dialog',this.openDialog)
    //window.EventBus.listen(this.group+'-close-dialog',this.closeDialog)
  },
  beforeDestroy() {
    //window.EventBus.off(this.group+'-open-dialog',this.openDialog)
    //window.EventBus.off(this.group+'-close-dialog',this.closeDialog)
  },
  async mounted() {
    console.log("mou");
    //await  this.loadCategories()
    console.log("moddu");
    //console.log(this.$refs)
  },
};
</script>

<style scoped>
label {
  width: 100%;
  text-align: start;
}
</style>
