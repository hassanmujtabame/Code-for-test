<template>
    <div class="sex-eight mt-5  max-width-100-hidden">
        <div class="container" v-if="items.length > 0">
            <h2 class="text-center">ماذا يقولون المشتركات في الاستشارات </h2>
            <div :id="carouselId" class="hear-carousel owl-carousel owl-theme  mt-5">
                <ItemSlide v-for="(item, i) in items" :key="i" :desc="item.desc" :name="item.user_info.name"
                    :image="item.user_info.image" />

            </div>
        </div>
    </div>
</template>
  
  
<script>
import commonAPI from '@/services/api/common'
import ItemSlide from '@/components/cards/opinion-item'
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
                let { data } = await commonAPI.getOpinions({ department_name: 'consultants' })
                //console.log(data)
                if (data.success) {
                    this.items = data.data
                } else {
                    window.SwalError(data.message)
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
                    items: 1
                }
            }
        })
    }
}
</script>
  
<style></style>