<template>
 <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container">
      <div class="row justify-content-between align-items-center ">
        <div class="col-md-6">
          <h3>
            جدول خدمة
            <a href="" style="color: #F2631C;">
              {{category_schedule.title}}
            </a>
          </h3>

        </div>
        <div class="col-md-6 text-end">
          <button  style="height: 40px;" class="bg-main text-white border-0 rounded-2 px-3" @click="openDialogNewCatSchedule">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.3333 17H10.6666C10.12 17 9.66663 16.5467 9.66663 16C9.66663 15.4533 10.12 15 10.6666 15H21.3333C21.88 15 22.3333 15.4533 22.3333 16C22.3333 16.5467 21.88 17 21.3333 17Z"
                fill="white" />
              <path
                d="M16 22.3337C15.4533 22.3337 15 21.8803 15 21.3337V10.667C15 10.1203 15.4533 9.66699 16 9.66699C16.5467 9.66699 17 10.1203 17 10.667V21.3337C17 21.8803 16.5467 22.3337 16 22.3337Z"
                fill="white" />
              <path
                d="M20 30.3337H12C4.75996 30.3337 1.66663 27.2403 1.66663 20.0003V12.0003C1.66663 4.76033 4.75996 1.66699 12 1.66699H20C27.24 1.66699 30.3333 4.76033 30.3333 12.0003V20.0003C30.3333 27.2403 27.24 30.3337 20 30.3337ZM12 3.66699C5.85329 3.66699 3.66663 5.85366 3.66663 12.0003V20.0003C3.66663 26.147 5.85329 28.3337 12 28.3337H20C26.1466 28.3337 28.3333 26.147 28.3333 20.0003V12.0003C28.3333 5.85366 26.1466 3.66699 20 3.66699H12Z"
                fill="white" />
            </svg>
            تعديل

          </button>
          <button @click="deleteCategory" style="height: 40px;" class="bg-danger text-white border-0 rounded-2 px-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28 8.97363C27.9733 8.97363 27.9333 8.97363 27.8933 8.97363C20.84 8.26696 13.8 8.00029 6.82668 8.70696L4.10668 8.97363C3.54668 9.02696 3.05334 8.62696 3.00001 8.06696C2.94668 7.50696 3.34668 7.02696 3.89334 6.97363L6.61334 6.70696C13.7067 5.98696 20.8933 6.26696 28.0933 6.97363C28.64 7.02696 29.04 7.52029 28.9867 8.06696C28.9467 8.58696 28.5067 8.97363 28 8.97363Z"
                fill="white" />
              <path
                d="M11.3334 7.62699C11.2801 7.62699 11.2267 7.62699 11.1601 7.61366C10.6267 7.52033 10.2534 7.00033 10.3467 6.46699L10.6401 4.72033C10.8534 3.44033 11.1467 1.66699 14.2534 1.66699H17.7467C20.8667 1.66699 21.1601 3.50699 21.3601 4.73366L21.6534 6.46699C21.7467 7.01366 21.3734 7.53366 20.8401 7.61366C20.2934 7.70699 19.7734 7.33366 19.6934 6.80032L19.4001 5.06699C19.2134 3.90699 19.1734 3.68033 17.7601 3.68033H14.2667C12.8534 3.68033 12.8267 3.86699 12.6267 5.05366L12.3201 6.78699C12.2401 7.28033 11.8134 7.62699 11.3334 7.62699Z"
                fill="white" />
              <path
                d="M20.2799 30.3334H11.7199C7.06661 30.3334 6.87995 27.7601 6.73328 25.6801L5.86661 12.2534C5.82661 11.7068 6.25328 11.2268 6.79995 11.1868C7.35995 11.1601 7.82661 11.5734 7.86661 12.1201L8.73328 25.5468C8.87995 27.5734 8.93328 28.3334 11.7199 28.3334H20.2799C23.0799 28.3334 23.1333 27.5734 23.2666 25.5468L24.1333 12.1201C24.1733 11.5734 24.6533 11.1601 25.1999 11.1868C25.7466 11.2268 26.1733 11.6934 26.1333 12.2534L25.2666 25.6801C25.1199 27.7601 24.9333 30.3334 20.2799 30.3334Z"
                fill="white" />
              <path
                d="M18.2133 23H13.7733C13.2266 23 12.7733 22.5467 12.7733 22C12.7733 21.4533 13.2266 21 13.7733 21H18.2133C18.76 21 19.2133 21.4533 19.2133 22C19.2133 22.5467 18.76 23 18.2133 23Z"
                fill="white" />
              <path
                d="M19.3333 17.667H12.6666C12.12 17.667 11.6666 17.2137 11.6666 16.667C11.6666 16.1203 12.12 15.667 12.6666 15.667H19.3333C19.88 15.667 20.3333 16.1203 20.3333 16.667C20.3333 17.2137 19.88 17.667 19.3333 17.667Z"
                fill="white" />
            </svg>
            حذف
          </button>
        </div>
      </div>
      <div>
        <div class=" m-4">

          <!--calendar-->
          <div class="calendar-service-schedule" :class="{ 'mobile': isMobile }">
            <d-calendar v-if="!loading" class="custom-calendar max-w-full" is-expanded :masks="masks" disable-page-swipe
              :attributes="attributes" @dayclick="dayclick">
              <template v-slot:day-content="{ day, attributes }">
                <div class="d-flex flex-column h-100 z-10 overflow-hidden "
                  :class="{ 'bg-day': attributes && attributes.some(x => x.customData) }"
                  :style="{background:(attributes && attributes.some(x => x.customData))?category_schedule.color:'inherit'}"
                  
                  >

                  <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
                  <div
                    class="d-flex flex-column justify-content-center align-items-start flex-grow-1 overflow-y-auto overflow-x-auto">
                    <div v-for="attr in attributes" :key="attr.id"
                      class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1 w-100">
                      <div class="text-center" :class="attr.customData.class">
                        <bdi > {{ timeFormatAMPM(attr.customData.start_hour, true) }} : {{
                          timeFormatAMPM(attr.customData.end_hour, true)
                        }}</bdi>
                      </div>
                      <div class="text-center w-100">
                      
                        <button  @click="showMenu($event,attr.customData)" class="btn" >
                          <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        
                     
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template #day-popover="{ day, format, masks }">
                <div class="text-xs text-gray-300 font-semibold text-center">
                  {{ format(day.date, masks.dayPopover) }}
                  <hr class="mt-1" />
                  <div :class="{ 'text-right': $i18n.locale == 'ar', 'text-left': $i18n.locale !== 'ar' }">
                    <p class=" pb-1 mb-1">{{ day.attributes[0].customData.categoryName }}</p>
                    <p class=" pb-1 mb-1">{{ $t('titled') }} : {{ day.attributes[0]?day.attributes[0].customData.title:'N/A' }}</p>
                    <p class=" pb-1 mb-1">{{ $t('at-time') }} : {{ timeFormatAMPM(day.attributes[0].customData.time) }}
                    </p>
                  </div>
                </div>
              </template>
            </d-calendar>
          </div>
        </div>
      </div>
    </div>
    <div class="day-menu" :style="styleObject">
                          <!-- Dropdown menu links -->
                          <button class="btn" @click="updateEvent" href="#">تعديل </button>
                          <button class="btn" @click="deleteEvent"  href="#">حذف</button>
                          
    </div>
    <delCatItemDialog />
    <DialogNewCategorySchedule @success="successUpdate"/>
    <delItemDialog @success="deleteEventSuccess" />
    <DialogNewSchedule @success="updateEventSuccess"/>
  </div>
