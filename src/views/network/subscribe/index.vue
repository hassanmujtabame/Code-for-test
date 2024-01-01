<template>
    <div>

        <SectionHeader style="margin-top: 85px" />

        <div class="row mt-4">
            <ul class="nav nav-pills mb-3 justify-content-center text-center">
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'network-subscribe' }" class="nav-link active border t-c ">
                        الشبكه
                    </router-link>
                </li>
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'academy-subscribe' }" class="nav-link  border t-c ">
                        الاكاديميه
                    </router-link>
                </li>
                <!-- uncomment after edition in incubator  -->

                <!-- <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'incubator-subscribe' }" class="nav-link  border t-c ">
                        الحاضنه
                    </router-link>
                </li> -->
            </ul>
        </div>


        <div class="container p-5 mt-3">
            <div class="row mb-3 mt-2">
                <h1> الشبكه</h1>
                <h5>
                    شبكه رياديات بتساعدك فى مشروعك من الاف الى الياء و يمكن من خلالها الحصول على المساعدة و الشجيع للدخول فى
                    مجال ريادة اﻷعمال من خلال مجموعه من الخدمات و المزايا
                </h5>
            </div>
        </div>
        
        
        <div v-for="(pack, p) in packages" :key="p" class="mt-2">
            <SectionCompany  class="mb-4" v-if="pack && pack.name == 'الشركات'" />
            <div class="container">
                <div class="row mb-4">
                    <SubscribeCard :itemId="pack.name" :pack="pack" :title="pack.name" :price="pack.price"
                        :features="pack.options.map(c => c.name_ar)" :type-subscribe="pack.name" @chosed="choose"
                        :subscribed="subscribedType" :typeSectionSub='"network"'>
                    </SubscribeCard>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
ul li {
    background-color: #eee;
}

ul li.active {
    background: var(--pc);
    color: white;
}
</style>
<script>
import SubscribeCard from '@/components/cards/subscribe-card.vue';
import CardVue from '@/components/cards/incubator-dept-circle.vue'
import networkAPI from '@/services/api/network.js';
import SectionHeader from "./parts/section-header/index.vue"
import SectionCompany from "./parts/section-company/index.vue"



export default {
    name: 'network-subscribe',
    components: {
        SubscribeCard,
        CardVue,
        SectionHeader,
        SectionCompany,

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

