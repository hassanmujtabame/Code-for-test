<template>
    <div class="container">
        <div class="box p-4 shadow m-4 chekout">
            <div class="mb-3">
                <h5>
                    أستكملي عملية الدفع
                </h5>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-5">

                    <div class="row justify-content-center">
                        <!-- btn pyment type-->
                        <div v-if="false" class="col-12">
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
                                    <visa2Icon />
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
                                                    vid="card_cvv" rules="required|numeric|min:3|max:4"
                                                    v-slot="{ errors }">
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
                            <div class="col-12">
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
                                <ValidationObserver ref="amount" >

                                    <ValidationProvider vid="price"
                                    :name="$t('amount')"
                                    :rules="changeable_ ? 'required|numeric' : ''" 
                                    v-slot="{ errors }"
                                    >
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
            cards: [],
            saveCard: false,
            changeable_: vm.changeable,
            title_: vm.title,
            showDialog: false,
            payment_types: [
                { id: 1, name: 'بطاقة الائتمان', type: 'text' },
                { id: 3, name: 'applePayIcon', type: 'icon' },
                { id: 2, name: 'stcPayIcon', type: 'icon' },
            ],
            itemForm: def_form
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
        async loadCards() {
            try {
                let { data } = await userAPI.getCreditCards()
                if (data.success) {
                    this.cards = data.data
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
                window.SwalError('من فضل إختر بطافة للدفع')
                return;
            }
            if (this.itemForm.payment_type == 'new') {
                let valid = await this.$refs.form.validate()
                if (!valid) {
                    window.SwalError('من فضل إملئ معلومات بطافة للدفع')
                    return;
                }
            }
            if (this.changeable_){
                let v_amount= await this.$refs.amount.validate()
                if(!v_amount) return;
            }
                let data = {
                    cardInfo: {
                        card_number: this.card_number,
                        card_holder: this.card_holder,
                        card_cvv: this.card_cvv,
                        expiry_date: this.expiry_date,
                        paymentBrand: this.stateNumber.cardtype,
                        saveCard: this.saveCard
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
</style>

