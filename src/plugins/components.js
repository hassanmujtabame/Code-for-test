import Vue from 'vue'
import './directives'
import './audio-visual'
import DListItem from '@/components/list/d-list-item.vue'
import DRateDialog from '@/common/dialogs/rate-dialog/index.vue'
import DSuccessMessage from '@/common/dialogs/success-message/index.vue'
import DConfirmMessage from '@/common/dialogs/confirm-message/index.vue'
import DSwiper from '@/components/swiper/index.vue'
import DSwiper2 from '@/components/swiper/v2/index.vue'
import DSwiperSlide from '@/components/swiper/v2/slider.vue'
import DCalendarSimple from '@/components/calendar/index.vue'
import DCalendar from '@/components/calendar/calendar.vue'
import DHover from '@/components/hover/index.vue'
import DDatePicker from '@/components/calendar/d-date-picker.vue'
import DCarousel from '@/components/carousel/index.vue'
import DCarouselSlide from '@/components/carousel/slide.vue'
import DFilterList from '@/components/filter-list/index.vue'
import DMultiSelecetTagInput from '@/components/inputs/multi-select/tags.vue'
import DChip from '@/components/chips/index.vue'
import RSliderInput from '@/components/inputs/r-slider/index.vue'
import drowListInput from '@/components/inputs/multi-select/drown-list.vue'
import DMultiSelecetInput from '@/components/inputs/multi-select/d-multiselect.vue'
import DSelectInput from '@/components/inputs/multi-select/d-select.vue'
import DTextInput from '@/components/inputs/text-input/inline.vue'
import DMentionInput from '@/components/inputs/text-input/mention'
import DFileInput from '@/components/inputs/file-input/index.vue'
import DAudioInput from '@/components/inputs/audio-input/index.vue'
import DCheckboxInput from '@/components/inputs/check-input/index.vue'
import DRadioInput from '@/components/inputs/radio-input/index.vue'
import DTextareaInput from '@/components/inputs/text-input/text-area.vue'
import DatePickerInput from '@/components/inputs/date-picker/index.vue'
import DDatePickerInput from '@/components/inputs/date-picker/d-datepicker.vue'
import DatePickerRange from '@/components/inputs/date-picker/range.vue'
import DCkeditorClassicInput from '@/components/inputs/d-ckeditor/classic.vue'
import DUserInfo from '@/components/cards/user-info.vue'
import DUserInfoLi from '@/components/cards/user-info-left-img.vue'
import DStoryCard from '@/components/cards/story.vue'
import DJobCard from '@/components/cards/job.vue'
import DExpandedPanel from '@/components/expanded-panel/ExpandedPanel'
import DExpandedPanelItem from '@/components/expanded-panel/ExpandedPanelItem'
import DCoursePanel from '@/components/panels/course-panel/index'
import DBlogInfoCard from '@/components/cards/blog-info.vue'
import DDialogLarge from '@/components/modals/large.vue'
import DDialogSimple from '@/components/modals/simple.vue'
import DOverlaySimple from '@/components/overlays/simple.vue'
import SectionContinueLearning from '@/components/sections/section-continue-learning/index.vue'
import RequestPurchaseCard from '@/components/cards/request-purchase-service.vue'
import MyPurchaseCard from '@/components/cards/my-purchase-client.vue'
import MyRequestCard from '@/components/cards/my-request-client.vue'
import ErrorInput from '@/components/error-input/index.vue'
import CreditCardImage from '@/components/credit-card/credit-card-img.vue'
import DRateStars from '@/components/rate-stars/index.vue'
import DRateFontStars from '@/components/rate-stars/show-rate.vue'
import DDotsProgress from '@/components/dots-progress/index'
import clickOutside from './click-outside'
import dChatCard from '@/components/chat/chat-card/index'
import dChatCircle from '@/components/chat/circle'
import dDropdown from '@/components/dropdown/index'
import dProgressBar from '@/components/progress-bar/index'
import dLoadingCircleFill from '@/components/loading/circle-fill/index'
import dLoadingTailSpin from '@/components/loading/tail-spin/index'
import UserPreviewProfileCard from '@/components/cards/user/preview-profile-card.vue'
import dStepperHead from '@/components/stepper/head'
import dStepperHeadItem from '@/components/stepper/head-item'
import dStepperHeadIcon from '@/components/stepper/head-icon'

