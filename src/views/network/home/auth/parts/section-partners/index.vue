<template>
    <div class="network-subscribe p-3" v-if="this.categories.length">
        <h2 class="home-section-title text-center" >
              شركائنا في الشبكة رياديات 
            </h2>
              <div class=" ">
                 <DTabs group="pills" :current.sync="currentTab">
                  <TabHead
                  v-for="(item,i) in categories"
                  :key="i"
                  :current.sync="currentTab" group="pills"  :reference="`cat-${item.id}`">
                  {{ item.name }}
                  </TabHead>
                
           
                 </DTabs>
                 <div class="container">
  
  <div class="tab-content" id="pills-tabContent">
      <TabItem
      v-for="(item,i) in categories"
                  :key="i"
      :current.sync="currentTab" group="pills" :reference="`cat-${item.id}`" v-slot="{selected}">
          <TabContentItem :categoryId="item.id" :selected="selected"/>
      </TabItem>
      
      </div>
      </div>
  
                </div>
  
            </div>
  </template>
  
  <script>
  
  import TabItem from '@/components/tabs/TabItem.vue'
  import TabHead from '@/components/tabs/TabHead.vue'
  import DTabs from '@/components/tabs/DTabs.vue'
  
  import TabContentItem from './tab-content/index.vue'
  import partnersAPI from '@/services/api/partners.js'
  export default {
  name:'section-partners',
  components:{
      DTabs,
      TabItem,
      TabHead,
     TabContentItem,
  },
  data:()=>({
      currentTab:'',
      loading:true,
      categories:[],
  }),
  methods:{

  async initlizing(){
      this.loading = true;
        try {
          let { data } =  await partnersAPI.getCategories();
          if(data.success){
            this.categories = data.data
          console.log('this.categories',this.categories)
          console.log('data.data',data.data)
            
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  },
  async mounted(){
    await this.initlizing()
      this.currentTab=`cat-${this.categories[0].id}`
    }
  }
  </script>
  
  <style>
  
  </style>