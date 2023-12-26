<template>
    <div>
        <SectionHeader style="margin-top: 85px" />
        <div class="row mt-4 custom-ul">
            <ul class="nav nav-pills mb-3 justify-content-center text-center">
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'network-subscribe' }" class="nav-link  border t-c ">
                        الشبكه
                    </router-link>
                </li>
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'academy-subscribe' }" class="nav-link  border t-c ">
                        الاكاديميه
                    </router-link>
                </li>

                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'incubator-subscribe' }" class="nav-link active border t-c ">
                        الحاضنه
                    </router-link>
                </li>
            </ul>
        </div>

        <!--start wizard  -->

        <div class="container p-5 mt-5">

            <div class="row">
                <h1> الحاضنه</h1>
                <h5>
                    هي خدمة تهدف إلى استقطاب أصحاب المشاريع والعملاء الذين يرغبون في توظيف محترفين مستقلين لتنفيذ مهام عمل
                    معينـة وعن  طريق هذه المنصة، يمكن للمحترفين المستقلين تسويــــــق خدمـــــاتهم والتــــــــواصل مع
                    العملاء لعرض خدماتهم الخاصة بهم.
                </h5>
            </div>

            <form-wizard color="#49b483ff" step-size="xs" @on-complete="onComplete" ref="normalSteps"
                nextButtonText="التالى" backButtonText="السابق" finishButtonText="الدفع و التأكيد ">


                <tab-content :before-change="beforeChange_1" title=" الباقه ">
                    <div v-for="(pack, p) in packages" :key="p" class="mt-2">
                        <div class="row p-3">
                            <SubscribeCard :itemId="pack.name" :pack="pack" :title="pack.name" :price="pack.price"
                                :features="pack.options.map(c => c.name_ar)" :type-subscribe="pack.name" @chosed="choose"
                                :subscribed="subscribedType" :typeSectionSub='"incubator"'>
                            </SubscribeCard>
                        </div>
                    </div>
                </tab-content>
                <tab-content :before-change="beforeChange" title="  اختيار مجال الاشتراك ">
                    <div class="d-flex flex-row flex-wrap justify-content-center">
                        <div :id="`department${item.id}`" @click="addFieldId(item.id)" v-for="(item, i) in items" :key="i">
                            <CardVue :title="item.name" :img="`${item.image_path}`" :id="item.id" />
                        </div>
                    </div>
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
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import CardVue from '@/components/cards/incubator-dept-circle.vue'
import incubatorAPI from '@/services/api/incubator';
import SectionHeader from './parts/section-header/index.vue'



export default {
    name: 'incubator-subscribe',
    components: {
        SubscribeCard,
        FormWizard,
        TabContent,
        CardVue,
        SectionHeader


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
        subscribedType: ''
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
        choose(pack) {
            this.selectedPackage = pack
        },

        async loadPackages() {
            try {
                let { data } = await incubatorAPI.getPackages();
                if (data.success) {
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
                    if (element.system_package.related_to.key == 'incubator' && element.end_at > date) {
                        this.subscribedType = element.system_package.id
                    }
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

        beforeChange() {
            if (this.fieldIds.length == 0) {
                window.errorMsg('اختار المجال');
                return false;
            } else {
                return true
            }
        },
        beforeChange_1() {
            if (!this.selectedPackage || this.selectedPackage == '') {
                window.errorMsg('اختار الباقه');
                return false;
            } else {
                return true
            }
        },
        async getDepartments() {
            this.loading = true;
            try {
                let { data } = await incubatorAPI.getDepartments();
                if (data.success) {
                    this.items = data.data
                }
            } catch (error) {
                console.mylog('error', error);
            }
            this.loading = false;
        },
        async pay() {
            if (this.selectedPackage.type == 'free') {
                try {
                    let { data } = await incubatorAPI.checkoutPackageFree({ package_id: selectedPackage.id });
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
                    let { data } = await incubatorAPI.PayPackageSelect({
                        package_id: this.selectedPackage.id,
                        user_id: this.user.id,
                        departments_ids: this.fieldIds

                    });
                    if (data.success) {
                        window.location.href = data.data.payment_url;
                    } else {
                        console.log(data.response)
                    }
                } catch (error) {
                    console.log('error', error)
                }
            }
        },
        onComplete() {
            this.pay()
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

.custom-ul ul li {
    background-color: #eee;
}

.custom-ul ul li.active {
    background: var(--pc);
    color: white;
}</style>