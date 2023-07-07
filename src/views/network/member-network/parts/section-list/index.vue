<template>
  <div class="container mt-5">
    <d-filter-list 
    :call-list="loadList" 
    :pluralName="$t('members')"
    :singleName="$t('member')"
    :searchPlaceholder="$t('search-by-name-or-field')"
    classColCard="col-12 col-md-4 mt-4"
    :orderOpts=" 
             [
                {id:'asc',name:'الاحدث'},
                {id:'desc',name:'الاقدم',}
            ]"
            @change="changeFilter"
    >
      <template v-slot="{ item }">

        
          <ItemCard 
          :to="getRouteLocale('network-show-profile',{id:item.id})"
          :name="item.name" 
          :description="item.description" 
          :img="item.image" 
          />
      </template>

      <template v-slot:side>
        <SidebarBox :filterItem="filterSide" @change="changeFilter" />
      </template>




    </d-filter-list>
  </div>
</template>

<script>
import MembersApi from '@/services/api/members.js'
import ItemCard from '@/components/cards/card-member.vue';
import SidebarBox from './sidebar.vue'
export default {
  name: 'section-list',
  components: {
    ItemCard,
    SidebarBox
  },
  data: (vm) => {
    return{
      filterSide:{
        membership:null,
        category_id:[]
      },
      filterItem:{
      search:null,
      created_at:'asc',
      membership:null,
        category_id:[]
    },
    items_test: [
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      { name: 'العنقود محمد', img: `${vm.publicPath}assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
    ],
    items: []
  }},
  methods: {
    changeFilter(val){
          console.log(val)
            this.filterItem = {...this.filterItem,...val}
            this.fireEvent('d-filter-list-refresh')
        },
    async loadList(metaInfo) {
      try {
        let params = {
            page:metaInfo.current_page,
            paginate:6,
            ...this.filterItem
          }
        return await MembersApi.getAll(params)
      } catch (error) {
        console.log('error', error)
        console.log('response', error.response)
      }
    }
  }
}
</script>

<style>

</style>