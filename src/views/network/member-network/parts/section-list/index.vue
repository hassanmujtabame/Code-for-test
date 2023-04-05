<template>
  <div class="container mt-5">
    <d-filter-list 
    :call-list="loadList" 
    :pluralName="$t('members')"
    :singleName="$t('member')"
    classColCard="col-12 col-md-4 mt-4">
      <template v-slot="{ item }">

        
          <ItemCard 
          :to="getRouteLocale('network-show-profile',{id:item.id})"
          :name="item.name" 
          :description="item.description" 
          :img="item.image" 
          />

      </template>

      <template v-slot:side>
        <SidebarBox />
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
  data: () => ({
    items_test: [
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
      { name: 'العنقود محمد', img: '/assets/img/Rectangle 1775qa.png', description: 'التصوير' },
    ],
    items: []
  }),
  methods: {
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page
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