<template>
  <div>
    <div class="box">
        <!--mySwiper2-->
                            <d-swiper 
                            class
                            :items="items" 
                            :spaceBetween="10"
                            :slidesPerView="1"
                            :navigation='{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",}'
                            style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
                                >
                                <template v-slot="{item}">
                                        <img style="height:300px"  :src="item.image" />
                                    </template>
                            </d-swiper>

                        </div>
                        <!--mySwiper service-provider-->
                        <d-swiper class="mySwiper service-provider" thumbsSlider="" 
                        :items="items"
                        :loop="true"
                        :spaceBetween=10
                            :slidesPerView=4
                            :freeMode="true"
                            :watchSlidesProgress="true"
                        >
                            <template v-slot="{item}">
                                        <img style="height:115px" :src="item.image" />
                                    </template>
                            </d-swiper>
                   
  </div>
</template>

<script>
export default {
 name:'section-gallary',
 data:()=>({
    items:[
        {image:'/assets/img/serv-1.png'},
        {image:'/assets/img/serv-2.png'},
        {image:'/assets/img/serv-3.png'},
    ]
 })
}
</script>

<style scoped>
@media (max-width: 496px) {
    .img-cons img {
        width: 100% !important;
        left: 0 !important;
    }

    .img-cons {
        background-color: white;
        border-radius: 50%;
        width: 100%;
    }
}
.box{
    height: 300px;
}

</style>