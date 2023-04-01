<template>
    <div style="margin-top: 96px;">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
        <div  v-else class="container exhibition-page">
            <div class=" position-relative">
                <img class="w-100" :src="itemPage.image" :alt="itemPage.title" height="432">
                <div class="d-flex gap-2 position-absolute bottom-0 data">
                    <template  v-if="itemPage.categories && itemPage.categories.length">
                    <p  v-for="(cat,c) in itemPage.categories" :key="c" :style="{'background-color':colors[c%3]}" class="p-1 px-2 rounded-2 text-white m-0">
                    {{ cat.name }}
                    </p>
                </template>
                <p  v-else :style="{'background-color':colors[0]}" class="p-1 px-2 rounded-2 text-white m-0">
                    {{ itemPage.categoryName }}
                    </p>
        </div>
            </div>
            <div class="row mt-5">
                <div class="row mb-3">
                    <div class="col-md-6">

                        <h3 class="m-c">
                        {{ itemPage.title??'معرض' }}
                        </h3>
                    </div>
                    <div class="col-md-6  text-end">
                        <template v-if="isOwner">
                        <button @click="openEditDialog" class="btn bg-main border-0 text-white p-2 mx-1"   >
                           <img src="/assets/svg/update.svg" />   
                           تعديل 
                        </button>
                        <button  @click="openDeleteDialog" class="btn bg-danger border-0 text-white p-2"   >
                            <img src="/assets/svg/trash-outline.svg" />
                           حذف 
                        </button>

                        
                    </template>
                        <button @click="openShareDialog" v-else class="btn-main" >
                            شارك في المعرض
                        </button>
                    </div>
                </div>
                <div class=" col-12 col-md-8">

                    <p class="t-c p-0 m-0">
                        تاريخ نشر: {{ itemPage.date_publish }}
                    </p>
                    <p class="pargrapg content-word-break" v-html="itemPage.content">
                        
                    </p>
                    <div class="rounded-3 border mt-4 p-4">
                        <h4 class="border-bottom">
                            شارك المعرض
                        </h4>
                        <div class="d-flex gap-4 justify-content-center p-4">
                            <a href="">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_870_38602" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="56" height="56">
                                        <g clip-path="url(#clip0_870_38602)">
                                            <path
                                                d="M51.9612 0H4.03876C1.80811 0 0 1.80811 0 4.03876V51.9612C0 54.1919 1.80811 56 4.03876 56H51.9612C54.1919 56 56 54.1919 56 51.9612V4.03876C56 1.80811 54.1919 0 51.9612 0V0ZM40.7845 21.8314C40.7969 22.107 40.8029 22.3839 40.8029 22.662C40.8029 31.1544 34.3386 40.9473 22.5172 40.9477H22.5176H22.5172C18.8877 40.9477 15.5103 39.8839 12.6661 38.0608C13.169 38.1202 13.6808 38.1497 14.1991 38.1497C17.2103 38.1497 19.9814 37.1226 22.1813 35.3986C19.3679 35.3465 16.9958 33.4884 16.1772 30.9348C16.569 31.0099 16.9719 31.051 17.3851 31.051C17.9717 31.051 18.5399 30.9719 19.08 30.8245C16.1392 30.2358 13.924 27.6368 13.924 24.5248C13.924 24.4957 13.924 24.4697 13.9248 24.4427C14.7908 24.9243 15.7812 25.2139 16.8356 25.2464C15.11 24.095 13.9756 22.1266 13.9756 19.8969C13.9756 18.7194 14.2939 17.6162 14.8459 16.6664C18.0153 20.5552 22.7517 23.1127 28.0931 23.3815C27.9829 22.9106 27.9261 22.4202 27.9261 21.916C27.9261 18.3682 30.8044 15.4898 34.3536 15.4898C36.2023 15.4898 37.8719 16.2712 39.0447 17.5205C40.5089 17.2317 41.8838 16.6968 43.1258 15.9606C42.6451 17.4607 41.6266 18.7194 40.2996 19.5153C41.5997 19.3598 42.8387 19.015 43.9901 18.5032C43.1301 19.7922 42.0393 20.9244 40.7845 21.8314V21.8314Z"
                                                fill="white" />
                                        </g>
                                    </mask>
                                    <g mask="url(#mask0_870_38602)">
                                        <circle cx="28" cy="28" r="28" fill="#979797" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_870_38602">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M25.7972 0C11.5498 0 0 11.5498 0 25.7972V30.2028C0 44.4502 11.5498 56 25.7972 56H30.2028C44.4502 56 56 44.4502 56 30.2028V25.7972C56 11.5498 44.4502 0 30.2028 0H25.7972ZM21.1516 13.0685H34.849C39.3069 13.0685 42.9336 16.6951 42.9336 21.1531V34.8507C42.9336 39.3084 39.3069 42.9351 34.8492 42.9351H21.1516C16.6936 42.9351 13.067 39.3084 13.067 34.8507V21.1531C13.067 16.6951 16.6936 13.0685 21.1516 13.0685ZM19.8338 28.0018C19.8338 32.5048 23.4972 36.1682 28.0003 36.1682C32.5033 36.1682 36.1667 32.5048 36.1667 28.0018C36.1667 23.4987 32.5033 19.8353 28.0003 19.8353C23.4972 19.8353 19.8338 23.4987 19.8338 28.0018ZM33.9489 19.3482C33.9489 20.6789 35.0312 21.7612 36.362 21.7612C37.6927 21.7612 38.7753 20.6789 38.7753 19.3482C38.7753 18.0174 37.6927 16.9349 36.362 16.9349C35.0312 16.9349 33.9489 18.0174 33.9489 19.3482ZM21.5874 28.0018C21.5874 24.4642 24.4656 21.5862 28.0029 21.5862C31.5406 21.5862 34.4185 24.4642 34.4185 28.0018C34.4185 31.5392 31.5406 34.4174 28.0029 34.4174C24.4656 34.4174 21.5874 31.5392 21.5874 28.0018ZM36.3607 18.6856C35.9956 18.6856 35.6985 18.9827 35.6985 19.3477C35.6985 19.7127 35.9956 20.0099 36.3607 20.0099C36.7259 20.0099 37.0231 19.713 37.0231 19.3477C37.0231 18.9825 36.7259 18.6856 36.3607 18.6856Z"
                                        fill="#979797" />
                                </svg>
                            </a>
                            <a href="">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_870_38589" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="56" height="56">
                                        <g clip-path="url(#clip0_870_38589)">
                                            <path
                                                d="M51.9612 0H4.03876C1.80811 0 0 1.80811 0 4.03876V51.9612C0 54.1919 1.80811 56 4.03876 56H51.9612C54.1919 56 56 54.1919 56 51.9612V4.03876C56 1.80811 54.1919 0 51.9612 0V0ZM19.8635 42.3281H13.0443V21.8122H19.8635V42.3281ZM16.4541 19.0107H16.4097C14.1213 19.0107 12.6414 17.4355 12.6414 15.4667C12.6414 13.4536 14.1666 11.9219 16.4994 11.9219C18.8322 11.9219 20.2677 13.4536 20.3121 15.4667C20.3121 17.4355 18.8322 19.0107 16.4541 19.0107ZM44.4524 42.3281H37.634V31.3526C37.634 28.5943 36.6466 26.7131 34.1793 26.7131C32.2955 26.7131 31.1736 27.9821 30.6805 29.207C30.5002 29.6453 30.4562 30.258 30.4562 30.8711V42.3281H23.6374C23.6374 42.3281 23.7267 23.7369 23.6374 21.8122H30.4562V24.717C31.3624 23.3191 32.9838 21.3307 36.6017 21.3307C41.0883 21.3307 44.4524 24.2629 44.4524 30.5643V42.3281Z"
                                                fill="white" />
                                        </g>
                                    </mask>
                                    <g mask="url(#mask0_870_38589)">
                                        <circle cx="28" cy="28" r="28" fill="#979797" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_870_38589">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_870_38586" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0"
                                        y="0" width="56" height="56">
                                        <circle cx="28" cy="28" r="28" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_870_38586)">
                                        <path
                                            d="M41.0617 -0.000780821L28.9313 -2.80078L16.795 -0.000780821C13.715 -0.000780821 -0.00201797 12.3192 -0.00201797 15.3992L-3.73535 37.3326C-3.73535 40.4126 13.7169 55.9992 16.7969 55.9992H41.0617C44.1417 55.9992 54.1313 46.0126 54.1313 42.9326L59.7313 17.7326C59.7313 14.6526 44.1417 -0.000780821 41.0617 -0.000780821ZM38.2617 5.59922V13.9992H32.6617C30.9817 13.9992 29.8617 15.1192 29.8617 16.7992V22.3992H38.2617V30.7992H29.8617V50.3992H21.4617V30.7992H15.8617V22.3992H21.4617V15.3992C21.4617 10.0792 25.9417 5.59922 31.2617 5.59922H38.2617Z"
                                            fill="#979797" />
                                    </g>
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <d-user-info-li v-if="!isOwner" sizeImage="100" :member="itemPage.user_info" />
                    <!--details-exhibition-->
                <detailsExhibitionSection :itemPage="itemPage" />
                </div>
            </div>
        </div>
        <!--dialogs-->
        <ShareDialog />
            <UpdateDialog  @success="refreshPage()"/>
            <deleteDialog />
       
    </div>