Vue.directive('click-outside',clickOutside)

Vue.component(dStepperHead.name,dStepperHead)
Vue.component(dStepperHeadItem.name,dStepperHeadItem)
Vue.component(dStepperHeadIcon.name,dStepperHeadIcon)
Vue.component(DListItem.name,DListItem)
Vue.component(DChip.name,DChip)
Vue.component(DExpandedPanel.name,DExpandedPanel)
Vue.component(DExpandedPanelItem.name,DExpandedPanelItem)
Vue.component(dLoadingCircleFill.name,dLoadingCircleFill)
Vue.component(dLoadingTailSpin.name,dLoadingTailSpin)
Vue.component(dProgressBar.name,dProgressBar)
Vue.component(dChatCircle.name,dChatCircle)
Vue.component(dChatCard.name,dChatCard)
Vue.component(dDropdown.name,dDropdown)
Vue.component(UserPreviewProfileCard.name, UserPreviewProfileCard)
Vue.component('d-rate-dialog', DRateDialog)
Vue.component('d-success-message', DSuccessMessage)
Vue.component('d-confirm-message', DConfirmMessage)
Vue.component('d-credit-card', CreditCardImage)
Vue.component('d-rate-stars', DRateStars)
Vue.component('d-rate-font-stars', DRateFontStars)

Vue.component('d-error-input', ErrorInput)
Vue.component('d-drown-list', drowListInput)
Vue.component('d-multiselect-input', DMultiSelecetInput)//improve d-drown-list
Vue.component('d-multi-select-tag', DMultiSelecetTagInput)
Vue.component('date-picker-input', DatePickerInput)
Vue.component(DTextInput.name, DTextInput)
Vue.component(DMentionInput.name, DMentionInput)
Vue.component(DFileInput.name, DFileInput)
Vue.component('d-audio-input', DAudioInput)
Vue.component('d-check-input', DCheckboxInput)
Vue.component('d-radio-input', DRadioInput)
Vue.component('d-textarea-input', DTextareaInput)
Vue.component('d-select-input', DSelectInput)
Vue.component('d-datepicker-input', DDatePickerInput)// just for date only
Vue.component('date-picker-range', DatePickerRange)
Vue.component('d-ckeditor-classic', DCkeditorClassicInput)
Vue.component('section-continue-learning', SectionContinueLearning)
Vue.component('d-job-card', DJobCard)
Vue.component('d-blog-info-card', DBlogInfoCard)
Vue.component('d-request-purchase-card', RequestPurchaseCard)
Vue.component('d-my-purchase-card', MyPurchaseCard)
Vue.component('d-my-request-card', MyRequestCard)
Vue.component('d-story-card', DStoryCard)
Vue.component('d-overlays-simple', DOverlaySimple)
Vue.component('d-dots-progress', DDotsProgress)
Vue.component('d-dialog-large', DDialogLarge)
Vue.component('d-dialog-simple', DDialogSimple)
Vue.component('d-course-panel', DCoursePanel)
Vue.component('d-swiper', DSwiper)
Vue.component('d-swiper-2', DSwiper2)
Vue.component('d-swiper-slide', DSwiperSlide)
Vue.component('d-calendar', DCalendar)
Vue.component('d-calendar-simple', DCalendarSimple)
Vue.component('d-date-picker', DDatePicker)
Vue.component('d-hover', DHover)
Vue.component('d-carousel', DCarousel)
Vue.component('d-carousel-slide', DCarouselSlide)
Vue.component('d-filter-list', DFilterList)
Vue.component('rslider-input', RSliderInput)
Vue.component('d-user-info', DUserInfo)
Vue.component('d-user-info-li', DUserInfoLi)