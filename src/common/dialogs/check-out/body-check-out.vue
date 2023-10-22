<template>
    <div class="">
        <div class="box p-4 shadow m-4 chekout">
            <div class="mb-3">
                <h5>
                    أستكملي عملية الدفع
                </h5>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-5">
                    <div class="row justify-content-center">

                        <!-- choose field -->
                        <div class="col-12 mb-2">
                            <div style="display: flex; align-items: center;">
                                <img style="width:260px; height:150px" class="img-fluid"
                                    :src="`${publicPath}assets/svg/frame-52-2.svg`" alt="service-provider-header" />
                                <div>
                                    <div class="mx-3" style="color: #FFBC00; display: flex;">
                                        <d-user-rect-icon :size="24" color="currentColor" />
                                        <h4 class="mx-2" style="color: #FFBC00"> انضم الي الحاضنة </h4>
                                    </div>

                                    <button class="btn btn-main mx-3 mt-3" style="width: auto; height: 35px;"
                                        @click="openDepartmentsDialogIncup()">حددي مجال الاشتراك</button>
                                </div>
                            </div>
                            <div v-if="openDepartmentsDialog == true" class="departmentsDialog ">
                                <div class="departmentsDialog-departments">
                                    <span class=" d-flex justify-content-end mt-3 mx-3"
                                        style="cursor: pointer; width: fit-content; margin-right: auto;"
                                        @click="closeDepartmentsDialog()">X</span>
                                    <h3 class="text-center my-2 pt-3">حددي مجال الاشتراك</h3>
                                    <div class="d-flex" style="flex-wrap: wrap;">
                                        <div v-for="item, i in itemsIncubator" :key="i">
                                            <div :class="[departmentsIncubatorSub.includes(item.id) ? 'custom-opacity' : '']"
                                                :id="`department${item.id}`" class="incubator-dept box  mx-3"
                                                style="opacity: 40% ;cursor: pointer; width: 108px; text-align: center;"
                                                @click="departmentsIdsIncubatorSelected(item.id)">
                                                <div class="">
                                                    <img :src="item.image_path" :alt="title"
                                                        style="width:70px; height: 70px; border-radius:100%">
                                                </div>
                                                <p class="incubator-dept__title">{{ item.name }}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <button @click="closeDepartmentsDialog()"
                                        class="btn btn-main d-flex mx-auto mb-3 justify-content-center text-center"
                                        style="height: 40px">
                                        {{ $t('continuity') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- end -->
                        <!-- btn pyment type-->
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
                        <div class="m-b  mt-3 mb-1" style="font-size:14px">
                            إعادة الدفع من خلال
                        </div>
                        <div v-for="(card, i) in cards" :key="i" class="col-12 d-flex align-items-center">
                            <div class="d-flex px-2 w-100">
                                <btnTypePay name="pay-type" justify="start" class="mt-1" :valueDefault="card.id"
                                    v-model="itemForm.payment_type">
                                    <visa-2-icon />
                                    <bdi> البطاقة المنتهية بـ</bdi> {{ card.last4Digits }}
                                </btnTypePay>
                                <span class="mx-2">
                                    <button class="btn-text m-c">{{ $t('change') }}</button>
                                </span>
                            </div>
                        </div>
                        <div class="col-12 mt-5 row">
                            <div class="col-12  d-flex justify-content-between form-card mb-2">
                                <div class="m-b form-title">
                                    <btnTypePay name="pay-type" justify="start" :valueDefault="'new'"
                                        v-model="itemForm.payment_type">
                                        <visa2Icon v-if="false" />
                                        أو أضف بطاقة جديدة
                                    </btnTypePay>
                                </div>
                                <div v-if="false" class="form-icons">
                                    <visa2Icon />
                                    <mastercardIcon />
                                    <noPathIcon />
                                </div>
                            </div>
                            <div class="col-12" style="box-shadow: 0px 1px 4px 0px;padding: 29px;">
                                <div class="mt-3">
                                    <ValidationObserver ref="form">
                                        <div class="row">
                                            <div class="col-12">
                                                <ValidationProvider :name="$t('card_holder')" vid="card_holder"
                                                    rules="required|alpha_spaces" v-slot="{ errors }">
                                                    <label class="form-label">{{ $t('card_holder') }}</label>
                                                    <input type="text" v-model="card_holder"
                                                        class="border rounded-2 w-100  p-2 " name=""
                                                        @focus="sendChangeFaceCard('front')"
                                                        :placeholder="$t('card_holder')">
                                                    <d-error-input :errors="errors" v-if="errors.length" />
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-12">
                                                <ValidationProvider tag="div" class="mt-3" :name="$t('card_number')"
                                                    vid="card_number" :rules="ruleCardNumber" v-slot="{ errors }">
                                                    <label class="form-label">{{ $t('card_number') }}</label>
                                                    <div class="position-relative">
                                                        <input
                                                            :maxlength="stateNumber.correct ? stateNumber.mask_length : null"
                                                            type="text" v-model="card_number"
                                                            class="border rounded-2 w-100  p-2"
                                                            @focus="sendChangeFaceCard('front')"
                                                            :placeholder="$t('card_number')">
                                                        <svg id="ccicon" class="ccicon" width="750" height="471"
                                                            viewBox="0 0 750 471" version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            v-if="stateNumber.ccicon" v-html="stateNumber.ccicon">

                                                        </svg>

                                                    </div>
                                                    <d-error-input :errors="errors" v-if="errors.length" />
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-6">
                                                <ValidationProvider tag="div" class="mt-3" :name="$t('expiry_date')"
                                                    vid="expiry_date" rules="required|length:5" v-slot="{ errors }">
                                                    <label class="form-label">{{ $t('expiry_date') }}</label>
                                                    <input maxlength="5" type="text" v-model="expiry_date"
                                                        @focus="sendChangeFaceCard('front')"
                                                        class="border rounded-2 w-100  p-2 " id=""
                                                        :placeholder="$t('expiry_date')">
                                                    <div id="date_endHelp" class="form-text">على نمط شهر/سنة</div>
                                                    <d-error-input :errors="errors" v-if="errors.length" />
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-6">
                                                <ValidationProvider tag="div" class="mt-3" :name="$t('security_code')"
                                                    vid="card_cvv" rules="required|numeric|min:3|max:4" v-slot="{ errors }">
                                                    <label class="form-label">{{ $t('security_code') }}</label>
                                                    <input maxlength="4" type="text" class="border rounded-2 w-100  p-2"
                                                        v-model="card_cvv" @focus="sendChangeFaceCard('back')"
                                                        placeholder="">
                                                    <div id="pinHelp" class="form-text"><bdi>3 أو 4 ارقام</bdi>
                                                    </div>
                                                    <d-error-input :errors="errors" v-if="errors.length" />
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-check mt-3">
                                                    <input v-model="saveCard" class="form-check-input" type="checkbox"
                                                        name="flexcheckDefault">
                                                    <label class="form-check-label m-c" for="flexcheckDefault">
                                                        {{ $t('save') }}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </ValidationObserver>


                                </div>
                                <CreditCardImage :group="groupCard" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 justify-content-end tex-end ">
                    <div class="border mt-2 payment-card-detail">
                        <div class="box ">
                            <h6 class="">
                                {{ title_ }}
                            </h6>
                            <slot :item="itemForm" :otherData="otherData"></slot>

                            <div v-if="!hideAmount" class="input-group mb-3 mt-2">
                                <ValidationObserver ref="amount">

                                    <ValidationProvider vid="price" :name="$t('amount')"
                                        :rules="changeable_ ? 'required|numeric' : ''" v-slot="{ errors }">
                                        <input type="text" :disabled="!changeable_" v-model="itemForm.amount"
                                            class="form-control" placeholder="ادخل المبلغ">
                                        <d-error-input :errors="errors" v-if="errors" />
                                    </ValidationProvider>
                                </ValidationObserver>
                            </div>
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
            title_: vm.title,
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
            if (this.departmentsIncubatorSub.length == 0) {
                window.SwalError('من فضلك إختر مجال')
                return;
            }
            if (this.itemForm.payment_type == 'new') {
                let valid = await this.$refs.form.validate()
                if (!valid) {
                    window.SwalError('من فضل إملئ معلومات بطافة للدفع')
                    return;
                }
            }
            if (this.changeable_) {
                let v_amount = await this.$refs.amount.validate()
                if (!v_amount) return;
            }
            let expiryMonth = this.expiry_date.split('/')[0];
            let expiryYear = `20${this.expiry_date.split('/')[1]}`;
            let data = {
                cardInfo: {
                    card_number: this.card_number,
                    card_holder: this.card_holder,
                    card_cvv: this.card_cvv,
                    expiry_date: this.expiry_date,
                    expiryMonth,
                    expiryYear,
                    paymentBrand: this.stateNumber.cardtype,
                    saveCard: this.saveCard,
                    departments: this.departmentsIncubatorSub
                },
                item: {
                    payment_type: this.itemForm.payment_type,
                    amount: this.itemForm.amount,

                },
                otherData: this.otherData
            }
            
            this.$emit('payment', data)
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
