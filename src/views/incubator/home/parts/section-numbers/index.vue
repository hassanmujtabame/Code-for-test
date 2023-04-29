<template>
  <div class="container">

<div class="mt-5">
  <div class="riadiat-of-number">
      <h2 class="text-center"> حاضنة رياديات في أرقام  </h2>
      <div v-if="false" class="row justify-content-center ">
          <div v-for="(item,i) in items" :key="i" class="col-6 col-sm-3 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                     {{item.number}}
                  </h5>
                  <p>
                    {{item.title}}
                  </p>
              </div>
          </div>
          </div>
      <div  v-else class="row justify-content-center ">
          <div class="col-6 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                      60000+
                  </h5>
                  <p>
                    مسجلة

                  </p>
              </div>
          </div>
          <div class="col-6 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                      5222+
                  </h5>
                  <p>
                    محتضنة

                  </p>
              </div>
          </div>
          <div class="col-6 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                      5222+
                  </h5>
                  <p>
                    خريجة
                  </p>
              </div>
          </div>
          <div class="col-6 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                      16
                  </h5>
                  <p>
                    مجال

                  </p>
              </div>
          </div>
          <div class="col-6 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                      876+
                  </h5>
                  <p>
                    ساعة استشارية

                  </p>
              </div>
          </div>
          <div class="col-6 col-md-2 mt-3">
              <div class="box">

                  <h5 class="m-c fw-bolder">
                      876+
                  </h5>
                  <p>
                    شعار

                  </p>
              </div>
          </div>
      </div>

  </div>

</div>
</div>
</template>

<script>
import incubatorAPI from '@/services/api/incubator'
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
    }
}
</script>

<style>

</style>