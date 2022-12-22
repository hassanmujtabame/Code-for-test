<template>
     <div>
        <div class="row">
            <div  class="d-flex justify-content-between align-items-center container">
          <div class="">

              <h1> مشاريع الاستثمار      </h1>
          </div>
            <div class="d-flex   align-items-center gap-2">
                <div  class="  mt-3 position-relative">
                    <select class="form-select form-select-lg mb-3  py-3" aria-label=".form-select-lg example">
                        <option selected> المضاف حديثا   </option>
                        <option value="1">الاعلى سعرا</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <p style="top: -13px;right: 24px;background: white;" class="position-absolute">
                        ترتيب حسب 
                      </p>
                </div> 
                <div>

                    <router-link :to="getRouteLocale('network-investment-project-request-add')" class="btn bg-main text-white p-2">
                        أعرض مشروعك لاستثمار
                    </router-link>
                </div>
            </div>
             </div>
            <div v-for="(item,i) in items" :key="i" class="col-md-6 mt-3">
                <router-link :to="getRouteLocale('network-investment-project-show',{id:item.id})"> 
                <investmentProject
                   :title="item.title"
                   :publisher="item.publisher"
                   :date-publish="item.datePublish"
                   :rest-day="item.restDay"
                   :description="item.description"
                   :ownership="item.ownership"
                   :place="item.place"
                   />
                </router-link>
            </div>
        
           
        </div>
        <div class=" mt-5">

<nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
        <li class="page-item" :class="{disabled:(metaInfo.current_page==1)}">
            <button @click="changePage(1)" class="page-link">
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.90013 14.3899C1.58346 14.3899 1.2668 14.2733 1.0168 14.0233C0.533464 13.5399 0.533464 12.7399 1.0168 12.2566L6.0168 7.25661L1.0168 2.25661C0.533464 1.77327 0.533464 0.973275 1.0168 0.489941C1.50013 0.00660808 2.30013 0.00660808 2.78346 0.489941L8.6668 6.37328C9.15013 6.85661 9.15013 7.65661 8.6668 8.13994L2.78346 14.0233C2.53346 14.2733 2.2168 14.3899 1.90013 14.3899Z"
                        fill="#CDD7D8" />
                </svg>
            </button>
        </li>
        <li v-for="(p,i) in metaInfo.total_page" :key="i" class="page-item" 
        :class="{disabled:(metaInfo.current_page===p)}"
        >
            <button @click="changePage(p)" class="page-link border-0" href="#">{{p}}</button>
        </li>
        
        <li class="page-item" :class="{disabled:(metaInfo.current_page==metaInfo.total_page)}">
            <button @click="changePage(metaInfo.total_page)" class="page-link" href="#"
            
            >
                <svg width="10" height="15" viewBox="0 0 10 15"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.09987 14.3899C7.7832 14.3899 7.46653 14.2733 7.21653 14.0233L1.3332 8.13994C0.84987 7.65661 0.84987 6.85661 1.3332 6.37328L7.21653 0.489941C7.69987 0.00660808 8.49987 0.00660808 8.9832 0.489941C9.46654 0.973275 9.46654 1.77327 8.9832 2.25661L3.9832 7.25661L8.9832 12.2566C9.46654 12.7399 9.46654 13.5399 8.9832 14.0233C8.74987 14.2733 8.4332 14.3899 8.09987 14.3899Z"
                        fill="#CDD7D8" />
                </svg>
            </button>
        </li>
    </ul>
</nav>
</div>
     </div>
</template>

<script>
import investmentProject from '@/components/cards/offer-investment-project.vue';
export default {
 name:'sect-invest-project-2',
 components:{
    investmentProject
 },
 data:()=>({
    metaInfo:{
        current_page:1,
        to:10,
        total:0,
        total_page:0,

    }, 
    items:[
        {id:1,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:2,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:3,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:4,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:20},
    ]
 }),
 methods:{
    changePage(page){
       if(this.metaInfo.current_page!==page){
        this.metaInfo.current_page=page;
        this.loadList()
       }
    },
    async loadList(){
        try {
            let {data} = await this.$axios.get(`/network/projects?page=${this.metaInfo.current_page}`)

            if(data.success){
                this.items = data.data;
                this.metaInfo.to=data.meta.to
                this.metaInfo.total=data.meta.total;
                this.metaInfo.total_page=data.meta.last_page;
            }
        } catch (error) {
            console.log('error',error)
            console.log('response',error.response)
        }
    }
 },
 mounted(){
    //this.loadList()
 }
}
</script>

<style>

</style>