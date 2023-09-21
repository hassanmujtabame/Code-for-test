/* eslint-disable */
<template>
    <d-dialog-large :group="group" :openDialog="openDialog" :close-dialog="closeDialog" :loading="loading">
        <ValidationObserver ref="form">
            <div class="form-exhibition row add-portfolio m-3 p-0 position-relatiuve">
                <div class="col-12 col-lg-5 justify-content-center mx-auto">
                    <div class="col-md-10">
                        <ValidationProvider :name="$t('Image')" vid="image1" rules="required|image"
                                            v-slot="{ validate, errors }">
                            <label for="imginput1" class="form-label file-label first w-100">
                                <div class="text-center p-5">
                                    <img :src="`${publicPath}assets/svg/empty-image.svg`"/>
                                    <p class="m-c">{{ $t("add-display-image") }}</p>
                                </div>
                                <div class="add-img-selected" style="width:100%">
                                    <img class="w-100 h-100 image-selected-dialog" :src="showImage ?? 'none'"
                                         :style="{ opacity: showImage ? '1' : '0' }"/>
                                </div>
                            </label>

                            <input @change="
                uploadImage($event, validate, 'showImage') || validate($event)
              " class="form-control opacity-0" type="file" id="imginput1" style="display: none"/>
                            <d-error-input :errors="errors" v-if="errors.length > 0"/>
                        </ValidationProvider>
                    </div>


                    <div class="col-md-10">
                        <ValidationProvider :name="$t('Image')" vid="image2" rules="required"
                                            v-slot="{ validate, errors }">
                            <label for="imgInput" class="form-label file-label first w-100">
                                <div class="text-center p-2" style="background: #E9F8F7;">
                                    <img :src="`${publicPath}assets/img/send-square@2x.png`"/>
                                    <p class="m-c">إضافة صور أخرى</p>
                                </div>
                            </label>
                            <input @change="handleFileUpload($event, validate, 'selectedImages')"
                                   class="form-control opacity-0"
                                   type="file" id="imgInput" style="display: none" multiple/>

                            <div class="row">
                                <div v-for="(image, index) in selectedImages" :key="index" class="col-lg-6 col-12">
                                    <div class="previews-images">
                                        <img class="w-100 h-100 image-selected-dialog" :src="image.url"
                                             :style="{ opacity: image.url ? '1' : '0' }" :id="`image-${index}`"/>
                                    </div>
                                </div>
                            </div>
                            <d-error-input :errors="errors" v-if="errors.length > 0"/>
                        </ValidationProvider>

                    </div>

                </div>
                <div class="col-12 col-lg-7">
                    <div class="mb-3">
                        <ValidationProvider name="اسم مكان العمل" vid="title" tag="div" class="form-group"
                                            rules="required"
                                            v-slot="{ errors }">
                            <d-text-input :errors="errors" v-model="form.title" label="اسم مكان العمل"/>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider :name="$t('exhibition_categories')" vid="category" rules="required"
                                            v-slot="{ errors }">
                            <d-select-input :errors="errors" v-model="form.category"
                                            :label="$t('exhibition_categories')">
                                <option disabled :value="null" class="t-c" selected>
                                    {{ $t("exhibition_categories") }}
                                </option>
                                <option :key="i" v-for="(option, i) in categories" :value="option.value">
                                    {{ option.title }}
                                </option>
                            </d-select-input>
                        </ValidationProvider>
                    </div>
                    <!-- <div class="mb-3">
                        <ValidationProvider :name="$t('the_city')" vid="city_id" tag="div" class="form-group"
                                            rules="required"
                                            v-slot="{ errors }">
                            <d-select-input :errors="errors" v-model="form.city_id" :label="$t('the_city')">
                                <option :key="i" v-for="(city, i) in cities" :value="city.id">
                                    {{ `${city.name}` }}
                                </option>
                            </d-select-input>
                        </ValidationProvider>
                    </div> -->
                    <div class="mb-3">
                        <ValidationProvider name="العنوان تفصيليََا" vid="address" tag="div" class="form-group"
                                            rules="required"
                                            v-slot="{ errors }">
                            <d-text-input :errors="errors" v-model="form.address" label="العنوان تفصيليََا"/>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider name="رابط العنوان على خرائط جوجل" vid="location" rules="required">
                            <!-- <d-text-input :errors="errors" v-model="form.location" label="رابط العنوان على خرائط جوجل" /> -->

                            <VGoogleMap @mapUpdated='getAddressMap'/>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider name="سعر مكان العمل" tag="div" class="form-group" vid="price"
                                            rules="required|numeric"
                                            v-slot="{ errors }">
                            <d-text-input :errors="errors" v-model="form.price"
                                          label=" سعر مكان العمل (ريال سعودي / ساعه)"/>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3">
                        <ValidationProvider name="مساحه مكان العمل" tag="div" class="form-group" vid="area"
                                            rules="required|numeric"
                                            v-slot="{ errors }">
                            <d-text-input :errors="errors" v-model="form.area" label=" مساحه مكان العمل (بالمتر)"/>
                        </ValidationProvider>
                    </div>
                    <div class="mb-3 row">
                        <!-- time -->
                        <div class="col-23 col-md-12">
                            <div class="form-group position-relative">
                                <label class="form-label">موعد الفتح - موعد الإغلاق</label>
                                <date-picker-range :valueStart.sync="form.start_time" :valueEnd.sync="form.end_time"
                                                   :names="{ start: $t('Start-time'), end: $t('End-time') }"
                                                   :vids="{ start: 'start_time', end: 'end_time' }"
                                                   :rules="{ start: 'required', end: 'required' }"
                                                   mode="time" mask="HH:mm" class="form-control">
                                </date-picker-range>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="mb-3 feature row" v-if="form.category === 'academy'">
                      <p>الامتيازات</p>
                      <div v-for="(feature, i) in features" :key="i" class="col-12 col-lg-4 form-check">
                        <input v-model="form.features" :value="feature.id" class="form-check-input my-1" type="checkbox"
                          :id="`checkboxFeature${i}`" />
                        <label class="form-check-label" :for="`checkboxFeature${i}`">
                          {{ feature.title }}
                        </label>
                      </div>
                    </div> -->
                    <!-- <div class="mb-3 feature row" v-if="form.category === 'service-provider'">
                        <p>مجال الاختصاص</p>
                        <div v-for="(cat, i) in providerCategories" :key="i" class="col-12 col-lg-4 form-check">
                            <div class="form-check d-flex justify-content-between" style="display: flex;">

                                <input v-model="form.service_categories_ids" :value="cat.id"
                                       class="form-check-input my-1 " type="checkbox"
                                       style="margin-left: 6px;"
                                       :id="`checkboxCategory${i}`"/>
                                <label class="form-check-label" :for="`checkboxCategory${i}`">
                                    {{ cat.name }}
                                </label>
                            </div>
                        </div>
                    </div> -->

                    <div class="mb-3">
                        <ValidationProvider name="وصف مكان العمل" vid="description" tag="div" class="form-group"
                                            rules="required"
                                            v-slot="{ errors }">
                            <d-text-input :errors="errors" v-model="form.description" label="وصف مكان العمل"/>
                        </ValidationProvider>
                    </div>

                    <div class="">
                        <!-- v-if="form.category === 'academy'" -->
                        <div class="accordion" role="tablist" v-if="form.category">
                            <b-card no-body class="mb-1">
                                <b-card-header header-tag="header" class="p-1 bg-transparent" role="tab">
                                    <div block v-b-toggle.accordion-1 variant="info">الامتيازات</div>
                                </b-card-header>
                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text class="d-flex flex-wrap ">
                                            <div v-for="item,i in featuresWorkSpace" :key="i" style="width:30%">
                                                <div class="form-check d-flex justify-content-between"
                                                     style="display: flex;">
                                                    <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            :value="item.title"
                                                            :id="item.id"
                                                            style="margin-left: 6px;"
                                                            @click="getFeaturesSelect(item.id)"
                                                    />
                                                    <label class="form-check-label" :for="item.title">
                                                        {{ item.title }}
                                                    </label>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                        </div>
                    </div>
                </div>


            </div>

        </ValidationObserver>


        <template v-slot:actions>
            <button @click="addWorkSpace" type="button" class="btn btn-main">
                نشر
            </button>
        </template>
    </d-dialog-large>
