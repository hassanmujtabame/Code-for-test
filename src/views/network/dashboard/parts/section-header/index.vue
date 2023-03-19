<template>
  <div class="row ">
        <div class="col-md-6 mt-4">
            <div class="box one  p-3">
                <h3 class="m-c fw-bolder text-start">
                    تهانينا
                </h3>
                <p>
                    أنت الان عضو في شبكة رياديات (اشتراك شهري)
                    يمكنك الاستفادة من خدماتنا الفريدة و المتنوعة
                </p>
                <p>
                    يمكنك دائماً تبديل بين خدمات رياديات المختلفة  
                </p>
                <ul class="nav nav-pills mb-3 d-flex gap-2 flex-wrap "  role="tablist">
                    
                      <button  class="nav-link p-2 text-dark active">شبكة رياديات</button>
                  
                    
                      <button v-for="(btn,i) in btns" :key="i" @click="openConfirmDialog(btn,$event)" class="nav-link p-2 text-dark" >{{ btn.title }} </button>
                       
                  </ul>
            
            </div>
        </div>
        <div class="col-md-6 mt-4">
            <!-- first time logined-->
            <firstTimeView v-if="isFirst" />
            <!-- card info -->
            <cardInfo v-else />
        </div>
        <ConfirmChangeDeprtment />
    </div>
</template>

<script>
import firstTimeView from './first-time.vue';
import cardInfo from './card-info.vue';
import ConfirmChangeDeprtment from './go-other-section.vue'
export default {
    name:'section-header',
components:{
    firstTimeView,
    cardInfo,
    ConfirmChangeDeprtment
},
data:(vm)=>{
  return {
    isFirst:true,// will related to backend value
    btns:[
      {id:'service-provider',title:'مقدمي الخدمة',route:vm.getRouteLocale('service-provider-home')},
      {id:'incubator',title:'حاضنة رياديات',route:vm.getRouteLocale('incubator-home')},
      {id:'academy',title:'اكاديمية رياديات',route:vm.getRouteLocale('academy-home')},
      //{id:'market',title:'سوق رياديات',route:vm.getRouteLocale('service-provider-home')},
    ]
}},
methods:{
  openConfirmDialog(dept,evt){
    if(evt)
    evt.preventDefault();
    let dataEvt = {
        title:'',
        description:`الأن انت على وشك الانتقال الى حسابك في <span class="m-c">
            ${dept.title}
            </span>`,
                type:'warning',
                btns:[
                    {title:this.$t('confirm_redirect'),action:()=> this.$router.push(this.dept.route)}
                ]
        }
        this.showConfirmMsg(dataEvt)
    //this.fireOpenDialog('go-to-pther-section',dept)
  }
}
}
</script>

<style>

</style>