<template>
   <div style="margin-top: 85px " class="consult">
        <div class="consulting ">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">الاسئلة الشائعة</h1>
                        <p class="text-white">
                            هنا تجد كل الاسئلة التي تدور في ذهنك و كيف تضمن حقوقك في المنصة اذا احتجت الى سؤال أخر 
                            <router-link :to="getRouteLocale('contact-us')" class="text-dark fw-bolder fs-3">
                                فتواصل معنا
                            </router-link>   
                            </p>                                     
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit;" class=" m-auto text-start ">
                            <img  :src="`${publicPath}assets/img/Frame.png`" alt="" >
                        </div>

                    </div>

                </div>
                <div class="star-cons">
                    <img :src="`${publicPath}assets/img/starrrr.png`" alt="">
                </div>
                <div class="star-cons stars">
                    <img :src="`${publicPath}assets/img/starsss.png`" alt="">
                </div>

            </div>
        </div>
            <div class="container mt-5">
                <div class="row ">
                    <div v-for="(item,i) in items" :key="i" class="col-md-4 mt-2" >
                        <div :style="{'background-color':item.color??colors[i%3]} " class="  box m-auto text-center text-white p-3 rounded-2">
                            {{item.title}}
                        </div>
                    </div>
                    <div  v-if="false" class="col-md-4 mt-2" >
                        <div style="background-color:#2C98B3 ;" class="  box m-auto text-center text-white p-3 rounded-2">

                            أسئلة مقدم الخدمة                        </div>
                    </div>
                    <div v-if="false" class="col-md-4 mt-2" >
                        <div style="background-color:#FFBC00 ;" class="  box m-auto text-center text-white p-3 rounded-2">

                            أسئلة العميل
                        </div>
                    </div>
    
                </div>

                <div  v-for="(item,i) in items"
                  :key="i" class="mt-5">
                  <ExpandedPanel 
                 
                  :title="item.title" 
                  :id="('accordionFlushExample'+i)"
                  >
                      <ExpandedPanelItem
                      v-for="(child,c) in item.questions"
                        :key="('c'+c)"
                       :title="child.title"
                       >
                        {{ child.content }}
                      </ExpandedPanelItem>
                  </ExpandedPanel>  
                </div>
            </div>

        </div>
</template>

<script>
import ExpandedPanel from '@/components/expanded-panel/ExpandedPanel.vue';
import ExpandedPanelItem from '@/components/expanded-panel/ExpandedPanelItem.vue';
import commonAPI from '@/services/api/common';
export default {
 components:{
  ExpandedPanel,
  ExpandedPanelItem
 },
 data:()=>({
    items:[],
    colors:['#F2631C','#2C98B3','#FFBC00'],
  questions:[
    {
      title:'الاسئلة الشائعة العامة',
     children:[
      {title:'ما هي مقدمي خدمات رياديات'},
      {title:'كيف أضمن حقوقي؟'},
      {title:'ماذا لو لم أكن راضياً عن مستوى الخدمة؟'},
      {title:'ماذا سيحدث بعد نشر مشروعي؟'}
     ]
    },
    {
      title:'الاسئلة الشائعة لمقدم الخدمة',
      children:[
      {title:'ما هي مقدمي خدمات رياديات'},
      {title:'كيف أضمن حقوقي؟'},
      {title:'ماذا لو لم أكن راضياً عن مستوى الخدمة؟'},
      {title:'ماذا سيحدث بعد نشر مشروعي؟'}
      ]
    },
    {
      title:'الاسئلة الشائعة لمقدم الخدمة',
      children:[
      {title:'ما هي مقدمي خدمات رياديات'},
      {title:'كيف أضمن حقوقي؟'},
      {title:'ماذا لو لم أكن راضياً عن مستوى الخدمة؟'},
      {title:'ماذا سيحدث بعد نشر مشروعي؟'}
      ]
    }
  ]
 }),
 methods:{
   async initializing(){
        try {
            let {data} = await commonAPI.getFAQ()
            if(data.success){
                this.items = data.data
            }
        } catch (error) {
            //
        }
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>