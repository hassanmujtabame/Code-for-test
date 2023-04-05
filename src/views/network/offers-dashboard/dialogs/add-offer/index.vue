<template>
    <d-dialog-large :group="group" :openDialog="openDialog" :closeDialog="closeDialog"
        customHeaderClass="add-offer__header-title" :xl="false">
        <template v-slot:header>
            أضف اعلان
        </template>
        <template v-slot>
            <ValidationObserver tag="div" class="px-2" 
            style="height: 400px;overflow-y: auto;"
            ref="form" v-if="showDialog">
                <div class="mx-auto">
                    <loadImageInput v-model="itemForm.file" />
                </div>
                <!-- company name -->
                <div class="row mt-3">
                    <div class="col-4 p-0 border">
                        <div class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2">{{ $t('company-name') }}
                        </div>
                    </div>
                    <div class="col-8 p-0">
                        <ValidationProvider vid="name_company" :name="$t('company-name')" v-slot="errors">
                            <d-text-input :errors="errors" v-model="itemForm.name_company">
                            </d-text-input>
                        </ValidationProvider>

                    </div>
                </div>
                <!-- company type -->
                <div class="row mt-3">
                    <div class="col-4 p-0 border">
                        <div class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2">{{ $t('company-type') }}
                        </div>
                    </div>
                    <div class="col-8 p-0">
                        <ValidationProvider vid="type_company" :name="$t('company-type')" v-slot="errors">
                            <d-text-input :errors="errors" v-model="itemForm.type_company">
                            </d-text-input>
                        </ValidationProvider>

                    </div>
                </div>
                <!-- offer desc -->
                <div class="row mt-3">
                    <div class="col-4 p-0 border">
                        <div class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2">{{ $t('details') }}
                        </div>
                    </div>
                    <div class="col-8 p-0">
                        <ValidationProvider vid="description" :name="$t('details')" v-slot="errors">
                            <d-text-input :errors="errors" v-model="itemForm.description">
                            </d-text-input>
                        </ValidationProvider>

                    </div>
                </div>
                <!-- web site -->
                <div class="row mt-3">
                    <div class="col-4 p-0 border">
                        <div class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2">{{ $t('website') }}
                        </div>
                    </div>
                    <div class="col-8 p-0">
                        <ValidationProvider vid="website" :name="$t('website')" v-slot="errors">
                            <d-text-input :errors="errors" v-model="itemForm.website">
                            </d-text-input>
                        </ValidationProvider>

                    </div>
                </div>
                <!-- discount code -->
                <div class="row mt-3">
                    <div class="col-4 p-0 border">
                        <div class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2">{{ $t('discount-code') }}
                        </div>
                    </div>
                    <div class="col-8 p-0">
                        <ValidationProvider vid="code" :name="$t('discount-code')" v-slot="errors">
                            <d-text-input :errors="errors" v-model="itemForm.code">
                            </d-text-input>
                        </ValidationProvider>

                    </div>
                </div>
                <!-- offer during -->
                <div class="row mt-3">
                    <div class="col-4 p-0 border">
                        <div class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2">{{ $t('offer-during') }}
                        </div>
                    </div>
                    <div class="col-8 p-0">
                        <ValidationProvider vid="during" :name="$t('offer-during')" v-slot="errors">
                            <d-text-input :errors="errors" v-model="itemForm.during">
                            </d-text-input>
                        </ValidationProvider>

                    </div>
                </div>
                <!-- offer department -->
                <div class="row mt-3">
                    <div class="col-4 p-0 border">
                        <div class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2">{{ $t('offer-department') }}
                        </div>
                    </div>
                    <div class="col-8 p-0">
                        <ValidationProvider vid="category_id" :name="$t('offer-department')" v-slot="errors">
                            <d-select-input :errors="errors" v-model="itemForm.category_id">
                            <option></option>
                            <option v-for="(dept,i) in categories" :key="i" :value="dept.id">{{ dept.name }}</option>
                            </d-select-input>
                        </ValidationProvider>

                    </div>
                </div>
            </ValidationObserver>
        </template>
        <template v-slot:actions>
            <button @click="save" :disabled="loading" class="btn btn-custmer">{{ $t('add-ads') }}</button>
        </template>
    </d-dialog-large>
</template>

<script>
import offersAPI from '@/services/api/offers';
import loadImageInput from './load-image.vue';
export default {
    name: 'add-new-offer',
    components: {
        loadImageInput
    },
    props: {
        group: {
            type: String,
            default: 'add-new-offer'
        }
    },
    data: (vm) => {
        return {
            categories: [],
            loading: false,
            showDialog: false,
            itemDialog: {},
            itemForm: {},
            idImage: `image-selected-${vm.generateRandomString(8)}`,
        }
    },
    methods: {
        async save(){
            this.loading = true;
            let valid = await this.$refs.form.validate();
            if(!valid){
                this.loading = false;
                return;
            }
            let formData = this.loadObjectToForm(this.itemForm)
                      
            try {
            let { data } = await offersAPI.addOffer(formData)
            if(data.success){
                console.mylog('success',data)
                //window.EventBus.fire('list-coupon-update')
                this.fireEvent('d-filter-list-refresh')
                this.closeEvent()
            }else{
                window.SwalError(data.message)
            }
        } catch (error) {
            window.catchException.call(this,error,this.$refs.form)
        }
            this.loading = false;
        },
        async loadCategories() {
            try {
                let { data } = await offersAPI.getCategories()
                if (data.success) {
                    this.categories = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
        },
        openDialog(dataEvt) {
            this.itemDialog = { ...dataEvt }
            this.itemForm = { file: null,
            name_company:'',
            type_company:'',
            during:null,
            category_id:null,
            code:'',
            website:'',
            description:'',
        
        }
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false;
            return true;
        },
        closeEvent() {
            this.fireCloseDialog(this.group)
        }
    },
    mounted() {
        this.loadCategories()
    }
}
</script>

<style>
.add-offer__field-name {
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    /* identical to box height, or 106% */
    color: #1FB9B3;
}

.add-offer__header-title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    /* identical to box height, or 110% */
    color: #0C2F33;
}
</style>