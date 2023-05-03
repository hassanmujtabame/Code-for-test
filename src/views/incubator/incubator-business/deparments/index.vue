<template>
<div style="margin-top: 96px;">
    <div class="container">

        <div class="row">
        <div class="col-12">
            <h1>مراحل الحاضنة</h1>
            <p>اختر القسم الذي تريد تتبع مراحلة</p>
        </div>
            <div v-for="(item,i) in items" :key="i" class="col-2">
            <CardVue :title="item.name" :img="item.image_path"
                @click-image="onChoose(item)"
                :class="{'subscribed':item.subscribed}"
                />
           </div>
        </div>
    </div>
</div>
</template>

<script>
import incubatorAPI from '@/services/api/incubator';
import CardVue from '@/components/cards/incubator-dept-circle.vue'
export default {
name:'incubator-business-departments',
components:{
    CardVue
},
data:()=>({
    loading:false,
    hasError:false,
    items:[]
}),
methods:{
    onChoose(dept){
        if(!dept.subscribed){
            let dataEvt ={
                title:'غير مشترك في القسم',
                description:'انت غير مشترك في القسم، لذا عليك الاشتراك فيه لتتبع مساره',
                type:'warning',
                btns:[
                    {title:'اشترك الان'}
                ]
            }
            this.showConfirmMsg(dataEvt)
        }else{
            this.router_push('incubator-incubator-business-show',{id:dept.id})
        }
    },
    async initializing(){
    this.loading = true;
    try{
      let { data } = await incubatorAPI.getDepartments();
      if(data.success){
        this.items = data.data.map((dept,i)=>{return{...dept,subscribed:i==0}})
        if(process.env.NODE_ENV=='development' && this.items.length==1){
            this.items[0].image_path='https://test1.riadiat.sa/uploads/academy/departments/1682664230.jpg';
            this.items.push({id:2,name:'مجال',image_path:'https://test1.riadiat.sa/uploads/academy/departments/1682664386.jpg',subscribed:false})
        }
      }
    }catch(error){
        console.mylog('error',error)
      //
    }
    this.loading = false;
  },
},
mounted(){
    this.initializing()
}
}
</script>

<style scoped>
.subscribed >>> .incubator-dept__title{
   color:var(--color-primary) 
}
</style>