<template>
    <div class="container mt-5">
        <d-filter-list 
       
        :call-list="loadList" 
        classColCard="col-md-6 mt-2" 
        :pluralName="$t('exhibitions')" 
        :singleName="$t('exhibition')"
        >
            <template v-slot:default="{ item }">
                <router-link class="router-link" :to="getRouteLocale('network-exhibition-show', { id: item.id })">
                    <exhibitionCard 
                    :img="item.image" 
                    :price="item.price"
                    :place="item.city"
                    :userName="item.user_info.name" 
                    :description="item.content" 
                     title="معرض الازياء الرجالي"
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
        item_test: [
        {id:1,title:'معرض الازياء الرجالي',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {id:2,title:'معرض الازياء الرجالي',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {id:3,title:'معرض الازياء الرجالي',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {id:4,title:'معرض الازياء الرجالي',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {id:5,title:'معرض الازياء الرجالي',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
  
    ],
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