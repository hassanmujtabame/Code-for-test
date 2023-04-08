<template>
            <div class="show-available-time" >
                <div class="show-available-time__close"><i @click="$emit('delete',time)" class="fa fa-circle-xmark clickable c-r"></i></div>
            <div class="show-available-time__wrapper" >
                <span class="show-available-time__text">{{ timeFormatAMPM(time,true) }}</span>
            </div>
            </div>
  
</template>

<script>
export default {
props:{
    time:{
        type:String
    }
}
}
</script>

<style scoped>
.show-available-time{
 position: relative;
    padding: 5px;
    background: #FFFFFF;
    border: 0.5px solid #CDD7D8;
    border-radius: 4px;
}
.show-available-time__wrapper{
 
      display: flex;
    align-items: center;
    justify-content: center;
  
  
}
.show-available-time__text{
/** text */
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 100% */
    text-align: center;
    color: #CDD7D8;
    width: fit-content;
}
.show-available-time__close{
    --size-close-time: 15px;
    position: absolute;
    z-index: 3;
    /* width: var(--size-close-time); */
    /* height: var(--size-close-time); */
    right: -6px;
    display: flex;
    top: -8px;
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(12, 47, 51, 0.078);
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: var(--size-close-time);
}
</style>