<template>
    <d-dialog-large 
    :group="group"
          :loading="loading"
          :closeDialog="closeDialog"
          :openDialog="openDialog"
          fullscreen
    >
  
      <template v-slot:header>
        <span v-html="titleDialog"></span>
        </template>
      <template v-slot:default>
          <bodyExam v-if="showDialog" @add="addItem"  @update="updateItem" :courseId="itemPage.id" :itemSelected="itemDialog"></bodyExam>
      </template>
    </d-dialog-large>
  </template>
  
  <script>
  import bodyExam from '@/views/academy/instructor/add-exam/body-exam'
  //import academyAPI from '@/services/api/academy';
  export default {
    name:'add-bodyExam-course-dialog',
    props:{
      group:{
          type:String,
          default:'add-exam-course-dialog'
      }
    },
    components:{
        bodyExam
    },
    computed:{
      titleDialog(){
       return this.itemForm.id?`${this.$t('exam-modification')}: <span class="m-c">${this.itemDialog.title}</span>`: this.$t('new-exam')
      }
    },
    data:()=>({
      loading :  false,
      saving: false,
      showDialog : false,
      itemDialog:{video:null},
      itemPage:{},
      itemForm:{id:null},
      lectureId:null,
    }),
    methods:{
    addItem(data){
      console.mylog('adding..',data)
      this.$emit('add',data);
      this.itemForm = Object.assign(this.itemForm,{...data})
      this.eventUpdateLectures({...data},'add')
    },
    updateItem(data){
      this.$emit('update',data);
      this.eventUpdateLectures({...data},'update')
    },
    eventUpdateLectures(item,type){
      this.fireEvent('update-lectures',{item,type})
    },
      openDialog(dataItem){
          this.itemPage ={... dataItem.page}
          this.itemDialog = {... dataItem.item}
         
          this.loading =  false;
          this.lectureId = this.itemDialog.id??null;
          this.itemForm.id = this.itemDialog.id??null;
          if(this.itemForm.id===null){
            this.itemForm.uuid = this.generateRandomString(16)
          }
          this.itemForm.title = this.itemDialog.title??null;
          
          this.showDialog = true;
          return true;
      },
      closeDialog(){
          this.showDialog = false;
          //this.eventUpdateLectures({type:'exam'},'all')
          return true;
      },
      closeEvent(){
         this.fireEvent(this.group+'-close-dialog')
      }
    }
  }
  </script>
  
  <style scoped>

  </style>