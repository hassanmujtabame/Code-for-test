<template>
    <div class="row ">
        <div class="col-md-6 mt-4">
            <div class="box one dashboard  p-3">
                <h3 class="m-c title-card fw-bolder text-end">
                    تهانينا
                </h3>
                <p class="congrats">
                    <!-- أنت الان عضو في اكاديمية  رياديات (اشتراك شهري) -->
                    <!-- يمكنك الاستفادة من خدماتنا الفريدة و المتنوعة -->
                    أنت الان عضو في أكاديمية رياديات ( اشتراك شهري ) يمكنك الاستفادة من خدماتنا الفريدة والمتنوعة
                    <!-- انت الان  مدرب من  ضمن  افضل المدربين الخاصين بأكاديمية رياديات  , شويه مميزات و تحميس  انت الان  مدرب من  ضمن  افضل المدربين الخاصين  بأكاديمية رياديات  , شويه مميزات و تحميس انت الان  مدرب من  ضمن  افضل المدربين الخاصين  بأكاديمية رياديات  , شويه مميزات و تحميس  -->
                </p>
                <p class="text2 t-c">
                    يمكنك دائماً تبديل بين خدمات رياديات المختلفة
                </p>
                <ul class="nav nav-pills mb-3 d-flex gap-2 flex-wrap " role="tablist">
                    <button v-for="(btn, i) in btns" :key="i" @click="openConfirmDialog(btn, $event)"
                        class="nav-link p-2 text-dark" :class="{ active: btn.active }">{{ btn.title }} </button>

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
                { id: 'incubator', title: 'حاضنة رياديات', route: vm.getRouteLocale('incubator-home'), active: false },
                { id: 'academy', title: 'اكاديمية رياديات', route: vm.getRouteLocale('academy-home'), active: true },
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

<style scoped>
.dashboard-service .title-card {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    /* identical to box height, or 125% */

    text-transform: capitalize;
}

.dashboard-service .congrats {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */

    text-transform: capitalize;

    color: #414042;
}

.dashboard-service .text2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;

    color: #737373;
}</style>