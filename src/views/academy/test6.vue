<template>
	<section>
  <div class="position-relative" style="margin-top:85px">
        <swiper slidesPerView='2' slidesPerColumn='2' slidesPerGroup='2' slidesPerColumnFill='row'
				>
            <SwiperSlide v-for="(item,i) in items" :key="i"
            >

                <slot :item="item">
									{{item}}
                </slot>

            </SwiperSlide>

        </swiper>
    </div>
	</section>
</template>
<script>
import {Navigation, Pagination, Thumbs, Controller} from 'swiper'

import {SwiperCore, Swiper, SwiperSlide} from 'swiper-vue2'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Thumbs, Controller])
export default {
    name: 'section-lecture',
	components: {
        Swiper, SwiperSlide
    },
		data:()=>({
	
items:['1','2','3','4','5','6','7','8']
  }),
}
</script>
