<template>
<d-dialog-large :xl="false" 
:group="group"
:open-dialog="openDialog"
:close-dialog="closeDialog"
>
<template v-slot:default>
                <p>
                    أختر نوع الدورة التدريبة التي ترغب بنشرها في اكاديمية رياديات و قم بتنظيم محتويات الدورة ووضع اختبارت و راجع مشاريع الطلاب بكل سهولة 
سيحصل جميع الطلاب في النهاية على شهادة مقدمة لهم من رياديات تحمل اسمك فتأكد جيدا من المحتوى الذي تقوم بتقديمه  
                </p>
                <form action="">
                 
                    <div class="form-group">
                      <label  class="form-label">
                  نوع الدورة
                      </label>
                      <select v-model="type" class="form-select w-100">
                        <option value="live" >لايف</option>
                        <option value="on-site"  >دورة  في المقر </option>
                        <option value="recorded">دورة مسجلة </option>
                      </select>
                    </div>
                    <div class="mt-3">
                        <input type="text" class="form-control" name="" id="" placeholder="قم بعمل منشن لمدربين معك في هذا الدورة ">
                    </div>

                </form>
              </template>
              <template v-slot:actions>
              <button @click="nextDialogCourse" class="btn bg-main text-white px-3" >أستمر </button>
                </template>
</d-dialog-large>
</template>

<script>
export default {
    name:'add-course-dialog-first',
  props:{
    group:{
        type:String,
        default:'add-course-first'
    }
  },
  data:()=>{
    return{
      type:'live',
        showDialog:false,
        itemForm:{}
    }
  },
  methods:{
    clickItem(evt,type){
      evt.preventDefault();
      
      this.type = type
    },
    nextDialogCourse(){
      this.fireOpenDialog('add-course-'+this.type)
      this.  closeEvent()
    },
    closeEvent(){
      this.fireCloseDialog(this.group)
    },
    openDialog(){
        this.showDialog = true;
        return true;
    },
    closeDialog(){
        this.showDialog = false;
        return true;
    }
  }
}
</script>

<style>

</style>