<template>
  <div class="container mt-5 reverse-total-filter">
    <d-filter-list 
    :call-list="loadList" 
    :pluralName="$t('members')"
    :singleName="$t('member')"
    :searchPlaceholder="$t('search-by-name-or-field')"
       classColCard="col-md-3 mt-3"
      classSideBar="w-100"
      newFilter
    
      hideTop
      hideOrder
    :orderOpts=" 
             [
                {id:'asc',name:'الاحدث'},
                {id:'desc',name:'الاقدم',}
            ]"
            @change="changeFilter"
    >

        <template v-slot:side>
        <SidebarBox :filterItem="filterSide" @change="changeFilter" />
      </template>

      <template v-slot="{ item }">
          <ItemCard
          :to="getRouteLocale('network-show-profile',{id:item.id})"
          :name="item.name"
          :description="item.job_title"
          :img="item.image"
          :showJob="true"
          />
      </template>

  




    </d-filter-list>
    <h3 class="t-c my-3" >تنزيل البيانات الخاصة برواد الاعمال </h3>
                <button style="width: 160px" class="btn bg-main p-2 px-4 text-white d-flex align-items-center">
                  <div>
                      <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 27V31.5H9V27H6.75V31.5C6.75 32.0967 6.98705 32.669 7.40901 33.091C7.83097 33.5129 8.40326 33.75 9 33.75H27C27.5967 33.75 28.169 33.5129 28.591 33.091C29.0129 32.669 29.25 32.0967 29.25 31.5V27H27Z" fill="white"/>
                        <path d="M23.625 23.625L22.0343 22.0343L19.125 24.9435V15.75H16.875V24.9435L13.9657 22.0343L12.375 23.625L18 29.25L23.625 23.625ZM31.5 4.5V2.25H24.75V13.5H27V9H30.375V6.75H27V4.5H31.5ZM19.125 13.5H14.625V2.25H19.125C20.0198 2.25089 20.8778 2.60676 21.5105 3.2395C22.1432 3.87224 22.4991 4.73017 22.5 5.625V10.125C22.4991 11.0198 22.1432 11.8778 21.5105 12.5105C20.8778 13.1432 20.0198 13.4991 19.125 13.5ZM16.875 11.25H19.125C19.4233 11.2497 19.7093 11.1311 19.9202 10.9202C20.1311 10.7093 20.2497 10.4233 20.25 10.125V5.625C20.2497 5.32672 20.1311 5.04075 19.9202 4.82983C19.7093 4.61892 19.4233 4.5003 19.125 4.5H16.875V11.25ZM10.125 2.25H4.5V13.5H6.75V10.125H10.125C10.7215 10.1241 11.2932 9.88677 11.715 9.465C12.1368 9.04324 12.3741 8.47146 12.375 7.875V4.5C12.3744 3.90345 12.1372 3.3315 11.7153 2.90967C11.2935 2.48784 10.7216 2.2506 10.125 2.25ZM6.75 7.875V4.5H10.125L10.1261 7.875H6.75Z" fill="white"/>
                        </svg>
                    </div> 

                           <div class="mx-3">تنزيل</div>  
                        </button>
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
.reverse-total-filter .filter-list{
/* display: flex; 
flex-direction: column-reverse; */
}
</style>