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
                 
                    
                      <d-select-input label="نوع الدورة" v-model="type" class=" w-100">
                        <option value="live" >لايف</option>
                        <option value="on-site"  >دورة  في المقر </option>
                        <option value="recorded">دورة مسجلة </option>
                      </d-select-input>
                
                    <div class="mt-3"> 
                        <d-mention-input
    v-model="instructors"
      label="قم بعمل منشن لمدربين معك في هذا الدورة " 
    :items="items"
    :tooltipEvents="events"
  >
  <template #[`item-@`]="{ item }">
          <d-list-item :title="item.name" :sub-title="item.job" :image="item.image" avatar />
        </template>
  </d-mention-input>
                      </div>

                </form>
              </template>
              <template v-slot:actions>
              <button @click="nextDialogCourse" class="btn bg-main text-white px-3" >أستمر </button>
                </template>
</d-dialog-large>
</template>

<script>
import academyAPI from '@/services/api/academy'
const users = [
  {  id:1,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'akryum',
    name: 'Guillaume',
  },
  {
    id:2,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'posva',
    name: 'Eduardo',
  },
  {
    id:3,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'Sébastien',
  },
  {
    id:4,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'Sébastien sqd qsdqs',
  },
  {
    id:5,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'qs sdfd Sébastien',
  },
]
export default {
    name:'add-course-dialog-first',
  props:{
    group:{
        type:String,
        default:'add-course-first'
    }
  },
  computed:{
  events(){
    return {
    open:(key)=>this.loadInstructors(null,key),
      //apply:this.onApply,
    search:(search)=>this.loadInstructors(search,null)
    }
  }
},
  data:()=>{
    return{
      items:process.env.NODE_ENV=='development'?users:[],
      type:'live',
        showDialog:false,
        instructors:[],
        keyChoose:null,
        itemForm:{
          instructors:[]
        }
    }
  },
  watch:{
    instructors:{
      deep:true,
      handler(){
        this.itemForm.instructors = this.instructors.map(x=>x.id)
      }
    }
  },
  methods:{
    async loadInstructors (search = null,key = null) {
      /* key: when click on @ or # in open event
      */
     if(key) this.keyChoose =  key ;//just future when want to change list type  ex: @ for instructors ,# for students
      let {data} = await academyAPI.instructor.getAll({search:search})
      this.items = data.data
    }
  ,
    async onOpen (key,...rest) {
      console.mylog('key',key,rest)
      await this.loadIssues ()
      //this.items = key === '@' ? users : issues
    },

    onApply (item, key, replacedWith) {
      console.mylog(item,key, `has been replaced with ${replacedWith}`)
    },
    clickItem(evt,type){
      evt.preventDefault();
      
      this.type = type
    },
    nextDialogCourse(){
      this.fireOpenDialog('add-course-'+this.type,{instructors:this.itemForm.instructors})
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