<template>
<div class="tab-pane fade" id="pills-students-list" role="tabpanel" aria-labelledby="pills-students-list-tab" tabindex="0">
                            <div class="text-start mb-3">
                                <button style="background-color: #F2631C;" class="btn text-white"  data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                    رسالة للجميع
                                </button>
                            </div>
                            <div v-for="item,i in items" :key="i"  class="box">
    
                           
                                <div class="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                        <div class="d-flex gap-2">
                                            <div>

                                                <img class="rounded-circle" :src="item.user_image" alt="" width="48" height="48">
                                            </div>
                                            <div>
                                                <h6 class="m-c p-0 m-0">
                                                    {{item.user_name}}
                                                </h6>
                                                <p v-for="name,k in item.course_name" :key="k" class="t-c p-0 m-0">
                                                   <span v-if="k=='ar'">{{name}} </span>
                                                </p>
                                            </div>
                                        </div>
                                       <div class="d-flex  gap-1 flex-wrap"> 
                                        <button style="height: 40px; width: 100px;"  class="btn-main px-2 ">
                                          ارسل رسالة
                                        
                                        </button>
                     
                                    </div>

                                </div>
                            <hr>

                            </div>
                  
                        </div>
</template>

<script>
  import academyAPI from '@/services/api/academy'

export default {
 name:'students-fails-exams',
  data:()=>{
    return {
        items:[],
    }
 },
 methods:{
    async initializing(){
        try {
              let {data} =  await academyAPI.coursesApi.getCourseUsers()
              console.log('data123',data)
              if(data.success){
                  this.items =data.data
              }
          } catch (error) {
               console.log('error',error)
          }
     }

 },
 mounted() {
     this.initializing()
 }
}
</script>

<style>

</style>