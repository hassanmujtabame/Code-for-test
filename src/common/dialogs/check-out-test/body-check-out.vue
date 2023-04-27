<template>
    <div class="container">
        <div class="box p-4 shadow m-4 chekout">
            <div class="mb-3">
                <h5>
                    أستكملي عملية الدفع
                </h5>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-5 justify-content-end tex-end ">
                    <div class="border mt-2 payment-card-detail">
                        <div class="box ">
                            <h6 class="checkout-title">
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
                                <button :disabled="loading"  @click="payment" class="btn btn-custmer p-2 text-white ">
                                    <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                                    تاكيد الدفع

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">

                    <div class="row justify-content-center">
                        <div class="col-12 mt-5 row">
                            
                            <div class="col-12" style="box-shadow: 0px 1px 4px 0px;padding: 29px;">
                                <div class="mt-3">
                                    <form action="https://test1.riadiat.sa/api/v1/user/checkout-payment" class="paymentWidgets" data-brands="VISA MASTER AMEX">
                                        
                                    </form>
                                    

                                </div>
                                
                            </div>
                            <div class="col-12">
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    </div>
</template>

<script>
//import btnTypePay from './btn-type-pay.vue'
//im/port CreditCardImage from '@/components/credit-card/credit-card-img.vue'
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
        },
        doPayment:{}
    },
    components: {
        //btnTypePay,
        //CreditCardImage
    },
    data: (vm) => {
        let def_form = { ...vm.defaultForm }
        return {
            loading:false,
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
          /*  if (!this.itemForm.payment_type) {
                window.SwalError('من فضل إختر بطافة للدفع')
                return;
            }
           if (this.itemForm.payment_type == 'new') {
                let valid = await this.$refs.form.validate()
                if (!valid) {
                    window.SwalError('من فضل إملئ معلومات بطافة للدفع')
                    return;
                }
            }*/
            if (this.changeable_){
                let v_amount= await this.$refs.amount.validate()
                if(!v_amount) return;
            }
        //    let  expiryMonth=this.expiry_date.split('/')[0];
     // let  expiryYear=`20${this.expiry_date.split('/')[1]}`;
                let data = {
                    cardInfo: {
                        card_number: this.card_number,
                        card_holder: this.card_holder,
                        card_cvv: this.card_cvv,
                        expiry_date: this.expiry_date,
                     //   expiryMonth,
                       // expiryYear,
                        paymentBrand: this.stateNumber.cardtype,
                        saveCard: this.saveCard
                    },
                    item: {
                        payment_type: this.itemForm.payment_type,
                        amount: this.itemForm.amount,

                    },
                    otherData: this.otherData
                }
                if(this.doPayment){
                    this.loading = true;
                    await this.doPayment(data)
                    this.loading = false;
                }
            this.$emit('payment', data)
        },
    },
    mounted() {
        if(process.env.NODE_ENV=='development'){
            this.card_number ='4242424242424242'
            this.card_cvv ='123'
            this.expiry_date = '09/23'
            this.card_holder = 'full name'
        }
        this.loadCards()
    }
}

</script>

<style scoped>
.checkout-title{
    word-break: break-all;
}
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

