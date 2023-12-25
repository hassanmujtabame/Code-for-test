<template>
    <div class="row ">
        <div class="_d-flex  justify-content-between align-items-center container">
            <DMasterFilter
            class="position-custom"
                    group="d-filter-list-1"
                    classColCard="col-md-6   mt-3"
                    :call-list="initializing"
                    classTotal="col-md-6"
                    hideSide
                    hideTitle
                    HeadEndClasses="col-md-6"
                    class-col-order="d-flex justify-content-end gap-3"
                    :orderOpts="[
                {id:'asc',name:'المضاف حديثا'},
                {id:'desc',name:'آلأقدم'}
            ]"
                    @change="changeFilter"
            >
                <template v-slot:total>
                    <h1 class="text-bold"> {{ $t('physical_investment_projects') }}</h1>
                </template>
                <template v-slot:append-order>
                    <!-- <router-link :to="getRouteLocale('network-investment-project-request-add')"
                                 class="btn bg-main text-white p-2">
                        أعرض مشروعك لاستثمار
                    </router-link> -->
                          <button @click="displayYourProject" class="btn bg-main text-white p-2"> أعرض مشروعك لاستثمار</button>

                </template>

                <template v-slot:search>
                    <!-- for hide search and stay its place-->
                    <div></div>
                </template>
                <template v-slot:default="{item}">

                    <router-link class="router-link h-100"
                                 :to="getRouteLocale('network-investment-project-show',{id:item.id})">
                        <DPhysicalProjectLarge
                                :title="item.title"
                                :description="item.description"
                                :publisher="item.user_info.name"
                                :date-publish="item.created_at"
                                :rest-day="item.rest_days"
                                :investor="item.count_invest"
                                :minimum-goal="item.minimum_investment"
                                :offered_property="item.offered_property"
                                :amount="item.amount_financing_required"
                                :place="item.place"
                                class="h-100"
                        />
                    </router-link>
                </template>
            </DMasterFilter>
        </div>
    </div>
</template>

<script>
import projectsAPI from '@/services/api/projects.js'
import DPhysicalProjectLarge from '@/components/cards/projects/physical/large.vue';
import DMasterFilter from '@/components/filter-list/master.vue';
//import investmentProject from '@/components/cards/investment-project.vue';
export default {
    name: 'sect-invest-project-1',
    components: {
        DPhysicalProjectLarge,DMasterFilter
    },
    data: () => ({
        filterItem: {
            search: '', created_at: 'asc'
        },
        investmentProjects:false,

    }),
    methods: {
        changeFilter(val) {
            this.filterItem = {...this.filterItem, ...val}
            this.fireEvent('d-filter-list-1-refresh')
        },
        async initializing(metaInfo) {

            let params = {
                page: metaInfo.current_page,
                ...this.filterItem
            }
            return await projectsAPI.getAllPage('physical', 4, params)


        },
            displayYourProject(){
            if(this.investmentProjects){ 
                this.router_push('network-investment-project-request-add')
            }else{
                    let dataEvt ={
                                    title:'للأسف لايمكنك عرض مشروعك ',
                                    description:`انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من عرض مشروعك - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من عرض مشروعك والمزيد من المميزات في الشبكة`,
                                    image:`${this.publicPath}assets/img/Group 1171275670.png`,
                                    btns:[
                                        {title:'رقي حسابك',action:()=>this.$router.push({name: 'network-subscribe'})}
                                    ]
                                }
                                this.showConfirmMsg(dataEvt);
                                return;
            }
                    },

            checkSubscriptionOptions(){
                for (let index = 0; index < this.user.subscription_options.length; index++) {
                    const element = this.user.subscription_options[index];
                   if (element.key == "investment_projects") {
                        this.investmentProjects = true
                    } 
                }
    },
    },
     mounted(){
    this.checkSubscriptionOptions()
}
}
</script>

<style>
.position-custom .position-relative p{
    right: 209px !important; 
}
</style>