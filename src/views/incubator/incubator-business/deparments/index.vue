<template>
<div style="margin-top: 96px;">
    <div class="container">

        <div class="row">
        <div class="col-12">
            <h1>مراحل الحاضنة</h1>
            <p>اختر القسم الذي تريد تتبع مراحله</p>
        </div>
            <div v-for="(item,i) in items" :key="i" class="col-2">
            <CardVue :title="item.name" :img="item.image_path"
                @click-image="onChoose(item)"
                class="incubator"
                :class="{'subscribed':userSubIncubators[0].subscribe}"
                />
           </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import incubatorAPI from '@/services/api/incubator';
import CardVue from '@/components/cards/incubator-dept-circle.vue'
export default {
name:'incubator-business-departments',
components:{
    CardVue
},
computed:{
  ...mapGetters({
    subscribeIncubators:'auth/subscribeIncubators',
})  
},
watch:{
    subscribeIncubators:{
        deep:true,
        handler(){
            this.items = this.items.map((dept)=>{return{...dept,subscribed:this.subscribeIncubators.some(x=>x.subscribe && x.department_id==dept.id)}}).sort((a,b)=>a.subscribed && !b.subscribed?-1:1)
        }
    }
},
data:()=>({
    loading:false,
    hasError:false,
    items:[]
}),
methods:{
    onChoose(dept){
        if(!this.userSubIncubators[0].subscribe){
            let dataEvt ={
                title:'غير مشترك في القسم',
                description:'انت غير مشترك في القسم، لذا عليك الاشتراك فيه لتتبع مساره',
                type:'warning',
                btns:[
                    {title:'اشترك الان',action:()=>this.router_push('incubator-subscribe')}
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
        this.items = data.data.map((dept)=>{return{...dept,subscribed:this.subscribeIncubators.some(x=>x.subscribe && x.department_id==dept.id)}}).sort((a,b)=>a.subscribed && !b.subscribed?-1:1)
        /*if(process.env.NODE_ENV=='development' && this.items.length==1){
            this.items[0].image_path='https://test1.riadiat.sa/uploads/academy/departments/1682664230.jpg';
            this.items.push({id:2,name:'مجال',image_path:'https://test1.riadiat.sa/uploads/academy/departments/1682664386.jpg',subscribed:false})
        }*/
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
.incubator:not(.subscribed) >>> .incubator-dept__image{
    filter: contrast(0.2);
}
.subscribed>>> .incubator-dept__image {
    /* box-shadow: 0px 0 33px 18px rgba(var(--color-secondary-rgb), .25); */
    filter: none;
}
</style>