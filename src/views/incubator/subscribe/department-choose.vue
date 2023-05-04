<template>
    <d-dialog-large :open-dialog="openDialog" :close-dialog="closeDialog" :group="group" :xl="false">
        <template v-slot:header>
            الاشتراك في قسم:
        </template>
        <template v-slot:default>
            <div class="position-relative" style="min-height:150px">
                <d-overlays-simple v-if="loading" />
                <div v-else class="container">
                <d-overlays-simple v-if="paying" />
                    <div v-if="showDialog" class="row">
                        <div class="col-12">

                            <p>اختر القسم الذي تريد تتبع مراحله</p>
                        </div>
                        <div v-for="(item, i) in items" :key="i" class="col-3">
                            <CardVue :title="item.name" :img="item.image_path" @click-image="onChoose(item)" :size="90"
                                :class="{ 'selected': selected === item,'disabled':userSubIncubators.some(x=>x.subscribe && x.department_id==item.id) }" />
                        </div>
                        <div class="col-12 text-center">
                            <button :disabled="!selected || paying" @click="doPayment" class="btn btn-custmer mt-5">
                                <i class="fa fa-spinner fa-span" v-if="paying"></i>
                                إشترك</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </d-dialog-large>
</template>
<script>
import incubatorAPI from '@/services/api/incubator';
import CardVue from '@/components/cards/incubator-dept-circle.vue'

export default {
    name: 'department-choose-dialog',
    props: {
        group: {
            type: String,
            default: 'department-choose'
        }
    },
    components: {
        CardVue
    },
    data: () => ({
        itemDialog: {},
        itemForm: {},
        showDialog: false,
        items: [],
        selected: null,
        loading: false,
        paying:false,
    }),
    methods: {
        onChoose(item) {
            if(item.subscribed) return;
            this.selected = item
        },
        async doPayment() {
            this.paying = true;
            let { payment, payInfo } = this.itemDialog;
            let sendData = { ...payInfo, department_id: this.selected.id }
            let valid = await payment(sendData,{...this.selected})
            if(valid) this.closeEvent()
            this.paying =false;
        },
        async initializing() {
            this.items = [];
            this.loading = true;
            try {
                let { data } = await incubatorAPI.getDepartments();
                if (data.success) {
                    this.items = data.data.map((dept) => { return { ...dept,subscribed:this.userSubIncubators.some(x=>x.subscribe && x.department_id==dept.id), choosen: false } }).sort((a,b)=>a.subscribed && !b.subscribed?1:-1)
                    if (process.env.NODE_ENV == 'development' && this.items.length == 1) {
                        this.items[0].image_path = 'https://test1.riadiat.sa/uploads/academy/departments/1682664230.jpg';
                        this.items.push({ id: 2, name: 'مجال', image_path: 'https://test1.riadiat.sa/uploads/academy/departments/1682664386.jpg', subscribed: false })
                    }
                }
            } catch (error) {
                console.mylog('error', error)
                //
            }
            this.loading = false;
        },
        openDialog(data) {

            this.itemDialog = data;
            this.showDialog = true;
            this.initializing()
            return true;
        },
        closeDialog() {
            this.showDialog = false;
            return true;
        },
        closeEvent() {
            this.fireCloseDialog(this.group)
        }
    }
}
</script>
<style scoped>
.selected >>> .incubator-dept__title{
   color:var(--color-primary) 
}
.selected >>> .incubator-dept__image{
    box-shadow: 0px 4px 15px 1px rgba(255, 0, 0, 0.25);
}
.disabled >>> .incubator-dept__image{
    filter: contrast(0.2);
}
</style>