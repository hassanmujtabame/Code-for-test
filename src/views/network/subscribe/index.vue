<template>
    <div>
        <div class="container p-5 mt-5">
            <div v-for="(pack, p) in packages" :key="p" class="mt-2">
                <div class="row p-3">
                    <SubscribeCard :itemId="pack.name" :pack="pack" :title="pack.name" :price="pack.price"
                        :features="pack.options.map(c => c.name_ar)" :type-subscribe="pack.name" @chosed="choose"
                        :subscribed="subscribedType" :typeSectionSub='"network"'>
                    </SubscribeCard>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
import SubscribeCard from '@/components/cards/subscribe-card.vue';
import CardVue from '@/components/cards/incubator-dept-circle.vue'
import networkAPI from '@/services/api/network.js';



export default {
    name: 'network-subscribe',
    components: {
        SubscribeCard,
        CardVue,


    },
    data: () => ({
        fieldIds: [],
        packages: [],
        subscribedType: ''
    }),
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
        async choose(selectedPackage) {
            if (selectedPackage.type == 'free') {
                try {
                    let { data } = await networkAPI.checkoutPackageFree({ package_id: selectedPackage.id });
                    if (data.success) {
                        console.log('itsfree', data.data)
                    } else {
                        window.SwalError(data.message)
                    }
                } catch (error) {
                    console.log('error', error)
                }

            } else {
                try {
                    let { data } = await networkAPI.PayPackageSelect({
                        package_id: selectedPackage.id,
                        user_id: this.user.id
                    });
                    if (data.success) {
                        window.location.href = data.data.payment_url;
                    } else {
                        window.SwalError(data.message)
                    }
                } catch (error) {
                    console.log('error', error)
                }
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
            if (this.user.system_subscriptions) {
                for (let index = 0; index < this.user.system_subscriptions.length; index++) {
                    const element = this.user.system_subscriptions[index];
                    if (element.system_package.related_to.key == 'network' && element.end_at > date) {
                        this.subscribedType = element.system_package.id
                    }
                }
            }
        },
    },
    mounted() {
        this.loadPackages()
        this.checkTypePackage()
    }
}
</script>

