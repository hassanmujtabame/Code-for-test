<template>
    <div class="container mt-3 d-flex justify-content-end" style="position:relative; height:500px">
        <div class="background-image" style="background:rgba(223, 171, 171, 0.589); width:80%;">
            <img width="100%" height="100%" src="@/assets/img/graph-growth-development-improvement-profit-success-concept.jpg" alt="">
        </div>
        <div id="double-section">
            <p class="fw-bold">ضاعفى ارباحك معنا</p>
            <p class="text-white"> أبدأى معنا رحله التسويق بالعموله و روجى لمنتجاتك و احصلى على اعلى نسبه مقابل كل عمليه تسويقيه فقط سجلى معناالأن </p>
            <router-link
              :to="getRouteLocale('register-affiliate')"
              class="btn" style="background:white;"
            >{{ $t("login-female") }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
 name:'section-double-winings'
}
</script>

<style scoped>
    #double-section {
        position: absolute;
        top: 80px;
        right: 0px;
        background: rgb(46, 185, 179);
        opacity: 0.7;
        width: 50%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 30px;
        align-items: start;
        border-radius: 10px;
    }
    @media screen and (max-width: 480px) {
        .background-image {
            display: none;
        }
        #double-section {
            position: relative;
            width: 100%;
        }
    }
</style>