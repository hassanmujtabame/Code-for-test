import Vue from 'vue'

import DSwiper from '@/components/swiper/index.vue'
import DCalendarSimple from '@/components/calendar/index.vue'
import DCalendar from '@/components/calendar/calendar.vue'
import DDatePicker from '@/components/calendar/d-date-picker.vue'
import DCarousel from '@/components/carousel/index.vue'
import DCarouselSlide from '@/components/carousel/slide.vue'
import DFilterList from '@/components/filter-list/index.vue'
import RSliderInput from '@/components/inputs/r-slider/index.vue'
import DatePickerInput from '@/components/inputs/date-picker/index.vue'
import DatePickerRange from '@/components/inputs/date-picker/range.vue'
import DCkeditorClassicInput from '@/components/inputs/d-ckeditor/classic.vue'
import DUserInfo from '@/components/cards/user-info.vue'
import DUserInfoLi from '@/components/cards/user-info-left-img.vue'
import DStoryCard from '@/components/cards/story.vue'
import DJobCard from '@/components/cards/job.vue'
import DBlogInfoCard from '@/components/cards/blog-info.vue'
import DDialogLarge from '@/components/modals/large.vue'
import DDialogSimple from '@/components/modals/simple.vue'
import DOverlaySimple from '@/components/overlays/simple.vue'
import SectionContinueLearning from '@/components/sections/section-continue-learning/index.vue'
import RequestPurchaseCard from '@/components/cards/request-purchase-service.vue'
import ErrorInput from '@/components/error-input/index.vue'


Vue.component('d-error-input', ErrorInput)
Vue.component('date-picker-input', DatePickerInput)
Vue.component('date-picker-range', DatePickerRange)
Vue.component('d-ckeditor-classic', DCkeditorClassicInput)
Vue.component('section-continue-learning', SectionContinueLearning)
Vue.component('d-job-card', DJobCard)
Vue.component('d-blog-info-card', DBlogInfoCard)
Vue.component('d-request-purchase-card', RequestPurchaseCard)
Vue.component('d-story-card', DStoryCard)
Vue.component('d-overlays-simple', DOverlaySimple)
Vue.component('d-dialog-large', DDialogLarge)
Vue.component('d-dialog-simple', DDialogSimple)
Vue.component('d-swiper', DSwiper)
Vue.component('d-calendar', DCalendar)
Vue.component('d-calendar-simple', DCalendarSimple)
Vue.component('d-date-picker', DDatePicker)
Vue.component('d-carousel', DCarousel)
Vue.component('d-carousel-slide', DCarouselSlide)
Vue.component('d-filter-list', DFilterList)
Vue.component('rslider-input', RSliderInput)
Vue.component('d-user-info', DUserInfo)
Vue.component('d-user-info-li', DUserInfoLi)