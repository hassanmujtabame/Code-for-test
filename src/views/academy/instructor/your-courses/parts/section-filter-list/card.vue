<template>
    <div class="course-instructo-item box rounded-3 border mt-3">
        <div class="course-instructo-item__image">
            <img class="w-100" src="/assets/img/Rectangle qqq.png" alt="" height="184">
        </div>
        <div class="course-instructo-item__body">
        <div class="p-1 d-flex justify-content-between">
            <h5 class="course-instructo-item__title">{{item.title}}</h5>

            <p class="course-instructo-item__type">
               {{typeText}}
            </p>

        </div>
        <div class="">

            <p class="course-instructo-item__desc">{{ item.desc }}

            </p>

        </div>
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

<style scoped>
.course-instructo-item__body{
    padding:19px 14px;
}
.course-instructo-item__desc,
.course-instructo-item__type,
.course-instructo-item__title{
    padding:0;
    margin:0;
}
.course-instructo-item__title{
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */
    text-transform: capitalize;
    color: #414042;
}
.course-instructo-item__desc{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* or 142% */
    color: #737373;
    margin-top: 16px;
    height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.course-instructo-item__type{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    /* identical to box height, or 142% */
    color: #1FB9B3;
}
.course-instructo-item__image{
    width: 100%;
    height: 144px;
}
.course-instructo-item__image>img{
    width: 100%;
    height: 100%; 
}
</style>