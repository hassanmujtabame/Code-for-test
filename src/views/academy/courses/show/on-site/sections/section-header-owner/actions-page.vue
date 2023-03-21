<template>
  <div class=" d-flex gap-2 justify-content-end my-3">
                    <div> 
                        <button @click="updateCourse"  class="btn-main btn-action-page px-3 w-100 border-0 rounded-2"  role="button">
                            <i class="fa fa-pen-to-square"></i>
                        تعديل
                        </button>
                    </div>
                    <div>
                        <button  class="btn-main btn-action-page btn-warning  px-3 w-100 border-0 rounded-2" role="button">
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
                </div>
</template>

<script>
import academyAPI from '@/services/api/academy'
export default {
 name:'actions-page',
 props:{
    itemPage:{}
 },
methods:{
    updateCourse(){
        this.fireOpenDialog('update-course',this.itemPage)
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
                    this.router_push('academy-my-courses')
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
}
}
</script>

<style>

</style>