</template>

<script>
import schedulesAPI from '@/services/api/service-provider/schedules';
import categoriesScheduleAPI from '@/services/api/service-provider/categories-schedule'
import delCatItemDialog from '../dialogs/category-schedule/del-item.vue';
import delItemDialog from '../dialogs/new-schedule/del-item.vue';
import DialogNewCategorySchedule from '../dialogs/category-schedule/index.vue'
import DialogNewSchedule from '../dialogs/new-schedule/index.vue'

export default {
  name: 'page-schedule',
  components:{
    delCatItemDialog,
    delItemDialog,
    DialogNewSchedule,
    DialogNewCategorySchedule
  },
  data: () => {
    return {
      styleObject:{
        display:'none'
      },
      loading: true,
      eventSelected:null,
      hasError:false,
      category_schedule:null,
      items: [],
      attributes:[],
      masks: {
        weekdays: 'WWW',
      },
    }
  },
 
  methods: {
    updateEvent(){
      this.fireOpenDialog('new-schedule',this.eventSelected)
      this.hideMenu()
    },
    deleteEvent(){
      this.fireOpenDialog('delete-schedule',this.eventSelected)
      this.hideMenu()
    },
    deleteEventSuccess(item){
      this.items =  this.items.filter(x=>x.id!=item.id)
      this.updateAttributes();
    },
    updateEventSuccess(item){
    
     let index = this.items.findIndex(x=>x.id==item.id)
     this.items[index] = Object.assign(this.items[index],item)
      this.updateAttributes();
    },
    successUpdate(dataEvent){
            this.category_schedule.title=dataEvent.title
            this.category_schedule.color=dataEvent.color;
            this.updateAttributes()
    },
    openDialogNewCatSchedule(){
    this.fireOpenDialog('new-category-schedule',this.category_schedule)
  },
  hideMenu(){
    if(!this.eventSelected) return;
    this.eventSelected = null;
    this.styleObject.display = 'none';
  },
    showMenu(evt,itemSelected) {
      this.eventSelected = itemSelected
      let width = evt.target.offsetWidth;
      let height = evt.target.offsetHeight;
      console.log('evt',evt,width)
      let x = evt.clientX - 40 -20- evt.offsetX ;
      let y = evt.pageY;
      this.styleObject.display = 'flex';
      this.styleObject.position = 'absolute';
      this.styleObject.top = y+'px';
      this.styleObject.left = x+'px';
      this.styleObject['z-index'] = 9999;
    },
    dayclick(day) {
      if (process.env.NODE_ENV !== 'production')
        console.log('day', day)
    },
     deleteCategory(){
      this.fireOpenDialog('delete-category-schedule',this.category_schedule)
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await categoriesScheduleAPI.getItem(this.$route.params.id)
        if (data.success) {
          this.category_schedule = data.data
        }else{
          this.hasError = true;
        }
      } catch (error) {
        console.log('error', error)
        this.hasError = true;
      }
      this.loading = false;
    },
    updateAttributes(){
      this.attributes = [// Attributes for todos
        ...this.items.map(event => ({
          dates: {start:new Date(event.start_date),end:new Date(event.end_date)},
          popover: true,
          customData: event,
        })),
      ]
    },
    async loadList() {
      this.loading = true;
      try {
        let { data } = await schedulesAPI.getAll({category_id:this.$route.params.id})
        if (data.success) {
          this.items = data.data.map(e=>{
            let {category,...b} = e
            return {...b,category_id:category.id}
          })
          if (process.env.NODE_ENV !== 'production')
            this.items.push(
              {
                id: -1, title: "تجريب", categoryName: "ويبنار تججريب",
                start_date: this.dateToString(new Date()),end_date: this.dateToString(new Date()), image: null, start_hour: "02:37", end_hour: '15:00',
                class: 'text-white' ,

              }
            )
              this.updateAttributes()
        }
      } catch (error) {
        console.log('error', error)
      }
      this.loading = false;
    }
  },
  async mounted() {
    await this.initializing()
    this.loadList()
  }
}
</script>

