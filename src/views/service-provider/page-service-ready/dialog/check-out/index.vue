<template>
  <CheckOutDialog :group="group" title="تفاصيل الدفع" hideAmount :do-payment="payment">

    <template v-slot:default="{ item, dialog }">
      <div v-if="dialog" class="d-flex flex-wrap gap-2">

        <div>
          <p class="word-break-all p-0 m-0 t-c fs-r-24">
            {{ item.title }}
          </p>
          <p class="p-0 m-0 m-c" style="font-size:20px">
            {{ item.amount }} {{ $t('riyals') }}
          </p>

        </div>
      </div>
      <div class="input-group mb-3 mt-2">

        <input type="text" class="form-control" placeholder="كوبون خصم">
        <button style="background-color: #CDD7D8;" class="btn  disabled" type="button" id="button-addon1">تفعيل</button>
      </div>
    </template>
  </CheckOutDialog>
</template>
<script>
import CheckOutDialog from './payment/index.vue'
import readyserviceAPI from '@/services/api/service-provider/provider/ready-service.js'
export default {
  name: "checkout-ready-service-online",
  props: {
    group: {
      type: String,
      default: 'checkout-ready-service-online'
    }
  },
  components: {
    CheckOutDialog
  },
  data: () => ({
    showDialog: false,
    checkoutInfo: {},
    pay_info: {},
    user_info: {},
    itemDialog: {},
  }),
  methods: {
    redirecttoProvider() {
      this.closeEvent();
      this.router_push('service-provider-show-profile', { id: this.user_info.id })
    },
    async makePayment() {
      console.mylog('sending', this.pay_info)
      try {
        let { data } = await readyserviceAPI.checkoutService(this.pay_info)
        if (data.success) {
          this.checkoutInfo = data.data;
          this.loadJS(`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutInfo.id}`, true, true);

          console.mylog('success', data)
          /* if(this.itemDialog.status=='service'){
             this.showSuccessService()
           }else{
             this.showSuccessOnline()
           }
           this.closeEvent()
          */
        } else {
          window.SwalError(data.message)
        }
      } catch (error) {
        console.log('error', error)
      }
    },
    async payment(evt) {
      
      let { item, cardInfo, otherData } = evt;
      this.itemDialog = otherData;
      this.pay_info = {};
      if (item.payment_type == 'new') {
        // let  expiryMonth=cardInfo.expiry_date.split('/')[0];
        //let  expiryYear=cardInfo.expiry_date.split('/')[1];
        this.pay_info = {
          type: 0,
          paymentBrand: cardInfo.paymentBrand,
          card_number: cardInfo.card_number,
          card_holder: cardInfo.card_holder,
          cvv: cardInfo.card_cvv,
          expiryMonth: cardInfo.expiryMonth,
          expiryYear: cardInfo.expiryYear,
          save: cardInfo.saveCard,
          service_id: otherData.id
        }
      } else {
        this.pay_info = {
          type: 1,
          payment_id: item.payment_type,
          service_id: otherData.id
        }
      }
      this.user_info = otherData.user_info
      let dataEvent = {
        title: '',
        description: `أنت الان على وشك اتمام عملية الدفع
لشراء خدمة ${otherData.title}`,
        type: 'warning',
        btns: [
          { title: 'تأكيد العملية ', action: () => { this.makePayment() }, class: 'btn btn-custmer' },
        ]
      }
      this.showConfirmMsg(dataEvent)
    },
    showSuccessOnline() {
      let dataEvent = {
        title: 'تهانينا تم شراء الخدمة بنجاح',
        description: '',
        btns: [
          { title: 'تواصل مع مقدم الخدمة', action: () => { this.redirecttoProvider() }, class: 'btn btn-custmer' },
          { title: 'الرئيسية', action: () => { this.closeEvent() }, class: 'btn btn-custmer-w' },
        ]
      }
      this.showSuccessMsg(dataEvent)
    },
    showSuccessService() {
      let dataEvent = {
        title: 'تهانينا تم شراءالخدمة بنجاح',
        description: 'يمكنك الأن تحميل الخدمة بحد أقصى 3 مرات',
        btns: [
          //{title:'تواصل مع مقدم الخدمة',action:()=>{this.redirecttoProvider()},class:'btn btn-custmer'},
          { title: 'تحميل', action: () => { this.closeEvent() }, class: 'btn btn-custmer-w' },
        ]
      }
      this.showSuccessMsg(dataEvent)
    },
    beforeDestroy() {
      if (this.checkoutInfo.id)
        window.$('script').each(function () {

          if (this.src === `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutInfo.id}`) {

            this.parentNode.removeChild(this);
          }
        });
    },
    closeEvent() {
      this.fireCloseDialog(this.group)
    }
  },
  mounted() {
    // console.log('item_data=> ', this.group)
  }
}

</script>

<style scoped></style>
