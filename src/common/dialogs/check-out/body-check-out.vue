<template>
  <div class="checkout">
    <div class="box p-4 shadow m-4">

      <div class="row justify-content-between">
        <div class="col-7">
          <div class="row justify-content-center">
            <p class="fw-bold">معلومات الفاتورة</p>
            <div class="col-12 d-flex flex-wrap justify-content-between">
              <div class="mt-3 col-6">
                <p>الاسم الأول</p>
                <input class="form-control" type="text" />
              </div>

              <div class="mt-3 col-6">
                <p>الاسم الثاني</p>
                <input class="form-control" type="text" />
              </div>
              <div class="mt-3 col-6">
                <p>البريد الإلكتروني</p>
                <input class="form-control" type="email" />
              </div>
              <div class="mt-3 col-6">
                <p>الدولة</p>
                <select class="form-select">
                  <option value="1">السعودية</option>
                  <option value="2">مصر</option>
                  <option value="3">فلسطين</option>
                </select>
              </div>

              <div class="mt-3 col-12">
                <p>العنوان</p>
                <input class="form-control" type="text" />
              </div>

              <div class="mt-3 col-6">
                <p>رقم الهاتف</p>
                <input class="form-control" />
              </div>
              <div class="mt-3 col-6">
                <p>المنطقة</p>
                <select class="form-select">
                  <option value="1">المنطقة 1</option>
                  <option value="2">المنطقة 2</option>
                  <option value="3">المنطقة 3</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row justify-content-center">
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

        <div class="col-5 justify-content-end text-end">
          <div class="border mt-2 payment-card-detail">
            <div class="box">
              <h6 class="">
                خطة {{ title_ }}
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
                    <input type="text" :disabled="!changeable_" v-model="total_ammount" class="form-control"
                      placeholder="ادخل المبلغ">
                    <d-error-input :errors="errors" v-if="errors" />
                  </ValidationProvider>
                </ValidationObserver>
              </div>
              <input type="text" class="form-control mb-2 mt-2" placeholder="ادخل كود الخصم" />

              <div>
                <p class="small text-center">
                  بإتمامك لعملية الشراء أنت توافق على
                  <span>
                    <a href="" class="m-c">
                      شروط الاستخدام
                    </a>
                  </span>
                </p>
              </div>
              <div class="text-center">
                <button @click="payment" class="btn bg-main p-2 text-white">
                  تأكيد الدفع
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import btnTypePay from './btn-type-pay.vue'
import applePayIcon from '@/components/icon-svg/apple-pay.vue'
import stcPayIcon from '@/components/icon-svg/stc-pay.vue'
import visa2Icon from '@/components/icon-svg/visa.vue'
import noPathIcon from '@/components/icon-svg/no-path.vue'
import mastercardIcon from '@/components/icon-svg/master-card.vue'
import CreditCardImage from '@/components/credit-card/credit-card-img.vue'
import userAPI from '@/services/api/user.js'
import creditCardMixins from '@/common/mixins/credit-card.vue';
import incubatorAPI from '@/services/api/incubator';


