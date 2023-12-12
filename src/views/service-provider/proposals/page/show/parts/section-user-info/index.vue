<template>
    <div class="box border rounded-3 p-4">
        
        <div class=" justify-content-center border-bottom ">
            <div class=" img-service text-center">
                <img class="rounded-circle clickable" @click="showProfile" :src="itemPage.user_info.image"
                    :alt="itemPage.user_info.name" width="120" height="120">
            </div>
            <div class=" t-c text-center mt-3">
                <h4 class="fw-bold">
                    {{ itemPage.user_info.name }}
                </h4>
                <p>
                    {{ itemPage.user_info.graduate ?? 'N/A' }}
                </p>


            </div>

        </div>
        
    </div>
</template>

<script>
import SuccessSendOffer from './success-send-offer.vue'
export default {
    name: 'section-user-info',
    props: ['itemPage'],
    components: {
        SuccessSendOffer
    },
    data: (vm) => {
        return {
            sending: false,
            is_offer_sent: vm.itemPage.is_offer_sent,
            itemForm: {
                note: '',
                file: null,
            }
        }
    },
    methods: {
        showProfile() {
            this.router_push('service-provider-show-profile', { id: this.itemPage.user_info.id })
        },
        // uploadFile(evt) {
        //     if (!evt.target.files && !evt.target.files[0]) {
        //         this.itemForm.file = null;

        //         return;
        //     }
        //     this.itemForm.file = evt.target.files[0];
        // },
        // async sendOffer() {
        //     if (!this.$store.state.isProviderRole) {
        //         let dataEvent = {
        //             image: `${this.publicPath}assets/img/Group 1171275670.png`,
        //             title: 'لا يمكنك تقديم عرض تقديم الخدمة',
        //             description: 'حتى تتمكن من التقديم على الخدمات يجب ان تكون كمقدم خدمة في المنصة',
        //             btns: [
        //                 { title: 'تحول كمقدم خدمة', action: () => this.$store.commit('changeRole', 'provider'), class: 'btn btn-custmer' }
        //             ]
        //         }
        //         this.showSuccessMsg(dataEvent)
        //         return;
        //     }
        //     // if (!this.userIsSubProvider) {
        //     //     let dataEvent = {
        //     //         image: `${this.publicPath}assets/img/Group 1171275670.png`,
        //     //         title: 'لا يمكنك تقديم عرض تقديم الخدمة',
        //     //         description: 'حتى تتمكن من التقديم على الخدمات يجب ان تكون مشترك كمقدم خدمة في المنصة',
        //     //         btns: [
        //     //             { title: 'إشترك الان', action: () => this.router_push('service-provider-subscribe'), class: 'btn btn-custmer' }
        //     //         ]

        //     //     }
        //     //     this.showSuccessMsg(dataEvent)
        //     //     return;
        //     // }
        //     this.sending = true;
        //     let valid = this.$refs.form.validate();
        //     if (!valid) {
        //         this.sending = false;
        //         return;
        //     }
        //     try {
        //         let formData = new FormData();
        //         Object.keys(this.itemForm).forEach(key => {
        //             formData.append(key, this.itemForm[key])
        //         })
        //         formData.append('service_id', this.itemPage.id)
        //         formData.append('user_id', this.itemPage.user_info.id)
        //         let { data } = await window.axios.post('service-provider/user/offer-for-service', formData)
        //         if (data.success) {
        //             this.fireOpenDialog('success-send-offer');
        //             this.itemForm.note = '';
        //             this.itemForm.file = null;
        //             this.$refs.form.reset();
        //             this.is_offer_sent = true;
        //             this.sending = false;
        //             this.itempPage.is_offer_sent = true
        //         }
        //     } catch (error) {
        //         console.log('error', error)
        //         if (error.response) {
        //             let response = error.response
        //             if (response.status == 422) {
        //                 if (response.data.errors)
        //                     this.$refs.form.setErrors(response.data.errors)
        //             }
        //         }
        //     }
        //     // this.sending = false;
        // }
    }
}
</script>

<style></style>