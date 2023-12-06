<template>
  <d-dialog-large dynamicTextClass="p-1" :styleProps="`max-width: calc(var(--bs-modal-width) + ${mainWidth});`"
    :group="group" :xl="false" :openDialog="openDialog" :closeDialog="closeDialog" :loading="loading">
    <template v-slot>
      <ValidationObserver id="step-one" style="display: block; width: 80%; margin: auto;" ref="form"
        v-if="showDialog && stepOne">
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
        <!-- <div class="mb-3" v-if="itemForm.state == 'offline'">
          <ValidationProvider :name="$t('the_city')" vid="city_id" tag="div" class="form-group" rules="required"
            v-slot="{ errors }">
            <d-select-input :errors="errors" v-model="itemForm.city_id">
              <option selected disabled value=''> {{ $t('the_city') }} </option>

              <option :key="i" v-for="(city, i) in cities" :value="city.id">
                {{ `${city.name}` }}
              </option>
            </d-select-input>
          </ValidationProvider>
        </div> -->

        <!-- specialite -->
        <!-- <div class="mb-3">

          <ValidationProvider tag="div" class="form-group" :name="$t('specialite')" vid="field_id" v-slot="{ errors }">
            <d-select-input :errors="errors" class="form-select" v-model="itemForm.field_id">
              <option selected disabled value=''> {{ $t('select-specialite') }} </option>
              <option v-for="(field, i) in fields" :key="i" :value="field.id">{{ field.name }}</option>
            </d-select-input>
          </ValidationProvider>
        </div> -->

        <!--field-->
        <div class="mb-3">
          <ValidationProvider tag="div" class="form-group" :name="$t('specialite')" vid="field_id" v-slot="{ errors }">
            <d-select-input :errors="errors" class="form-select" v-model="itemForm.field_id">
              <option selected disabled value=''> {{ $t('select-specialite') }} </option>
              <option v-for="(field, i) in fields" :key="i" :value="field.id">{{ field.name }}</option>
            </d-select-input>
          </ValidationProvider>
        </div>

        <div class="mb-3">
          <ValidationProvider :name="$t('request-description')" vid="description" rules="required" v-slot="{ errors }">
            <label class="form-label">أكتب وصف لطلبك بالتفاصيل</label>
            <d-ckeditor-classic v-model="itemForm.desc" class="form-control" rows="10" :editorConfig="{
              minHeight: '150px'
            }"></d-ckeditor-classic>
            <d-error-input :errors="errors" v-if="errors.length" />
          </ValidationProvider>
        </div>


        <!-- file -->

        <div class="input-file">

          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.8534 17.1104L13.8534 17.1104L13.8552 17.1087L15.7351 15.2287C16.0242 14.9397 16.5059 14.9397 16.7949 15.2287C17.0839 15.5178 17.0839 15.9995 16.7949 16.2885L16.9717 16.4653L16.7949 16.2885L14.9149 18.1685C14.5494 18.5341 14.3484 19.0105 14.3484 19.5186C14.3484 20.0228 14.5466 20.5148 14.9168 20.8706C15.6679 21.6197 16.8782 21.619 17.6285 20.8687L20.5885 17.9087C22.3794 16.1177 22.3794 13.2128 20.5885 11.4218C18.7975 9.63088 15.8926 9.63088 14.1016 11.4218L10.8749 14.6485L11.0517 14.8253L10.8749 14.6485C10.1488 15.3746 9.74837 16.3312 9.74837 17.3453C9.74837 18.3576 10.1476 19.3285 10.8758 20.0429C11.1639 20.332 11.1636 20.8131 10.8749 21.1018C10.5859 21.3908 10.1042 21.3908 9.81512 21.1018C8.80927 20.096 8.26172 18.7598 8.26172 17.3319C8.26172 15.9041 8.80927 14.5679 9.81512 13.5621L13.0418 10.3354L12.8651 10.1586L13.0418 10.3354C15.4109 7.96633 19.2792 7.96633 21.6483 10.3354C24.0173 12.7044 24.0173 16.5728 21.6483 18.9418L18.6883 21.9018L18.6883 21.9018L18.6867 21.9035C18.0155 22.5871 17.1472 22.9219 16.2651 22.9219C15.3948 22.9219 14.5127 22.586 13.8552 21.9285C13.2078 21.2811 12.8484 20.4244 12.8484 19.5186C12.8484 18.6114 13.2088 17.7427 13.8534 17.1104Z"
              fill="#737373" stroke="white" stroke-width="0.5" />
          </svg>
          <label for="fileInput" class="custom-file-upload" v-text="buttonText">
          </label>
          <input id="fileInput" type="file" @change="handleFileUpload" ref="fileInput" />

        </div>

        <div class="mb-3">
          <ValidationProvider :name="$t('required-skills')" vid="skills" rules="required" v-slot="{ errors }">
            <label class="form-label">{{ $t('required-skills') }}</label>
            <d-multi-select-tag v-model="itemForm.skills"></d-multi-select-tag>
            <d-error-input :errors="errors" v-if="errors.length" />
          </ValidationProvider>
        </div>
      </ValidationObserver>

      <div id="step-two" v-if="stepTwo">
        <div class="row">
          <h2 style="font-weight: 300;">
            اختر مكان تنفيذ الخدمه
          </h2>
        </div>
        <ul class="list">
          <li class="list__item" :class="itemForm['type'] == 'workspace' ? 'activeRadio' : ''">
            <label class="label--radio">
              <input type="radio" class="radio" name="foo" value="workspace" v-model="itemForm['type']">
              اماكن عمل رياديات
            </label>
          </li>
          <li class="list__item" :class="itemForm['type'] == 'other' ? 'activeRadio' : ''">
            <label class="label--radio">
              <input type="radio" class="radio" name="foo" value="other" v-model="itemForm['type']">
              اضافه مكان اخر
            </label>
          </li>
        </ul>
      </div>

      <div id="step-three" v-if="stepThree">

        <div v-if="itemForm['type'] === 'other'">
          <div class="row">
            <h2 style="font-weight: 300;">
              اضف مكان من اختيارك
            </h2>
          </div>

          <ValidationObserver ref="addWorkspaceForm">

            <!--region-->
            <div class="mb-3" v-if="itemForm.state == 'offline'">
              <ValidationProvider :name="$t('Region')" vid="region" tag="div" class="form-group" rules="required"
                v-slot="{ errors }">
                <d-select-input :errors="errors" v-model="itemForm.region">
                  <option selected disabled value=''> {{ $t('Region') }} </option>

                  <option :key="i" v-for="(city, i) in cities" :value="city.name">
                    {{ `${city.name}` }}
                  </option>
                </d-select-input>
              </ValidationProvider>
            </div>


            <!--workspace type-->
            <div class="mb-3" v-if="itemForm.state == 'offline'">
              <ValidationProvider name="workspace" vid="workspace_category" tag="div" class="form-group" rules="required"
                v-slot="{ errors }">
                <d-select-input :errors="errors" v-model="itemForm.type_place">
                  <option selected disabled value=''> اختر نوع المكان </option>

                  <option :key="i" v-for="(workspaceCategory, i) in workspaceCategories" :value="workspaceCategory.title">
                    {{ `${workspaceCategory.title}` }}
                  </option>
                </d-select-input>
              </ValidationProvider>
            </div>

            <!-- execution_place -->
            <div class="mb-3">
              <ValidationProvider :name="$t('Address')" vid="address" rules="required" v-slot="{ errors }">
                <d-text-input :errors="errors" type="text" v-model="itemForm.execution_place" class="form-control"
                  :placeholder="$t('Address')" />
              </ValidationProvider>
            </div>

            <!-- location -->
            <div class="mb-3">
              <ValidationProvider :name="$t('exhibition_map_url')" vid="exhibition_map_url" rules="required"
                v-slot="{ errors }">
                <d-text-input :errors="errors" type="text" v-model="itemForm.location" class="form-control"
                  :placeholder="$t('exhibition_map_url')" />
              </ValidationProvider>
            </div>

          </ValidationObserver>
        </div>

        <div v-if="itemForm['type'] === 'workspace'">
          <div>
            <div class="mt-5" style="font-weight: bold">
              <div class="row">
                <h2 style="font-weight: 300;">
                  أختار من اماكن العمل لدينا
                </h2>
              </div>
              <Workspaces  />
            </div>
          </div>
        </div>
      </div>

    </template>

    <template v-slot:actions>
      {{ getSelectedWorkspace }}
      <div class="d-flex justify-content-start w-100 p-2" style="margin-right: 55px">
        <button v-if="itemForm.state == 'online' && stepOne" @click="save" style="height: 40px;" class="btn btn-main">{{
          itemDialog.id ? $t('update-proposal') : $t('add-proposal') }}</button>
        <button v-if="itemForm.state == 'offline' && stepOne" @click="chooseType" style="height: 40px;"
          class="btn btn-main">
          احجز مكان للطلب
        </button>
        <button v-if="itemForm.state == 'offline' && stepTwo" @click="workspaceSelect" style="height: 40px;"
          class="btn btn-main">
          التالى
        </button>
        <button v-if="itemForm.state == 'offline' && stepThree" @click="save" style="height: 40px;" class="btn btn-main">
          تابع ارسال طلبك
        </button>
      </div>
    </template>
  </d-dialog-large>
