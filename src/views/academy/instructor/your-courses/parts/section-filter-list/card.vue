<template>
    <div class="box rounded-3 border mt-3">
        <div class="image">
            <img class="w-100" src="/assets/img/Rectangle qqq.png" alt="" height="184">
        </div>
        <div class="text p-1 d-flex justify-content-between align-items-center">
            <h5 class="p-0 m-0">{{item.title}}</h5>

            <p class="m-c p-0 m-0">
               {{typeText}}
            </p>

        </div>
        <div class="">

            <p class="t-c">{{ item.desc }}

            </p>

        </div>

    </div>
</template>

<script>
export default {
    name: 'course-card',
    props:{
        item:{}
    },
    computed:{
        typeText(){
            switch (this.item.type) {
                case 'live': return 'لقاء مباشر';
                case 'recorded': return 'مسجلة';
                case 'on-site': return 'في مقر';

                default:
                return this.item.type
            }
        }
    }
}
</script>

<style>

</style>