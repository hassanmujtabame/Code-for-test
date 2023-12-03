<template>
  <d-dialog-large dynamicTextClass="p-1" styleProps="max-width: calc(var(--bs-modal-width) + 150px);" :group="group"
    :xl="false" :openDialog="openDialog" :closeDialog="closeDialog" :loading="loading">
    <template v-slot>
      <ValidationObserver style="display: block; width: 80%; margin: auto;" ref="form" v-if="showDialog">
        <!--Title-->
        <div class="mb-3">
          <ValidationProvider :name="$t('request-title')" vid="title" rules="required" v-slot="{ errors }">
            <d-text-input :errors="errors" type="text" v-model="itemForm.title" class="form-control"
              :placeholder="$t('request-title')" />
          </ValidationProvider>
        </div>
        <!--Price-->
        <div class="mb-3">
          <ValidationProvider :name="$t('request-price')" vid="price" rules="required|numeric" v-slot="{ errors }">
            <d-text-input :errors="errors" type="text" v-model="itemForm.price" class="form-control"
              :placeholder="$t('request-price')" />
          </ValidationProvider>
        </div>
        <!--execution_period-->
        <div class="mb-3">
          <ValidationProvider :name="$t('execution_period')" vid="execution_period" rules="required|numeric"
            v-slot="{ errors }">
            <d-text-input :errors="errors" type="text" v-model="itemForm.execution_period" class="form-control"
              :placeholder="$t('execution_period')" />
          </ValidationProvider>
        </div>
        <!-- specialites
        <div class="mb-3">
          <ValidationProvider tag="div" class="form-group" :name="$t('request-category')" vid="state" rules="required"
            v-slot="{ errors }">
            <d-select-input :errors="errors" class="form-select" v-model="itemForm.state" >
              <option selected disabled value=''> {{$t('request-category')}} </option>
              <option v-for="(spec, i) in states" :key="i" :value="spec.id">{{ spec.name }}</option>
            </d-select-input>
          </ValidationProvider>
        </div> -->


        <!-- online or offline -->
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body mb-3">
            <div class=" d-flex rounded-3 w-100 justify-content-center" style="border: 1px solid #1FB9B3;">
              <div v-for="(state, i) in states" :key="i" class="form-check w-100 form-check-custom-states">
                <input class="form-check-input form-check-states" type="radio" :value="state.id" name="stateRadioDefault"
                  :id="state.id" v-model="itemForm.state" />
                <label style="color: #1FB9B3; cursor: pointer;" :id="state.id"
                  class="form-check-label w-100  text-center t form-check-custom" :for="state.id">{{ state.name }}</label>
              </div>
            </div>
          </div>
        </div>

        <!-- end online or offline -->
        <!-- category -->
        <div class="mb-3">
          <ValidationProvider tag="div" class="form-group" :name="$t('request-domain')" vid="category_id" rules="required"
            v-slot="{ errors }">
            <d-select-input :errors="errors" class="form-select" v-model="itemForm.category_id"
              @change="loadFields($event)">
              <option selected disabled value=''> {{ $t('request-domain') }} </option>

              <option v-for="(cat, i) in categories" :key="i" :value="cat.id">{{ cat.name }}</option>
            </d-select-input>
          </ValidationProvider>
        </div>
        <!--city-->
        <div class="mb-3" v-if="itemForm.state == 'offline'">
          <ValidationProvider :name="$t('the_city')" vid="city_id" tag="div" class="form-group" rules="required"
            v-slot="{ errors }">
            <d-select-input :errors="errors" v-model="itemForm.city_id">
              <option selected disabled value=''> {{ $t('the_city') }} </option>

              <option :key="i" v-for="(city, i) in cities" :value="city.id">
                {{ `${city.name}` }}
              </option>
            </d-select-input>
          </ValidationProvider>
        </div>

        <!-- specialite -->
        <!-- <div class="mb-3">

          <ValidationProvider tag="div" class="form-group" :name="$t('specialite')" vid="field_id" v-slot="{ errors }">
            <d-select-input :errors="errors" class="form-select" v-model="itemForm.field_id">
              <option selected disabled value=''> {{ $t('select-specialite') }} </option>
              <option v-for="(field, i) in fields" :key="i" :value="field.id">{{ field.name }}</option>
            </d-select-input>
          </ValidationProvider>
        </div> -->

        <div class="mb-3">
          <ValidationProvider :name="$t('request-description')" vid="description" rules="required" v-slot="{ errors }">
            <label class="form-label">أكتب وصف لطلبك بالتفاصيل</label>
            <d-ckeditor-classic v-model="itemForm.desc" class="form-control" rows="10" :editorConfig="{
              minHeight: '150px'
            }" ></d-ckeditor-classic>
            <d-error-input :errors="errors" v-if="errors.length" />
          </ValidationProvider>
        </div>
        <div class="mb-3">
          <ValidationProvider :name="$t('required-skills')" vid="skills" rules="required" v-slot="{ errors }">
            <label class="form-label">{{ $t('required-skills') }}</label>
            <d-multi-select-tag v-model="itemForm.skills"></d-multi-select-tag>
            <d-error-input :errors="errors" v-if="errors.length" />
          </ValidationProvider>
        </div>
      </ValidationObserver>
    </template>
    <template v-slot:actions>
      <button @click="save" style="height: 40px;" class="btn btn-main">{{
        itemDialog.id ? $t('update-proposal') : $t('add-proposal') }}</button>
    </template>
  </d-dialog-large>
