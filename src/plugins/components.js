import Vue from 'vue'

import DSwiper from '@/components/swiper/index.vue'
import DCalendar from '@/components/calendar/index.vue'
import DCarousel from '@/components/carousel/index.vue'
import DCarouselSlide from '@/components/carousel/slide.vue'
import DFilterList from '@/components/filter-list/index.vue'
import RSliderInput from '@/components/inputs/r-slider/index.vue'
import DUserInfo from '@/components/cards/user-info.vue'
import DUserInfoLi from '@/components/cards/user-info-left-img.vue'
import DDialogLarge from '@/components/modals/large.vue'
import DDialogSimple from '@/components/modals/simple.vue'

Vue.component('d-dialog-large', DDialogLarge)
Vue.component('d-dialog-simple', DDialogSimple)
Vue.component('d-swiper', DSwiper)
Vue.component('d-calendar', DCalendar)
Vue.component('d-carousel', DCarousel)
Vue.component('d-carousel-slide', DCarouselSlide)
Vue.component('d-filter-list', DFilterList)
Vue.component('rslider-input', RSliderInput)
Vue.component('d-user-info', DUserInfo)
Vue.component('d-user-info-li', DUserInfoLi)