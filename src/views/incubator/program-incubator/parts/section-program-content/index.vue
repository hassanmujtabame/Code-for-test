<template>
 <div class="container mt-5">
            <h2 class="text-center mt-5">
                محتويات البرنامج
            </h2>
            <div class="row justify-content-center order">
                <div v-if="items.length<1" class="col-12">
                    <h3 class="t-c text-center">{{ $t('no-items') }}</h3>
                </div>
                <div v-else v-for="(item,i) in items" :key="i" class="col-md-3 mt-2">
                    <cardItem :value="item.phase_number"
                    :title="item.title"></cardItem>
                </div>

            </div>

        </div>
</template>

<script>
import incubatorAPI from '@/services/api/incubator';
import cardItem from './card-item.vue'
export default {
  name:'section-program-content',
  props:{
    itemPage:{}
  },
  components:{
    cardItem
  },
  data:()=>({
    loading:false,
    items:[]
  }),
    methods:{
    async initializing(){
      this.loading  = true;
      try {
        let { data } = await incubatorAPI.getProgramContents({department_id:this.itemPage.id})
        if(data.success){
          this.items = data.data
        }
      } catch (error) {
          console.mylog('error',error)
        //
      }
      this.loading  = false;
    }
    },
    mounted(){
      this.initializing()
    }
}
</script>

<style>

</style>