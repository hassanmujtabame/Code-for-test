<template>
    <div class="sex-eight mt-5">
        <div class="container">
            <h2 class="text-center"> ماذا يقولون  المسوقين بالعموله  {{ itemPage.name }} </h2>
            <div :id="carouselId" class="hear-carousel owl-carousel owl-theme  mt-5">
                <ItemSlide v-for="(item, i) in items" :key="i" :desc="item.desc"
                    :name="item.user_info ? item.user_info.name : 'N/A'" :image="item.user_info ? item.user_info.image : null" />

            </div>

        </div>

    </div>
</template>

<script>
import commonAPI from '@/services/api/common'
import ItemSlide from '@/components/cards/opinion-item'
export default {
    name: 'section-hear',
    props:{
        itemPage:{}
    },
    components: {
        ItemSlide
    },
    data: (vm) => {
        return {
            carouselId: `carousel-${vm.generateRandomString(8)}`,
            loading: true,
            // make the items emty array after solving the api issue
            items: [{"id":5,"department_name":"incubator","title":"هبه فراش","desc":"مؤسسة لعلامة هبة فرّاش لتصميم الازياء، رياديات منصة ملهمة انصح الجميع بالاشتراك فيها   والاستفادة من خدماتها.","image":null,"user_info":{"id":31,"image":"https:\/\/api.riadiat.sa\/uploads\/user.png","name":"رياديات","job":"التصوير"}}]
        }
    },
    methods: {

        async initializing() {
            this.loading = true;
            try {
                let { data } = await commonAPI.getOpinions({ department_name: 'incubator' })
                //console.log(data)
                if (data.success) {
                    // please uncomment this after solving api type
                    // this.items = data.data
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