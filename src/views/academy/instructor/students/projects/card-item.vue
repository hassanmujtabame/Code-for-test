<template>
  <div class="exam-student-item" :class="{mobile:isMobile}">
    
                           
    <div class="exam-student-item__wrapper">
            <div class="exam-student-item__body">
                <div class="exam-student-item__image">
                    <img class="rounded-circle" :src="item.user_info.image" alt="" width="48" height="48">
                </div>
                <div class="exam-student-item__info">
                    <h6 class="exam-student-item__title m-c p-0 m-0">
                        {{item.user_info.name}}
                    </h6>
                    <p  class="exam-student-item__subtitle t-c p-0 m-0 position-relative">
                       <!--empty-->
                       <template v-if="item.rate">
                        <span>{{ item.rate.note }} /100 </span> 
                        <d-hover tooltip >
                        <span class="t-c clickable" v-if="item.rate.desc" data-bs-toggle="tooltip" data-bs-placement="top" :title="item.rate.desc">- ملاحظة</span>
                        </d-hover>
                    </template>
                    </p>
                </div>
                <div class="exam-student-item__actions"> 
            <a target="_blank" :href="item.file" class="btn btn-custmer px-2 ">
                عرض المشروع
            </a>
            <button @click="rateProject(item)" class="btn btn-custmer btn-secondary px-2 mx-2">
                تقييم المشروع
            </button>
        </div>
            </div>
          
    </div>
</div>
</template>

<script>
export default {
 name:'card-item',
 props:{
    item:{}
 },
 methods:{
    previewProject(item){
        console.mylog(item)
    },
    rateProject(item){
        this.fireOpenDialog('project-rate-dialog',{...item})
    }
 }
}
</script>

<style scoped>
.filter-list .filter-list-items>div:not(:last-child) .exam-student-item{
    border-bottom: 1px solid #f1f1f1;

}
.exam-student-item__wrapper{
 padding: 5px;
}
.exam-student-item__body{
    display: flex;
    align-items: center;
}
.exam-student-item__image{
    flex-shrink: 0;
    height: 48px;
    width: 48px;
}
.mobile .exam-student-item__image{
    height: 40px;
    width: 40px;
}
.exam-student-item__image>img{
    width:100%;
    height:100%;
    border: 1px solid #f1f1f1;
}
.exam-student-item__info{
    flex: 1;
    padding: 0 5px;
}
.exam-student-item__title{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

text-transform: capitalize;

color: #1FB9B3;
}
.mobile .exam-student-item__title{
    font-size: 0.8rem;
    line-height: 0.9rem;
}
.exam-student-item__subtitle{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */
color: #737373;
}
.mobile .exam-student-item__subtitle{
    font-size: 0.7rem;
    line-height: 0.75rem;
}
.exam-student-item__actions{
    flex-shrink: 0;  
    display: flex;
}
.exam-student-item__actions>button,.exam-student-item__actions>a{
    min-width: 100px;
    font-weight: 400;
/* or 106% */
text-align: center;
display: flex;
align-items: center;
justify-content: center;
}
</style>