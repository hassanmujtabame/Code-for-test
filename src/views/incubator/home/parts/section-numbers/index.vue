<template>
  <div class="container" v-if="items && items.length>0">

<div class="mt-5">
  <div class="riadiat-of-number">
      <h2 class="text-center"> حاضنة رياديات في أرقام  </h2>
      <div v-if="true" class="row justify-content-center ">
          <div v-for="(item,i) in items" :key="i" class="col-6 col-sm-3 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                     {{item.value}}
                  </h5>
                  <p>
                    {{item.title}}
                  </p>
              </div>
          </div>
          </div>


  </div>

</div>
</div>
</template>

<script>
import incubatorAPI from '@/services/api/incubator/index.js'
export default {
    name:'section-numbers',
    data:()=>({
        items:[]
    }),
    methods:{
       async initializing(){
            try{
                let {data} = await incubatorAPI.getNumbers()
                if(data.success){
                    this.items = data.data
                }
            }catch(error){
                //
            }
        }
    },
    mounted(){
        this.initializing()
    }
}
</script>

<style>

</style>