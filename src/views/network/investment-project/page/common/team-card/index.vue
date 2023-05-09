<template>
   <div class="mt-4">
                    <h3 class="team-card-title text-center">
                        فريق المشـــروع
                    </h3>
                  <div >
                    <memberTeamCard 
                    class="mt-3"
                    v-for="(n) in 4" :key="n"
                    :name="person.name"
                    :image="`${publicPath}${person.image}`"
                    :job="person.job"
                    :bio="person.bio"
                    />
                  </div>
                  
                   
                    
                </div>
</template>

<script>
import memberTeamCard from './member-team-card.vue'

export default {
 name:'team-card',
   props:{
    itemPage:{},
    isOwner:{}
 },
 components:{
    memberTeamCard
 },
 data:()=>{
    return{
    person : {
    name:'خالد رضا',
    job:'رائد اعمال',
    image:`assets/img/avatar-11.jpg`,
    bio:`حصلت على بكالوريوس معهد الكونسرفتوار، خبرة 5 سنوات في ريادة الأعمال، حصلت على
                                    جوائز عديدة ولها شركات ناجحة في المملكة وخارجها`
}
 }
}
}
</script>

<style scoped>
.team-card-title{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */
text-transform: capitalize;
color: #1FB9B3;
}
</style>