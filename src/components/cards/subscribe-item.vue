<template>
    <div class="border-bottom mt-3">
        <div class="d-flex justify-content-between d-flex gap-2 align-items-center ">
            <div class="d-flex gap-2 align-items-">
                <p class="menu-subscribe-item__status" :class="{ open: status == 'active', end: status == 'finished' }">
                    {{ statusText }}
                </p>
                <p class="menu-subscribe-item__title" style="color: #003439;">
                    {{ title }}
                </p>
            </div>
            <!-- <div>
                                <button v-if="status=='active'" class="btn border-danger text-danger mt-3">
                                    الغاء الاشتراك
                                </button>
                            </div> -->
        </div>
        <div class="d-flex gap-2">

            <p class="menu-subscribe-item__info">
                <emptyWalletIcon color="currentColor" :size="24" />

                {{ price }} {{ $t('riyals') }}
            </p>

            <p class="menu-subscribe-item__info">
                <timeIcon color="currentColor" :size="24" />

                تاريخ بداية الاشتراك : {{ dateReverse(dateStart) }}
            </p>
            <p class="menu-subscribe-item__info">
                <timerIcon color="currentColor" :size="24" />


                ينتهي في {{ dateReverse(dateEnd) }}
            </p>


        </div>
    </div>
</template>

<script>
import timeIcon from '../icon-svg/time.vue'
import emptyWalletIcon from '../icon-svg/empty-wallet.vue'
import timerIcon from '../icon-svg/timer.vue'
export default {
    props: {
        status: {
            type: String // active | expired | inactive
        },
        title: {
            type: String,
        },
        price: {
            type: [Number, String]
        },
        dateStart: {
            type: String
        },
        dateEnd: {
            type: String
        }
    },
    components: {
        timeIcon,
        emptyWalletIcon,
        timerIcon
    },
    computed: {
        statusText() {
            switch (this.status) {
                case 'active': return this.$t('status_subscribe_active')
                case 'finished': return this.$t('status_subscribe_expired')

                default: return ''
            }
        }
    }
}
</script>

<style scoped>
.menu-subscribe-item__status {
    background: #e2e2e3;
    color: rgb(6, 5, 5);
    border-radius: 5px;
    padding: 3px 13px;
    text-align: center;
    height: 24px;
    width: 72px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;

}

.menu-subscribe-item__status.open {
    background-color: #1FB9B3;
    color: white;

}

.menu-subscribe-item__status.end {
    background: #414042;
    color: #FFFFFF;
}

.menu-subscribe-item__title {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* or 120% */

    display: flex;
    align-items: center;
    text-transform: capitalize;

    color: #003439;
}

.menu-subscribe-item__info {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */


    color: #737373;
}</style>