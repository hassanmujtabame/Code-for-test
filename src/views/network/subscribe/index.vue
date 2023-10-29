<template>
    <div>
        <!--start wizard  -->

        <div class="container p-5 mt-5">
            <form-wizard color="#49b483ff" step-size="xs" @on-complete="onComplete" ref="normalSteps"
                nextButtonText="التالى" backButtonText="السابق" finishButtonText="الدفع و التأكيد ">
                <tab-content :before-change="beforeChange_1" title=" الباقه ">

                    <div v-for="(pack, p) in packages" :key="p" class="mt-2">
                        <div class="row p-3">
                            <SubscribeCard @next-step="moveNext" :itemId="pack.name" :packId="pack" :title="pack.name"
                                :price="pack.price" :features="pack.options.map(c => c.name_ar)" :type-subscribe="pack.name"
                                @selected="choose(pack)" :subscribed="subscribedType" :typeSectionSub='"network"'>
                            </SubscribeCard>
                            <!-- :title="getTitleSubscribe(pack.name)" -->

                        </div>

                    </div>


                </tab-content>
                <tab-content title=" الدفع و التأكيد  ">
                    <TheFinalStep ref="childComponentRef" />
                </tab-content>
            </form-wizard>
        </div>


        <!-- end wizard -->
        <successSubscribeDialog />
        <checkoutPackageDiag />
    </div>
</template>

<script>
import SubscribeCard from '@/components/cards/subscribe-card.vue';
import successSubscribeDialog from './success-subscribe-dialog.vue';
import checkoutPackageDiag from './check-out/index.vue';

import TheFinalStep from '@/common/dialogs/check-out/body-check-out.vue';

import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import CardVue from '@/components/cards/incubator-dept-circle.vue'
import networkAPI from '@/services/api/network.js';



export default {
    name: 'network-subscribe',
    components: {
        SubscribeCard,
        checkoutPackageDiag,
        successSubscribeDialog,
        FormWizard,
        TabContent,
        // SectionReadDept,
        CardVue,
        TheFinalStep


    },
    data: () => ({
        items: [
            // { id: 1, name: 'المجوهرات', image_path: `assets/svg/jewelry.svg` },
            // { id: 2, name: 'الازيــــــاء', image_path: `assets/svg/fashion.svg` },
            // { id: 3, name: 'التقنية', image_path: `assets/svg/techinic.svg` },
            // { id: 4, name: 'الزهــــور والهدايا', image_path: `assets/svg/flowers-gifts.svg` },
            // { id: 5, name: 'ريــــــــادة الاعمال', image_path: `assets/svg/business.svg` },
            // { id: 6, name: 'المحاسبة والمالية', image_path: `assets/svg/account.svg` },
            // { id: 7, name: 'التسويق', image_path: `assets/svg/shopping.svg` },
            // { id: 8, name: 'القانون', image_path: `assets/svg/law.svg` },
            // { id: 9, name: 'الاستراتيجية والقيادة', image_path: `assets/svg/stratigy-leadership.svg` },
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
        moveNext() {
            this.$refs.normalSteps.nextTab();
        },
        getTypePackage(data) {
            switch (data.type) {
                case 'free': return this.$t('free');
                case 'month': return this.$t('monthly');
                case 'year': return this.$t('annually');
                default:
                    return 'N/A';
            }
        },
        async choose(pack) {
            console.log('pack', pack);
            if (pack.type == 'free') {
                try {
                    let { data } = await networkAPI.checkoutPackageFree({ package_id: pack.id });
                    if (data.success) {
                        this.loadCurrentUser()
                        // this.openSuccessSubscribed(pack)
                        this.openCheckoutDialog(pack)

                    } else {
                        window.SwalError(data.message)
                    }
                } catch (error) {
                    console.log('error', error)
                }

            } else {
                this.openCheckoutDialog(pack)
            }
        },

        async loadPackages() {
            try {
                let { data } = await networkAPI.getPackages();
                if (data.success) {
                    console.log('Packages', data);
                    this.packages = data.data
                }
            } catch (error) {
                console.log('error', error)
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
                    this.subscribedType = element.system_package.id

                }
            }
        },
        addFieldId(id) {
            if (this.fieldIds.includes(id)) {
                let indexDepartment = this.fieldIds.indexOf(id)
                this.fieldIds.splice(indexDepartment, 1)
                const elem = document.getElementById(`department${id}`);
                let children = elem.querySelectorAll('img');
                children[0].style.border = 'none';
                elem.style.opacity = '1'
            } else {
                this.fieldIds.push(id)
                const elem = document.getElementById(`department${id}`);
                let children = elem.querySelectorAll('img');
                elem.style.opacity = '0.4'
                children[0].style.border = '5px solid #2eb9b3';
                children[0].style.borderRadius = "50%"
            }
        },

        beforeChange_1() {
            if (!localStorage.getItem("selectedPackage")) {
                let dataEvt = {
                    title: '  اختار الباقه ',
                    description:
                        ' يجب اختيار باقه من الاختيارات  ',
                    type: 'warning',
                    btns: null,
                };
                this.showConfirmMsg(dataEvt);
                return false;
            } else {
                return true
            }
        },
        onComplete: function () {
            this.$refs.childComponentRef.payment(); // Call the method in the child component
        }
    },
    mounted() {
        this.checkTypePackage()
        this.loadPackages()
        this.getDepartments()

    }
}
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