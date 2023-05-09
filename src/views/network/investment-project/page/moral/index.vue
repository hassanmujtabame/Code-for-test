<template>
    <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
            <div class="">
                <h3>مشروع معنوي : {{ itemPage.title }}</h3>
            </div>
            <div>
                <button @click="sendAbuse" style="background-color:#F6F8F9 ;" class="btn">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.86719 30.3337C6.32052 30.3337 5.86719 29.8803 5.86719 29.3337V2.66699C5.86719 2.12033 6.32052 1.66699 6.86719 1.66699C7.41385 1.66699 7.86719 2.12033 7.86719 2.66699V29.3337C7.86719 29.8803 7.41385 30.3337 6.86719 30.3337Z"
                            fill="#CDD7D8" />
                        <path
                            d="M21.8005 22.333H6.86719C6.32052 22.333 5.86719 21.8797 5.86719 21.333C5.86719 20.7863 6.32052 20.333 6.86719 20.333H21.8005C23.2539 20.333 23.9339 19.9463 24.0672 19.613C24.2005 19.2797 24.0005 18.533 22.9605 17.5063L21.3605 15.9063C20.7072 15.333 20.3072 14.4663 20.2672 13.5063C20.2272 12.493 20.6272 11.493 21.3605 10.7597L22.9605 9.15967C23.9472 8.17301 24.2539 7.37301 24.1072 7.02634C23.9605 6.67967 23.2005 6.33301 21.8005 6.33301H6.86719C6.30719 6.33301 5.86719 5.87967 5.86719 5.33301C5.86719 4.78634 6.32052 4.33301 6.86719 4.33301H21.8005C24.7205 4.33301 25.6539 5.54634 25.9605 6.26634C26.2539 6.98634 26.4539 8.50634 24.3739 10.5863L22.7739 12.1863C22.4405 12.5197 22.2539 12.9863 22.2672 13.453C22.2805 13.853 22.4405 14.213 22.7205 14.4663L24.3739 16.1063C26.4139 18.1463 26.2139 19.6663 25.9205 20.3997C25.6139 21.1063 24.6672 22.333 21.8005 22.333Z"
                            fill="#CDD7D8" />
                    </svg>
                    قدم بلاغ
                </button>
            </div>
        </div>
        <div class="row mt-3">
            <!--image or video-->
            <div class="col-md-6">
                <iframe v-if="itemPage.video" style="height: 360px;" class="rounded-3 w-100" src="https://www.youtube.com/embed/dGG9pWXS3ZQ"
                    :title="itemPage.title" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <div style="height: 360px;" class="border rounded-3  w-100">
                <img :src="itemPage.image"  class="rounded-3 img-fill" :alt="itemPage.title" />
                </div>
            </div>
            <div class="col-md-6">
                <!--card-info-->
                <cardInfo 
                
                 :description="itemPage.description"
                 :publisher="itemPage.user_info.name"
                 :date-publish="itemPage.created_at"
                 :rest-day="itemPage.rest_days"
                 :offers="itemPage.count_invest"
                 :offered_property="itemPage.offered_property"
                 :minRent="itemPage.amount_financing_required"
                 :maxRent="itemPage.minimum_investment"
                 :place="itemPage.place"
                 @make-offer="openConfirmOfferDialog"
                 class="h-100"
                />
            </div>
        </div>
        <div class="row justify-content-between mt-3">

            <div class="col-md-6">
                <!--description-->
                <descriptionCard :itemPage="itemPage" :isOwner="isOwner" />
            </div>
            <div class="col-md-4">
               
                <!--team-card -->
                <teamCard :itemPage="itemPage" :isOwner="isOwner" />
            
            </div>
        </div>
        <!--dialogs-->
        <confirmMakeOfferDiag />
        <successMakeOfferDiag />
        <makeOfferDiag />
    </div>
</template>

<script>
import confirmMakeOfferDiag from '../dialogs/confirm-make-offer.vue'
import successMakeOfferDiag from '../dialogs/success-make-offer.vue'
import makeOfferDiag from '../dialogs/make-offer.vue'
import cardInfo from './card-info.vue';
import descriptionCard from './card-description.vue';
import teamCard from '../common/team-card';

export default {
    name: 'investment-prpject-page',
    props: {
        itemPage: {},
        isOwner: {
            type: Boolean,
            default: false
        }
    },
    components: {
        confirmMakeOfferDiag,
        successMakeOfferDiag,
        makeOfferDiag,
        descriptionCard,
        teamCard,
        cardInfo
    },
    data: () => {
        return {
            colors: ['#F2631C', '#FFBC00', '#2C98B3']
        }
    },
    methods: {
        sendAbuse() {
            this.showAbuseDialog({ item: this.itemPage, form: { table_type: 'project-investment', table_id: this.itemPage.id } })
        },

        openConfirmOfferDialog() {
            this.fireOpenDialog('confirm-make-offer', this.itemPage)
        },

    },
    mounted() {

    }
}
</script>