</template>
  
<script>
import proposalsAPIs from "@/services/api/service-provider/user/proposals.js";
import commonAPI from "@/services/api/common";
import workspaceAPI from "@/services/api/workspace";
import readyServiceAPIs from '@/services/api/service-provider/provider/ready-service'
import Workspaces from "./workspaces/index.vue";

export default {
  components: {
    Workspaces
  },
  name: "add-proposal",
  props: {
    group: {
      type: String,
      default: "add-proposal"
    }
  },
  data: vm => {
    return {
      buttonText: 'ارفق الملفات', // Initial button text
      workId: 2,
      mainWidth: '150px',
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      loading: false,
      itemDialog: { id: null },
      itemForm: {},
      showDialog: false,
      categories: [],
      workspaceCategories: [],
      fields: [],
      cities: [{
        "id": 47091,
        "name": "جده",
        "region": {
          "id": 3999,
          "name": "Treinta y Tres"
        }
      },
      {
        "id": 47092,
        "name": "الرياض",
        "region": {
          "id": 3999,
          "name": "Treinta y Tres"
        }
      },
      {
        "id": 47093,
        "name": "عمان",
        "region": {
          "id": 3999,
          "name": "Treinta y Tres"
        }
      }],
      states: [
        { id: "online", name: vm.$t("online-services") },
        { id: "offline", name: vm.$t("offline-services") },
      ],
    };
  },

  // created() {
  //   window.EventBus.listen("workspaceSelected" , (data)=> {
  //     console.log('tested', data)
  //   });
  // },
  computed: {
    getSelectedWorkspace() {
      return this.$store.state.serviceProviderWorkspaceSelected_id
    }
  },
  methods: {
    handleFileUpload(event) {
      this.itemForm.file = event.target.files[0];
      this.buttonText = this.itemForm.file.name;
    },
    workspaceSelect() {
      this.stepThree = true
      this.stepTwo = false
      this.stepOne = false
      if (this.itemForm.type == 'workspace') {
        this.mainWidth = '550px'
        this.itemForm.workspace_id = 23
        this.itemForm.bookings = [{
          "start_time": "02",
          "end_time": "05",
          "date": "2020-02-5"
        }]
      } else if (this.itemForm.type == 'other') {
        this.itemForm.location = ''
        this.itemForm.type_place = '',
          this.itemForm.execution_place = '',
          this.itemForm.region = ''

      }

    },
    async chooseType() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        return;
      }
      this.stepOne = false
      this.stepTwo = true
    },
    // async loadCities() {
    //   try {
    //     let { data } = await commonAPI.cities();
    //     if (data.success) {
    //       this.cities = data.data;
    //       console.log('cities', this.cities)
    //     }
    //   } catch (error) {
    //     console.log('ccc')
    //     console.log("error", error);
    //   }
    // },
    async loadFields(val, ch = true) {
      console.mylog('cc', val)
      if (ch)
        this.itemForm.field_id = [];

      if (!this.itemForm.category_id) {
        this.fields = [];
        return;
      }
      try {
        let { data } = await readyServiceAPIs.getFields(this.itemForm.category_id)
        if (data.success) {
          this.fields = data.data
        }
      } catch (error) {
        console.log('error', error)
      }
    },
    async save() {
      this.loading = true;
      if (this.stepOne) {
        let valid = await this.$refs.form.validate();
        if (!valid) {
          console.log("form invalid");
          this.loading = false;
          return;
        }
      } else if (this.stepThree && this.itemForm['type'] == 'other') {
        let valid = await this.$refs.addWorkspaceForm.validate();
        if (!valid) {
          console.log("form invalid");
          this.loading = false;
          return;
        }
      }
      let formData = new FormData();
      Object.keys(this.itemForm).forEach(key => {
        formData.append(key, this.itemForm[key]);
      });
      console.log('Form data values:');
      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
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
                "سيتم مراجعة الطلب  من خلالنا  فى اقرب وقت  و سنخبرك عندما يكون جاهز  لاستقبال الطلبات"
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
      this.mainWidth = '150px'
      this.stepOne = true
      this.stepTwo = false
      this.stepThree = false
      console.log('dataEvent', dataEvent);
      this.loading = false;
      this.itemForm = {
        title: "",
        file: null,
        state: "online",
        category_id: null,
        field_id: null,
        price: null,
        execution_period: 0,
        type: 'workspace',
        skills: "",
        // location: '',
        // type_place: '',
        // execution_place: '',
        // id: null,
        // region: "",
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
    },
    async loadWorkspaceCategories() {
      try {
        let { data } = await workspaceAPI.getWorkSpaceCategories();
        if (data.success) {
          this.workspaceCategories = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  },
  mounted() {
    // this.loadCities();
    this.loadWorkspaceCategories();
    this.loadCategories();
  }
};
</script>
  
<style scoped lang="scss">
$primaryColor: #2eb9b3;
$secondaryColor: #f2f2f2;
$twitter: #2980b9;
$baseFontSize: 16;

@mixin transition($property, $duration, $timing-function) {
  -webkit-transition: $property $duration $timing-function;
  -moz-transition: $property $duration $timing-function;
  -o-transition: $property $duration $timing-function;
  transition: $property $duration $timing-function;
}

@mixin transform($transform) {
  -webkit-transform: $transform;
  -moz-transform: $transform;
  -ms-transform: $transform;
  -o-transform: $transform;
  transform: $transform;
}

@function rem($val) {
  @return #{$val / $baseFontSize}rem;
}

#step-one {
  & .info-item {
    font-size: 16px;
    padding: 5px;
  }

  & .info-item-value {
    color: #2c98b3;
  }

  & .form-check-input-custom {
    display: none;
  }

  & .form-check-input-custom:checked+label {
    background-color: #1FB9B3;
    border-radius: 5px;
    color: white;
  }

  & .form-check-custom {
    /* border: 1px solid #1FB9B3; */
    /* border-radius: 8px; 
  padding: 3px 45px;
  */
    padding: 10px
  }

  & .form-check-custom-states {
    padding: 0 !important;
    margin: 0 !important;
  }

  & .form-check-states:checked+label {
    background-color: #1FB9B3;
    border-radius: 5px;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    color: white !important;
  }

  & .form-check-states:checked+#offline {
    background-color: #1FB9B3;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    color: white !important;
  }

  & .form-check-states {
    display: none;
  }

  & #offline {
    border-right: 1px solid #1FB9B3;
  }
}

