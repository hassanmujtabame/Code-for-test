<template>
    <div>


        <SectionHeader style="margin-top: 85px" />
        <div class="row mt-4 custom-ul">
            <ul class="nav nav-pills mb-3 justify-content-center text-center">
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'network-subscribe' }" class="nav-link border t-c m-auto ">
                        الشبكه
                    </router-link>
                </li>
                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'academy-subscribe' }" class="nav-link active border t-c ">
                        الاكاديميه
                    </router-link>
                </li>

                <li class="nav-item" style="width: 150px">
                    <router-link :to="{ name: 'incubator-subscribe' }" class="nav-link  border t-c ">
                        الحاضنه
                    </router-link>
                </li>
            </ul>
        </div>

        <!--start wizard  -->
        <div class="container p-5 mt-5">

            <div class="row mb-3 mt-2">
                <h1> الاكاديميه</h1>
                <h5>
                    اكاديمية رياديات نقدم منصة متطورة وسهلة الاستخدام تخدم الجميع حول العالم. من خلال قاعات تدريبية مجهزة
                    بأحدث التقنيات الحديثة، بالإضافة إلى قاعات افتراضية. وذلك عن طريق مجموعة من الخدمات التعليمية
                    والإرشادية في مجال ريادة الأعمال وريادة الأعمال المتخصصة تقدم من قبل فريق مؤهل مهنيًا
                </h5>
            </div>

            <form-wizard color="#49b483ff" step-size="xs" @on-complete="proceedToPayment" ref="normalSteps"
                nextButtonText="التالى" backButtonText="السابق" finishButtonText="الدفع و التأكيد ">

                <tab-content :before-change="beforeChange" title=" الباقه ">
                    <div v-for="(pack, p) in packages" :key="p" class="mt-2">
                        <div class="row p-3">
                            <SubscribeCard :itemId="pack.name" :pack="pack" :title="pack.name" :price="pack.price"
                                :features="pack.options.map(c => c.name_ar)" :type-subscribe="pack.name" @chosed="choose"
                                :subscribed="subscribedType" :typeSectionSub='"academy"'>
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
                <tab-content  title="  اختيار طريقة الدفع ">
                    <h3 class="my-4"> اختيار طريقة الدفع </h3>
                    <div class="mt-4 p-3 d-flex gap-4">
                        
                        <div class="card border-info mb-3" style="width: fit-content">
                            <div class="card-body">
                                <div class="form-check">
                                    <label class="form-check-label" for="tamara">Tamara
                                        <input type="radio" class="form-check-input" id="tamara" value="tamara" v-model="selectedProvider" />

                                    </label>
                                </div>
                            </div>
                        </div>
                    
                        <div class="card border-info mb-3" style="width: fit-content">
                            <div class="card-body">
                                <div class="form-check">
                                    <label class="form-check-label" for="hyperbill">HyperBill
                                        <input type="radio" class="form-check-input" id="hyperbill" value="hyperbill" v-model="selectedProvider" />

                                    </label>
                                </div>
                            </div>
                        </div>
                    
                        <div class="card border-info mb-3" style="width: fit-content">
                            <div class="card-body">
                                <div class="form-check">
                                    <label class="form-check-label" for="myfatoorah">MyFatoorah
                                        <input type="radio" class="form-check-input" id="myfatoorah" value="myfatoorah" v-model="selectedProvider" />

                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </tab-content>
            </form-wizard>
        </div>


        <!-- end wizard -->
    </div>
</template>

<script>
import SubscribeCard from '@/components/cards/subscribe-card.vue';
import SectionHeader from "./parts/section-header/index.vue"
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import CardVue from '@/components/cards/incubator-dept-circle.vue'
import academyAPI from '@/services/api/academy';
import PaymentApi from '@/services/api/payment'



export default {
    name: 'academy-subscribe',
    components: {
        SubscribeCard,
        FormWizard,
        TabContent,
        CardVue,
        SectionHeader,


    },
    data: () => ({
        items: [],
        fieldIds: [],
        show: false,
        packages: [],
        subscribedType: '',
        selectedPackage: '',
        selectedProvider: null,

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
                let { data } = await academyAPI.getPackages();
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
                    if (element.system_package.related_to.key == 'academy' && element.end_at > date) {
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

            if (this.$refs.normalSteps.activeTabIndex == 0 && (!this.selectedPackage || this.selectedPackage == '')) {
                window.errorMsg('اختار الباقه');
                return false;
            }
            else if (this.$refs.normalSteps.activeTabIndex == 1 && this.fieldIds.length == 0) {
                window.errorMsg('اختار المجال');
                return false;
            }
            else {
                return true
            }
        },
        // beforeChange_1() {
        //     if (!this.selectedPackage || this.selectedPackage == '') {
        //         window.errorMsg('اختار الباقه');
        //         return false;
        //     } else {
        //         return true
        //     }
        // },
        async getDepartments() {
            this.loading = true;
            try {
                let { data } = await academyAPI.getDepartments();
                if (data.success) {
                    this.items = data.data
                }
            } catch (error) {
                console.mylog('error', error);
            }
            this.loading = false;
        },
        async proceedToPayment() {
            if (this.selectedPackage.type == 'free') {
                try {
                    let { data } = await academyAPI.checkoutPackageFree({ package_id: selectedPackage.id });
                    if (data.success) {
                        console.log('itsfree', data.data)
                    } else {
                        window.SwalError(data.message)
                    }
                } catch (error) {
                    console.log('error', error)
                }
                return;
            }
            switch (this.selectedProvider) {
                case 'tamara':
                    try {
                        let { data } = await PaymentApi.PayPackageTammara({
                            package_id: this.selectedPackage.id,
                            departments_ids: this.fieldIds,
                            type: 'package'
                        });
                        if (data.success) {
                            window.location.href = data.data.payment_url;
                        } else {
                            console.log(data.response)
                        }
                    } catch (error) {
                        console.log('error', error)
                    } break;
                case 'hyperbill':
                    try {
                        let { data } = await PaymentApi.PayPackageHyperBill({
                            package_id: this.selectedPackage.id,
                            departments_ids: this.fieldIds,
                            type: 'package'
                        });
                        if (data.success) {
                            window.location.href = data.data.payment_url;
                        } else {
                            console.log(data.response)
                        }
                    } catch (error) {
                        console.log('error', error)
                    } break;
                case 'myfatoorah':
                    try {
                        let { data } = await PaymentApi.PayPackageMyFatoorah({
                            package_id: this.selectedPackage.id,
                            departments_ids: this.fieldIds,
                            type: 'package'
                        });
                        if (data.success) {
                            window.location.href = data.data.payment_url;
                        } else {
                            console.log(data.response)
                        }
                    } catch (error) {
                        console.log('error', error)
                    } break;
                default:
                    // Handle case where no provider is selected
                    window.errorMsg('اختار بوابة الدفع');
                    return false;
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
}
</style>

