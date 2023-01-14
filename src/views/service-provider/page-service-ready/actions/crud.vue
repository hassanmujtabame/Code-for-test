<template>
   <div class="col-md-6 d-flex gap-2 justify-content-end">
                    <div>
                        <button @click="openEditDialog" style="height: 40px;" class="btn-main px-3 w-100 border-0 rounded-2"
                            data-bs-toggle="modal" href="#addModal" role="button">
                            <img src="/assets/svg/update.svg" />

                            تعديل
                        </button>
                    </div>
                    <div  v-if="!loading">
                        <button @click="suspendItem" v-if="!itemPage.is_suspend" style="height: 40px; background-color:#FFBC00 ;"
                            class="btn-main px-3 w-100 border-0 rounded-2" 
                           role="button">
                           <img src="/assets/svg/suspendu.svg" />
                            {{$t('suspend')}}
                        </button>
                        <button @click="notSuspendItem" v-else style="height: 40px; background-color:#FFBC00 ;"
                            class="btn-main px-3 w-100 border-0 rounded-2" 
                            role="button">
                           <img src="/assets/svg/suspendu.svg" />
                            {{$t('cancel-suspend')}}
                        </button>
                    </div>
                    <div>
                        <button @click="openDeleteDialog" style="height: 40px; background-color:#FF1616 ;"
                            class="btn-main px-3 w-100 border-0 rounded-2" data-bs-toggle="modal"
                            href="#exampleModalToggle7" role="button">
                           <img src="/assets/svg/trash-outline.svg" />

                            حذف
                        </button>

                    </div>


                </div>
</template>

<script>
import ServiceProviderAPIs from '@/services/api/service-provider/provider/ready-service'
export default {
 name:'action-crud',
 props:['itemPage'],
 data:(/*vm*/)=>{
    return{
        loading:false,
 }
},
watch:{
 itemPage:{
    deep:true,
    immediate:true,
    handler(/*val*/){
        //
    }
 }
},
 methods:{
    openEditDialog(){
      this.fireOpenDialog('update-ready-service',this.itemPage)
    },
    openDeleteDialog(){
      this.fireOpenDialog('delete-ready-service',this.itemPage)
    },
        async suspendItem(){
            this.loading = true;
        try {
            let {data} = await ServiceProviderAPIs.suspend(this.itemPage.id)
            if(data.success){
                this.is_suspend = 1
                this.$emit('suspend',1)
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
        }
        this.loading = false;
    },
    async notSuspendItem(){
        this.loading = true;
        try {
            let {data} = await ServiceProviderAPIs.notSuspend(this.itemPage.id)
            if(data.success){
                this.is_suspend = 0
                this.$emit('suspend',0)
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
        }
        this.loading = false;
    },
 }
}
</script>

<style>

</style>