</template>

<script>
import exhibitionsAPI from '@/services/api/exhibitions';
import ShareDialog from '../exhibitions/parts/dialogs/share-exhibition.vue'
import UpdateDialog from '../exhibitions/parts/dialogs/update-exhibition.vue'
import deleteDialog from '../exhibitions/parts/dialogs/del-exhibition.vue'
import detailsExhibitionSection from './details-exhibition.vue';

export default {
    name:'exhibition-page',
    components:{
        detailsExhibitionSection,
        UpdateDialog,
        ShareDialog,
        deleteDialog
  },
  data:()=>{
    return {
      isOwner:false,
      loading:true,
      hasError:false,
      itemPage:{},
      colors:['#F2631C','#FFBC00','#2C98B3']
  }},
  methods:{
    convertTime(time){
        if(!time) return time;
   return time.substring(0,5)
    },
    openShareDialog(){
        let dataEvt = {
            title:'',
            description:`هل لديك منتجات تخص هذا المعرض وتود حجز بوث لك يمكنك من خلاله عرض منتجاتك ؟ فقط كل ما عليك فعله هو ملئ استمارة المشاركة وسنقوم بأرسالها الى صاحب المعرض ليختار المشاركين المناسبين له , نأمل انت تكون منهم بكل تأكيد !`,
            image:'/assets/img/Group 1171275567.png',
            btns:[
                {title:this.$t('fill-form')}
            ]
        }
        this.showConfirmMsg(dataEvt)
      //this.fireOpenDialog('share-exhibition',this.itemPage)
    },
    openEditDialog(){
      this.fireOpenDialog('update-dialog',this.itemPage)
    },
    openDeleteDialog(){
      this.fireOpenDialog('delete-dialog',this.itemPage)
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await exhibitionsAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                   this.itemPage.start_time = this.convertTime(this.itemPage.start_time)
                   this.itemPage.end_time = this.convertTime(this.itemPage.end_time)
                   this.isOwner = this.itemPage.user_info.id==this.user.id
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
                this.hasError = true;
              }

            this.loading = false;
        }
  },
  mounted(){
    this.initializing()
  }
}
</script>

<style>

</style>