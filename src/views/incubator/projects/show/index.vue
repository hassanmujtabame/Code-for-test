<template>
    <div style="margin-top:85px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
    {{ $t('has-error') }}
    </div> 
    <div v-else class="container pt-5">
        <div class="row justify-content-between" >
            <div class="col-12  ">
                <!--content-->
                <div class="row  justify-content-between">
                    <div class="col-12 col-md-3 border rounded py-3" >
                        <div class="incubator-project__image mx-auto">
                            <img :src="itemPage.image" class="" :alt="itemPage.title"> 
                        </div>
                            <h1 class="incubator-project__title text-center">{{ itemPage.title }}</h1>
                            <p class="incubator-project__place text-center"><i class="fa fa-location-dot"></i> {{ itemPage.city_name }}</p>
                            <div class="d-flex gap-3 justify-content-center">
                   
                       <ShareNetwork
                          network="Linkedin"
                          :url="shareLink"
                          title="Share in Linkedin"
                          description="This is another awesome article for awesome readers"
                          >  

            <img :src="`${publicPath}assets/svg/Group 1171276168.svg`" style="cursor: pointer" />

                       </ShareNetwork>
                <ShareNetwork
                          network="twitter"
                          :url="shareLink"
                          title="Share in twitter"
                          description="This is another awesome article for awesome readers"
                          >
                        <img :src="`${publicPath}assets/svg/Group 1171276169.svg`" style="cursor: pointer" />
                   </ShareNetwork>

                   <ShareNetwork
                          network="Instagram"
                          :url="shareLink"
                          title="Share in Instagram"
                          description="This is another awesome article for awesome readers"
                          >

                        <img :src="`${publicPath}assets/svg/Group 1171276170.svg`" style="cursor: pointer" />

                   </ShareNetwork>

                            </div>
                    </div>
                    <div class="col-12 col-md-8 border rounded p-3">
                        <div class="incubator-project__content">
                            <h1 class="incubator-project__title my-2">{{ itemPage.title }}</h1>
                           <p class="incubator-project__desc" v-html="itemPage.description">
                            
                        </p>
                        </div>
                    </div>
                </div>

            </div>
            <!-- <div class="col-12 col-md-4 ">
                <div class="border rounded">
                <d-user-preview-profile  :canChat="false" :tags="[]" hideSocial :member="itemPage.user_info"/>
            </div>
            </div> -->
        </div>
    </div>
    </div>
</template>
<script>
import incubator from '@/services/api/incubator';
export default {
    name:'incubator-program',
    data:()=>{
        return {
            hasError:false,
            loading:true,
            itemPage:{},
            shareLink:''
        }
    },
    methods:{
        async initializing(){
            this.loading = true;
            try{
                let { data } = await incubator.getProgram(this.$route.params.id)
                if(data.success){
                    this.itemPage =  data.data;
                }else{
                    this.hasError = true;
                }
            }catch(error){
                this.hasError = true;
            }
            this.loading = false;
        }
    },
    mounted(){
    this.shareLink = window.location.href;

        this.initializing()
    }
}
</script>
<style>
.incubator-project{
    display: block;
}
.incubator-project__image{
    height: 105px;
    width: 105px;
    /* max-width: 100%; */
    /* padding: 20px 0; */
}
.incubator-project__image>img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.incubator-project__title{
    font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 33px;
/* identical to box height, or 150% */

color: #0C2F33;
}
.incubator-project__place{
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 33px;
/* identical to box height, or 254% */
color: #415C5E;
}
.incubator-project__place>i{
    color:var(--color-primary)
}
.incubator-project__desc{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* or 138% */
color: #003439;
}
</style>