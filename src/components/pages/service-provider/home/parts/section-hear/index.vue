<template>
    <div class="sex-eight mt-5  max-width-100-hidden">
        <div class="container position-relative">
            <h2 class="home-section-title">ماذا يقولون المشتركين في مقدمي الخدمات</h2>
            <div class="position-absolute dote" style="color: #1FB9B3 !important">
                <svg width="62" height="47" viewBox="0 0 62 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 30.9135C0 39.4234 6.11624 46.5439 13.2519 46.5439C20.2176 46.5439 25.4844 41.1601 25.4844 34.2132C25.4844 26.7454 19.0283 21.7089 10.5335 21.1879C12.7422 15.6304 16.4799 9.72558 23.7854 2.25772L21.5768 0C7.47541 8.16254 0 20.4932 0 30.9135ZM36.3577 30.9135C36.3577 39.4234 42.4739 46.5439 49.6095 46.5439C56.5753 46.5439 61.842 41.1601 61.842 34.2132C61.842 26.7454 55.386 21.7089 46.8912 21.1879C49.0999 15.6304 52.8376 9.72558 60.1431 2.25772L57.9344 0C43.8331 8.16254 36.3577 20.4932 36.3577 30.9135Z"
                        fill="currentColor" />
                </svg>

            </div>
            <div :id="carouselId" class="feature-carousel owl-carousel owl-theme  mt-5">
                <ItemSlide v-for="(item, i) in items" :key="i" :title="item.title" :desc="item.desc"
                    :image="item.user_info.image" />
            </div>
        </div>
    </div>
</template>

<script>
import commonAPI from '@/services/api/common'
import ItemSlide from './parts/opinion-item.vue'
export default {
    name: 'section-hear',
    components: {
        ItemSlide
    },
    data: (vm) => {
        return {
            carouselId: `carousel-${vm.generateRandomString(8)}`,
            loading: true,
            items: []
        }
    },
    methods: {

        async initializing() {
            this.loading = true;
            try {
                let { data } = await commonAPI.getOpinions({ department_name: 'service-provider' })
                console.log(data)
                if (data.success) {
                    this.items = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
            this.loading = false;
        }
    },
    async mounted() {
        await this.initializing()
        window.$(`#${this.carouselId}`).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        })
    }
}
</script>
  
<style scoped>
.dote {
    right: -70px !important;
    color: #1FB9B3 !important;
}
</style>