<template>
    <div>
        <div class="d-flex justify-content-center" >
            <button @click="openAddWorkSpace" class="btn btn-customer bg border text-white px-4 py-2">
                <plusRectRoundIcon class="mx-1" />
                {{ $t("add_workspace") }}
            </button>
        </div>
        <FilterSection />
        <Create />
        <SuccessAddWorkspace />
    </div>
</template>

<script>
import Create from "./create/index.vue"
import SuccessAddWorkspace from "./create/SuccessAddWorkspace.vue"
import FilterSection from "./filter-list/index.vue"
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";

export default {
    components: {
        FilterSection,
        plusRectRoundIcon,
        Create,
        SuccessAddWorkspace,
    },
    methods: {
        openAddWorkSpace() {
            if (this.userPartner) {
                console.log('is-user-partner', this.userPartner)
                this.fireOpenDialog("add-dialog");
            } else {
                this.openConfirmDialog()
            }
        },
        openConfirmDialog() {
            let dataEvt = {
                title: 'للأسف لايمكنك  اضافة مكان عملك',
                description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - يجب تسجيل حسابك  كشركه و استفيد من إضافة معرضك و مكان عملك و المزيد من المميزات في الشبكة`,
                image: `${this.publicPath}assets/img/Group 1171275670.png`,
                btns: [
                    { title: 'سجل كشركه', action: () => this.router_push('register-networking') }
                ]
            }
            this.showConfirmMsg(dataEvt);
            return;
        },
    }
}
</script>