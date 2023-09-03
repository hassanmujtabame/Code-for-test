<template>
  <div class="provider-card" style="height: 360px;">
  <div class="provider-card__wrapper">
  <div class="provider-card__rate"><img :src="`${publicPath}assets/svg/star-move.svg`" width="24" height="24" /><span>{{ rate }}</span></div>
  <div class="provider-card__avatar">
    <img :src="image"/>
  </div>
  <div class="provider-card__user-info">
    <div class="provider-card__name">{{ name }}</div>
    <div class="provider-card__job">{{ job }}</div>
    <div class="provider-card__bio text-two-lines">{{ bio }}</div>
  </div>
<div class="provider-card__actions mb-3">
    <button v-if="user.name != name" @click="openChat"  ><i  class="fas fa-comments me-3 fa-sm"></i> {{ $t('chat') }}</button>
</div>
  </div>
  </div>
</template>

<script>
export default {
  name:'card-item',
  props:{
    providerId:{default:1},
    name:{default:'سلمى محمد'},
    job:{default:'مصممة ازياء'},
    bio:{default:`مصممة ازياء محترفة لدي الكثير من الخبرة في تصميم الازياء والعبايات يسرني مساعدتك`},
    image:{default:'/assets/img/Group 289326.png'},
    rate:{default:4.5},
  },
  methods:{
    openChat(){
        this.fireEvent('chat-bar',{user:{
            id:this.providerId,
            name:this.name,
            job_title:this.job,
            bio:this.bio,
            image:this.image,
        }})
    }
  }
}
</script>

<style scoped>
.provider-card{
    /* box */
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background: #FFFFFF;
    padding: 16px 16px;
}
.provider-card__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
}
.provider-card__rate{
    position: absolute;
    left: -10px;
    top: -10px;
    display: flex;
    flex-direction: row-reverse;
    align-items:center
}
.provider-card__rate>span{
    font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */
color: #FFBC00;
}

.provider-card__avatar>img{
    width: 128px;
    height: 128px;
    border: 4px solid #1FB9B3;
    border-radius: 50%;
}
.provider-card__name{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    text-transform: capitalize;
    color: #1FB9B3;
    margin-top: 20px;
}
.provider-card__job{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    /* 979797 */
    color: #979797;
    height: 28px;
}
.provider-card__bio{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: #667D80;
    max-width: 320px;
    margin-top: 15px;
    height: 58px;
}
.provider-card__actions{
    margin-top: 20px;
}
.provider-card__actions>button{
    background: #414042;
    border-radius: 8px;
    color:white;
    border:none;
    padding: auto;
    padding:.5rem  1rem !important;
    margin: 0 .5rem;
}
</style>