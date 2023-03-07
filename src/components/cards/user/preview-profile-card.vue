<template>
  <div class="user-preview-profile">
    <div class="user-preview-profile__wrapper">
        <!--user _inf-->
    <div class="user-preview-profile__user-info">
        <img class="user-preview-profile__avatar" :src="member.image" :alt="member.name"/>
        <div class="user-preview-profile__info">
            <h1 class="user-preview-profile__name">{{ member.name }}</h1>
            <h2 class="user-preview-profile__job">{{ member.job_title }}</h2>
        </div>
    </div>
    <!--user bio-->
    <p class="user-preview-profile__bio">
        {{ member.bio }}
    </p>
    <!--user footer-->
    <div class="user-preview-profile__footer">
        <button class="btn btn-custmer">أرسل رسالة</button>
        <div class="user-preview-profile__social-media">
            
            
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
            <i class="fas fa-globe"></i>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'d-user-preview-profile',
 props:{
    member:{
        require:true
    }
 }
}
</script>

<style scoped>
.user-preview-profile{
    background: white;
    border-radius: 12px;
}
.user-preview-profile__wrapper{
   padding:15px 20px;
}
.user-preview-profile__user-info{
    display: flex;
    margin-bottom: 20px;
}
.user-preview-profile__avatar{
    flex-shrink: 0;
    height: 121px;
    width:121px;
    min-height: 121px;
    min-width:121px;
    background-color: #fcfcfc;
    border-radius: 50%;
    border: 1px solid #dadada;
}
.user-preview-profile__info{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.user-preview-profile__name{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */
    color: #0C2F33;
}
.user-preview-profile__job{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */
    color: #8BA2A4;
}

.user-preview-profile__bio{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* or 121% */
    color: #415C5E;
    margin-bottom: 25px;
}
.user-preview-profile__footer{
display: flex;
}
.user-preview-profile__social-media{
    flex:1;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.user-preview-profile__social-media>i{
    font-size: 24px;
}
</style>