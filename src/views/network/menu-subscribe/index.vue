<template>
    <div style="margin-top: 96px;">
        <div class="container">
            <div class="box border shadow  rounded-4">
                <div class=" p-4">
                    <div class="border-bottom mt-3">
                        <div class="d-flex justify-content-between  align-items-center">
                            <h3 class="menu-subcribe__title">
                                قائمة اشتركاتك
                            </h3>
                            <div>
                                <router-link :to="getRouteLocale('network-subscribe')" style="height: 40px;"
                                    class="btn btn-main">
                                    تجديد الاشتراك
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <subscribeItem v-for="(item, i) in items" :key="i" :title="item.name" :status="item.status"
                        :price="item.price" :date-start="item.start_at" :date-end="item.end_at"></subscribeItem>
                    <!-- :title="getTitleSubscribe(item.package_type)" -->

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import networkAPI from '@/services/api/network';
import subscribeItem from '@/components/cards/subscribe-item.vue';
export default {
    name: 'menu-subscribe',
    components: {
        subscribeItem
    },
    data: () => ({
        items: [
            /*{package_type:'month',package_price:2000,package_status:'active',start_date:'2022-01-01',end_date:'2022-05-12'},
            {package_type:'month',package_price:2000,package_status:'finished',start_date:'2022-01-01',end_date:'2022-05-12'},
            {package_type:'month',package_price:2000,package_status:'finished',start_date:'2022-01-01',end_date:'2022-05-12'},
            {package_type:'month',package_price:2000,package_status:'finished',start_date:'2022-01-01',end_date:'2022-05-12'},
           */
        ]
    }),
    methods: {

        async loadList() {
            try {
                let { data } = await networkAPI.getSubscribes()
                if (data.success) {
                    this.items = data.data
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.loadList()
    }
}
</script>

<style></style>