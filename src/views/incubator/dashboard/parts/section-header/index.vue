<template>
    <div class="row ">
        <div class="col-md-6 mt-4">
            <div class="box one  p-3 h-100 d-flex flex-column">
                <h3 class="m-c fw-bolder text-start">
                    تنقل بين خدمات رياديات
                </h3>
                <p class="flex-grow-1 mt-3">
                    يمكنك التنقل بيين خدمات رياديات الاخرى بكل سهولة كل ماعليك فعله هو تحديد الخدمة من ثم الاشتراك في الباقة
                    المناسبة لك ..
                </p>


                <ul class="nav nav-pills d-flex gap-2 flex-wrap " role="tablist">
                    <button v-for="(btn, i) in btns" :key="i" @click="openConfirmDialog(btn, $event)" class="p-2 btn-dash"
                        :class="{ active: btn.active }">{{ btn.title }} </button>
                </ul>

            </div>
        </div>
        <div class="col-md-6 mt-4">
            <!-- first time logined-->
            <firstTimeView v-if="isFirst" />
            <!-- card info -->
            <cardInfo v-else :member="user" />
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
            isFirst: false,// will related to backend value
            btns: [
                { id: 'network', title: 'شبكة رياديات', route: vm.getRouteLocale('network-home'), active: false },
                { id: 'incubator', title: 'مقدمي الخدمة', route: vm.getRouteLocale('service-provider-home'), active: false },
                { id: 'incubator', title: 'حاضنة رياديات', route: vm.getRouteLocale('incubator-home'), active: true },
                { id: 'academy', title: 'اكاديمية رياديات', route: vm.getRouteLocale('academy-home'), active: false },
                //{id:'market',title:'سوق رياديات',route:vm.getRouteLocale('service-provider-home')},
            ]
        }
    },
    methods: {
        openConfirmDialog(dept, evt) {
            if (evt)
                evt.preventDefault();
            if (dept.active) return;
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
    }
}
</script>

<style></style>