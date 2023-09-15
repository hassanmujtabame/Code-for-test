<template>
 <div class="">
    <h1 class="incubator-business-content__title pb-0">
      <!-- :checked="selected" -->
      <span style="color: #1FB9B3 ;">دورة تدريبية:</span>
      {{ phase.title }}
      </h1>
    <p class="incubator-business-content__desc">{{ phase.desc }}</p>

        <div class="student-course box border" style="width:260px">
                                    <div class="student-course__image">
                                        <!-- <router-link custom v-slot="{ navigate }" :to="url??{}"> -->
               <router-link class="router-link" :to="getRouteLocale('academy-course-show',{id:phase.id}) ">
                                    
                                         <img class="w-100 rounded-top" :src="phase.image_path"
                                            height="100%">
                                        <!-- </router-link> -->
                                         </router-link>

                                           </div>
                                    <div class="p-3 ">
                                        <div class="d-flex justify-content-between " style="align-items: baseline;">
                                            <h6 class="student-course__title">
                                                {{phase.title}}
                                            </h6>
                                            <p class="student-course__department" style="color: #1FB9B3 ;">
                                                {{phase.department_name}}
                                            </p>
                                        </div>
                                        <p class="student-course__description text-two-lines">{{ phase.desc }}</p>
                                        <div class="row">

                                                <p class="student-course__item-info col-6">
                                                    <d-empty-wallet-icon :size="24" color="currentColor"/>
                                                        {{phase.price??'N/A'}} {{ $t('riyals') }}
                                                </p>

                                                <p class="student-course__item-info col-6">
                                                <img :src="`${publicPath}assets/svg/Mask group.svg`"  />

                                                        {{phase.type}}
                                                </p>
                                                
                                                <p class="student-course__item-info  col-12 mt-1">
                                                    <d-school-wallet-icon :size="24"  color="currentColor"/>
                                                    {{phase.user_info.name}}
                                                </p>

                                        </div>
 
                                    </div>
                                </div>

  </div>
</template>

<script>
export default {
name:'section-type-default',
props:{
  phase:{},
  itemPage:{}
},
  data() {
    return {
  selected:true
}
},
mounted(){
  console.mylog('mounted type',this.phase,this.itemPage)
}
}
</script>

<style>

</style>