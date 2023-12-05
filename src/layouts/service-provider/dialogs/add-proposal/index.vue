<template>
  <d-dialog-large dynamicTextClass="p-1" :styleProps="`max-width: calc(var(--bs-modal-width) + ${mainWidth});`" :group="group"
    :xl="false" :openDialog="openDialog" :closeDialog="closeDialog" :loading="loading">
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
          <li class="list__item" :class="choose == 'selectFromWorkspaces' ? 'activeRadio' : ''">
            <label class="label--radio">
              <input type="radio" class="radio" name="foo" value="selectFromWorkspaces" v-model="choose">
              اماكن عمل رياديات
            </label>
          </li>
          <li class="list__item" :class="choose == 'addManually' ? 'activeRadio' : ''">
            <label class="label--radio">
              <input type="radio" class="radio" name="foo" value="addManually" v-model="choose">
              اضافه مكان اخر
            </label>
          </li>
        </ul>
      </div>

      <div id="step-three" v-if="stepThree">

        <div v-if="choose === 'addManually'">
          <div class="row">
            <h2 style="font-weight: 300;">
              اضف مكان من اختيارك
            </h2>
          </div>

          <ValidationObserver ref="addWorkspaceForm">

            <!--region-->
            <div class="mb-3" v-if="itemForm.state == 'offline'">
              <ValidationProvider :name="$t('Region')" vid="city_id" tag="div" class="form-group" rules="required"
                v-slot="{ errors }">
                <d-select-input :errors="errors" v-model="itemForm.city_id">
                  <option selected disabled value=''> {{ $t('Region') }} </option>

                  <option :key="i" v-for="(city, i) in cities" :value="city.id">
                    {{ `${city.name}` }}
                  </option>
                </d-select-input>
              </ValidationProvider>
            </div>


            <!--workspace type-->
            <div class="mb-3" v-if="itemForm.state == 'offline'">
              <ValidationProvider name="workspace" vid="workspace_category" tag="div" class="form-group" rules="required"
                v-slot="{ errors }">
                <d-select-input :errors="errors" v-model="itemForm.workspaceCategory_id">
                  <option selected disabled value=''> اختر نوع المكان </option>

                  <option :key="i" v-for="(workspaceCategory, i) in workspaceCategories" :value="workspaceCategory.id">
                    {{ `${workspaceCategory.title}` }}
                  </option>
                </d-select-input>
              </ValidationProvider>
            </div>

            <!-- address -->
            <div class="mb-3">
              <ValidationProvider :name="$t('Address')" vid="address" rules="required" v-slot="{ errors }">
                <d-text-input :errors="errors" type="text" v-model="itemForm.address" class="form-control"
                  :placeholder="$t('Address')" />
              </ValidationProvider>
            </div>

            <!-- exhibition_map_url -->
            <div class="mb-3">
              <ValidationProvider :name="$t('exhibition_map_url')" vid="exhibition_map_url" rules="required"
                v-slot="{ errors }">
                <d-text-input :errors="errors" type="text" v-model="itemForm.exhibition_map_url" class="form-control"
                  :placeholder="$t('exhibition_map_url')" />
              </ValidationProvider>
            </div>

          </ValidationObserver>
        </div>

        <div v-if="choose === 'selectFromWorkspaces'">
          <div>
            <div class="mt-5" style="font-weight: bold">
              <div class="row">
                <h2 style="font-weight: 300;">
                  أختار من اماكن العمل لدينا
                </h2>
              </div>
              <Workspaces />
            </div>
          </div>
        </div>
      </div>

    </template>

    <template v-slot:actions>
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
        <button v-if="itemForm.state == 'offline' && stepThree" @click="saveOffline" style="height: 40px;"
          class="btn btn-main">
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
import Workspaces from "./filter-list/index.vue";

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
      mainWidth: '150px',
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      choose: 'selectFromWorkspaces',
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
      },],
      states: [
        { id: "online", name: vm.$t("online-services") },
        { id: "offline", name: vm.$t("offline-services") },
      ],
    };
  },
  methods: {

    async saveOffline() {
      // this.loading = true;
      let valid = await this.$refs.addWorkspaceForm.validate();
      if (!valid) {
        console.log("addWorkspaceForm invalid");
        this.loading = false;
        return;
      }
      let formData = new FormData();
      Object.keys(this.itemForm).forEach(key => {
        formData.append(key, this.itemForm[key]);
      });

      // try {
      //   let { data } = this.itemForm.id
      //     ? await proposalsAPIs.updateItem(this.itemForm.id, formData)
      //     : await proposalsAPIs.addItem(formData);

      //   if (data.success) {
      //     let dataEvent;
      //     if (!this.itemForm.id)
      //       dataEvent = {
      //         title: "لقد تم أضافة طلب جديد لك",
      //         description:
      //           "سيتم مراجعة الطلب  من خلالنا  خلال يوم  و سنخبرك عندما يكون جاهز  لاستقبال الطلبات"
      //       };
      //     else {
      //       dataEvent = {
      //         title: "لقد تم تعديل طلبك",
      //         description: ""
      //       };
      //     }
      //     this.fireOpenDialog("standard-success-message", dataEvent);
      //     this.closeEvent();
      //   } else {
      //     window.SwalError(data.message);
      //   }
      // } catch (error) {
      //   //
      //   if (error.response) {
      //     let response = error.response;
      //     if (response.status == 422) {
      //       if (response.data.errors)
      //         this.$refs.form.setErrors(response.data.errors);
      //     }
      //   }
      // }
      // this.loading = false;
    },

    workspaceSelect() {
      console.log(this.choose)
      this.stepThree = true
      this.stepTwo = false
      this.stepOne = false
      if(this.choose == 'selectFromWorkspaces')
      {
        
        this.mainWidth = '550px'
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
      this.stepOne = true
      this.stepTwo = false
      this.stepThree = false
      console.log('dataEvent', dataEvent);
      this.loading = false;
      this.itemForm = {
        exhibition_map_url: '',
        workspaceCategory_id: '',
        address: '',
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
</style>