<template>
    <div class="container mt-5">
        <d-filter-list :call-list="loadList" classColCard="col-md-6 mt-2" pluralName="المعارض" singleName="معرض">
            <template v-slot:default="{ item }">
                <router-link class="router-link" :to="getRouteLocale('network-exhibition-show', { id: item.id })">
                    <exhibitionCard 
                    :img="item.image" 
                    :title="item.user_name" 
                    :description="item_test.description" 
                    />
                </router-link>
            </template>
            <template v-slot:side>
                <sidebarBox />
            </template>
        </d-filter-list>

    </div>
</template>

<script>
import exhibitionAPI from '@/services/api/exhibitions.js'
import sidebarBox from './sidebar.vue';
import exhibitionCard from '@/components/cards/exhibition.vue';
export default {
    name: 'filter-exhibitions',
    components: {
        exhibitionCard,
        sidebarBox
    },
    data: () => ({
        item_test: { title: 'معرض الازياء الرجالي', img: '/assets/img/Rectangle -network.png', description: 'معرض متكام لبيع و تنسيق الزهور' },
        items: []
    }),
    methods: {
        async loadList(metaInfo) {
            try {
                let params = {
                    page: metaInfo.current_page
                }
                return await exhibitionAPI.getAll(params)

            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        }
    },
    mounted() {
        //this.loadList()
    }
}
</script>

<style>

</style>