#step-two {
  .number {
    position: absolute;
    top: rem(35);
    left: rem(-20);

    color: $primaryColor;
    font-size: 2rem;
    font-family: Helvetiva, Arial, sans-serif;
  }

  .list {
    padding: .5rem 1rem;
    margin: .5rem .5rem 2rem .5rem;
    list-style-type: none;
    /*border-left: rem(3) solid $primaryColor;*/
  }

  .list__item {
    margin: 0 0 .7rem 0;
    padding: 10px;
    border: 1px solid #a8a8a8;
    border-radius: 8px;
    color: #a8a8a8;
  }

  .activeRadio {
    border-color: $primaryColor;
    color: var(--pc);
  }

  .label--checkbox,
  .label--radio {
    position: relative;
    width: 100%;
    margin: .5rem;

    font-family: Arial, sans-serif;
    line-height: 135%;

    cursor: pointer;
  }

  .radio {
    position: relative;

    margin: 0 1rem 0 0;

    cursor: pointer;

    &:before {
      @include transition(transform, .4s, cubic-bezier(.45, 1.8, .5, .75));
      @include transform(scale(0, 0));

      content: "";

      position: absolute;
      top: 0;
      left: rem(2);
      z-index: 1;

      width: rem(12);
      height: rem(12);

      background: $primaryColor;

      border-radius: 50%;
    }

    &:checked {
      &:before {
        @include transform(scale(1, 1));
      }
    }

    &:after {
      content: "";

      position: absolute;
      top: rem(-4);
      left: rem(-2);

      width: 1rem;
      height: 1rem;

      background: #fff;

      border: 2px solid $secondaryColor;
      border-radius: 50%;
    }
  }

  .footer {
    position: relative;
  }

  .btn {
    @include transition(background, .3s, ease-in-out);

    position: absolute;
    top: 0;
    right: 4.5rem;

    padding: .5rem;

    background: $primaryColor;

    color: #fff;
    font-family: Helvetica, Arial, sans-serif;
    text-decoration: none;

    &:hover {
      background: darken($primaryColor, 5%);
    }
  }

  .btn--twitter {
    right: 2rem;

    background: $twitter;

    &:hover {
      background: darken($twitter, 5%);
    }
  }
}

/* Styles for the file upload component */
.file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-file {
  padding: 16px;
  font-size: 16px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

input[type="file"] {
  display: none;
}

.input-file:hover {
  border-color: #2eb9b3;
}
</style>