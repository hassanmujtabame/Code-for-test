<template>
  <div class="container mt-5">
            <div class="row align-items-center m-auto">
                
                <div class="col-12 col-md-7 text">
                    <h2 class="home-section-title">
                        مجال {{itemPage.title}} في الأكاديمية 
                    </h2>
                    <p class="home-section-text mb-3">
                        {{ itemPage.description }}
                    </p>
                    <router-link :to="getRouteLocale('register')" class="btn btn-custmer btn-shadow">{{ $t('join-us') }}</router-link>
                </div>
                <div class="col-12 col-md-5">
                        <div class="bg-back position-relative h-100 w-100 p-5">
                            <img  class="w-100 h-100" style="max-width: 561px;max-height: 408px;" :src="itemPage.image_path" alt="">
                       
                        </div>
                </div>
            </div>
           
    
        </div>
</template>

<script>
export default {
name:'section-under-top',
props:{
    itemPage:{}
}
}
</script>

<style>

</style>