<template>
    <div class=" mt-5 p-3">
        <div class="">
            <div
                    class="d-flex justify-content-between align-items-center container"
            >
                <h1 class="text-bold">جولات تنتهي هذا الاسبوع</h1>
                <div>

                    <!-- <router-link :to="getRouteLocale('network-investment-project-request-add')"
                                 class="btn bg-main text-white p-2">
                        أعرض مشروعك لاستثمار
                    </router-link> -->
                          <button @click="displayYourProject" class="btn bg-main text-white p-2"> أعرض مشروعك لاستثمار</button>
 
                </div>
            </div>
            <d-swiper
                    v-if="!loading && items.length"
                    :items="items"
                    is-auto
                    :slides-per-view="4"
                    :space-bitween="10"
            >
                <template v-slot="{item}">
                    <router-link class="router-link h-100"
                                 :to="getRouteLocale('network-investment-project-show',{id:item.id})">
                        <DPhysicalProjectSimple v-if="item.investment_type=='physical'" style="width:95%"
                                                :image="item.image"
                                                :title="item.title"
                                                :description="item.description"
                                                :publisher="item.user_info.name"
                                                :date-publish="item.created_at"
                                                :rest-day="item.rest_days"
                                                :investor="item.count_invest"
                                                :minimum-goal="item.minimum_investment"
                                                :offered_property="item.offered_property"
                                                :amount="item.amount_financing_required"
                                                classRestDays="text-danger"
                                                class="h-100"
                        />
                        <DMoralProjectSimple v-else style="width:95%"
                                             :image="item.image"
                                             :title="item.title"
                                             :description="item.description"
                                             :publisher="item.user_info.name"
                                             :date-publish="item.created_at"
                                             :rest-day="item.rest_days"
                                             :offers="item.count_invest"
                                             :maxRent="item.minimum_investment"
                                             :offered_property="item.offered_property"
                                             :minRent="item.amount_financing_required"
                                             classRestDays="text-danger"
                                             class="h-100"
                        />
                    </router-link>
                </template>


            </d-swiper>
            <h1 v-else class="t-c text-center">لا يوجد عناصر</h1>


        </div>

    </div>
</template>

<script>
import projectsAPI from '@/services/api/projects';
import DMoralProjectSimple from '@/components/cards/projects/moral/simple.vue';
import DPhysicalProjectSimple from '@/components/cards/projects/physical/simple.vue';

export default {
    name: 'sect-recent-courses',
    components: {
        DMoralProjectSimple,
        DPhysicalProjectSimple
    },
    data: () => ({
        loading: true,
        itemsTest: [
            {
                id: 1,
                name: 'تكنولوجيا القلم الديجيتال',
                publisher: 'خالد أسماعيل',
                datePublish: '22/12/2022',
                offered_property: 30,
                amount: '500,000',
                restDay: 40,
                investor: 500,
                minimumGoal: 50
            },

        ],
        items: []
    }),
    methods: {
        async loadList() {
            this.loading = true;
            try {
                let {data} = await projectsAPI.getEndWeek()
                if (data.success) {
                    this.items = data.data.filter((x, i) => i < 5)

                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
            this.loading = false;
        },
        displayYourProject(){
            if(this.userSubNetwork.type!='free'){ 
                this.router_push('network-investment-project-request-add')
            }else{
                    let dataEvt ={
                                    title:'للأسف لايمكنك عرض مشروعك ',
                                    description:`انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من عرض مشروعك - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من عرض مشروعك والمزيد من المميزات في الشبكة`,
                                    image:`${this.publicPath}assets/img/Group 1171275670.png`,
                                    btns:[
                                        {title:'رقي حسابك',action:()=>this.router_push('network-subscribe')}
                                    ]
                                }
                                this.showConfirmMsg(dataEvt);
                                return;
            }
                    }
    },
    mounted() {
        this.loadList()
    }
}
</script>

<style>

</style>