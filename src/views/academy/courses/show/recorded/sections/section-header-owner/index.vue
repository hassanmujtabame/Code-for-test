<template>
 <div class="course-show-page__header">
    <div class="row">
                <div v-for="(widget,i) in widgets" :key="i" class="col-md-3">
                    <widgetInfo v-bind="widget" />
                </div>
            
          

            </div>
            <div class="text-end">

                <div class=" d-flex gap-2 justify-content-end my-3">
                    <div> 
                        <button style="height: 40px;" class="btn-main px-3 w-100 border-0 rounded-2"  role="button">
                            <d-rect-edit-icon />
                                
                        تعديل
                        </button>
                    </div>
                    <div>
                        <button style="height: 40px; background-color:#FFBC00 ;" class="btn-main px-3 w-100 border-0 rounded-2"  data-bs-toggle="modal" href="#exampleModalToggle-stop" role="button">
                            <d-send-icon />
                                
                                
                                
                                شارك
                        </button>
                    </div>
                    <div>
                        <button style="height: 40px; background-color:#FF1616 ;" class="btn-main px-3 w-100 border-0 rounded-2"   data-bs-toggle="modal" href="#staticBackdrop2" role="button">
                            <d-trash-outline-icon :size="32" color="white"/>
                                
                         حذف
                        </button>
    
                    </div>
    
    
                </div>
            </div>
  </div>
</template>

<script>
import widgetInfo from './widget-info.vue'
export default {
 name:'section-owner',
 props:{
    itemPage:{}
 },
 components:{
  widgetInfo
 },
 data:(vm)=>{
    return{
  widgets:[
    {title:'المشاهدات',content:`${vm.itemPage.views} شخص`,link:null},
    {title:'حصلو على شهادة',content:`${vm.itemPage.persons_obtain_certification} شخص`,link:null},
    {title:'معدل درجات الاختبارات',content:'20/40',link:'/'},
    {title:'المشاريع المرسلة ',content:'20 مشروع',link:'/'},
  ]
 }
}
}
</script>

<style>

</style>