<template>
   <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white"> المعارض </h1>
                        <p class="text-white">
                            ستجد في هذا القسم كل المعارض التي نشرها الاعضاء يمكنك المشاركة بها او زيارتها كما يمكنك
                            اضافة معرضك </p>
                        <button @click="openAddDialog" class="btn border text-white px-3" >
                            <!-- icon-->
                            <plus-rect-round-icon />
                            {{ $t('add_exhibition') }}
                        </button>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-end">
                            <img class="img-fluid" src="/assets/img/vector 555@2x.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="star-cons">
                    <img src="/assets/img/starrrr.png" alt="" />
                </div>
                <div class="star-cons stars">
                    <img src="/assets/img/starsss.png" alt="" />
                </div>
            </div>
        </div>
</template>

<script>
import plusRectRoundIcon from '@/components/icon-svg/plus-rect-round.vue';
export default {
  name:'section-header',
  components:{
    plusRectRoundIcon
  },
  methods:{
    openAddDialog(){
        window.EventBus.fire('add-dialog-open-dialog')
    }
  }
}
</script>

<style>

</style>