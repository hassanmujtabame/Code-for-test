<template>
  <d-dialog-large
    :group="group"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    customHeaderClass="add-offer__header-title"
    :xl="false"
  >
    <template v-slot:header> أضف اعلان </template>
    <template v-slot>
      <ValidationObserver
        tag="div"
        class="px-2"
        style="height: 400px; overflow-y: auto"
        ref="form"
        v-if="showDialog"
      >
        <div class="mx-auto">
          <loadImageInput v-model="itemForm.image" />
        </div>
        <!-- company name -->
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              {{ $t("company-name") }}
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="name_company"
              :name="$t('company-name')"
              v-slot="errors"
            >
              <d-text-input :errors="errors" v-model="itemForm.name_company">
              </d-text-input>
            </ValidationProvider>
          </div>
        </div>
        <!-- company type -->
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              {{ $t("company-type") }}
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="type_company"
              :name="$t('company-type')"
              v-slot="errors"
            >
              <d-text-input :errors="errors" v-model="itemForm.type_company">
              </d-text-input>
            </ValidationProvider>
          </div>
        </div>
        <!-- offer desc -->
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              {{ $t("details") }}
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="description"
              :name="$t('details')"
              v-slot="errors"
            >
              <d-text-input :errors="errors" v-model="itemForm.description">
              </d-text-input>
            </ValidationProvider>
          </div>
        </div>
        <!-- web site -->
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              {{ $t("website") }}
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="website"
              :name="$t('website')"
              v-slot="errors"
            >
              <d-text-input :errors="errors" v-model="itemForm.website">
              </d-text-input>
            </ValidationProvider>
          </div>
        </div>
        <!-- discount code -->
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              {{ $t("discount-code") }}
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="code"
              :name="$t('discount-code')"
              v-slot="errors"
            >
              <d-text-input :errors="errors" v-model="itemForm.code">
              </d-text-input>
            </ValidationProvider>
          </div>
        </div>
        <!-- offer during -->
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              {{ $t("offer-during") }}
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="during"
              :name="$t('offer-during')"
              v-slot="errors"
            >
              <d-text-input :errors="errors" v-model="itemForm.duration">
              </d-text-input>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              الخصم
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider vid="discount" name="discount" v-slot="errors">
              <d-text-input :errors="errors" v-model="itemForm.discount">
              </d-text-input>
            </ValidationProvider>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              نوع الخصم
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="discount_type"
              name="discount_type"
              v-slot="errors"
            >
              <!-- <d-text-input :errors="errors" v-model="itemForm.discount_type">
              </d-text-input> -->
              <input
                type="radio"
                id="percentage"
                value="percentage"
                class="form-check-input mx-1"
                v-model="itemForm.discount_type"
              />
              <label class="form-check-label mx-1" for="percentage"
                >نسبه مئويه</label
              >
              <input
                class="form-check-input"
                type="radio"
                id="fixed"
                value="fixed"
                v-model="itemForm.discount_type"
              />
              <label class="form-check-label mx-2" for="fixed"> سعر</label>
              <span v-if="errors">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              تاريخ بدايه العرض
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider vid="start_date" name="start_date">
              <input
                class="form-control"
                type="date"
                v-model="itemForm.start_date"
              />
            </ValidationProvider>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              تاريخ نهايه العرض
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider vid="end_date" name="end_date">
              <input
                class="form-control"
                type="date"
                v-model="itemForm.end_date"
              />
            </ValidationProvider>
          </div>
        </div>
        <!-- offer department -->
        <div class="row mt-3">
          <div class="col-4 p-0 border">
            <div
              class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
            >
              {{ $t("offer-department") }}
            </div>
          </div>
          <div class="col-8 p-0">
            <ValidationProvider
              vid="category_id"
              :name="$t('offer-department')"
              v-slot="errors"
            >
              <d-select-input :errors="errors" v-model="itemForm.category_id">
                <option></option>
                <option
                  v-for="(dept, i) in categories"
                  :key="i"
                  :value="dept.id"
                >
                  {{ dept.name }}
                </option>
              </d-select-input>
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
    </template>
    <template v-slot:actions>
      <button @click="save" :disabled="loading" class="btn btn-custmer">
        {{ $t("add-ads") }}
      </button>
    </template>
  </d-dialog-large>
</template>

