<template>
  <div class="main-top py-2 px-5 position-relative">
            <div class="row align-items-center m-auto">
                <div class="box p-5 w-50 m-auto text-cover" >

                    <h1 class="text-white">
                        محتاج خدمة ؟ تبحث عن موظف مميز ؟ 
                    </h1>
                    <p class="text-white">
                        أشترك الان في منصة شبكة رياديات لتستطيع شراء خدمات من منصة مقدمي خدمات رياديــــــات  كما انك تستطيع اضافة طلب خاص ليقوم مقدمي الخدمات بالتواصل معك و تلبيه طلبـك بالاضافة الى امكانية  توظيف خريجين منصات رياديات معك في شركتك .
                    </p>
                    <p class="fw-bolder">
                        ليس هذا وحسب فشبكة رياديات بها العديد من المميزات الاخرى  :
                    </p>
                    <router-link :to="getRouteLocale('network-home')" class="btn border p-2 text-white bg-transpernt svg-network ">
                      
                        <svg     height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#F6F8F9"/>
                            <path d="M11.9999 18.25C11.7899 18.25 11.5899 18.22 11.4199 18.16C9.26986 17.43 5.85986 14.81 5.85986 10.91C5.85986 8.83 7.53986 7.14001 9.60986 7.14001C10.5099 7.14001 11.3399 7.45001 12.0099 8.01001C12.6799 7.45001 13.5199 7.14001 14.3999 7.14001C16.4699 7.14001 18.1499 8.83 18.1499 10.91C18.1499 14.8 14.7399 17.42 12.5799 18.16C12.4099 18.22 12.1999 18.25 11.9999 18.25ZM9.59987 8.64999C8.35987 8.64999 7.34987 9.67001 7.34987 10.92C7.34987 14.41 10.7199 16.35 11.8999 16.75C11.9399 16.76 12.0399 16.76 12.0799 16.75C13.2599 16.35 16.6299 14.41 16.6299 10.92C16.6299 9.67001 15.6199 8.64999 14.3799 8.64999C13.6799 8.64999 13.0099 8.99 12.5899 9.56C12.3099 9.94 11.6699 9.94 11.3899 9.56C10.9699 8.98 10.3199 8.64999 9.59987 8.64999Z" fill="#F6F8F9"/>
                            </svg>
                            
                            شبكة رياديات  
  
                        </router-link>
                </div>

           
    
            </div>
       
            <div class="star position-absolute" >
                    <img  class="landing"  :src="`${publicPath}assets/svg/start.svg`" alt="">
            </div>
            <div class="square position-absolute" >
                <img class="landing"  :src="`${publicPath}assets/svg/square.svg`" alt="">
             </div>
             <div class="star-two position-absolute" >
                <img class="landing"  :src="`${publicPath}assets/svg/start.svg`" alt="">
             </div>
            <div class="star-big position-absolute" >
                <img class="landing"  :src="`${publicPath}assets/svg/star-big.svg`" alt="">
            </div>
        </div>
</template>

<script>
export default {
 name:'section-need-service'
}
</script>

<style>

</style>