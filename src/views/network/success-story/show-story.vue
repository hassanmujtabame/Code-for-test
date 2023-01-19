<template>
   
          
            <div class="row" >
                <div class="col-md-8 ">
                    <div class="shadow p-3">
                        <h3 class="m-c">{{ story.title }}
                        </h3>
                        <p class="t-c">
                            تاريخ نشر: 12-4-2022
                        </p>
                        <p v-html="story.description">
                        </p>

                    </div>
                </div>
                <div class="col-md-4 ">

                    <div v-if="isOwner" class="box ">
                        <div class="box  rounded-3 p-2">
                            <div v-if="isOwner" class="text-center">
                                <button @click="openUpdateStory" class="btn bg-main p-1 px-2 text-white" >
                                    <img src="/assets/svg/update.svg" />
                                    تعديل
                                </button>
                            
                            </div>

                        </div>
                    </div>
                    <d-user-info-li v-else sizeImage="100" :member="story.user_info" />
                </div>
            </div>
  
</template>

<script>
//import StoriesApi from '@/services/api/stories.js'
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