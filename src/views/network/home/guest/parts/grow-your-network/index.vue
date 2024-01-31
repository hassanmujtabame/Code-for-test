<template>
    <div class="container mt-5">
        <div class="d-flex">
            <div>
                <div>
                    <div class="bg-back position-relative">
                        <img src="@/assets/img/new/network/Group 138.png" alt="">
                    </div>
                </div>
            </div>
            <div class="text">
                <h2 class="home-section-title">
                    شبكة رياديات: وسع دائرة معارفك
                </h2>
                <p class="home-section-text mb-3">
                    رياديات شبكة تضم نخبة من رائدات الأعمال والمستثمرات والشركاء، وتهدف إلى إلهام وتمكين وجمع رائدات الأعمال
                    معًا على منصة واحدة ليساعد بعضهن البعض الآخر على النجاح في أعمالهن. ويمكن من خلالها الحصول على المساعدة
                    والتشجيع للدخول في مجال ريادة الأعمال من خلال مجموعة من الخدمات والمزايا، وقد صممت لمساعدة رائدات
                    الأعمال على التعلم وزيادة نمو أعمالهن والتواصل مع الرياديات
                </p>
                <router-link v-if="!user" :to="getRouteLocale('register')" class="btn-custmer shadow my-3 ">
                    {{ $t('join-us')
                    }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'grow-your-network'
}
</script>

<style></style>