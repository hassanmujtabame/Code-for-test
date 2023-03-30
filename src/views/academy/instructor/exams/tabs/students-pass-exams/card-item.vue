<template>
  <div class="exam-student-item">
    
                           
    <div class="exam-student-item__wrapper">
            <div class="exam-student-item__body">
                <div class="exam-student-item__image">
                    <router-link :to="getRouteLocale('network-show-profile',{id:item.id})">
                    <img class="rounded-circle" :src="item.image" alt="" width="48" height="48">
                </router-link>
                </div>
                <div class="exam-student-item__info">
                    <h6 class="exam-student-item__title m-c p-0 m-0">
                        {{item.name}}
                    </h6>
                    <p  class="exam-student-item__subtitle t-c p-0 m-0">
                        {{item.course_note??'N/A'}}  - {{item.course_name}}
                    </p>
                </div>
                <div class="exam-student-item__actions"> 
            <button @click="router_push('academy-instructor-your-student-show',{id:item.id})" class="btn-main px-2 ">
                ارسل رسالة
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
.exam-student-item__subtitle{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */
color: #737373;
}
.exam-student-item__actions{
    flex-shrink: 0;  
}
.exam-student-item__actions>button{
    height: 40px; 
    min-width: 100px;
    font-weight: 400;
font-size: 16px;
line-height: 17px;
/* or 106% */
text-align: center;
display: flex;
align-items: center;
justify-content: center;
}
</style>