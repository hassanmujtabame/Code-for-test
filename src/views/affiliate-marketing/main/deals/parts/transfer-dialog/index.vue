<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" style="z-index: 10002 !important;" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="exampleModalLabel">
                        <div
                            style="border-radius : 5px; padding:5px; height:fit-content; margin-right: 5px; display: flex; justify-content: center; align-items: center; width: fit-content; border: 2px solid rgb(182, 182, 182); background-color:transparent;">
                            طلب التحويل
                            <svg style="margin-right: 5px;" width="19" height="19" viewBox="0 0 19 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.4043 11.0326C7.4043 11.8609 8.04473 12.5269 8.83032 12.5269H10.4357C11.1188 12.5269 11.6738 11.9462 11.6738 11.2204C11.6738 10.4434 11.3323 10.1616 10.8285 9.98226L8.2582 9.08566C7.7544 8.90634 7.41284 8.63309 7.41284 7.8475C7.41284 7.13021 7.96787 6.54102 8.651 6.54102H10.2563C11.0419 6.54102 11.6824 7.20706 11.6824 8.03536"
                                    stroke="#CF1F3E" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.53906 5.69727V13.3824" stroke="#CF1F3E" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M18.0781 9.53905C18.0781 14.2526 14.2526 18.0781 9.53905 18.0781C4.82549 18.0781 1 14.2526 1 9.53905C1 4.82549 4.82549 1 9.53905 1"
                                    stroke="#CF1F3E" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0777 4.41562V1H14.6621" stroke="#CF1F3E" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M13.8086 5.26953L18.0781 1" stroke="#CF1F3E" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <button type="button" class="close fs-2"
                        style="border-radius: 10px;border: 1px solid #979797;width: 40px; background: #fff; height: 40px;border-color:#979797"
                        data-bs-dismiss="modal" aria-label="Close">
                        <span style="color: #222;" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="container m-auto mt-4">
                    <div class="card">
                        <div>
                            <div>

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.3735 15.3761H11.7064C10.5271 15.3761 9.56055 14.383 9.56055 13.1593C9.56055 12.7958 9.86204 12.4943 10.2256 12.4943C10.5892 12.4943 10.8906 12.7958 10.8906 13.1593C10.8906 13.647 11.2542 14.046 11.7064 14.046H13.3735C13.7193 14.046 13.9942 13.7357 13.9942 13.3544C13.9942 12.8756 13.8612 12.8046 13.5597 12.6982L10.8906 11.7671C10.3231 11.5721 9.56055 11.1553 9.56055 9.8518C9.56055 8.74341 10.4384 7.83008 11.5114 7.83008H13.1784C14.3578 7.83008 15.3243 8.82322 15.3243 10.0469C15.3243 10.4104 15.0228 10.7119 14.6593 10.7119C14.2957 10.7119 13.9942 10.4104 13.9942 10.0469C13.9942 9.55921 13.6306 9.16018 13.1784 9.16018H11.5114C11.1655 9.16018 10.8906 9.47053 10.8906 9.8518C10.8906 10.3306 11.0237 10.4016 11.3251 10.508L13.9942 11.4391C14.5617 11.6341 15.3243 12.0509 15.3243 13.3544C15.3243 14.4717 14.4464 15.3761 13.3735 15.3761Z"
                                        fill="#2CB7B3" />
                                    <path
                                        d="M12.4424 16.2619C12.0788 16.2619 11.7773 15.9604 11.7773 15.5968V7.61622C11.7773 7.25266 12.0788 6.95117 12.4424 6.95117C12.806 6.95117 13.1074 7.25266 13.1074 7.61622V15.5968C13.1074 15.9604 12.806 16.2619 12.4424 16.2619Z"
                                        fill="#2CB7B3" />
                                    <path
                                        d="M12.4425 21.139C7.18421 21.139 2.91016 16.8649 2.91016 11.6066C2.91016 6.34827 7.18421 2.07422 12.4425 2.07422C12.8061 2.07422 13.1076 2.37571 13.1076 2.73927C13.1076 3.10283 12.8061 3.40432 12.4425 3.40432C7.92019 3.40432 4.24025 7.08426 4.24025 11.6066C4.24025 16.1289 7.92019 19.8089 12.4425 19.8089C16.9649 19.8089 20.6448 16.1289 20.6448 11.6066C20.6448 11.243 20.9463 10.9415 21.3099 10.9415C21.6734 10.9415 21.9749 11.243 21.9749 11.6066C21.9749 16.8649 17.7009 21.139 12.4425 21.139Z"
                                        fill="#2CB7B3" />
                                    <path
                                        d="M20.4229 7.83797H16.876C16.5124 7.83797 16.2109 7.53648 16.2109 7.17292V3.62599C16.2109 3.26243 16.5124 2.96094 16.876 2.96094C17.2395 2.96094 17.541 3.26243 17.541 3.62599V6.50787H20.4229C20.7865 6.50787 21.088 6.80936 21.088 7.17292C21.088 7.53648 20.7865 7.83797 20.4229 7.83797Z"
                                        fill="#2CB7B3" />
                                    <path
                                        d="M16.8757 7.83772C16.7072 7.83772 16.5388 7.77564 16.4058 7.64263C16.1486 7.38548 16.1486 6.95985 16.4058 6.7027L20.8394 2.26904C21.0966 2.01188 21.5222 2.01188 21.7794 2.26904C22.0365 2.52619 22.0365 2.95182 21.7794 3.20897L17.3457 7.64263C17.2127 7.77564 17.0442 7.83772 16.8757 7.83772Z"
                                        fill="#2CB7B3" />
                                </svg>
                                <h4 style="margin-right: 10px">
                                    الرصيد الحالى
                                </h4>
                            </div>

                            <span class="bold">$ 132</span>

                        </div>
                    </div>
                </div>
                <div class="modal-body">

                    <ValidationObserver ref="form">
                        <ValidationProvider vid="transactionValue" rules="required|numeric" name="قيمه التحويل"
                            v-slot="{ errors }" tag="div" class="mb-3">
                            <b-form-input
                                style="box-shadow: rgba(0, 0, 0, 0.125) 4px 4px 8px 4px; padding:10px; border: none;"
                                type="text" placeholder="قيمه التحويل" v-model="form.transactionValue" required />
                            <div class="text-input-error">{{ errors[0] }}</div>
                        </ValidationProvider>

                        <ValidationProvider tag="div" class="mb-3" name="نوع الحساب" vid="accountType" rules="required"
                            v-slot="{ errors }">
                            <d-select-input :errors="errors" class="form-select p-3" v-model="form.accountType">
                                <option disabled value='0'> نوع الحساب </option>

                                <option value="type1"> النوع الاول </option>
                                <option value="type2"> النوع الثانى </option>
                            </d-select-input>
                        </ValidationProvider>


                        <ValidationProvider vid="بيانات الحساب" rules="required" name="بيانات الحساب" v-slot="{ errors }"
                            tag="div" class="mb-3">
                            <b-form-input
                                style="box-shadow: rgba(0, 0, 0, 0.125) 4px 4px 8px 4px; padding:10px; border: none;"
                                type="text" placeholder="بيانات الحساب" v-model="form.accountDetails" required />
                            <div class="text-input-error">{{ errors[0] }}</div>
                        </ValidationProvider>

                        <ValidationProvider vid="رقم الهاتف" rules="required|numeric|min:10" name="رقم الهاتف"
                            v-slot="{ errors }" tag="div" class="mb-3">
                            <b-form-input
                                style="box-shadow: rgba(0, 0, 0, 0.125) 4px 4px 8px 4px; padding:10px; border: none;"
                                type="text" placeholder="رقم الهاتف" v-model="form.phone" required />
                            <div class="text-input-error">{{ errors[0] }}</div>
                        </ValidationProvider>


                        <ValidationProvider name="ملاحظات" vid="ملاحظات" rules="required" v-slot="{ errors }">
                            <label class="form-label"> ملاحظات </label>
                            <d-ckeditor-classic v-model="form.notes" class="form-control" rows="10" :editorConfig="{
                                minHeight: '150px'
                            }"></d-ckeditor-classic>
                            <d-error-input :errors="errors" v-if="errors.length" />
                        </ValidationProvider>


                        <div class="text-center mt-5">
                            <button class="btn btn-main-v py-2 px-5" role="button" @click="transfer">اتمام الطلب</button>
                        </div>
                    </ValidationObserver>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            form: {
                transactionValue: '',
                accountType: 0,
                accountDetails: '',
                phone: '',
                notes: ''
            },
        };
    },
    methods: {
        async transfer() {
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log("form invalid");
                this.loading = false;
                return;
            }
            try {
                const transfer = await axios.post(`affiliates/subscriptions-users`, {
                    price: this.transactionValue,
                    type_account: this.accountType,
                    account: this.accountDetails,
                    note: this.notes,
                    phone: this.phone,
                });

                if (transfer.data.success) {
                    window.successMsg('تم التحويل')
                } else {
                    window.errorMsg(transfer.data.error)
                    console.error("Failed send data");
                }
            } catch (error) {
                window.errorMsg(error)
                console.error("Error fetching data", error);
            }

        }
    }
};
</script>

<style scoped>
.modal.fade>div {
    top: 50%;
    transform: translateY(-50%);
}

.card {
    border: none;
    min-width: 15%;
    color: white;
    background-color: #2db7b3;
    padding: 15px;
}

.card h3 {
    width: fit-content;
}

.card div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card div>span {
    color: white;
}

svg {
    color: #2db7b3;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 5px;
    background-color: #fff;
}

/* toggle-pill-dark end */</style>