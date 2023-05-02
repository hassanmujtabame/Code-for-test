<template>
    <div style="margin-top:85px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
    {{ $t('has-error') }}
    </div>
    <div v-else class="container">
        <div class="row">
            <div class="col-12 col-md-8">
                <!--content-->
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="incubator-project_image">
                            <img :src="itemPage.image" :alt="itemPage.title"> 
                        </div>
                    </div>
                    <div class="col">
                        <div class="incubator-project__content">
                            <h1 class="incubator-project__title">{{ itemPage.title }}</h1>
                            <p class="incubator-project__place"><i class="fa fa-location-dot"></i> {{ itemPage.place }}</p>
                           <p class="incubator-project__desc" v-html="itemPage.description">
                            
                        </p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-4">
                <!--user info-->
                <d-user-preview-profile :tags="[]" hideSocial :member="itemPage.user_info"/>
            </div>
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
            itemPage:{}
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
        this.initializing()
    }
}
</script>
<style>
.incubator-project{
    display: block;
}
.incubator-project__image{
    height:265px;
    width:265px;
}
.incubator-project__image>img{
    width: 100%;
    height: 100%;
    object-fit: fill;
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