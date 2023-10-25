<template>
    <div>
        <!--start wizard  -->

        <div class="container p-5 mt-5">
            <form-wizard @step-changed="scrollToTop" step-size="xl" @on-complete="onComplete" ref="normalSteps" nextButtonText="التالى"
                backButtonText="السابق" finishButtonText="الانتهاء">
                <tab-content title=" الباقه ">

                    <div v-for="(pack, p) in packages" :key="p" class="mt-2">
                        <div class="row p-3">
                            <SubscribeCard :itemId="pack.name" :packId="pack" :title="pack.name" :price="pack.price"
                                :features="pack.options.map(c => c.name_ar)" :type-subscribe="pack.name"
                                @selected="choose(pack)" :subscribed="subscribedType" :typeSectionSub='"network"'>
                            </SubscribeCard>
                            <!-- :title="getTitleSubscribe(pack.name)" -->

                        </div>

                    </div>


                </tab-content>
                <tab-content title="  اختيار مجال الاشتراك ">
                    <h1>test1</h1>
                    src/views/incubator/program-incubator/parts/section-read-dept/index.vue
                    src/views/network/subscribe/index.vue
                </tab-content>
                <tab-content title=" الدراسة المالية ">
                    test3
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
import networkAPI from '@/services/api/network.js'
import successSubscribeDialog from './success-subscribe-dialog.vue';
import checkoutPackageDiag from './check-out/index.vue';
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


export default {
    name: 'network-subscribe',
    components: {
        SubscribeCard,
        checkoutPackageDiag,
        successSubscribeDialog,
        FormWizard,
        TabContent,
    },
    data: () => ({
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
            this.fireOpenDialog('checkout-subscribe-network', { item: { amount: data.price, title: this.$t('Riadiat-network'), type: this.getTypePackage(data) }, data: data })
        },
        openSuccessSubscribed(data) {
            this.fireOpenDialog('success-network-subscribed', data)
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
        onComplete: function () {
            // this.$router.push("/ar/incubator/home")
            alert('yay end')
        },

    scrollToTop: function () {
        alert('f')
      window.scrollTo(0, 0); // Scroll to the top of the page
    },
    },
    mounted() {
        this.checkTypePackage()
        this.loadPackages()
        this.test()

    }
}
</script>


<style>
.vue-form-wizard .wizard-progress-bar {
    float: right !important;
    transform: translateX(-15px) !important;
}
</style>