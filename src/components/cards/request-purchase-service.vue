<template>
    <div class="request-purchase-service box">

        <div class="d-flex align-items-center justify-content-between">
            <div class="request-purchase-service__wrapper-title">
                <div class="request-purchase-service__status-request" :class="statusClass">
                    {{ statusName }}
                </div>
                <h4 class="request-purchase-service__title clickable" @click="routeFull(item)">
                    طلب شراء خدمة :
                    <span class="request-purchase-service__title-name">
                        {{ item.service.title }}
                    </span>
                </h4>
            </div>
            <div class="request-purchase-service__wrapper-date">
                <p class="request-purchase-service__date">
                    <d-time-icon :size="24" color="currentColor" />
                    تاريخ بداية الطلب : {{ dateReverse(item.created_at) }}
                </p>
            </div>


        </div>
        <div class="d-flex gap-2 flex-wrap">
            <p class="request-purchase-service__info">
                <d-user-rect-icon :size="16" color="currentColor" />
                {{ item.user_info.name }}
            </p>
            <p class="request-purchase-service__info">
                <d-localisation-icon :size="16" color="currentColor" />
                {{ item.service.state == 'online' ? $t('online') : item.service.city }}
            </p>
            <p class="request-purchase-service__info">
                <d-empty-wallet-icon :size="16" color="currentColor" />
                {{ item.service.price }} {{ $t('riyals') }}
            </p>
            <p class="request-purchase-service__info">
                <d-timer-icon :size="16" color="currentColor" />
                مدة التنفيذ: {{ numberToDay(item.service.execution_period) }}
            </p>
            <p v-if="item.service.state !== 'online'" class="request-purchase-service__info">
                <d-truck-icon :size="16" color="currentColor" />
                {{ $t(item.execution_place) }}
            </p>
            <p v-if="item.service.state !== 'online'" class="request-purchase-service__info">
                <d-thunder-icon :size="16" color="currentColor" />
                {{ periodToText(item.execution_period) }}

            </p>
            <p class="request-purchase-service__info">
                <d-heart-icon :size="16" color="currentColor" />
                عدد الطلبات {{ item.count_requests }}
            </p>
        </div>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
            <p class="request-purchase-service__description w-75 m-0" v-html="item.note">
            </p>
            <div v-if="item.service.state == 'offline' && ['waiting', 'underway'].includes(item.status)"
                class="d-flex  gap-1 flex-wrap">
                <button v-if="item.status == 'underway'" @click="askDeliveryPurchase" style="height: 40px; width: 100px;"
                    class="btn-main px-2 ">
                    طلب تسليم
                </button>
                <button v-if="item.status == 'waiting'" @click="confirmRequestPurchase" style="height: 40px; width: 100px;"
                    class="btn-main px-2 ">
                    تاكيد الطلب
                </button>
                <button class="btn rounded-2 border-danger text-danger px-2 bg-transparent"
                    @click="confirmCancelRequestPurchase">
                    إلغاء الطلب
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import requestPurchaseService from '@/services/api/service-provider/user/proposals.js'
export default {
    name: 'request-card',
    props: {
        item: {
            type: [Object, Array],
        },
        itemId: {
            type: [String, Number],
        },
        name: {
            type: String,
        },
        service: {
            type: String,
        },
        status: {
            type: String,
        },
        state: {
            type: String,
        },
        homeDelivery: {
            type: Boolean,
            default: true
        },
        delivery: {
            type: Boolean,
            default: true
        },
        place: {
            type: String,
        },
        routeFull: {
            type: Function
        },
        price: {
            type: [String, Number],
        },
        description: {
            type: String,
        },
        requests: {
            type: [String, Number],
        },
        during: {
            type: [String, Number],
        },
        dateRequest: {
            type: String,
        }

    },
    computed: {
        statusClass() {
            return `status-request-${this.status}`
        },
        statusName() {
            switch (this.status) {
                case 'finished': return "مكتمل";
                case 'finish': return "مكتمل";
                case 'waiting': return "قيد الانتظار";
                case 'underway': return "قيد التنفيذ";
                case 'cancel': return "ملغاة";
                case 'excluded': return "ملغاة";


                default:
                    return this.status
            }
        }
    },
    methods: {
        periodToText(period) {
            switch (period) {
                case 'time_available_product': return ' التسيلم عند توفر المنتج';
                case 'specific_date': return `التسيلم يوم ${this.dateReverse(this.item.specific_date)}`;
                default:
                    return 'N/A'
            }
        },
        confirmRequestPurchase() {
            this.fireOpenDialog('confirm-request-purchase', this.item)
        },
        askDeliveryPurchase() {
            this.router_push('service-provider-request-purchase-service-progress', { id: this.itemId })
        },
        confirmCancelRequestPurchase() {
            let dataEvent = {
                title: 'هل انت متاكد من الغاء طلب شراء الخدمة؟',
                description: '',
                btns: [
                    { title: 'تأكيد إلغاء الطلب', action: this.cancelRequestPurchase, class: 'btn btn-custmer' }
                ]
            }
            this.showConfirmMsg(dataEvent)
            this.$emit('cancel-success', this.item)
        },
        cancelRequestPurchase() {
            try {
                let { data } = requestPurchaseService.cancelRequestPurchase(this.item.id)
                if (data.success) {
                    let dataEvent = {
                        title: 'هل انت متاكد من الغاء طلب شراء الخدمة؟',
                        description: '',
                        btns: [
                            { title: 'حسنا', action: () => { }, class: 'btn btn-custmer' }
                        ]
                    }
                    this.showSuccessMsg(dataEvent)
                }
            } catch (error) {
                //
            }
        }
    }
}
</script>

<style scoped>
.box {
    padding: 10px;
}

.box-title {
    cursor: pointer;
}

.request-purchase-service__wrapper-title {
    display: flex;
}

.request-purchase-service__info {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */

    color: #737373;
}

.request-purchase-service__title {
    padding: 0px 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* or 120% */

    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #1FB9B3;
}

.request-purchase-service__title-name {

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* or 120% */

    display: flex;
    align-items: center;
    text-decoration-line: underline;
    text-transform: capitalize;

    color: #414042;
}

.request-purchase-service__date {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: #737373;
}

.request-purchase-service__status-request {
    min-width: 72px;
    background: #FFFFFF;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.request-purchase-service__description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    color: #737373;
}

.status-request-underway {
    background-color: #F2631C;
}

.status-request-waiting {
    background-color: #FFBC00;
}

.status-request-finished,
.status-request-finish {
    background-color: #1FB9B3;
}

.status-request-excluded,
.status-request-cancel {
    background-color: red;
}</style>    