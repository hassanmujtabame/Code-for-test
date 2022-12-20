<template>
    <div class="row ">
        <div class="col-md-6 mt-4">
            <div class="box one rounded-2  p-4">
                <h3 class="m-c fw-bolder text-start">
                    تنقل بين خدمات رياديات
                </h3>
                <p>
                    يمكنك التنقل بيين خدمات رياديات الاخرى بكل سهولة كل ماعليك فعله هو تحديد الخدمة من ثم الاشتراك في
                    الباقة المناسبة لك ..
                </p>

                <ul class="nav nav-pills mb-3 d-flex gap-2 flex-wrap " id="pills-tab" role="tablist">
                    <a class="nav-item" role="presentation">
                        <button class="nav-link p-2 text-dark active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">شبكة رياديــــــات</button>
                    </a>
                    <a class="nav-item" role="presentation">
                        <button class="nav-link p-2 text-dark" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">حاضنة رياديات</button>
                    </a>
                    <a class="nav-item" role="presentation">
                        <button class="nav-link p-2 text-dark" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">اكاديمية رياديات</button>
                    </a>
                    <a class="nav-item" role="presentation">
                        <button class="nav-link p-2 text-dark" id="pills-souq-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-souq" type="button" role="tab" aria-controls="pills-souq"
                            aria-selected="false">سوق رياديات</button>
                    </a>
                </ul>

            </div>
        </div>
        <div class="col-md-6 mt-4 ">
            <userDashInfo :member="{
                name: user.name, image: user.image, job: 'مصمم واجهات امامية ومطور واجهات'}" />
        </div>
    </div>
</template>

<script>
import userDashInfo from '@/components/cards/user-dash-info.vue';
export default {
    name: 'section-top',
    components: {
        userDashInfo
    }
}
</script>

<style>

</style>