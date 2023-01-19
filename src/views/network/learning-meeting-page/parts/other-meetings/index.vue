<template>
    <div>
        <div class="sec-five mt-5 p-3">

            <div class="">
                <div class="d-flex justify-content-between align-items-center container">
                    <h1> لقاءات تعليمية أخرى </h1>
                    <div>
                        <button class="more">{{ $t('more') }}</button>
                    </div>
                </div>
                <d-swiper v-if="!loading" is-auto :items="items">
                    <template v-slot="{ item }">
                        <router-link class="router-link"
                            :to="getRouteLocale('network-learning-meeting-show', { id: item.id })">
                            <meetingCard :img="item.image" :title="item.title" :owner="item.owner" :date="item.date"
                                :time="item.time" />
                        </router-link>
                    </template>
                </d-swiper>
            </div>
        </div>
    </div>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
import meetingCard from '@/components/cards/meeting.vue'
export default {
    name: 'other-meetings',
    components: {
        meetingCard
    },
    data: () => ({
        loading: true,
        items: []
    }),
    methods: {
        async loadOtherMeetings() {
            this.loading = true;

            try {
                let { data } = await meetingsAPI.getOtherMeetings(this.$route.params.id)
                if (data.success) {
                    this.items = data.data;

                } else {
                    this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
                this.hasError = true;
            }
            this.loading = false;
        }
    },
    mounted(){
        this.loadOtherMeetings()
    }
}
</script>

<style>

</style>