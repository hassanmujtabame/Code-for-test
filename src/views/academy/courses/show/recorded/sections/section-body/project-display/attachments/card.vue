<template>
  <div class="course-attachment-item">
    <div class="course-attachment-item__wrapper">
    <div class="d-flex  align-items-center ">
    
        <div class="flex-shrink-0 p-1">
            <metroAttachmentIcon />
        </div>

    <div class="flex-grow-1 d-flex">
    
        <div class="d-flex flex-column">
            <div class="course-attachment-item__title">{{ item.title??'N/A' }}</div>
            <div class="course-attachment-item__subtitle">{{ item.size!==null?formatBytes(item.size):'N/A' }}</div>
        </div>
       <div class="flex-shrink-0">
        <div class="course-attachment-item__extension">{{item.extension}}</div>
       </div>
    </div>
   <div class="flex-shrink-0">
   <a :href="item.file" download> <importIcon /></a>
   </div>
    </div>
</div>
    </div>
</template>

<script>
import importIcon from '@/components/icon-svg/import-icon.vue'
import metroAttachmentIcon from '@/components/icon-svg/metro-attachment.vue'
export default {
 name:'rate-card',
 components:{
    importIcon,
    metroAttachmentIcon
 },
 props:{
    item:{
        type:[Object,Array],
        require:true
    },
    showBorder:{
        type:Boolean,
        default:false
    }
 },
 data:()=>({
    starts:[5,4,3,2,1]
 }),
 methods:{
    doDelete(item){
        this.$emit('delete',item)
    }
 }
}
</script>

<style scoped>
.course-attachment-item{
    margin: 0px 0;
}
.course-attachment-item__wrapper{
padding: 5px;
}
.course-attachment-item__subtitle{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */
color: #979797;
}
.course-attachment-item__title{
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */
color: #737373;
}
.course-attachment-item__extension{
    margin: 0 5px;
    padding: 5px;
    background: #F5F7F7;
    font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
/* identical to box height, or 123% */
color: #415C5E;
}
</style>