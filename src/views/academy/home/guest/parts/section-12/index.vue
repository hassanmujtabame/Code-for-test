<template>
    <div class="network-subscribe p-3">
        <h2 class="text-center">
              شركائنا في أكاديمية رياديات 
            </h2>
              <div class=" ">
                 <DTabs group="pills" :current.sync="currentTab">
                  <TabHead :current.sync="currentTab" group="pills"  reference="organizers">
                      منظمات الحفلات
                  </TabHead>
                  <TabHead :current.sync="currentTab" group="pills"  reference="designer">
                      مصممات الديكور
                  </TabHead>
                  <TabHead :current.sync="currentTab" group="pills"  reference="design">
                      التصميم
              </TabHead>
              <TabHead :current.sync="currentTab" group="pills"  reference="flowers">
                  الزهور
              </TabHead>
              <TabHead :current.sync="currentTab" group="pills"  reference="parfum">
                  العطور
              </TabHead>
              <TabHead :current.sync="currentTab" group="pills"  reference="fashion">
                  الازياء
              </TabHead>
              <TabHead :current.sync="currentTab" group="pills"  reference="beauty">
                  التجميل
              </TabHead>
              <TabHead :current.sync="currentTab" group="pills"  reference="jewelry">
                  المجوهرات
              </TabHead>
              <div class="container">
  
  <div class="tab-content" id="pills-tabContent">
      <TabItem :current.sync="currentTab" group="pills" reference="organizers" v-slot="{selected}">
          <TabOrg :selected="selected"/>
      </TabItem>
      <TabItem :current.sync="currentTab" group="pills" reference="designer" v-slot="{selected}">
          <TabDesigner :selected="selected"/>
      </TabItem>
      <TabItem :current.sync="currentTab" group="pills" reference="design" v-slot="{selected}">
          <TabDesign :selected="selected"/>
      </TabItem>
      <TabItem :current.sync="currentTab" group="pills" reference="flowers" v-slot="{selected}">
          <TabFlowers :selected="selected"/>
      </TabItem>
      <TabItem :current.sync="currentTab" group="pills" reference="parfum" v-slot="{selected}">
          <TabParfum :selected="selected"/>
      </TabItem>
      <TabItem :current.sync="currentTab" group="pills" reference="fashion" v-slot="{selected}">
          <TabFashion :selected="selected"/>
      </TabItem>
      <TabItem :current.sync="currentTab" group="pills" reference="beauty" v-slot="{selected}">
          <TabBeauty :selected="selected"/>
      </TabItem>
      <TabItem :current.sync="currentTab" group="pills" reference="jewelry" v-slot="{selected}">
          <TabJewelry :selected="selected"/>
      </TabItem>
      </div>
      </div>
  
                 </DTabs>
                 
                </div>
  
            </div>
  </template>
  
  <script>
  
  import TabItem from '@/components/tabs/TabItem.vue'
  import TabHead from '@/components/tabs/TabHead.vue'
  import DTabs from '@/components/tabs/DTabs.vue'
  
  import TabOrg from './tab-content/organizers.vue'
  import TabDesigner from './tab-content/designer.vue'
  import TabDesign from './tab-content/design.vue'
  import TabBeauty from './tab-content/beauty.vue'
  import TabFashion from './tab-content/fashion.vue'
  import TabFlowers from './tab-content/flowers.vue'
  import TabJewelry from './tab-content/jewelry.vue'
  import TabParfum from './tab-content/parfum.vue'
  export default {
  name:'section-subscribe',
  components:{
      DTabs,
      TabItem,
      TabHead,
      TabOrg,
      TabDesigner,
      TabDesign,
      TabBeauty,
      TabFashion,
      TabFlowers,
      TabJewelry,
      TabParfum,
  },
  data:()=>({
      currentTab:''
  }),
  mounted(){
      this.currentTab='organizers'
    }
  }
  </script>
  
  <style>
  
  </style>