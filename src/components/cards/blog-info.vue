<template>
    <div class="box rounded-3 border w-100 blog-info-card">
              <div class="image">
                <img class="w-100" :src="img" :alt="title" height="184">
              </div>
              <div class="text p-3 text-start">
                <h6 class="blog-info__title text-two-lines" >{{title}}</h6>
                <p style="height:80px" class="description-blog" v-html="description"></p>
              </div>
              <div class="d-flex">
                <div class="blog-info-category date text-start mx-1 flex-grow-1">
                  <div class="d-flex gap-2   data">
          <p v-for="(cat,c) in categories" :key="c" :style="{'color':`${colors[c%3]}!important`}" class="p-1 px-2 rounded-2 text-white m-0">
            {{ cat.name }}
          </p>
        </div>
              </div>
              <div class="blog-info-date date d-flex align-items-center text-end mx-1 flex-shrink-0">
                <p class="d-flex m-0">
                 
                <bdi class="blog-info__date text-two-lines" style="padding: 0 5px;">{{dateText}}</bdi>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                    </svg>
                </p>
                
              </div>
              
              </div>
            </div>
</template>

<script>
export default {
  props:{
    img:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    description:{
        type:String,
        default:''
    },
    categories:{
        type:[Array,Object],
        default:()=>{ return []}
    }
  },
  data:()=>({
    colors:['#1FB9B3','#FFBC00','#F2631C','#2C98B3']
  }),
 computed:{
    dateText(){
        if(!this.date) return 'N/A';
        return this.dateTextMonth(this.date)
        /*let parts = this.date.trim().split('-');
           
            let date = new Date(parts[2],parts[1],parts[0]);
            if(date=='Invalid Date') return this.date.trim()
            let d = date.getDate()
            let m =  date.toLocaleString('default', { month: 'short' });
            let y =date.getFullYear();
        return `${d} ${m},${y}`*/
    }
 }
}
</script>

<style scoped>
.image{
  height:184px
}
.image>img{
  object-fit: fill;
    width: 100%;
 height: 100%;
}
.description-blog{
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
   font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* or 142% */
color: #737373;
}
.blog-info__title{
  font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
/* identical to box height, or 167% */
text-transform: capitalize;

color: #414042;
height:80px;
}
.blog-info__date{
  font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: center;

color: #979797;
}
</style>