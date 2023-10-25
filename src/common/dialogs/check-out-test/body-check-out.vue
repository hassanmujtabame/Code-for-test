<template>
  <div class="box p-4 shadow m-4 chekout">

    <div class="row justify-content-between">
        <div class="col-7">
            <div class="row justify-content-center">
                <!-- btn pyment type-->
                <p class="fw-bold">معلومات الفاتوره</p>
                <div class="col-12 d-flex flex-wrap justify-content-between">
                    <div class="mt-3 col-6">
                        <p> الاسم الاول</p>
                        <input class="form-control" type="text" />
                    </div>

                    <div class="mt-3 col-6">
                        <p> الاسم الثانى </p>
                        <input class="form-control" type="text" />
                    </div>
                    <div class="mt-3 col-6">
                        <p> الايميل </p>
                        <input class="form-control" type="email" />
                    </div>
                    <div class="mt-3 col-6">
                        <p> الدوله</p>
                        <select class="form-select">
                            <option value="1">السعوديه</option>
                            <option value="2">مصر</option>
                            <option value="3">فلسطين</option>
                        </select>
                    </div>
                    
                    <div class="mt-3 col-12">
                        <p> العنوان</p>
                        <input class="form-control" type="text" />
                    
                    </div>
                    
                    <div class="mt-3 col-6">
                        <p> رقم المحمول  </p>
                        <input class="form-control" />
                      </div>
                      <div class="mt-3 col-6">
                        <p> المنطقه</p>
                        <select class="form-select">
                            <option value="1">المنطقه 1</option>
                            <option value="2">المنطقه 2</option>
                            <option value="3">المنطقه 3</option>
                        </select>
                      </div>
                </div>


            </div>
            <div class="row justify-content-center">
                <!-- btn pyment type-->
                <p class="mt-4 fw-bold">وسائل الدفع</p>
                <div class="col-12">
                    <div class="group-btn-type-pay">
                        <btnTypePay name="pay-type" v-for="(btn, i) in payment_types" :key="i"
                            :valueDefault="btn.id" v-model="itemForm.payment_type">
                            <template v-if="btn.type == 'text'">
                                {{ btn.name }}
                            </template>
                            <component v-else :is="btn.name"></component>
                        </btnTypePay>
                    </div>
                </div>


            </div>
        </div>
        <div class="col-5 justify-content-end tex-end ">
            <div class="border mt-2 payment-card-detail">
                <div class="box ">
                    <h6 class="">
                        خطه
                        ال{{ title_ }}
                    </h6>
                    <slot :item="itemForm" :otherData="otherData"></slot>

                    <div v-if="!hideAmount" class="input-group mb-3 mt-2">
                        <ValidationObserver ref="amount">

                            <ValidationProvider vid="price" :name="$t('amount')"
                                :rules="changeable_ ? 'required|numeric' : ''" v-slot="{ errors }">
                                <p class="fw-bold">
                                    المجموع
                                ر.س

                            </p>
                                <input type="text" :disabled="!changeable_" v-model="total_ammount"
                                    class="form-control" placeholder="ادخل المبلغ">
                                    
                                <d-error-input :errors="errors" v-if="errors" />
                            </ValidationProvider>
                        </ValidationObserver>
                    </div>
                    <input type="text" class="form-control mb-2 mt-2" placeholder=" ادخل كود الخصم  "/>

                    <div>
                        <p style="font-size: 12px;text-align: center;">
                            بإتمامك لعملية الشراء أنت توافق على
                            <span>
                                <a href="" class="m-c">
                                    شروط الاستخدام
                                </a>
                            </span>
                        </p>
                    </div>
                    <div class="text-center">
                        <button @click="payment" class="btn bg-main p-2 text-white ">
                            تاكيد الدفع
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import PaymentCardDetail from "./PaymentCardDetail.vue";
import networkAPI from '@/services/api/network.js'
import coursesAPI from '@/services/api/academy/courses'
import incubatorAPI from '@/services/api/incubator';
import academyAPI from '@/services/api/academy/index.js'