<style>
.day-menu{
position: relative;
display: flex;
flex-direction: column;
align-items: stretch;
width: 150px;
height: 80px;
background: #FFFFFF;
/* box */
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
border-radius: 0px 0px 8px 8px;
}
.day-menu>a{
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* or 142% */

align-items: center;
text-align: center;
color: #737373;
padding:10px;
width:100%;
}
.calendar-service-schedule::-webkit-scrollbar {
  width: 0px;
}

.calendar-service-schedule::-webkit-scrollbar-track {
  display: none;
}

.calendar-service-schedule .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;

}

.calendar-service-schedule .bg-day {
  background: orange;
  height: 100%;
  width: 100%;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-weeks {
  padding: 0;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-weekday {
  background-color: var(--weekday-bg);
  border-bottom: var(--weekday-border);
  border-top: var(--weekday-border);
  padding: 5px 0;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-day {
  /* padding: 0 5px 3px 5px;*/
  text-align: left;
  height: var(--day-height);
  min-width: var(--day-width);
  background-color: white;


}

.calendar-service-schedule .custom-calendar.vc-container .vc-day.weekday-1,
.calendar-service-schedule .custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}

.calendar-service-schedule .custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: var(--day-border);

}

.calendar-service-schedule .custom-calendar.vc-container .vc-day:not(.on-bottom).weekday-1 {
  border-bottom: var(--day-border-highlight);
}

.calendar-service-schedule .custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: var(--day-border);
}

.calendar-service-schedule .custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}
</style>