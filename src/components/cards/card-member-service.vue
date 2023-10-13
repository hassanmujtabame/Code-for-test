<template>
    <div class="provider-card">
        <div class="provider-card__wrapper relative">
            <div class="provider-card__image parent">
                <router-link v-if="to" :to="to">
                    <!-- Overlay gray -->
                    <div
                        class="overlay-gray"
                        style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            border-radius: 11px 11px 0 0;
                        "
                    ></div>
                    <img
                        :src="`${publicPath}assets/img/profile-cover.jpeg`"
                        alt
                        width="100%"
                        height="100%"
                        class="image1"
                    />
                    <!-- <img :src="img" alt class="image2"/> -->
                </router-link>
                <img
                    v-else
                    @click="$emit('click-image')"
                    :src="img"
                    alt
                    width="259"
                    height="192"
                />
            </div>

            <div class="provider-card__content py-0" style="">
                <!-- Avatar -->
                <div class="avatar-circle">
                    <img :src="img" alt width="74" height="74" class="image2" />
                </div>
                <h6 class="provider-card__name">
                    {{ name | truncateWords(2) }}
                </h6>
                <div
                    class="d-flex px-2 justify-content-between align-items-center w-full"
                >
                    <div class="provider-card__description">{{ description }}</div>
                    <div v-if="showRate" class="show-rate">
                        <RateStars :value="rate" :size="12" />
                    </div>
                </div>
                <div class="provider-card__bio text-right text-two-lines px-2">
                    {{ bio }}
                </div>

                <button
                    @click="openChat"
                    class="text-white border-0 py-2 bg-main w-100 provider-btn"
                >
                    تواصل
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import RateStars from '../rate-stars/index';
    export default {
        name: 'card-parson',
        components: {
            RateStars,
        },
        props: {
            showRate: {
                type: Boolean,
                default: false,
            },
            img: {
                type: String,
            },
            name: {
                type: String,
            },
            to: {
                type: [Object, Array],
                default: null,
            },
            description: {
                type: String,
            },
            bio: {
                type: String,
            },
            member: {
                type: [Array, Object],
            },
            rate: {
                type: [String, Number],
                default: 0,
            },
        },
        methods: {
            openChat() {
                this.fireEvent('chat-bar', { user: this.member });
            },
        },
        mounted() {},
    };
</script>

<style scoped>
    .provider-card {
        padding: 4px;
    }

    .provider-card__wrapper {
        margin: 0 0 0px 0;
        width: 100%;
        border-radius: 11px;
    }

    .provider-card__wrapper:hover {
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);
    }

    .provider-card__image {
        border-radius: 11px 11px 0 0;
        width: 100%;
        height: 192px;
        overflow: hidden;
    }

    .provider-card__image img {
        object-fit: cover;
    }

    .provider-card__content {
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 20px 0px;
        gap: 8px;
        background: #ffffff;
        border: 1px solid #cdd7d8;
        height: 190px !important;
        flex-direction: column;
        justify-content: space-between;
        border-bottom-right-radius: 11px;
        border-bottom-left-radius: 11px;
    }

    .provider-card__name {
        margin: 12px 0 0 0;
        width: 100%;
        font-weight: 400;
        font-size: 24px;
        text-transform: capitalize;
    }

    .provider-card__description {
        margin: 0;
        padding: 0;
        font-style: normal;
        font-weight: 400;
        width: 220px;
        font-size: 15px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        color: var(--m-color);
    }
    .show-rate {
        width: 60px !important;
    }
    .provider-card__bio {
        font-size: 12px;
    }
    .parent {
        position: relative;
        top: 0;
        left: 0;
    }

    .image1 {
        position: relative;
        top: 0;
        left: 0;
    }

    .image2 {
        position: absolute;
        z-index: 999;
        top: -50px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
        border: 3px solid #fff;
    }
    .overlay-gray {
        background: rgba(0, 0, 0, 0.2);
        z-index: 99;
    }

    .provider-btn {
        height: 46px;
        border-radius: 0px 0px 11px 11px;
    }
</style>