<script>
import offersAPI from "@/services/api/offers";
import loadImageInput from "./load-image.vue";
export default {
  name: "add-new-offer",
  components: {
    loadImageInput,
  },
  props: {
    group: {
      type: String,
      default: "add-new-offer",
    },
  },
  data: (vm) => {
    return {
      categories: [],
      loading: false,
      showDialog: false,
      itemDialog: {},
      itemForm: {},
      idImage: `image-selected-${vm.generateRandomString(8)}`,
    };
  },
  methods: {
    async save() {
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.loading = false;
        return;
      }
      // let formData = this.loadObjectToForm(this.itemForm);

      try {
        let { data } = await offersAPI.addOffer(this.itemForm);
        if (data.success) {
          console.mylog("success", data);
          //window.EventBus.fire('list-coupon-update')
          this.fireEvent("d-filter-list-refresh");
          this.closeEvent();
          window.SwalSuccess("تم اضافه عرضك بنجاح");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error, this.$refs.form);
      }
      this.loading = false;
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
    openDialog(dataEvt) {
      this.itemDialog = { ...dataEvt };
      this.itemForm = {
        file: null,
        name_company: "",
        type_company: "",
        during: null,
        category_id: null,
        code: "",
        website: "",
        description: "",
      };
      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      return true;
    },
    closeEvent() {
      this.fireCloseDialog(this.group);
    },
  },
  // meh: {
  //   async save() {
  //     this.loading = true;
  //     let valid = await this.$refs.form.validate();
  //     if (!valid) {
  //       this.loading = false;
  //       return;
  //     }
  //     // let formData = this.loadObjectToForm(this.itemForm);

  //     try {
  //       let { data } = await offersAPI.addOffer(this.itemForm);
  //       if (data.success) {
  //         console.mylog("success", data);
  //         //window.EventBus.fire('list-coupon-update')
  //         this.fireEvent("d-filter-list-refresh");
  //         this.closeEvent();
  //         window.SwalSuccess("تم اضافه عرضك بنجاح");
  //       } else {
  //         window.SwalError(data.message);
  //       }
  //     } catch (error) {
  //       window.DHelper.catchException.call(this, error, this.$refs.form);
  //     }
  //     this.loading = false;
  //   },
  //   async loadCategories() {
  //     try {
  //       let { data } = await offersAPI.getCategories();
  //       if (data.success) {
  //         this.categories = data.data;
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   },
  //   openDialog(dataEvt) {
  //     this.itemDialog = { ...dataEvt };
  //     this.itemForm = {
  //       file: null,
  //       name_company: "",
  //       type_company: "",
  //       during: null,
  //       category_id: null,
  //       code: "",
  //       website: "",
  //       description: "",
  //     };
  //     this.showDialog = true;
  //     return true;
  //   },
  //   closeDialog() {
  //     this.showDialog = false;
  //     return true;
  //   },
  //   closeEvent() {
  //     this.fireCloseDialog(this.group);
  //   },
  // },
  // methods: {
  //   async save() {
  //     this.loading = true;
  //     let valid = await this.$refs.form.validate();
  //     if (!valid) {
  //       this.loading = false;
  //       return;
  //     }
  //     // let formData = this.loadObjectToForm(this.itemForm);

  //     try {
  //       let { data } = await offersAPI.addOffer(this.itemForm);
  //       if (data.success) {
  //         console.mylog("success", data);
  //         //window.EventBus.fire('list-coupon-update')
  //         this.fireEvent("d-filter-list-refresh");
  //         this.closeEvent();
  //         window.SwalSuccess("تم اضافه عرضك بنجاح");
  //       } else {
  //         window.SwalError(data.message);
  //       }
  //     } catch (error) {
  //       window.DHelper.catchException.call(this, error, this.$refs.form);
  //     }
  //     this.loading = false;
  //   },
  //   async loadCategories() {
  //     try {
  //       let { data } = await offersAPI.getCategories();
  //       if (data.success) {
  //         this.categories = data.data;
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   },
  //   openDialog(dataEvt) {
  //     this.itemDialog = { ...dataEvt };
  //     this.itemForm = {
  //       file: null,
  //       name_company: "",
  //       type_company: "",
  //       during: null,
  //       category_id: null,
  //       code: "",
  //       website: "",
  //       description: "",
  //     };
  //     this.showDialog = true;
  //     return true;
  //   },
  //   closeDialog() {
  //     this.showDialog = false;
  //     return true;
  //   },
  //   closeEvent() {
  //     this.fireCloseDialog(this.group);
  //   },
  // },
  mounted() {
    this.loadCategories();

    console.log(this.group);
    this.itemForm = this.group;
  },
};
</script>

<style>
.add-offer__field-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  /* identical to box height, or 106% */
  color: #1fb9b3;
}

.add-offer__header-title {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height, or 110% */
  color: #0c2f33;
}
input[type="date"] {
  background-color: #fff;
  color: #1fb9b3;
}
input[type="date"]:focus {
  background-color: #fff;
  color: #1fb9b3;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  color: #1fb9b3;
  fill: #1fb9b3;
  stroke: #1fb9b3;
}
/* input[ type="date"]
:-webkit-calendar-picker-indicator(
31
opacity:O; */
/* input[ type="date"K
11 width: 200px;
12
height: 30px;
13 position: absolute;
14
top: 50%;
15 left: 50%;
16 transform: translate(-50%,-50%);
17
background: D#F0A500 url(icon.png);
18 background-size: 30px;
20 19
background-repeat: no-repeat;
background-position: 90%;
21 padding: 5px;
22 font-size: 18px;
23
font-weight: 999;
24 border: none;
25
outline:none; */
</style>
