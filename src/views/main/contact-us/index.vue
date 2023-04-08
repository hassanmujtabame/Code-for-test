<template>

    <div class="container">
        <div class="box bg-white contact-us p-3  rounded-3">

            <div class="row align-items-center ">
                <div class="col-md-6">
                    <h2>
                        اطلبي مكالمة أو اجتماع قهوة مع فريقنا
                    </h2>
                    <p>
                        فلنناقش سوياً كيف يمكننا مساعدة شركة أعمالك
                    </p>
                    <ValidationObserver ref="form" tag="form" @submit="sendMessage">
                        <!-- full name -->
                        <ValidationProvider tag="div" :name="$t('full-name')" vid="name" rules="required"
                            v-slot="{ errors }">
                            <label class="form-lable">{{ $t('full-name') }}</label>
                            <input type="text" v-model="itemForm.name" class=" mt-2 w-100" :placeholder="$t('full-name')">
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                        </ValidationProvider>
                        <!--email -->
                        <ValidationProvider tag="div" :name="$t('Email')" vid="email" rules="required|email"
                            v-slot="{ errors }">
                            <input type="text" v-model="itemForm.email" class=" mt-2 w-100" :placeholder="$t('Email')">
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                        </ValidationProvider>
                        <!-- title_message -->
                        <ValidationProvider tag="div"  :name="$t('title_message')" vid="title_message" rules="required"
                            v-slot="{ errors }">
                            <input type="text" v-model="itemForm.title_message" class=" mt-2 w-100" :placeholder="$t('title_message')">
                            <d-error-input :errors="errors" v-if="errors.length>0" />
                        </ValidationProvider>
                        <!--message-->
                        <ValidationProvider tag="div"  :name="$t('message')" vid="message" rules="required"
                            v-slot="{ errors }">
                        <textarea class=" mt-2 w-100" v-model="itemForm.message" cols="30" rows="5" :placeholder="$t('message')"></textarea>
                        <d-error-input :errors="errors" v-if="errors.length>0" />
                        </ValidationProvider>
                    </ValidationObserver>
                    <div class="text-start mt-2 ">
                        <button @click="sendMessage" class="btn btn-main" role="button"> {{ $t('send_request') }} </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- image-->
                    <ImageBox />
                </div>

            </div>
        </div>

    </div>

</template>
<script>
import commonAPI from '@/services/api/common.js'
import ImageBox from './image-box.vue'
export default {
    name: 'contact-us',
    components: {
        ImageBox
    },
    data:()=>({
        itemForm:{
            name:'',
            email:'',
            message:'',
            title_message:'',
            phone:'',

        }
    }),
        methods: {
        clearContent(){
            Object.keys(this.itemForm).forEach((key) => {
                this.itemForm[key]=''
            })

            this.$nextTick(()=>{
                if (this.$refs["form"]) {
                    this.$refs.form.reset();
                    }
            })
        },
        async sendMessage(evt) {
            if (evt) evt.preventDefault();

            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid');
                return;
            }
            let formData = new FormData();
            Object.keys(this.itemForm).forEach((key) => {
                formData.append(key, this.itemForm[key]);
            })
            try {
                let { data } = await commonAPI.ContactUsSend(formData)
                if (data.success) {
                    this.clearContent()
                }
            } catch (error) {
                //
                if (error.response) {
                    let response = error.response
                    console.log('error', response)
                    if (response.status == 422) {
                        this.setErrorsForm(this.$refs.form,response)
                    }
                }

            }
        }
    }
}
</script>