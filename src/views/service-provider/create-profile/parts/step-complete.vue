<template>
    <div class="container text-center">
        <div class="row justify-content-center mb-3"><img style="width:80px" src="@/assets/img/done.png" alt=""></div>
        <div class="row">
            <h1 class="m-c">
                عمـــــلََا جيـــــدََا!
            </h1>
            <h1 class="m-c">
                لقد أتممت إنشاء ملف أعمالك
            </h1>
        </div>
        <div class="row justify-content-center">
            <router-link :to="{ name: 'service-provider-proposals' }" style="height: 40px; width: auto" class="btn btn-main mt-3">
                تصفح الأعمال المطلوبة
            </router-link>
        </div>
    </div>
</template>