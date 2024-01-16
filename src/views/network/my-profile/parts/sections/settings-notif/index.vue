<template>
    <div id="list-item-7">
        <div class="box border mt-5 ">
            <h3 class="border-bottom py-2 t-c px-3">
                اعدادات الاشعارات
            </h3>
            <div action="">
                <div class=" p-3">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="box">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="itemForm.courses_notification"
                                        id="flexCheckDefaultCourses">
                                    <label class="form-check-label" for="flexCheckDefaultCourses">
                                        إشعارات الدورات
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="box">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="itemForm.meeting_notification"
                                        id="flexCheckDefaultmeeting">
                                    <label class="form-check-label" for="flexCheckDefaultmeeting">
                                        إشعارات الورش واللقاءات
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="box">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                        v-model="itemForm.attachments_notification" id="flexCheckDefaultattachments">
                                    <label class="form-check-label" for="flexCheckDefaultattachments">
                                        إشعارات المرفقات
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="box">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="itemForm.blogs_notification"
                                        id="flexCheckDefaultblogs">
                                    <label class="form-check-label" for="flexCheckDefaultblogs">
                                        إشعارات المدونة
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div class="m-auto text-center p-3">
                <button @click="save" class="btn-main">
                    {{ $t('save') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import userAPI from '@/services/api/user.js'
export default {
    name: 'settings-notif-item',
    props: ['currentUser'],
    data: (vm) => ({
        itemForm: {
            courses_notification: 0,
            blogs_notification: 0,
            attachments_notification: 0,
            meeting_notification: 0,
            ...vm.currentUser.notification_settings
        }
    }),
    methods: {
        async save(evt) {
            if (evt) evt.preventDefault();

            let formData = new FormData();
            Object.keys(this.itemForm).forEach(key => {
                formData.append(`${key}`, this.itemForm[key] ? 1 : 0)
            })

            try {
                let { data } = await userAPI.postNotifSettings(formData)
                if (data.success) {
                    window.SwalSuccess(data.message)
                } else {
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.log('error', error)
                if (error.response) {
                    if (error.response.status == 422) {
                        this.$refs.form.setErrors(error.response.data.errors)
                    }
                }
            }
        }
    }
}
</script>

<style></style>