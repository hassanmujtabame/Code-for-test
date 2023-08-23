<template>
  <div class=" d-flex gap-2 justify-content-end my-3">
                    <div> 
                        <button @click="updateCourse"  class="btn-main btn-action-page px-3 w-100 border-0 rounded-2"  role="button">
                            <i class="fa fa-pen-to-square"></i>
                        تعديل
                        </button>
                    </div>
                    <div>
                        <button v-b-modal="'my-modal'" class="btn-main btn-action-page btn-warning  px-3 w-100 border-0 rounded-2" role="button">
                            <i class="fa-solid fa-share-nodes"></i>
                                شارك
                        </button>
                    </div>
                    <div>
                        <button @click="confirmDeleteItem"  class="btn-main btn-action-page btn-delete px-3 w-100 border-0 rounded-2"   role="button">
                            <i class="fa fa-trash-can"></i>
                         حذف
                        </button>
                    </div>

  <!-- The modal -->
  <b-modal id="my-modal" :hide-header='true' :hide-footer='true'>
      <h5 style="color:#ebae05;" class="py-3"> شارك الدورة على مواقع التواصل الاجتماعي</h5>
            <img style="    display: flex; margin: auto;" :src="`${publicPath}assets/img/Group 1171276011.png`" >
         <div class="d-flex justify-content-center  gap-4  p-4  p-4 icon-social-exibition mt-4 ">
                   <button style="background: transparent; border: 0;">
                      <ShareNetwork
                          network="twitter"
                          :url="shareLink"
                          title="Share in twitter"
                          description="This is another awesome article for awesome readers"
                          >
                          <img class="h-100" :src="`${publicPath}assets/img/Twitter.png`" alt="" />
                          <!-- twitter-user="LindaOjo_" -->
                      </ShareNetwork>
                  </button>
                    <!-- <button>
                      <ShareNetwork
                          network="Instagram"
                          :url="shareLink"
                          title="Share in instagram"
                          description="This is another awesome article for awesome readers"
                          >
                          <img class="h-100" :src="`${publicPath}assets/img/Instagram.png`" alt="" />
                      </ShareNetwork>
                  </button> -->
                    <button style="background: transparent; border: 0;">
                      <ShareNetwork
                          network="Linkedin"
                          :url="shareLink"
                          title="Share in Linkedin"
                          description="This is another awesome article for awesome readers"
                          >
                        <img class="h-100" :src="`${publicPath}assets/img/Linkedin.png`" alt="" />
                      </ShareNetwork>
                  </button>
                  <button style="background: transparent; border: 0;">
                    <ShareNetwork
                        network="Facebook"
                        :url="shareLink"
                        title="Share in facebook"
                        description="This is another awesome article for awesome readers"
                        >
                        <img class="h-100" :src="`${publicPath}assets/img/Facebook.png`" alt="" />
                    </ShareNetwork>
                </button>
            <div class="fb-share-button" :data-href="currentUrl"  data-layout="button_count">
              </div>
            </div>
  </b-modal>

                </div>
</template>

<script>
import academyAPI from '@/services/api/academy'
export default {
 name:'actions-page',
 props:{
    itemPage:{},
    
 },
   data() {
      return {
      shareLink:''
      }
    },
methods:{
 
    updateCourse(){
        this.fireOpenDialog('add-course-first',this.itemPage)
        //this.fireOpenDialog('update-course',this.itemPage)
    },
    confirmDeleteItem(){
        let dataEvt={
            title:'انت على وشك حذف الدورة',
            description:`${this.itemPage.title}`,
            type:'warning',
            btns:[
                {title:this.$t('confirm_delete'),action:this.deleteItem,class:'btn btn-danger'}
                ]
        };
        this.showConfirmMsg(dataEvt)
    },
    
    async deleteItem(){ 
        try {
                let {data} =  await academyAPI.coursesApi.deleteItem(this.itemPage.id)
                if(data.success){
                    this.router_push('academy-instructor-your-courses')
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.mylog('error.response',error.response)
                if(error.response){
                    //if(error.response.status==500)
                    window.SwalError(error.response.data.message)
                }
               
                
            }
    },
},
  mounted() {
    this.shareLink = window.location.href;
  },
}
</script>

<style>
.modal-backdrop{
--bs-backdrop-zindex: none !important;
}
#my-modal___BV_modal_header_ , #my-modal___BV_modal_footer_{
      visibility: hidden !important;
}


</style>