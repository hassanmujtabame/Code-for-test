<template>
    <div class="container mt-5">
        <d-filter-list 
        group="d-filter-list5"
        :pluralName="$t('exhibitions')" 
        :singleName="$t('exhibition')"
        :searchPlaceholder="$t('search_by_service')"
        :call-list="loadList" 
        classColCard="col-lg-6 mt-2" 
        classColSearch="col-12 col-lg-8"
        classColOrder="col-12 col-lg-4"
        hideTop
        >
            <template v-slot:list="{ items }">
                <table class="table table-bordered mt-2">
                        <thead>
                          <tr>
                            <th class=" t-c ">قيمة المبلغ</th>
                            <th class=" t-c ">تفاصيل المعاملة</th>
                        
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,i) in items" :key="i">
                            <td class="m-c fw-bold text-center fs-3">+ 150 ر.س</td>
                          
                            <td  class="t-c">
                                
                                تم شحن رصيدك
                                <p class="t-c">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00001 15.1663C4.04668 15.1663 0.833344 11.953 0.833344 7.99967C0.833344 4.04634 4.04668 0.833008 8.00001 0.833008C11.9533 0.833008 15.1667 4.04634 15.1667 7.99967C15.1667 11.953 11.9533 15.1663 8.00001 15.1663ZM8.00001 1.83301C4.60001 1.83301 1.83334 4.59967 1.83334 7.99967C1.83334 11.3997 4.60001 14.1663 8.00001 14.1663C11.4 14.1663 14.1667 11.3997 14.1667 7.99967C14.1667 4.59967 11.4 1.83301 8.00001 1.83301Z" fill="#979797"/>
                                        <path d="M10.4733 10.6202C10.3867 10.6202 10.3 10.6002 10.22 10.5468L8.15334 9.3135C7.64001 9.00684 7.26001 8.3335 7.26001 7.74017V5.00684C7.26001 4.7335 7.48668 4.50684 7.76001 4.50684C8.03334 4.50684 8.26001 4.7335 8.26001 5.00684V7.74017C8.26001 7.98017 8.46001 8.3335 8.66668 8.4535L10.7333 9.68684C10.9733 9.82684 11.0467 10.1335 10.9067 10.3735C10.8067 10.5335 10.64 10.6202 10.4733 10.6202Z" fill="#979797"/>
                                        </svg>
                                        تاريخ  العملية : 28-10-2022 
                                </p>



                            </td>
                          </tr>
                      
                       
                        
                   
                        </tbody>
                </table>
               
            </template>
            <template v-slot:side>
                <sidebarBox :filterItem="filterSide" @change="changeFilter"/>
            </template>
        </d-filter-list>

    </div>
</template>

<script>
import exhibitionAPI from '@/services/api/exhibitions.js'
import sidebarBox from './sidebar.vue';
export default {
    name: 'filter-exhibitions',
    components: {
   
        sidebarBox
    },
    data: () => ({

    filterSide:{
      type:'1',
      category_id:[],
      min_discount:0,
        max_discount:1000,
    },
        filterItem:{
            search:null,
            created_at:'asc',
            type:'1',
            category_id:[],
            min_discount:0,
            max_discount:1000,
        }
    }),
    methods: {
        changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
           // this.fireEvent('d-filter-list5-refresh')
        },
        async loadList(metaInfo) {
            //console.log('loadList')
            try {
                let params = {
                    page: metaInfo.current_page,
                    ...this.filterItem
                }
               return await exhibitionAPI.getAll(params)

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