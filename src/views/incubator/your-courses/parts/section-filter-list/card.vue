<template>
    <div class="student-course box">
                                    <div class="student-course__image">
                                        <img class="w-100 rounded-top" :src="item.image_path" :alt="item.title"
                                            height="100%">
                                    </div>
                                    <div class="p-3 ">
                                        <div class="d-flex justify-content-between ">
                                            <h6 class="student-course__title">
                                                {{item.title}}
                                            </h6>
                                            <p class="student-course__department">
                                                {{item.department_name}}
                                            </p>
                                        </div>
                                        <p class="student-course__description text-two-lines">{{ item.desc }}</p>
                                    </div>
                                </div>
</template>

<script>
export default {
    name: 'course-card',
    props:{
        item:{}
    }
}
</script>

<style scoped>
.student-course{
    border-radius: var(--bs-border-radius)!important;
}
.student-course__image{
    height:173px;
    border:1px solid #efefef;
    border-top-left-radius: var(--bs-border-radius)!important;
    border-top-right-radius: var(--bs-border-radius)!important;
}
.student-course__title{
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
text-transform: capitalize;
color: #414042;
}
.student-course__department{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */


color: #1FB9B3;
}
.student-course__description{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* or 142% */
color: #737373;
margin: 0;
height:34px;
}
</style>