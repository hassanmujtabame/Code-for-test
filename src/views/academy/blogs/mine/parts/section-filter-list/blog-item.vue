<template>
  <div class="academy-blog-item">
  <div class="academy-blog-item__wrapper">
  <div class="academy-blog-item__body">
  <div class="academy-blog-item__title">
<h1 >{{ item.title }}</h1>

  </div>
  <div class="academy-blog-item__description"  v-html="item.description">

    </div>
  </div>
  <div class="academy-blog-item__actions">
    <div class="academy-blog-item__date">
        <i class="fa-regular fa-clock"></i>
        <span class="px-2">تاريخ النشر :</span>
        <span>{{ item.created_at }}</span>
    </div>
    <div class="academy-blog-item__btns">
        <button @click="router_push('academy-blog-show',{id:item.id})" class="btn btn-custmer btn-small">صفحة التدوينة</button>
        <button @click="deleteItem" class="btn btn-custmer btn-danger btn-small mx-1">خذف التدوينة</button>
    </div>
</div>
  </div>
  </div>
</template>

<script>
export default {
 props:{
    item:{}
 },
 methods:{
    deleteItem(){
        this.$emit('delete',this.item)
    }
 }
}
</script>

<style scoped>
.academy-blog-item{
    width: 100%;
}
.academy-blog-item__wrapper{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #CDD7D8;
}
.academy-blog-item__body{
    flex:1
}
.academy-blog-item__actions{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
}
.academy-blog-item__btns{
    display: flex;
    flex-direction: row; 
}
span {
    color:inherit
}
.academy-blog-item__title>h1{
    margin: 0;
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

.academy-blog-item__description{
    margin:10px 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

color: #737373;
}
.academy-blog-item__description>p{
    margin: 0;
}
.academy-blog-item__date{
    color:#737373
}
</style>