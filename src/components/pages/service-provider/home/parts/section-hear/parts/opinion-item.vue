<template>
    <div class="item">
        <div class="row">
            <div class="col-2">
                <img class="opinion-img rounded-4" :src="image" :alt="name" width="100" height="100" />
            </div>
            <div class="col-10">
                {{ title }}
                <span style="color: #2EB9B3">
                    -
                    عميل يبحث عن انجاز عمله
                </span>
            </div>
        </div>
        <div class="row">
            <div class="col-8 position-relative">
                <div class="d-flex flex-column">
                    <p class="opinion-text mt-5" v-html="desc"></p>
                    <h6 class="opinion-name">{{ name }}</h6>
                </div>
    
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        image: {
            type: String,
        },
    },
};
</script>

<style scoped>

.item {
    background-color: #DDE5E6;
    padding: 30px;
    height: 400px;
    border-radius: 10px;
}
.opinion-text {
    font-style: normal;
    font-weight: 350;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    text-transform: capitalize;
    color: #737373;
    flex: 1 0;
}

.opinion-img {
    width: 50px !important;
    height: 50px !important;
}

.mobile-layout .dote>img {
    height: 15px;
}

.mobile-layout .dote {
    top: -10px !important;
}

.mobile-layout .opinion-img {
    width: 50px;
    height: 50px;
}

.mobile-layout .opinion-name,
.mobile-layout .opinion-text {
    font-size: 16px;
    line-height: 1.3;
}
</style>
