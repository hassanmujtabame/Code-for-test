<template>
  <div style="margin-top: 85px" class="consult max-width-100-hidden">
        <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">  {{ $t('podcast') }} </h1>
                        <p class="text-white">
                            كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة
                            كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة
                        </p>
                        <div>
                           
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-end">
                            <img class="img-fluid" src="/assets/img/Frameass.png" alt="" />
                        </div>
                    </div>
                </div>
                <template >
                <div class="star-cons-podcast">
                    <img src="/assets/img/starrrr.png" alt="" />
                </div>
                <div class="star-cons-podcast stars">
                    <img src="/assets/img/starsss.png" alt="" />
                </div>
                <div class="star-podcast position-absolute" >
                <img  class="landing"  src="/assets/img/start.png" alt="">
            </div>
            </template>
        
        
            </div>
        </div>
        <div class="container mt-5">
            <!-- recent podcasts-->
            <SectionRecentItems/>
            <!-- #recent podcasts-->
            
            <!-- filter list-->
            <SectionFilterList />

        </div>
        
        <AddItemDialog  />
        <SuccessAddItemDialog />
        
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index.vue'
import SectionRecentItems from './parts/section-recent-items/index.vue'
import AddItemDialog from './parts/dialogs/add-item.vue'
import SuccessAddItemDialog from './parts/dialogs/success-add-item.vue'
export default {
name:'network-podcasts',
components:{
    SectionFilterList,
    SectionRecentItems,
    AddItemDialog,
    SuccessAddItemDialog
},
methods:{
  addItem(){
       this.fireOpenDialog('add-dialog-item')
  }
}
}
</script>

<style>
.star-cons-podcast {
    position: absolute;
    right: 7.15%;
    left: 81.19%;
    top: 9.72%;
    bottom: 71.67%;
}
.star-cons-podcast.stars {
    right: 30.56%;
    left: 60.06%;
    top: 14.17%;
    bottom: 80.28%;
}
.star-podcast {
    right: 27.29%;
    left: 69.44%;
    top: 44.59%;
    bottom: 37.92%;
}
</style>