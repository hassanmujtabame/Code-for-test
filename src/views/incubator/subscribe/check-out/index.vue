<template>
  <CheckOutDialog :group="group" title=" تفاصيل الدفع" hideAmount :do-payment="payment" @show="openDialog">
    <template v-slot:default="{ item, dialog }">
      <div v-if="dialog" class="d-flex flex-wrap gap-2">
        <div>
          <svg width="133" height="67" viewBox="0 0 133 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.1" width="133" height="67" rx="4" fill="#1FB9B3" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M85.4751 44.4576C85.9615 44.9467 86.642 45.2324 87.3332 45.2345C88.8009 45.2021 89.9764 44.0032 89.9999 42.4992V23.5376C90.0105 22.4383 89.3705 21.4645 88.37 21.0533L88.3636 21.0511C87.3545 20.6183 86.1876 20.8369 85.3961 21.6073L79.4783 27.6082V26.3033C79.4783 21.1269 75.4122 17 70.4117 17H51.0666C46.0683 17 42 21.1269 42 26.1973V39.8027C42 44.8753 46.0683 49 51.0666 49H70.4799C75.4783 49 79.5466 44.8753 79.5466 39.8027V38.487L80.4575 39.3137L85.4751 44.4576ZM76.7732 40.4304L76.7028 40.4196C76.3892 43.657 73.6884 46.1976 70.418 46.1998H51.0666C47.5872 46.1976 44.7562 43.3259 44.7541 39.7963V26.1973C44.7541 22.6656 47.585 19.7917 51.0666 19.7896H70.4799C73.953 19.8025 76.7754 22.6764 76.7732 26.1973L76.7732 40.4304ZM79.5338 34.3795V31.6008L87.2522 23.7085V42.274L79.5338 34.3795Z"
              fill="#1FB9B3" />
            <path
              d="M67.5157 31.8376C68.5696 32.3721 68.9963 33.6727 68.4693 34.7418C68.2645 35.1594 67.9296 35.4992 67.5157 35.7091L57.3526 40.8617C56.2987 41.3963 55.0166 40.9634 54.4896 39.8922C54.3424 39.5936 54.2656 39.2625 54.2656 38.9271V28.6175C54.2656 27.4229 55.2214 26.4534 56.4011 26.4556C56.7318 26.4556 57.056 26.5335 57.3526 26.6828L67.5157 31.8376Z"
              fill="#1FB9B3" />
          </svg>

        </div>
        <div>
          <p class="p-0 m-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.332 14.5H4.66536C1.72536 14.5 0.832031 13.6067 0.832031 10.6667V5.33333C0.832031 2.39333 1.72536 1.5 4.66536 1.5H11.332C14.272 1.5 15.1654 2.39333 15.1654 5.33333V10.6667C15.1654 13.6067 14.272 14.5 11.332 14.5ZM4.66536 2.5C2.2787 2.5 1.83203 2.95333 1.83203 5.33333V10.6667C1.83203 13.0467 2.2787 13.5 4.66536 13.5H11.332C13.7187 13.5 14.1654 13.0467 14.1654 10.6667V5.33333C14.1654 2.95333 13.7187 2.5 11.332 2.5H4.66536Z"
                fill="#414042" />
              <path
                d="M12.6654 5.83325H9.33203C9.0587 5.83325 8.83203 5.60659 8.83203 5.33325C8.83203 5.05992 9.0587 4.83325 9.33203 4.83325H12.6654C12.9387 4.83325 13.1654 5.05992 13.1654 5.33325C13.1654 5.60659 12.9387 5.83325 12.6654 5.83325Z"
                fill="#414042" />
              <path
                d="M12.6667 8.5H10C9.72667 8.5 9.5 8.27333 9.5 8C9.5 7.72667 9.72667 7.5 10 7.5H12.6667C12.94 7.5 13.1667 7.72667 13.1667 8C13.1667 8.27333 12.94 8.5 12.6667 8.5Z"
                fill="#414042" />
              <path
                d="M12.6654 11.1667H11.332C11.0587 11.1667 10.832 10.9401 10.832 10.6667C10.832 10.3934 11.0587 10.1667 11.332 10.1667H12.6654C12.9387 10.1667 13.1654 10.3934 13.1654 10.6667C13.1654 10.9401 12.9387 11.1667 12.6654 11.1667Z"
                fill="#414042" />
              <path
                d="M5.6676 8.02661C4.7276 8.02661 3.96094 7.25995 3.96094 6.31995C3.96094 5.37995 4.7276 4.61328 5.6676 4.61328C6.6076 4.61328 7.37427 5.37995 7.37427 6.31995C7.37427 7.25995 6.6076 8.02661 5.6676 8.02661ZM5.6676 5.61328C5.28094 5.61328 4.96094 5.93328 4.96094 6.31995C4.96094 6.70661 5.28094 7.02661 5.6676 7.02661C6.05427 7.02661 6.37427 6.70661 6.37427 6.31995C6.37427 5.93328 6.05427 5.61328 5.6676 5.61328Z"
                fill="#414042" />
              <path
                d="M7.99994 11.3867C7.7466 11.3867 7.5266 11.1933 7.49994 10.9333C7.4266 10.2133 6.8466 9.63334 6.11994 9.56667C5.81327 9.54001 5.5066 9.54001 5.19994 9.56667C4.47327 9.63334 3.89327 10.2067 3.81994 10.9333C3.79327 11.2067 3.5466 11.4133 3.27327 11.38C2.99994 11.3533 2.79994 11.1067 2.8266 10.8333C2.9466 9.63334 3.89994 8.68001 5.1066 8.57334C5.47327 8.54001 5.8466 8.54001 6.21327 8.57334C7.41327 8.68667 8.37327 9.64001 8.49327 10.8333C8.51994 11.1067 8.31994 11.3533 8.0466 11.38C8.03327 11.3867 8.01327 11.3867 7.99994 11.3867Z"
                fill="#414042" />
            </svg>
            {{ item.title }}
          </p>
          <p class="p-0 m-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.828 15.1667H4.17464C2.51464 15.1667 1.16797 13.8201 1.16797 12.1601V7.67342C1.16797 6.01342 2.51464 4.66675 4.17464 4.66675H11.828C13.488 4.66675 14.8346 6.01342 14.8346 7.67342V8.63342C14.8346 8.90676 14.608 9.13342 14.3346 9.13342H12.988C12.7546 9.13342 12.5413 9.22009 12.388 9.38009L12.3813 9.38676C12.1946 9.56676 12.108 9.8134 12.128 10.0667C12.168 10.5067 12.588 10.8601 13.068 10.8601H14.3346C14.608 10.8601 14.8346 11.0867 14.8346 11.3601V12.1534C14.8346 13.8201 13.488 15.1667 11.828 15.1667ZM4.17464 5.66675C3.06797 5.66675 2.16797 6.56675 2.16797 7.67342V12.1601C2.16797 13.2667 3.06797 14.1667 4.17464 14.1667H11.828C12.9346 14.1667 13.8346 13.2667 13.8346 12.1601V11.8667H13.068C12.0613 11.8667 11.208 11.1201 11.128 10.1601C11.0746 9.61341 11.2746 9.07343 11.6746 8.68009C12.0213 8.32676 12.488 8.13342 12.988 8.13342H13.8346V7.67342C13.8346 6.56675 12.9346 5.66675 11.828 5.66675H4.17464Z"
                fill="#414042" />
              <path
                d="M1.66797 8.77326C1.39464 8.77326 1.16797 8.54659 1.16797 8.27326V5.22663C1.16797 4.23329 1.79464 3.33326 2.7213 2.97992L8.01464 0.979922C8.5613 0.773255 9.16797 0.846621 9.6413 1.17995C10.1213 1.51329 10.4013 2.05328 10.4013 2.63328V5.16661C10.4013 5.43994 10.1746 5.66661 9.9013 5.66661C9.62797 5.66661 9.4013 5.43994 9.4013 5.16661V2.63328C9.4013 2.37995 9.2813 2.14661 9.06797 1.99994C8.85464 1.85327 8.6013 1.81994 8.3613 1.91327L3.06797 3.91327C2.52797 4.11994 2.1613 4.64663 2.1613 5.22663V8.27326C2.16797 8.55326 1.9413 8.77326 1.66797 8.77326Z"
                fill="#414042" />
              <path
                d="M13.0657 11.8666C12.059 11.8666 11.2057 11.12 11.1257 10.16C11.0723 9.60662 11.2723 9.06663 11.6723 8.6733C12.0123 8.32663 12.479 8.1333 12.979 8.1333H14.3657C15.0257 8.1533 15.5323 8.67327 15.5323 9.31327V10.6866C15.5323 11.3266 15.0257 11.8466 14.3857 11.8666H13.0657ZM14.3523 9.1333H12.9857C12.7523 9.1333 12.539 9.21996 12.3857 9.37996C12.1923 9.56663 12.099 9.81995 12.1257 10.0733C12.1657 10.5133 12.5857 10.8666 13.0657 10.8666H14.3723C14.459 10.8666 14.539 10.7866 14.539 10.6866V9.31327C14.539 9.21327 14.459 9.13997 14.3523 9.1333Z"
                fill="#414042" />
              <path
                d="M9.33464 8.5H4.66797C4.39464 8.5 4.16797 8.27333 4.16797 8C4.16797 7.72667 4.39464 7.5 4.66797 7.5H9.33464C9.60797 7.5 9.83464 7.72667 9.83464 8C9.83464 8.27333 9.60797 8.5 9.33464 8.5Z"
                fill="#414042" />
            </svg>

            <span>
              {{ item.amount }}
            </span>
            ريال
          </p>
          <p class="p-0 m-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.0013 15.1667C4.50797 15.1667 1.66797 12.3267 1.66797 8.83333C1.66797 5.34 4.50797 2.5 8.0013 2.5C11.4946 2.5 14.3346 5.34 14.3346 8.83333C14.3346 12.3267 11.4946 15.1667 8.0013 15.1667ZM8.0013 3.5C5.0613 3.5 2.66797 5.89333 2.66797 8.83333C2.66797 11.7733 5.0613 14.1667 8.0013 14.1667C10.9413 14.1667 13.3346 11.7733 13.3346 8.83333C13.3346 5.89333 10.9413 3.5 8.0013 3.5Z"
                fill="#414042" />
              <path
                d="M8 9.16659C7.72667 9.16659 7.5 8.93992 7.5 8.66659V5.33325C7.5 5.05992 7.72667 4.83325 8 4.83325C8.27333 4.83325 8.5 5.05992 8.5 5.33325V8.66659C8.5 8.93992 8.27333 9.16659 8 9.16659Z"
                fill="#414042" />
              <path
                d="M10 1.83325H6C5.72667 1.83325 5.5 1.60659 5.5 1.33325C5.5 1.05992 5.72667 0.833252 6 0.833252H10C10.2733 0.833252 10.5 1.05992 10.5 1.33325C10.5 1.60659 10.2733 1.83325 10 1.83325Z"
                fill="#414042" />
            </svg>
            {{ item.type }}
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
import CheckOutDialog from '@/common/dialogs/check-out-test/index'
import incubatorAPI from '@/services/api/incubator'
export default {
  name: "checkout-subscribe-incubator",
  props: {
    group: {
      type: String,
      default: 'checkout-subscribe-incubator'
    }
  },
  components: {
    CheckOutDialog
  },
  data: () => ({
    showDialog: false,
    checkoutInfo: {},
    payInfo: {},
    department: null,
  }),
  methods: {
    async payment(evt) {
      console.log('payment', evt)
      let { item, cardInfo, otherData } = evt;
      let pay_info = {};
      if (item.payment_type == 'new') {
        //let  expiryMonth=cardInfo.expiry_date.split('/')[0];
        //let  expiryYear=cardInfo.expiry_date.split('/')[1];
        pay_info = {
          type: 0,
          paymentBrand: cardInfo.paymentBrand.toUpperCase(),
          card_number: cardInfo.card_number,
          card_holder: cardInfo.card_holder,
          cvv: cardInfo.card_cvv,
          expiryMonth: cardInfo.expiryMonth,
          expiryYear: cardInfo.expiryYear,
          save: cardInfo.saveCard,
          package_id: otherData.id
        }
      } else {
        pay_info = {
          type: 1,
          payment_id: item.payment_type,
          package_id: otherData.id
        }
      }

      console.mylog('sending', pay_info)
      this.payInfo = pay_info;
      //open choose department
      this.fireOpenDialog('department-choose', {
        checkout_id: this.checkoutInfo.id,
        payInfo: pay_info,
        payment: this.checkOutRequest
      })

    },
    async checkOutRequest(pay_info, department) {
      this.department = department;

      try {
        let { data } = await incubatorAPI.checkoutPackage(pay_info)
        if (data.success) {
          this.checkoutInfo = data.data;
          this.loadJS(`https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutInfo.id}`, true, true);
          console.mylog('success', data)
          let element = document.getElementById('before-cardvirual');
          if (element) {
            element.innerHTML = `<h1>${this.$t('department')}:${department.name}</h1>`
          }
          return true;
        } else {
          window.SwalError(data.message)
          return false;
        }
      } catch (error) {
        console.log('error', error)
        window.SwalError('حدث خطأ غير معروف')
        return false;
      }
    },

    closeEvent() {
      this.fireCloseDialog(this.group)
    },
    openSuccessSubscribed(data) {
      this.fireOpenDialog('success-incubator-subscribed', data)
    },
    openDialog() {
      this.department = null;
      let element = document.getElementById('before-cardvirual');
      if (element) {
        element.innerHTML = ``
      }
    }
  },
  beforeDestroy() {
    if (this.checkoutInfo.id)
      window.$('script').each(function () {

        if (this.src === `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.checkoutInfo.id}`) {

          this.parentNode.removeChild(this);
        }
      });
  },
}

</script>

<style scoped></style>
