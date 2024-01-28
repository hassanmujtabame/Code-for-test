<template>
    <div class="ready-service-card box mb-5" :class="{ 'service-stopped': status == 'stopped' }">
        <div class="ready-service-card__wrapper">
            <div class="ready-service-card__image">
                <img class="w-100" :src="image" alt="" height="164px">
            </div>
            <div class="ready-service-card__content">
                <div class="d-flex align-items-center justify-content-between">
                    <h6 class="ready-service-card__title">{{ title }}</h6>
                    <p class="ready-service-card__category">
                        {{ department }}
                    </p>
                </div>
                <p class="text-four-lines ready-service-card__description" v-html="description"></p>
            </div>
            <div class="ready-service-card__footer">
                <div class="ready-service-card__footer-item">
                    <d-empty-wallet-icon :size="16" color="#979797" />
                    <span>{{ price ?? 'N/A' }}</span>
                    <span> {{ $t('riyals') }}</span>
                </div>
                <div class="ready-service-card__footer-item">
                    <d-localisation-icon :size="16" color="#979797" />
                    <span>{{ stateText }}</span>
                </div>
                <div class="ready-service-card__footer-item">
                    <d-school-wallet-icon :size="16" color="#979797" />
                    <span>{{ name ?? 'N/A' }}</span>
                </div>
            </div>
            <div v-if="status == 'stopped'" class="ready-service-card__status box-stoped">
                <p class="p-1 m-0">
                    خدمة معلقة
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ready-service',
    props: {
        image: {
            type: String
        },
        title: {
            type: String,
        },
        name: {
            type: String,
        },
        place: {
            type: String,
        },
        state: {
            type: String,//online |offline
        },
        price: {
            type: [String, Number],
        },
        department: {
            type: String,
        },
        description: {
            type: String,
        },
        status: {
            type: String,//actived | stopped
        }
    },
    computed: {
        stateText() {
            switch (this.state) {
                case 'online':
                case 'offline': return this.$t(this.state)
                case 'service': return this.$t('ready-service')

                default:
                    return this.$t('service')
            }
        }
    }
}
</script>

<style>
.ready-service-card {
    height: 331.47px;
    border-radius: 8px;
}

.ready-service-card__footer {
    display: flex;
    justify-content: space-evenly;
    margin: 5px 5px;
}

.ready-service-card__footer-item {
    display: flex;
    margin: 0 5px;
}

.ready-service-card__footer-item span {

    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    /* identical to box height, or 106% */

    display: flex;
    align-items: center;
    text-align: right;

    color: #979797;
}

.ready-service-card__title {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;
    margin: 0;
    color: #414042;
    width: 180px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}

.ready-service-card__description {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* or 142% */
    text-align: right;
    color: #737373;
    height: 42.38px;
    word-break: break-all;
}

.ready-service-card__content {
    padding: 5px 16px;
}

.ready-service-card__category {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #1FB9B3;

}

.ready-service-card__image {
    height: 173px;
    border-radius: 8px 8px 0 0;
    min-height: 173px;
}

.ready-service-card__image>img {
    border-radius: 8px 8px 0 0;
    height: 173px;
    width: 100%;
}</style>