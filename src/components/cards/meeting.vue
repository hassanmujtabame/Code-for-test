<template>
    <div class="box  " style=" height:200px; width: 300px">

        <div class="main-img position-relative">
            <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="100%" height="192">
            <!-- <img  class="landing" :src="`${publicPath}assets/img/Component 32.png`" alt="" /> -->
            <div class="position-absolute top-50 px-2 text-start">
                <h6 style="width: fit-content;" class="bg-yal p-1 px-2 rounded-2 text-white ">
                    {{ typeText }}
                </h6>
                <p class="text-white m-0 p-0">{{ title }}
                </p>
                <p class="text-white p-0 m-0">
                    {{ dateText }}
                </p>
            </div>

        </div>
    </div>
</template>
<script>
import commonAPI from '@/services/api/common';

export default {
    name: 'meeting-card',
    props: {
        img: {
            type: String,
        },
        title: {
            type: String,
        },
        type: {
            type: String,
        },
        date: {
            type: String,
        },
        time: {
            type: String,
        }
    },
    computed: {
        typeText() {
            let r = commonAPI.getCourseTypes().find(x => x.id == this.type)
            return r ? r.name : this.type
        },
        dateText() {
            if (!this.date) return 'N/A';
            let parts = this.date.trim().split('-');

            let date = new Date(parts[2], parts[1], parts[0]);
            let d = date.getDate()
            let m = this.getTranslateMonth(date.getMonth());
            return `${d} ${m}`
        }
    }
}
</script>

<style></style>