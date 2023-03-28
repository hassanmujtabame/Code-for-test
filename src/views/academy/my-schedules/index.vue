<template>
   <div style="margin-top: 96px;" >
        <div class="container">
          <div class="row justify-content-between align-items-center ">
            <div class="col-md-6">
              <h3>
                جدول مواعيدي
              </h3>
              <p class="t-c">
                قم بأضافة مواعيدك المتاحة لتقديم الخدمات الاوفلاين  في جدول مواعيد الخدمة حتى يتمكن العملاء من حجز الموعد المناسب لهم
              </p>
            </div>
            <div class="col-md-6 text-end">
              <button @click="openDialogNewSchedule" style="height: 40px;" class="btn-main" >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3333 17H10.6666C10.12 17 9.66663 16.5467 9.66663 16C9.66663 15.4533 10.12 15 10.6666 15H21.3333C21.88 15 22.3333 15.4533 22.3333 16C22.3333 16.5467 21.88 17 21.3333 17Z" fill="white"/>
                  <path d="M16 22.3337C15.4533 22.3337 15 21.8803 15 21.3337V10.667C15 10.1203 15.4533 9.66699 16 9.66699C16.5467 9.66699 17 10.1203 17 10.667V21.3337C17 21.8803 16.5467 22.3337 16 22.3337Z" fill="white"/>
                  <path d="M20 30.3337H12C4.75996 30.3337 1.66663 27.2403 1.66663 20.0003V12.0003C1.66663 4.76033 4.75996 1.66699 12 1.66699H20C27.24 1.66699 30.3333 4.76033 30.3333 12.0003V20.0003C30.3333 27.2403 27.24 30.3337 20 30.3337ZM12 3.66699C5.85329 3.66699 3.66663 5.85366 3.66663 12.0003V20.0003C3.66663 26.147 5.85329 28.3337 12 28.3337H20C26.1466 28.3337 28.3333 26.147 28.3333 20.0003V12.0003C28.3333 5.85366 26.1466 3.66699 20 3.66699H12Z" fill="white"/>
                  </svg>
                  اضافة جدول 
                  
              </button>
            </div>
          </div>
          <div class="row p-5">
            <div v-for="(item,i) in items" :key="i" class="col-md-4 mb-3">
              <router-link class="router-link" :to="getRouteLocale('service-provider-my-schedule-show',{id:item.id})">
                <categoryScheduleCard :item="item" />
            </router-link>
            </div>
            <div class="col-md-4 mb-3">
            <div class="box border rounded-2 p-5 h-100">
                <div class="d-flex justify-content-center align-items-center w-100 h-100">
                <button class="btn" @click="openDialogNewCatSchedule"> <PlusCircleOutlineIcon  :size="'112'"/>
                </button>
                
                </div>
              </div>

            </div>
          </div>
        </div>
        <DialogNewSchedule :group="group" />
        <DialogNewCategorySchedule @success="initializing" :group="groupCat"/>
    </div>
</template>

<script>
import DialogNewSchedule from './dialogs/new-schedule/index.vue'
import DialogNewCategorySchedule from './dialogs/category-schedule/index.vue'
import categoryScheduleCard from './category-schedule-card.vue'
import categoriesScheduleAPI from '@/services/api/service-provider/categories-schedule'
import PlusCircleOutlineIcon from '@/components/icon-svg/plus-circle-outline.vue'

export default {
 name:'my-schedule',
 components:{
  DialogNewSchedule,
  DialogNewCategorySchedule,
  categoryScheduleCard,
  PlusCircleOutlineIcon
 },
 data:()=>{
    return {
      items:[],
        group:'new-schedule',
        groupCat:'new-category-schedule',
    }
 },
 methods:{
  openDialogNewSchedule(){
    this.fireOpenDialog(this.group)
  },
  openDialogNewCatSchedule(){
    this.fireOpenDialog(this.groupCat)
  },
  async initializing(){
    try {
      let { data } = await categoriesScheduleAPI.getAll();
      if(data.success){
        this.items = data.data
      }
    } catch (error) {
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