export default {
  components: {
    PaymentCardDetail
  },
  props: {
    title: {
      type: String,
      default: "تفاصيل الدفع"
    },
    changeable: {
      type: Boolean,
      default: false
    },
    hideAmount: {
      type: Boolean,
      default: false
    },
    otherData: {
      type: [Array, Object],
      default: () => ({})
    },
    defaultForm: {
      type: [Array, Object],
      default: () => ({
        payment_type: "new",
        amount: null,
      })
    }
  },
  data() {
    return {
      packageType: '',
      paymentUrlPth: '',
      idCourse: '',
      detailsCourse: {},
      openDepartmentsDialog: false,
      openDepartmentsDialogAcademy: false,
      departmentsIds: [],
      itemsIncubator: [],
      itemsAcademy: [],
      departmentsAcademysub: [],
      departmentsIncubatorSub: [],


    };
  },
  methods: {
    departmentsIdsSelected(id) {
      if (this.departmentsAcademysub.includes(id)) {
        let indexDepartment = this.departmentsAcademysub.indexOf(id)
        this.departmentsAcademysub.splice(indexDepartment, 1)
        const elem = document.getElementById(`department${id}`);
        elem.style.opacity = '.4'
      } else {
        this.departmentsAcademysub.push(id)
        const elem = document.getElementById(`department${id}`);
        elem.style.opacity = '1'
      }
    },
    departmentsIdsIncubatorSelected(id) {
      if (this.departmentsIncubatorSub.includes(id)) {
        let indexDepartment = this.departmentsIncubatorSub.indexOf(id)
        this.departmentsIncubatorSub.splice(indexDepartment, 1)
        const elem = document.getElementById(`department${id}`);
        elem.style.opacity = '.4'
      } else {
        this.departmentsIncubatorSub.push(id)
        const elem = document.getElementById(`department${id}`);
        elem.style.opacity = '1'
      }
    },
    confirmPaymentUrl() {
      let dataEvt = {
        title: 'استكمال الدفع',
        btns: [
          { title: 'استكمال الدفع', action: this.paymentUrl, class: 'btn btn-main' }
        ],
      };
      this.showSuccessMsg(dataEvt)
    },
    paymentUrl() {
      window.open(this.paymentUrlPth, '_blank')
    },
    async handlePayment(data) {
      // if (this.packageType == 'academy' || this.packageType == 'incubator') {
      //   if ( this.departmentsIds.length==0) {
      //   this.openDepartmentsDialog = true
      //   }
      // }
      let formData = new FormData();

      formData.append('package_id', this.otherData.id)
      formData.append('package_type', this.packageType)
      formData.append('user_id', this.user.id)
      if (data.coupon) {
        formData.append('coupon', data.coupon)
      }
      if (this.packageType == 'academy' && this.departmentsAcademysub) {
        for (var i = 0; i < this.departmentsAcademysub.length; i++) {
          formData.append("department_ids[]", this.departmentsAcademysub[i]);
        }

        // formData.append('department_ids',`[${this.departmentsIds}]`)
      }
      if (this.packageType == 'incubator' && this.departmentsIncubatorSub) {
        for (var k = 0; k < this.departmentsIncubatorSub.length; k++) {
          formData.append("department_ids[]", this.departmentsIncubatorSub[k]);
        }

        // formData.append('department_ids',`[${this.departmentsIds}]`)
      }




      if (data.coupon) {
        try {
          let { data } = await networkAPI.checkoutPackageSelect(formData);
          if (data.status) {
            window.SwalSuccess(data.data)

          }
        } catch (error) {
          window.SwalError("The given data was invalid")
        }
      }
      else if (this.otherData.name == 'مجانا') {
        try {
          let { data } = await networkAPI.PayPackageFreeSelect(formData);
          if (data.success) {
            window.SwalSuccess(data.data)
          }
        } catch (error) {
          window.SwalError("The given data was invalid")
        }
      }
      else {
        if (this.packageType == 'academy' || this.packageType == 'incubator') {
          if (this.departmentsIds.length == 0) {
            try {
              let { data } = await networkAPI.PayPackageSelect(formData);

              if (data.success) {
                this.paymentUrlPth = data.data.payment_url
                // this.confirmPaymentUrl()
                // window.SwalSuccess(data.data)
                // this.router_push('index')

                this.paymentUrl()
              }
            } catch (error) {
              window.SwalError("The given data was invalid")
            }
          }
        } else {
          try {
            let { data } = await networkAPI.PayPackageSelect(formData);

            if (data.success) {
              this.paymentUrlPth = data.data.payment_url
              // this.confirmPaymentUrl()
              // window.SwalSuccess(data.data)
              // this.router_push('index')
              this.paymentUrl()

            }
          } catch (error) {
            window.SwalError("The given data was invalid")
          }
        }

      }

      // handle payment data
    },
    async getCourseDetails() {
      if (this.idCourse) {

        try {
          let { data } = await coursesAPI.getItem(this.idCourse)
          if (data.success) {
            this.detailsCourse = data.data
            console.log(data.data);
            console.log(data.data.title);

          } else {
            console.log('error');
          }
        } catch (error) {
          console.log('error', error)
          console.log('error response', error.response)
        }
      }

    },

    async getDepartmentsAcademy() {
      try {
        let { data } = await academyAPI.getDepartments();
        if (data.success) {
          this.itemsAcademy = data.data
        }
      } catch (error) {
        console.mylog('error', error)
        //
      }
    },
    async getDepartmentsIncubator() {
      try {
        let { data } = await incubatorAPI.getDepartments();
        if (data.success) {
          this.itemsIncubator = data.data
        }
      } catch (error) {
        console.mylog('error', error)
        //
      }
    },

    closeDepartmentsDialog() {
      this.openDepartmentsDialog = false;
      this.openDepartmentsDialogAcademy = false;

    },
    departmentsIdsSubscriptions() {
      for (let index = 0; index < this.user.system_subscriptions.length; index++) {
        const element = this.user.system_subscriptions[index];
        if (element.system_package.related_to.key == 'academy') {
          for (let index2 = 0; index2 < element.departments.length; index2++) {
            this.departmentsAcademysub = []

            // const element2 = element.departments[index2];
            // this.departmentsAcademysub.push(element2)
          }
        } else if (element.system_package.related_to.key == 'incubator') {
          for (let index3 = 0; index3 < element.departments.length; index3++) {
            this.departmentsIncubatorSub = []

            // const element3 = Number(element.departments[index3]);
            // this.departmentsIncubatorSub.push(element3)
          }
        }
      }
    },
    openDepartmentsAcademyDialog() {
      this.openDepartmentsDialogAcademy = true;
      this.getDepartmentsAcademy();

    },
    openDepartmentsDialogIncup() {
      this.getDepartmentsIncubator();
      this.openDepartmentsDialog = true;
    }
  },
  mounted() {
    this.getDepartmentsAcademy();
    this.getDepartmentsIncubator();
    this.departmentsIdsSubscriptions()
    this.idCourse = this.$route.params.query

    this.getCourseDetails()

    this.packageType = this.$route.meta.type
    console.log('this.$route.meta.type', this.$route.meta.type);
    console.log('this.packageType', this.packageType);
    console.log(this.$route.params.query);
    // console.log(this.$route.meta.id);
  }
};
</script>

<style>
.chekout {
  margin: 0;
}

.departmentsDialog-departments {
  position: absolute;
  top: 15%;
  left: 30%;
  width: 430px;
  height: 75%;
  background: white;
  overflow-y: scroll;
}

.departmentsDialog {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, .4)
    /* overflow-y: scroll; */

}

.custom-opacity {
  opacity: 1 !important;

}
</style>