export default {
    mixins: [creditCardMixins],

    props: {
        group: {
            type: String,
            default: 'check-out-dialog'
        },
        title: {
            type: String,
            default: 'تفاصيل الدفع'
        },
        changeable: {
            type: Boolean,
            default: false,
        },
        hideAmount: {
            type: Boolean,
            default: false,
        },
        otherData: {
            type: [Array, Object],
            default: () => { return {} }
        },
        defaultForm: {
            type: [Array, Object],
            default: () => {
                return {
                    payment_type: 'new',
                    amount: null,
                }
            }
        }
    },
    components: {
        btnTypePay,
        applePayIcon,
        stcPayIcon,
        visa2Icon,
        noPathIcon,
        mastercardIcon,
        CreditCardImage
    },
    data: (vm) => {
        let def_form = { ...vm.defaultForm }
        return {
            cards: [
                { id: 5, last4Digits: 2134, },
                { id: 6, last4Digits: 6433, },
                { id: 7, last4Digits: 1236, },
            ],
            saveCard: false,
            changeable_: vm.changeable,
            total_ammount: localStorage.getItem('packagePrice'),
            title_: localStorage.getItem('selectedPackage'),
            showDialog: false,
            payment_types: [
                { id: 1, name: 'بطاقة الائتمان', type: 'text' },
                { id: 3, name: 'applePayIcon', type: 'icon' },
                { id: 2, name: 'stcPayIcon', type: 'icon' },
            ],
            itemForm: def_form,
            itemsIncubator: [],
            departmentsIds: [],
            departmentsIncubatorSub: [],
            openDepartmentsDialog: false,

        }
    },
    watch: {
        card_number() {
            this.sendNumberCard()
        },
        card_holder() {
            this.sendHolderCard()
        },
        card_cvv() {
            this.sendCVVCard()
        },
        expiry_date() {
            this.sendExpiryCard()
        },
    },
    methods: {

        //
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
        openDepartmentsDialogIncup() {
            this.getDepartmentsIncubator();
            this.openDepartmentsDialog = true;
        },
        closeDepartmentsDialog() {
            this.openDepartmentsDialog = false;
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
        //
        async loadCards() {
            try {
                let { data } = await userAPI.getCreditCards()
                if (data.success) {
                    // uncomment this after dealing with api
                    // this.cards = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
        },
        sendChangeFaceCard(face) {
            this.fireEvent(`credit-card-image-show-face`, face)
        },
        sendEventCard(name, data) {
            this.fireEvent(`credit-card-image-${name}`, data)
        },
        sendNumberCard() {
            this.sendEventCard('card-number', this.card_number)
        },
        sendHolderCard() {
            this.sendEventCard('card-holder', this.card_holder)
        },
        sendCVVCard() {
            this.sendEventCard('cvv', this.card_cvv)
        },
        sendExpiryCard() {
            this.sendEventCard('expiry-date', this.expiry_date)
        },
        async payment() {
            if (!this.itemForm.payment_type) {
                window.SwalError('من فضلك إختر بطافة للدفع')
                return;
            }
            if (this.changeable_) {
                let v_amount = await this.$refs.amount.validate()
                if (!v_amount) return;
            }
            

            this.$emit('payment', localStorage.getItem('selectedPackage'))
        },
    },
    mounted() {
        if (process.env.NODE_ENV == 'development') {
            this.card_number = '4242424242424242'
            this.card_cvv = '123'
            this.expiry_date = '09/23'
            this.card_holder = 'full name'
        }
        this.loadCards()
    }
}

</script>


<style scoped>
.payment-card-detail {
    width: 360px;
    height: 352px;
    padding: 55px 12px
}

.payment-card-detail>.box {
    width: 335px;
    height: 242px;
}

.group-btn-type-pay {
    display: flex;
    justify-content: space-evenly;
}

.group-btn-type-pay>.btn-type-pay {

    flex: 1;
    margin-left: 3px;
}

@media (max-width:600px) {
    .chekout {
        margin: 0 !important;
    }

    .payment-card-detail {
        width: 100%;

    }

    .payment-card-detail>.box {
        width: 100%;
    }

    input,
    label {
        font-size: 0.65rem;
    }

    .form-text {
        font-size: 0.55rem;
    }

    .form-card {
        padding: 0;
    }

    .form-card .form-title {
        font-size: .75rem;
    }

    .form-check {
        display: flex;
        align-items: center;
    }

    .form-check-label {
        margin-left: 2px;
        margin-right: 2px;
    }
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
    z-index: 100;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 80%;
    background-color: rgb(0, 0, 0, .4)
        /* overflow-y: scroll; */

}

.custom-opacity {
    opacity: 1 !important;

}
</style>
