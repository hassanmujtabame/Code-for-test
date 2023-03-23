<template>
    <div class="course-attachment-item">
      <div class="course-attachment-item__wrapper">
  <div class="d-flex  align-items-center ">
      <div v-if="isOwner" class="course-attachment-item__actions">
          <button  class="btn " @click="doDelete(item)"><i class="fa-solid fa-trash"  style="color:red"></i></button>
      </div>
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

     <a :href="isJoined?item.file:'#'" @click="showDialog" download> <importIcon /></a>
     </div>
      </div>
  </div>
      </div>
  </template>
  
  <script>
  import academyAPI from '@/services/api/academy'
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
      },
      isOwner:{
        type:Boolean,
          default:false
      },
      itemPage:{}
   },
   data:(vm)=>{
    return{
      starts:[5,4,3,2,1],
      isJoined:vm.isOwner || vm.itemPage.user_is_join_course
   }
},
    watch:{
        itemPage:{
            deep:true,
            immediate:true,
            handler(){

                this.isJoined = this.isOwner || this.itemPage.user_is_join_course
            }
        }
    },
   methods:{
      doDelete(item){
          this.$emit('delete',item)
      },
      showDialog(evt){
        if(!this.isJoined){
            evt.preventDefault();
            let DataEvt = {
          title:'أنت غير مشترك في الدورة !',
          description:`لا يمكنك مشاهدة الدروس ولا تحميل المرفقات الا بعد اشتركاك في الدورة `,
          btns:[
            {title:this.$t('join_confirmation'),action:()=>this.joinCourse()}
          ]
        }
        this.showConfirmMsg(DataEvt);
        return;
        }
       
      }, 
      async joinCourse(){
    try {
      let {data} = await academyAPI.coursesApi.joinCourse(this.itemPage);
      if(data.success){
        let dataEvt ={
            title:'تم الانضمام الى هذه الدورة بنجاح',
            description:'',
            btns:[
              {title:this.$t('course-page')},
              {title:this.$t('undo-joining'),action:()=>this.confirmCancelJoin()},
            ]
    }
    this.showSuccessMsg(dataEvt)
      }else{
        window.SwalError(data.message)
      }
    } catch (error) {
      window.DHelper.catchException.call(this,error)
    }
  },
  async confirmCancelJoin(){
        try {
            let {data} = await academyAPI.coursesApi.cancelJoinCourse(this.itemPage.id)
            if(data.success){
              //
            }
        } catch (error) {
          window.DHelper.catchException.call(this,error)
        }
    },
   }
  }
  </script>
  
  <style scoped>
  .course-attachment-item{
      margin: 10px 0;
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