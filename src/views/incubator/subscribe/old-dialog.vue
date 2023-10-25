<template>
    <div class="incubator-subscribe">
      <!-- Start wizard -->
      <div class="container p-5 mt-5">
        <form-wizard color="#49b483ff" step-size="xs" @on-complete="onComplete" ref="normalSteps"
          nextButtonText="التالى" backButtonText="السابق" finishButtonText="الانتهاء">
          <tab-content title=" الباقه ">
            <div v-for="(pack, p) in packages" :key="p" class="mt-2">
              <div class="row p-3">
                <SubscribeCard
                  :itemId="pack.name"
                  :packId="pack"
                  :title="pack.name"
                  :price="pack.price"
                  :features="pack.options.map(c => c.name_ar)"
                  :type-subscribe="pack.name"
                  @selected="choose(pack)"
                  :subscribed="subscribedType"
                  :typeSectionSub='"network"'
                ></SubscribeCard>
              </div>
            </div>
          </tab-content>
          <tab-content :before-change="beforeChange" title="  اختيار مجال الاشتراك ">
            <div class="d-flex flex-row flex-wrap justify-content-center">
              <div :id="`department${item.id}`" @click="addFieldId(item.id)" v-for="(item, i) in items" :key="i">
                <CardVue :title="item.name" :img="`${publicPath + item.image_path}`" :id="item.id" />
              </div>
            </div>
          </tab-content>
          <tab-content title=" الدفع و التأكيد  ">
            <TheFinalStep />
          </tab-content>
        </form-wizard>
      </div>
      <!-- End wizard -->
      <successSubscribeDialog />
      <checkoutPackageDiag />
    </div>
  </template>
  
  <script>
  import SectionReadDept from "../program-incubator/parts/section-read-dept";
  import SubscribeCard from '@/components/cards/subscribe-card.vue';
  import networkAPI from '@/services/api/network.js';
  import successSubscribeDialog from './success-subscribe-dialog.vue';
  import checkoutPackageDiag from './check-out/index.vue';
  import TheFinalStep from '@/common/dialogs/check-out/body-check-out.vue';
  import { FormWizard, TabContent } from 'vue-form-wizard';
  import 'vue-form-wizard/dist/vue-form-wizard.min.css';
  import CardVue from '@/components/cards/incubator-dept-circle.vue';
  
  export default {
    name: 'incubator-subscribe',
    components: {
      SubscribeCard,
      checkoutPackageDiag,
      successSubscribeDialog,
      FormWizard,
      TabContent,
      SectionReadDept,
      CardVue,
      TheFinalStep
    },
    data: () => ({
      items: [
        { id: 1, name: 'المجوهرات', image_path: `assets/svg/jewelry.svg` },
        { id: 2, name: 'الازيــــــاء', image_path: `assets/svg/fashion.svg` },
        { id: 3, name: 'التقنية', image_path: `assets/svg/techinic.svg` },
        { id: 4, name: 'الزهــــور والهدايا', image_path: `assets/svg/flowers-gifts.svg` },
        { id: 5, name: 'ريــــــــادة الاعمال', image_path: `assets/svg/business.svg` },
        { id: 6, name: 'المحاسبة والمالية', image_path: `assets/svg/account.svg` },
        { id: 7, name: 'التسويق', image_path: `assets/svg/shopping.svg` },
        { id: 8, name: 'القانون', image_path: `assets/svg/law.svg` },
        { id: 9, name: 'الاستراتيجية والقيادة', image_path: `assets/svg/stratigy-leadership.svg` }
      ],
      fieldIds: [],
      show: false,
      packages: [],
      subscribedType: '1258888888888888'
    }),
    props: {
      packageData: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      getTypePackage(data) {
        switch (data.type) {
          case 'free': return this.$t('free');
          case 'month': return this.$t('monthly');
          case 'year': return this.$t('annually');
          default:
            return 'N/A';
        }
      },
      openCheckoutDialog(data) {
        console.log('data', data);
        this.fireOpenDialog('checkout-subscribe-network', { item: { amount: data.price, title: this.$t('Riadiat-network'), type: this.getTypePackage(data) }, data: data });
      },
      openSuccessSubscribed(data) {
        this.fireOpenDialog('success-network-subscribed', data);
      },
      async choose(pack) {
        console.log('pack', pack);
        if (pack.type == 'free') {
          try {
            let { data } = await networkAPI.checkoutPackageFree({ package_id: pack.id });
            if (data.success) {
              this.loadCurrentUser();
              // this.openSuccessSubscribed(pack);
              this.openCheckoutDialog(pack);
            } else {
              window.SwalError(data.message);
            }
          } catch (error) {
            console.log('error', error);
          }
        } else {
          this.openCheckoutDialog(pack);
        }
      },
      async loadPackages() {
        try {
          let { data } = await networkAPI.getPackages();
          if (data.success) {
            console.log('Packages', data);
            this.packages = data.data;
          }
        } catch (error) {
          console.log('error', error);
        }
      },
      checkSubscriptionOptions() {
        for (let index = 0; index < this.user.subscription_options.length; index++) {
          const element = this.user.subscription_options[index];
          if (element.key == 'show_exhibitions') {
            console.log('444', element);
          }
        }
      },
      checkTypePackage() {
        let date = this.dateToString(new Date());
        for (let index = 0; index < this.user.system_subscriptions.length; index++) {
          const element = this.user.system_subscriptions[index];
          if (element.system_package.related_to.key == 'network' && element.end_at > date) {
            console.log('444', element, 'true');
            this.subscribedType = element.system_package.id;
          }
        }
      },
      addFieldId(id) {
        if (this.fieldIds.includes(id)) {
          let indexDepartment = this.fieldIds.indexOf(id);
          this.fieldIds.splice(indexDepartment, 1);
          const elem = document.getElementById(`department${id}`);
          let children = elem.querySelectorAll('img');
          children[0].style.border = 'none';
          elem.style.opacity = '1';
          console.log(this.fieldIds.length);
        } else {
          this.fieldIds.push(id);
          const elem = document.getElementById(`department${id}`);
          let children = elem.querySelectorAll('img');
          elem.style.opacity = '0.4';
          children[0].style.border = '5px solid #2eb9b3';
          children[0].style.borderRadius = '50%';
          console.log(this.fieldIds.length);
        }
      },
      beforeChange() {
        console.log('--');
        console.log(localStorage.getItem('selectedPackage'));
        console.log('--');
        if (this.fieldIds.length == 0) {
          let dataEvt = {
            title: '  اختار المجال ',
            description: ' يجب اختيار مجال واحد على الاقل  ',
            type: 'warning',
            btns: null,
          };
          this.showConfirmMsg(dataEvt);
          return false;
        } else {
          localStorage.setItem('fieldsId', this.fieldIds);
          return true;
        }
      },
      onComplete: function () {
        // this.$router.push("/ar/incubator/home");
        alert('yay end');
      }
    },
    mounted() {
      this.checkTypePackage();
      this.loadPackages();
    }
  };
  </script>
  
  <style>
  .vue-form-wizard .wizard-progress-bar {
    float: right !important;
    transform: translateX(-15px) !important;
  }
  
  .wizard-header {
    display: none !important;
  }
  </style>
<style>
/* Style for the "التالى" and "السابق" buttons */
.form-wizard-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.form-wizard-button {
  background-color: #49b483ff; /* Change to your desired button background color */
  color: #fff; /* Change to your desired text color */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-wizard-button:hover {
  background-color: #357c66; /* Change to your desired hover color */
}

/* Style for the "التالى" button */
.form-wizard-button-next {
  margin-right: 10px;
}

/* Style for the "السابق" button */
.form-wizard-button-back {
  margin-left: 10px;
}

/* Style for the "الانتهاء" button (Finish button) */
.form-wizard-button-finish {
  background-color: #49b483ff; /* Change to your desired button background color */
  color: #fff; /* Change to your desired text color */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-wizard-button-finish:hover {
  background-color: #357c66; /* Change to your desired hover color */
}
</style>
  