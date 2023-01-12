<template>
   <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div >
                        <img v-if="false" class="img-fluid" src="/assets/img/network 289320.png" alt="" width="470">
                    <AnimateCard />
                    </div>

                </div>
                <div class="col-md-6">
                    <div>
                        <h3>
                            بطاقة العضوية
                        </h3>
                        <div style="color: #979797;">
                            رياديات ليست مجرد منصة !! نهتم بكم و  نقدم الهدايا والعروض المذهلة , ليست فقط العروض اكواد خصم  على المواقع الالكترونية ! 
                            بل تمكنكي بطاقة العضوية من الحصول على الخصومات من المحلات والمتجار فقط ابرزي بطاقتك وأستفيدي من خصموماتك
                                                      

                        </div>
                        <router-link custom :to="getRouteLocale('network-card-membership')" v-slot="{navigate}">
                        <button @click="navigate" class="btn-main"> أعرضي بطاقتك </button>
                        </router-link>

                    </div>

                </div>

            </div>
          </div>
</template>

<script>
import AnimateCard from '@/components/cards/image-card-membership/index.vue'
export default {
 name:'section-membership',
 components:{
    AnimateCard
 }
}
</script>

<style>

</style>