</template>
  
<script>
import proposalsAPIs from "@/services/api/service-provider/user/proposals.js";
import commonAPI from "@/services/api/common";

export default {
  name: "add-proposal",
  props: {
    group: {
      type: String,
      default: "add-proposal"
    }
  },
  data: vm => {
    return {
      loading: false,
      itemDialog: { id: null },
      itemForm: {},
      showDialog: false,
      categories: [],
      fields: [],
      cities: [],
      states: [
        { id: "online", name: vm.$t("online-services") },
        { id: "offline", name: vm.$t("offline-services") },
      ],
    };
  },
  methods: {
    async loadCities() {
      try {
        let { data } = await commonAPI.cities();
        if (data.success) {
          this.cities = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async save() {
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        this.loading = false;
        return;
      }
      let formData = new FormData();
      Object.keys(this.itemForm).forEach(key => {
        formData.append(key, this.itemForm[key]);
      });

      try {
        let { data } = this.itemForm.id
          ? await proposalsAPIs.updateItem(this.itemForm.id, formData)
          : await proposalsAPIs.addItem(formData);

        if (data.success) {
          let dataEvent;
          if (!this.itemForm.id)
            dataEvent = {
              title: "لقد تم أضافة طلب جديد لك",
              description:
                "سيتم مراجعة الطلب  من خلالنا  خلال يوم  و سنخبرك عندما يكون جاهز  لاستقبال الطلبات"
            };
          else {
            dataEvent = {
              title: "لقد تم تعديل طلبك",
              description: ""
            };
          }
          this.fireOpenDialog("standard-success-message", dataEvent);
          this.closeEvent();
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        //
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            if (response.data.errors)
              this.$refs.form.setErrors(response.data.errors);
          }
        }
      }
      this.loading = false;
    },
    openDialog(dataEvent) {
      console.log('dataEvent', dataEvent);
      this.loading = false;
      this.itemForm = {
        id: null,
        title: "",
        state: "online",
        city_id: "",
        category_id: null,
        field_id: null,
        price: null,
        execution_period: 0,
        description: "",
        skills: ""
      };
      if (dataEvent) {
        let {
          id,
          title,
          field_id,
          category_id,
          state,
          price,
          execution_period,
          description,
          skills
        } = dataEvent;
        this.itemForm = {
          ...this.itemForm,
          id,
          title,
          field_id,
          category_id,
          state: 'online',
          price,
          execution_period,
          desc: description,
          skills
        };
        this.loadFields(category_id, false);
      }
      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + "-close-dialog");
    },
    async loadFields(val, ch = true) {
      if (ch) this.itemForm.field_id = null;

      if (!this.itemForm.category_id) {
        this.fields = [];
        return;
      }
      try {
        let { data } = await proposalsAPIs.getFields(this.itemForm.category_id);
        if (data.success) {
          this.fields = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async loadCategories() {
      try {
        let { data } = await proposalsAPIs.getCategories();
        if (data.success) {
          this.categories = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  },
  mounted() {
    this.loadCities();

    this.loadCategories();
  }
};
</script>
  
<style scoped>
.info-item {
  font-size: 16px;
  padding: 5px;
}

.info-item-value {
  color: #2c98b3;
}

.form-check-input-custom {
  display: none;
}

.form-check-input-custom:checked+label {
  background-color: #1FB9B3;
  border-radius: 5px;
  color: white;
}

.form-check-custom {
  /* border: 1px solid #1FB9B3; */
  /* border-radius: 8px; 
  padding: 3px 45px;
  */
  padding: 10px
}

.form-check-custom-states {
  padding: 0 !important;
  margin: 0 !important;
}

.form-check-states:checked+label {
  background-color: #1FB9B3;
  border-radius: 5px;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  color: white !important;
}

.form-check-states:checked+#offline {
  background-color: #1FB9B3;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  color: white !important;
}

.form-check-states {
  display: none;
}

#offline {
  border-right: 1px solid #1FB9B3;
}
</style>