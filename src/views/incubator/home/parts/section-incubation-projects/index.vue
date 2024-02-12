<template>
    <div class="sec-five p-5">
        <div class=" reduced-padding">
            <div class="section-header d-flex justify-content-between align-items-center mb-3">
                <h1></h1>
                <h1 class="home-section-title text-center">المشاريع المحتضنة</h1>
                <!-- <div>
                    <button class="more-btn">{{ $t('more') }}</button>
                </div> -->
            </div>
            <DSwiper v-if="!loading" :slides-per-view="5" :space-between="10" is-auto :navigation="true" :items="items"
                :autoplay="{ delay: 3000, disableOnInteraction: false }">
                <template v-slot:default="{ item }">
                    <router-link class="router-link" :to="getRouteLocale('incubator-project-show', { id: item.id })">
                        <CardVue :title="item.title" :img="item.image" />
                    </router-link>
                </template>
            </DSwiper>
        </div>
    </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardVue from './card.vue'
import incubatorAPI from '@/services/api/incubator';

export default {
    name: 'section-incubation-projects',
    components: {
        DSwiper,
        CardVue
    },
    data: () => ({
        loading: true,
        items: []
    }),
    methods: {
        async initializing() {
            this.loading = true;
            try {
                let { data } = await incubatorAPI.getProjects({ paginate: 10 })
                if (data.success) {
                    this.items = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
            this.loading = false;
        }
    },
    mounted() {
        this.initializing()
    }
}
</script>
<style>
.reduced-padding {
    padding-left: 10px;
    /* Adjust as needed */
    padding-right: 10px;
    /* Adjust as needed */
}
</style>

<style>
.section-header {
    padding-bottom: 15px;
}

.home-section-title {
    font-size: 24px;
    color: #333;
}

.more-btn {
    border: none;
    color: #1FB9B3;
    padding: 10px 20px;
    cursor: pointer;
    transition: color 0.2s;
    text-decoration: underline;
}


.more-btn:hover {
    background-color: #0056b3;
}
</style>
