<template>
    <d-dialog-large fullscreen :group="group" :closeDialog="closeDialog" :openDialog="openDialog">
        <template v-slot:default>
            <div v-if="showDialog" class="container">
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
                                <div class="col-12 d-flex align-items-center">

                                    <btnTypePay name="pay-type" justify="start" :valueDefault="'back'"
                                        v-model="itemForm.payment_type">
                                        <visa2Icon />
                                        <bdi> البطاقة المنتهية بـ</bdi> 4152
                                    </btnTypePay>
                                    <span class="mx-2">
                                        <button class="btn-text m-c">{{ $t('change') }}</button>
                                    </span>
                                </div>
                                <div class="col-12 mt-5 row">
                                    <div class="col-12  d-flex justify-content-between form-card">
                                        <div class="m-b form-title">أو أضف بطاقة جديدة</div>
                                        <div class="form-icons">
                                            <visa2Icon />
                                            <mastercardIcon />
                                            <noPathIcon />
                                        </div>
                                    </div>
                                    <div class="col-12" style="box-shadow: 0px 1px 4px 0px;padding: 29px;">
                                        <div class="mt-3">
                                            <form action="">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <input type="text" v-model="card_holder" class="border rounded-2 w-100  p-2 " name=""
                                                            id="" placeholder=" اسم على البطاقة">
                                                    </div>
                                                    <div class="col-12">
                                                        <input type="text" v-model="card_number" class="border rounded-2 w-100  p-2 mt-3"
                                                            name="" id="" placeholder="رقم البطاقة">
                                                    </div>
                                                    <div class="col-6">
                                                        <input type="text" name="date_end"
                                                        v-model="expiry_date"
                                                            class="border rounded-2 w-100  p-2 mt-3" id=""
                                                            placeholder="  تاريخ الانتهاء">
                                                        <div id="date_endHelp" class="form-text">على نمط شهر/سنة</div>
                                                    </div>
                                                    <div class="col-6">
                                                        <input type="text" class="border rounded-2 w-100  p-2 mt-3"
                                                        v-model="card_cvv"
                                                        name="pin" id="" placeholder=" رمز الحماية">
                                                        <div id="pinHelp" class="form-text"><bdi>3 أو 4 ارقام</bdi>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-check mt-3">
                                                            <input class="form-check-input" type="checkbox"
                                                                name="flexcheckDefault">
                                                            <label class="form-check-label m-c" for="flexcheckDefault">
                                                                {{ $t('save') }}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                        <CreditCardImage />
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
                                    <slot :item="itemForm"></slot>

                                    <div class="input-group mb-3 mt-2">

                                        <input type="text" :disabled="!changeable_" v-model="itemForm.amount"
                                            class="form-control" placeholder="ادخل المبلغ">

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
    </d-dialog-large>
</template>
<script>

import btnTypePay from './btn-type-pay.vue'
import applePayIcon from '@/components/icon-svg/apple-pay.vue'
import stcPayIcon from '@/components/icon-svg/stc-pay.vue'
import visa2Icon from '@/components/icon-svg/visa.vue'
import noPathIcon from '@/components/icon-svg/no-path.vue'
import mastercardIcon from '@/components/icon-svg/master-card.vue'
import CreditCardImage from '@/components/credit-card/credit-card-img.vue'

export default {
    name: "check-out-dialog",
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
        return {
            changeable_: vm.changeable,
            title_: vm.title,
            showDialog: false,
            payment_types: [
                { id: 1, name: 'بطاقة الائتمان', type: 'text' },
                { id: 3, name: 'applePayIcon', type: 'icon' },
                { id: 2, name: 'stcPayIcon', type: 'icon' },
            ],
       
            card_number:'',
            card_holder:'',
            card_cvv:'',
            expiry_date:'',
        

            itemForm: {
                payment_type: 1,
                amount: null,
            }
        }
    },
    watch:{
        card_number(){
            this.sendNumberCard()
        },
        card_holder(){
            this.sendHolderCard()
        },
        card_cvv(){
            this.sendCVVCard()
        },
        expiry_date(){
            this.sendExpiryCard()
        },
    },
    methods: {
        sendEventCard(name,data){
            this.fireEvent(`credit-card-image-${name}`,data)
        },
        sendNumberCard(){
            this.sendEventCard('card-number',this.card_number)
        },
        sendHolderCard(){
            this.sendEventCard('card-holder',this.card_holder)
        },
        sendCVVCard(){
            this.sendEventCard('cvv',this.card_cvv)
        },
        sendExpiryCard(){
            this.sendEventCard('expiry-date',this.expiry_date)
        },
        payment() {
            this.$emit('payment', this.itemForm)
        },
        closeMe() {
            this.fireCloseDialog(this.group)
        },
        openSuccessDialog() {
            this.fireOpenDialog('success-make-offer')
        },

        openDialog(data) {
            this.itemForm = Object.assign({ payment_type: 1, amount: null }, data.item)
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false

            return true;
        },
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