</template>
<script>
import WorkspaceAPI from "@/services/api/workspace";
import commonAPI from "@/services/api/common";
import VGoogleMap from "@/components/shared/map.vue";

export default {
    components: {VGoogleMap},
    data() {
        return {
            loading: false,
            group: "add-dialog",
            showImage: false,
            file: null,
            form: {
                title: "",
                category: "",
                city_id: "",
                address: "",
                location: "",
                price: "",
                area: "",
                start_time: "",
                end_time: "",
                features: [],
                description: "",
                service_categories_ids: [],
            },
            addressName: {
                address_name: '',
                lat: '',
                lng: ''
            },
            features: [],
            providerCategories: [],
            // cities: [],
            categories: [
                {
                    title: "الأكاديمية",
                    value: "academy",
                },
                {
                    title: "مقدمي الخدمة",
                    value: "service-provider",
                },
            ], 
            selectedImages: [],
            featuresWorkSpace: [
                {name: 'مكيف', id: 'condition'},
                {name: 'واي فاي', id: 'wiFi'},
                {name: 'سبوره', id: 'dashboard'},
                {name: 'شاشات ال اي دي', id: 'screen'},
                {name: 'كافيتريا', id: 'cafeteria'},
                {name: 'مكتبة', id: 'library'},
                {name: 'غرفه للصلاة', id: 'pray'},
                {name: 'طابعة', id: 'print'},
                {name: 'قهوة مجانية', id: 'coffey'}
            ],
            featuresSelect: []
        };
    },

  methods: {
    async addWorkSpace() {
      this.loading = true;
      let valid = await this.$refs.form.validate();
      console.log(valid);
      // if (!valid) {
      //   this.loading = false;

      //   console.log('err');
      //   return;
      // }
      let formData = this.loadObjectToForm({
        ...this.form,
        main_image: this.file,
      });
      
      formData.append(`map_address`, JSON.stringify(this.addressName));

      this.selectedImages.forEach((image) => {
        formData.append(`images[]`, image.file);
      });
             this.featuresSelect.forEach((feature) => {
        formData.append(`features[]`, feature);
      });
        // formData.append(`features[]`, this.featuresSelect);
      try {
        let { data } = await WorkspaceAPI.addWorkSpace(formData);
        if (data.success) {
          this.fireOpenDialog("success-add-workspace");
          this.fireCloseDialog(this.group);
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            this.setErrorsForm(this.$refs.form, response);
          }
        }
      }
      this.loading = false;
    },

        handleFileUpload(event, validate) {
            const files = Array.from(event.target.files);
            this.selectedImages = [];

            const imagePromises = files.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve({
                            url: reader.result,
                            file: file,
                        });
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(imagePromises)
                .then((images) => {
                    this.selectedImages = images;
                    validate(event);
                })
                .catch((error) => {
                    console.error(error);
                    validate(event);
                });
        },

        makeImageEmpty() {
            this.file = null;
            this.showImage = false;
        },

        async uploadImage(evt, validate) {
            let resValid = await validate(evt);
            if (!resValid.valid) {
                this.makeImageEmpty();
                return;
            }
            this.file = evt.target.files[0];
            this.previewImage();
        },

        previewImage() {
            const reader = new FileReader();
            reader.onload = () => {
                this.showImage = reader.result;
            };
            reader.readAsDataURL(this.file);
        },

        // Cites
        async loadCities() {
            try {
                let {data} = await commonAPI.cities();
                if (data.success) {
                    this.cities = data.data;
                }
            } catch (error) {
                console.log("error", error);
            }
        },

        async getServiceProviderCategories() {
            try {
                let {data} = await WorkspaceAPI.getServiceProviderCategories();
                if (data.success) {
                    this.providerCategories = data.data;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        //features
        async getWorkspaceFeatures() {
            try {
                let {data} = await WorkspaceAPI.getWorkspaceFeatures();
                if (data.success) {
                    this.featuresWorkSpace = data.data;
                }
            } catch (error) {
                console.log("error", error);
            }
        },

        openDialog() {
            for (var key in this.form) {
                // eslint-disable-next-line no-prototype-builtins

                if (this.form.hasOwnProperty(key)) {
                    this.form[key] = null;
                }
            }
            this.loading = false;
            this.file = null;
            this.showImage = false;
            this.selectedImages = [];
            this.form.features = [];
            this.form.service_categories_ids = [];
            return true;
        },

        closeDialog() {
            return true;
        },
        getFeaturesSelect(id) {
            console.log(id);
            let el = document.getElementById(id);
            if (el.checked == true) {
                console.log('true');
                this.featuresSelect.push(id)

            } else {
                console.log('false');
                let remEl = this.featuresSelect.indexOf(id);
                this.featuresSelect.splice(remEl, 1)

            }
        },
        getAddressMap(data) {
            this.addressName = data
        },
    },
    mounted() {
        // this.loadCities();
        this.getWorkspaceFeatures();
        this.getServiceProviderCategories();
    },
};
</script>

<style scoped>
label {
    width: 100%;
    text-align: start;
}

@media screen and (max-width: 600px) {
    .form-label {
        font-size: 0.8rem;
    }

    .form-control {
        font-size: 0.8rem;
    }
}
</style>
<style>
.form-exhibition .vc-time-picker .vc-date-time .vc-date {
    display: none !important;
}

.feature {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
}

.previews-images {
    height: 100px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--m-color) !important;
    margin: 5px;
}
</style>