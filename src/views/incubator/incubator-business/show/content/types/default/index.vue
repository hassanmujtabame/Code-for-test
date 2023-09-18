<template>
 <div class="">
      <div v-if="phase.file">
   <h1 class="incubator-business-content__title pb-0">
      <!-- :checked="selected" -->
      <span style="color: #1FB9B3 ;"> نموذج:</span>
    <p class="incubator-business-content__desc">{{ phase.desc }}</p>

      {{ phase.title }}
      <div class="col-12 col-md-4" >
           <router-link class="router-link" :to="getRouteLocale('network-model-show',{id:phase.id})" > 
                    <ModelCard :title="phase.title" :img="phase.image" 
                    :value="phase.count_download"      
                     />   
                     </router-link>
      </div>

                         <button class="col-md-4 btn bg-main p-2 px-4 text-white" @click="downloadingModel"> 
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0013 30.3327H12.0013C4.7613 30.3327 1.66797 27.2393 1.66797 19.9993V11.9993C1.66797 4.75935 4.7613 1.66602 12.0013 1.66602H20.0013C27.2413 1.66602 30.3346 4.75935 30.3346 11.9993V19.9993C30.3346 27.2393 27.2413 30.3327 20.0013 30.3327ZM12.0013 3.66602C5.85463 3.66602 3.66797 5.85268 3.66797 11.9993V19.9993C3.66797 26.146 5.85463 28.3327 12.0013 28.3327H20.0013C26.148 28.3327 28.3346 26.146 28.3346 19.9993V11.9993C28.3346 5.85268 26.148 3.66602 20.0013 3.66602H12.0013Z" fill="white"/>
                            <path d="M16.0006 20.3463C15.7472 20.3463 15.4939 20.2529 15.2939 20.0529L11.2939 16.0529C10.9072 15.6663 10.9072 15.0263 11.2939 14.6396C11.6806 14.2529 12.3206 14.2529 12.7072 14.6396L16.0006 17.9329L19.2939 14.6396C19.6806 14.2529 20.3206 14.2529 20.7072 14.6396C21.0939 15.0263 21.0939 15.6663 20.7072 16.0529L16.7072 20.0529C16.5072 20.2529 16.2539 20.3463 16.0006 20.3463Z" fill="white"/>
                            <path d="M16 20.3464C15.4533 20.3464 15 19.893 15 19.3464V8.67969C15 8.13302 15.4533 7.67969 16 7.67969C16.5467 7.67969 17 8.13302 17 8.67969V19.3464C17 19.9064 16.5467 20.3464 16 20.3464Z" fill="white"/>
                            <path d="M15.998 24.3062C13.1846 24.3062 10.358 23.8529 7.67798 22.9596C7.15798 22.7862 6.87797 22.2129 7.05131 21.6929C7.22464 21.1729 7.78464 20.8796 8.31797 21.0662C13.278 22.7196 18.7313 22.7196 23.6913 21.0662C24.2113 20.8929 24.7846 21.1729 24.958 21.6929C25.1313 22.2129 24.8513 22.7862 24.3313 22.9596C21.638 23.8662 18.8113 24.3062 15.998 24.3062Z" fill="white"/>
                            </svg>
                            تحميل النموذج
                        </button>
      </h1>
   </div>
   
   <div  v-else >

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


  </div>
</template>

<script>
import ModelCard from '@/components/cards/model.vue'
import modelsAPI from '@/services/api/models';

export default {
name:'section-type-default',
components:{
    ModelCard
},
props:{
  phase:{},
  itemPage:{}
},
  data() {
    return {
  selected:true
}
},
methods:{
   async downloadingModel(){
        try {
            let { data } = await modelsAPI.download(this.itemPage.id)
                if(data.success){
                    //download file
                    let a = document.createElement('a');
                    a.href= data.data.file;
                    a.target = '_blank';
                    a.download = true;
                    document.body.appendChild(a);
                    a.click();
                    a.remove()
        this.loadOptionsSub()

                }
            
        } catch (error) {
            //
        }
    },
},
mounted(){
  console.mylog('mounted type',this.phase,this.itemPage)
}
}
</script>

<style>

</style>