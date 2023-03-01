<template>
    <div class="box border">
        <p class="p-2 m-0 border-bottom">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.56 26.3333C14.1734 26.3333 13.8 26.28 13.4933 26.16C8.93335 24.6 1.66669 19.0266 1.66669 10.7866C1.66669 6.55995 5.08001 3.1333 9.28001 3.1333C11.2933 3.1333 13.1733 3.90661 14.5733 5.27995C15.9867 3.90661 17.8533 3.1333 19.8667 3.1333C24.0667 3.1333 27.48 6.55995 27.48 10.7866C27.48 11.36 27.44 11.9466 27.36 12.5466C27.32 12.8533 27.1333 13.1333 26.8667 13.2933C26.6 13.4533 26.2667 13.4666 25.9734 13.3466C24.3334 12.64 22.2934 13.1733 21.2267 14.6C21.04 14.8533 20.68 14.9866 20.4267 15C20.1067 15 19.8134 14.8533 19.6267 14.6C18.8667 13.5866 17.7067 13.0133 16.4533 13.0133C14.28 13.0133 12.5067 14.8 12.5067 17C12.5067 20.4666 14.4934 22.9333 16.1734 24.4133C16.4134 24.6266 16.5334 24.9333 16.5067 25.2533C16.48 25.5733 16.3067 25.8533 16.0267 26.0266C15.88 26.1066 15.76 26.16 15.6933 26.1733C15.3467 26.28 14.96 26.3333 14.56 26.3333ZM9.28001 5.1333C6.18668 5.1333 3.66669 7.66662 3.66669 10.7866C3.66669 17.76 9.4667 22.0533 12.8 23.7066C11.5334 22.0133 10.4933 19.7733 10.4933 16.9866C10.4933 13.6799 13.16 11 16.44 11C17.9333 11 19.3334 11.5466 20.4134 12.52C21.76 11.32 23.68 10.7733 25.4667 11.1066C25.4667 10.9999 25.4667 10.8933 25.4667 10.8C25.4667 7.67997 22.9467 5.14661 19.8534 5.14661C18.08 5.14661 16.44 5.97328 15.36 7.39994C15.1733 7.65328 14.88 7.79997 14.56 7.79997C14.24 7.79997 13.9467 7.65328 13.76 7.39994C12.7067 5.95994 11.0667 5.1333 9.28001 5.1333Z"
                    fill="#414042" />
                <path
                    d="M20.4269 28.8667C20.1202 28.8667 19.8002 28.8267 19.5469 28.7333C18.4002 28.3467 16.5469 27.4 14.8535 25.8934C12.8802 24.1467 10.5202 21.1867 10.5202 16.9867C10.5202 13.68 13.1869 11 16.4669 11C17.9602 11 19.3602 11.5467 20.4402 12.52C22.1202 11.0134 24.6802 10.5867 26.7868 11.5067C28.9468 12.4667 30.3469 14.6267 30.3469 17C30.3469 23.32 24.8002 27.56 21.3069 28.7467C21.0402 28.8267 20.7335 28.8667 20.4269 28.8667ZM16.4535 13C14.2802 13 12.5069 14.7867 12.5069 16.9867C12.5069 20.4533 14.4935 22.92 16.1735 24.4C17.6535 25.7067 19.2135 26.52 20.1869 26.84C20.2935 26.88 20.5469 26.88 20.6402 26.84C22.6402 26.16 28.3335 22.8933 28.3335 16.9867C28.3335 15.4 27.4002 13.96 25.9735 13.3333C24.3602 12.6267 22.2935 13.16 21.2269 14.5867C21.0402 14.84 20.6802 14.9733 20.4269 14.9867C20.1069 14.9867 19.8135 14.84 19.6269 14.5867C18.8669 13.5733 17.7068 13 16.4535 13Z"
                    fill="#414042" />
            </svg>
            الخدمات التي تقدمها
        </p>
        <div>
            <d-overlays-simple v-if="loading" />
        <div class="row p-2 order">
            <div v-for="(item,k) in items" :key="k" class="col-md-4 mt-2">
                <router-link class="router-link" :to="getRouteLocale('service-provider-ready-service',{id:item.id})">
                    <MyServiceCard 
                     :image="item.image"
                     :title="item.title"
                     :description="item.desc"
                     :place="item.city"
                     :department="item.category_name"
                     :price="item.price"
                     :state="item.state"
                     :name="item.user_name"
                     :status="item.status"
                    />
                </router-link>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="col-12">
            <button v-if="isThereMore" @click="nextList()" :disabled="!isThereMore" :class="{'btn-more-loading-disabled':!isThereMore}" class="btn-more-loading"><plusRectRoundIcon /> {{ $t('more_services') }} </button>
            <div v-else class="btn-more-loading btn-more-loading-disabled text-center w-100">
                لا يوجد المزيد
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import MyServiceCard from '@/components/cards/ready-service.vue';
import plusRectRoundIcon from '@/components/icon-svg/plus-rect-round.vue';
//import UserApi from '@/services/api/user.js';
import readyReadyAPI from '@/services/api/service-provider/provider/ready-service.js';
export default {
 name:'section-my-services',
 props:['userPage'],
 components:{
    MyServiceCard,plusRectRoundIcon
 },
 data:()=>{
    return {
        loading:false,
        metaInfo:{
            current_page: 1,
            to: 10,
            total: 0,
            total_page: 0,
        },
        items:[]
    }
 },
 computed:{
  isThereMore(){
    return this.metaInfo.total_page && this.metaInfo.current_page < this.metaInfo.total_page
  }
 },
 methods:{
    nextList(){
        let page = this.metaInfo.current_page+1;
        this.loadList({page})
    },  
    async loadList(dataP){
        this.loading =  true;
        try {
            let params = {
                paginate:6,
                user_id:this.userPage.id,
                ...dataP
            }
            let { data } =  await readyReadyAPI.getAll(params)
                if(data.success){
                    this.items.push(... data.data);
                    this.metaInfo.current_page = data.meta.current_page
                    this.metaInfo.to = data.meta.to
                    this.metaInfo.total = data.meta.total;
                    this.metaInfo.total_page = data.meta.last_page;
                }
        } catch (error) {
            console.log('error',error)
        }
        this.loading =  false;
    }
 },
 mounted(){
    this.loadList()
 }
}
</script>

<style scoped>
.btn-more-loading{

width: 805px;
height: 49px;


background: #FFFFFF;
/* box */

box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
border-radius:0px 0px 8px 8px ;
width:100%
}
.box{
    border-radius:8px  
}
</style>