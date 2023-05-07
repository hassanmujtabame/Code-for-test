<template>
    <div style="margin-top: 96px;">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      {{$t('has-error')}}
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
                        <p v-if="!isOwner" class="t-c p-0 m-0">
                         {{ $t('publish-date') }}: {{ itemPage.date_publish }}
                    </p>
                    </div>
                    <div class="col-md-6  text-end">
                        <template v-if="isOwner">
                        <button @click="openEditDialog" class="btn bg-main border-0 text-white p-2 mx-1"   >
                           <img :src="`${publicPath}assets/svg/update.svg`" />   
                           {{$t('modification')}} 
                        </button>
                        <button  @click="openDeleteDialog" class="btn bg-danger border-0 text-white p-2"   >
                            <img :src="`${publicPath}assets/svg/trash-outline.svg`" />
                           {{$t('delete')}} 
                        </button>

                        
                    </template>
                        <button @click="openDemandParticipateDialog" v-else class="btn-main" >
                            شارك في المعرض
                        </button>
                    </div>
                </div>
                <div class=" col-12 col-md-8">

                    
                    <p class="pargrapg content-word-break  mt-3" v-html="itemPage.content"></p>
                    <div >
                        <button v-if="isOwner" @click="router_push('network-exhibition-requests',{id:itemPage.id})" class="btn btn-show-exhibition-req">قائمة طلبات المشاركة في المعرض</button>
                    </div>
                    <div class="rounded-3 border mt-4 p-4">
                        <h4 class="border-bottom">
                            شارك المعرض
                        </h4>
                        <div class="d-flex gap-4 justify-content-center p-4 icon-social-exibition">
                            <!--facebook-->
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="&lt;span&gt; &lt;i class=&quot;fab fa-twitter&quot; &gt;&lt;/i&gt;&lt;/span&gt;" data-show-count="false">Tweet</a>
                           
                           <span v-if="false"> <i  class="fab fa-instagram" ></i></span>

                           <span v-if="false"> <i  class="fab fa-linkedin-in" ></i></span>
                           <div class="fb-share-button" 
:data-href="currentUrl" 
data-layout="button_count">
</div>
                           

                        
                           
                          
                            
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
    openDemandParticipatePage(){
            this.$router.push(this.getRouteLocale('network-exhibition-demand-participate',{id:this.itemPage.id}))
        },
    openDemandParticipateDialog(){
        let dataEvt = {
            title:'',
            description:`هل لديك منتجات تخص هذا المعرض وتود حجز بوث لك يمكنك من خلاله عرض منتجاتك ؟ فقط كل ما عليك فعله هو ملئ استمارة المشاركة وسنقوم بأرسالها الى صاحب المعرض ليختار المشاركين المناسبين له , نأمل انت تكون منهم بكل تأكيد !`,
            image:`${this.publicPath}assets/img/Group 1171275567.png`,
            btns:[
                {title:this.$t('fill-form'),action:this.openDemandParticipatePage}
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
                   this.isOwner = this.itemPage.user_info && this.itemPage.user_info.id==this.user.id
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.mylog('error', error)
                console.mylog('error response', error.response)
                this.hasError = true;
              }

            this.loading = false;
        }
  },
  mounted(){
    console.mylog('route',this.$route,this.$router)
    this.initializing()
    this.loadJS('https://platform.twitter.com/widgets.js');
    this.addScriptJs(`(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`)
  }
}
</script>

<style>
.btn-show-exhibition-req{
    width: 617px;
height: 108px;
background: rgba(31, 185, 179, 0.1);
/* CDD7D8 */

border: 0.5px solid #CDD7D8;
/* box */

box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
border-radius: 8px;
/** text */
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */

text-align: center;
text-transform: capitalize;

/* Dark gray */

color: #414042;
}

.icon-social-exibition>span,
.icon-social-exibition span{
    background: #979797;
    text-align: center;
    display: inline-block;
    height: 56px;
    width: 56px;
    font-size: 40px;
    color:white;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
