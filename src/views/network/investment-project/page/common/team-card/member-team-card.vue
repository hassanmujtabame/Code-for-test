<template>
  <div class="member-team border rounded-3">
                        <div class="  ">
                            <div class="p-1">
                                <div class="p-2 d-flex">
                                    <div>
                                        <img class="rounded-circle" :src="image" :alt="name"
                                            width="42" height="42">
                                    </div>
                                    <div>
                                        <h4 class="member-team__title">
                                          {{ name }}
                                        </h4>
                                        <h6 class="member-team__job">
                                            {{ job }}
                                        </h6>
                                    </div>

                                </div>
                                <p class="member-team__bio">{{ bio }}</p>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
    props:{
   name:{},
   image:{},
   job:{},
   bio:{}
 },
 data:()=>({

 })
}
</script>

<style scoped>
.member-team{
    background: #FFFFFF;
border: 1px solid #DDE5E6;
border-radius: 8px;
}
.member-team__title{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 29px;
margin: 0;
color: #737373;
}
.member-team__job{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

color: #979797;
}
.member-team__bio{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* or 142% */

color: #737373;
}
</style>