<template>
    <div class="sec-five mt-5 p-3">

        <div class="">
            <div class="d-flex justify-content-between align-items-center container">
                <h1>أعضاء الشبكة </h1>
                <div>
                    <router-link custom :to="getRouteLocale('network-success-stories')" v-slot="{navigate}">
                    <button @click="navigate" class="more">{{ $t('more') }}</button>
                </router-link>
                </div>
            </div>
            <d-swiper v-if="!loading" class="swiper-container m1ySwiper-templete main-swiper"
            :items="stories"
            :slidesPerView="'auto'"
            :spaceBetween="5" 
            :breakpoints="{
                        640: {
                            slidesPerView: 1,
                            
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        }"
            >
                <template v-slot="{item}">
                    <router-link class="w-100" :to="getRouteLocale('network-success-story-show',{id:item.id})">
                    <d-story-card 
                    :title="item.title"
                    :name="item.user_name"
                    :image="item.image"
                   />
                </router-link> 
                </template>
              
            </d-swiper>
        </div>
    </div>
</template>

<script>
import StoriesApi from '@/services/api/stories.js'
export default {
 name:'members-network',
 data:()=>{
    return {
    stories:[],
    loading:true,
    hasError:false,
 }
},
methods:{
    async initializing(){
        this.loading=true;
        this.hasError=false
        try {
            let { data } = await StoriesApi.getAll();//just use this for test list of stories
            if(data.success){
                    this.stories=data.data.filter((x,i)=>i<8);      
            }else{
                this.hasError=true
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
            this.hasError=true
        }
        this.loading = false
    }
},
mounted(){
    this.initializing()
}
}
</script>

<style>

</style>