<template>
   
          <div class="container py-5" >
            <div class="row " >
                <div class="col-md-8  ">
                    <div class="shadow p-3 bg-white">
                        <h3 class="m-c">{{ story.title }}
                        </h3>
                        <p class="t-c">
                            تاريخ نشر: {{dateTextMonth(story.publish_date)}}
                        </p>
                        <p v-html="story.description">
                        </p>

                    </div>
                </div>
                <div class="col-md-4 ">

                    <div v-if="isOwner" class="box">
                        <div class="box  rounded-3 p-2">
                            <div v-if="isOwner" class="d-flex justify-content-center gap-2">
                                <button @click="openUpdateStory" class="btn bg-main p-1 px-2 text-white" >
                                    <img :src="`${publicPath}assets/svg/update.svg`" />
                                    تعديل
                                </button>
                                <button @click="confirmDeletStory" class="btn bg-main bg-danger p-1 px-2 text-white" >
                                    <img :src="`${publicPath}assets/svg/trash-outline.svg`" />
                                    حذف
                                </button>
                            </div>

                        </div>
                    </div>
                    
                    <d-user-info-li v-else sizeImage="100" class="bg-white" :member="story.user_info" />
                </div>
            </div>
        </div>
</template>

<script>
import StoriesApi from '@/services/api/stories.js'
export default {
    props:{
        isOwner:{
            type:Boolean,
            require:true,
        },  
        story:{
            type:[Object,Array]
        }
    },
    watch:{
        story:{
            deep:true,
            handler(){}
        }
    },
 name:'show-story',
 data:()=>{
    return {
      loading:true,
      hasError:false,
    }
 },
 methods:{
    async deleteItem(){
        try {
            let { data } = await StoriesApi.deleteItem(this.story.id);
            if(data.success){
                this.router_push('network-success-stories')
            }else{
                window.SwalError(data.message);
            }
        } catch (error) {
            if(error.response){
        let response= error.response;
      
        if(response.status==500 || response.status==405 ){
            window.SwalError(response.data.message)
        }
    }

        }

    },
    confirmDeletStory(){
        let dataEvt={
            title:this.$t('confirm_delete_story_message'),
            description:this.story.title,
            type:'warning',
            btns:[
                {title:this.$t('confirm_delete'),action:this.deleteItem,class:'btn btn-danger'}
            ]
        }
        this.showConfirmMsg(dataEvt);
    },
    openUpdateStory(){
    this.fireOpenDialog('update-story',this.story)
  }
 },
  mounted(){

  }
 

 
}
</script>

<style>

</style>