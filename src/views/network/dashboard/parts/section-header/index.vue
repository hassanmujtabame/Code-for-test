<template>
    <div class="row ">
        <div class="col-md-6 mt-4">
            <div class="box one  p-3">
                <h3 class="m-c fw-bolder text-startl">
                    تهانينا
                </h3>
                <p>
                    أنت الان عضو في شبكة رياديات (اشتراك شهري)
                    يمكنك الاستفادة من خدماتنا الفريدة و المتنوعة
                </p>
                <p>
                    يمكنك دائماً تبديل بين خدمات رياديات المختلفة
                </p>
                <ul class="nav nav-pills mb-3 d-flex gap-2 flex-wrap " role="tablist">

                    <button class="nav-link p-2 text-dark active">شبكة رياديات</button>


                    <button v-for="(btn, i) in btns" :key="i" @click="openConfirmDialog(btn, $event)"
                        class="nav-link p-2 text-dark">{{ btn.title }} </button>

                </ul>
                <div class="nav nav-pills mb-3 d-flex gap-2 flex-wrap ">
                    <button @click="goToPartner()" class="btn border m-c">{{ userPartner ? 'لوحه تحكم شركتك' :
                        "انشاء حساب شركه" }}</button>
                </div>

            </div>
        </div>
        <div class="col-md-6 mt-4">
            <!-- first time logined-->
            <firstTimeView v-if="isFirst" />
            <!-- card info -->
            <cardInfo v-else />
        </div>
        <ConfirmChangeDeprtment />
    </div>
</template>

<script>
import firstTimeView from './first-time.vue';
import cardInfo from './card-info.vue';
import ConfirmChangeDeprtment from './go-other-section.vue'
export default {
    name: 'section-header',
    components: {
        firstTimeView,
        cardInfo,
        ConfirmChangeDeprtment
    },
    data: (vm) => {
        return {
            isSubscribedCompany: false,
            isFirst: true,// will related to backend value
            btns: [
                { id: 'service-provider', title: 'مقدمي الخدمة', route: vm.getRouteLocale('service-provider-home') },
                // { id: 'incubator', title: 'حاضنة رياديات', route: vm.getRouteLocale('incubator-home') },
                { id: 'academy', title: 'اكاديمية رياديات', route: vm.getRouteLocale('academy-home') },
                //{id:'market',title:'سوق رياديات',route:vm.getRouteLocale('service-provider-home')},
            ]
        }
    },
    methods: {
        checkSubscribedCompany() {
            for (let index = 0; index < this.user.system_subscriptions.length; index++) {
                const element = this.user.system_subscriptions[index];
                if (element.system_package.related_to.key == 'network' && element.system_package.name.includes('شرك')) {
                    // this.subscribedType = element.system_package.id
                    // console.log('yay you are company', true)
                    this.isSubscribedCompany = true
                } else {
                    this.isSubscribedCompany = false

                }
            }
            // console.log('user_system', this.user.system_subscriptions)
        },
        goToPartner() {
            if (!this.userPartner) {
                this.router_push('register-networking')
            } else if (!this.isSubscribedCompany) {
                let dataEvt = {
                    title: '',
                    description: `يجب عليك الاشتراك فى باقة الشركات`,
                    type: 'warning',
                    btns: [
                        { title: this.$t('subscribe'), action: () => this.$router.push({ name: 'network-subscribe' }) }
                    ]
                }
                this.showConfirmMsg(dataEvt)
                return;
            }else {
                this.$router.push({ name: 'network-control-member-partner' })
            }
        },
        openConfirmDialog(dept, evt) {
            if (evt)
                evt.preventDefault();
            let dataEvt = {
                title: '',
                description: `الأن انت على وشك الانتقال الى حسابك في <span class="m-c">
            ${dept.title}
            </span>`,
                type: 'warning',
                btns: [
                    { title: this.$t('confirm_redirect'), action: () => this.$router.push(dept.route) }
                ]
            }
            this.showConfirmMsg(dataEvt)
            //this.fireOpenDialog('go-to-pther-section',dept)
        }
    },
    mounted(){
        this.checkSubscribedCompany()
    }
}
</script>

<style></style>