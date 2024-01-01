<template>
  <d-dialog-large :xl="false" :group="group" :open-dialog="openDialog" :close-dialog="closeDialog">
    <template v-slot:default>
      <p>
        أختر نوع الدورة التدريبة التي ترغب بنشرها في اكاديمية رياديات و قم بتنظيم محتويات الدورة ووضع اختبارت و راجع
        مشاريع الطلاب بكل سهولة
        سيحصل جميع الطلاب في النهاية على شهادة مقدمة لهم من رياديات تحمل اسمك فتأكد جيدا من المحتوى الذي تقوم بتقديمه
      </p>
      <form action="" v-if="showDialog">

        <d-select-input label="نوع الدورة" v-model="itemForm.type" class=" w-100">
          <option value="live">لايف</option>
          <option value="on-site">دورة في المقر </option>
          <option value="recorded">دورة مسجلة </option>
        </d-select-input>

        <div class="mt-3">
          <d-mention-input v-model="itemForm.instructors" label="قم بعمل منشن لمدربين معك في هذا الدورة "
            :items="instructors" :tooltipEvents="events">
            <template #[`item-@`]="{ item }">
              <d-list-item :title="item.name" :sub-title="item.job ?? item.job_title" :image="item.image" avatar />
            </template>
          </d-mention-input>
        </div>

      </form>
    </template>
    <template v-slot:actions>
      <button @click="nextDialogCourse" class="btn bg-main text-white px-3">أستمر </button>
      <div class="d-flex justify-content-center  my-3" style="display: inline-block; width: 100%">
        <div class="" style="border-radius: 100% ; width: 13px; height: 13px;  background: #eaeaea;"></div>
        <div class="mx-3" style="border-radius: 100% ; width: 13px; height: 13px;  background: #eaeaea;"></div>
        <div style="border-radius: 100% ; width: 13px; height: 13px;  background: #1FB9B3 "></div>
      </div>

    </template>
  </d-dialog-large>
</template>

<script>
import academyAPI from '@/services/api/academy'
const users = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'akryum',
    name: 'Guillaume',
  },
  {
    id: 2,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'posva',
    name: 'Eduardo',
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'Sébastien',
  },
  {
    id: 4,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'Sébastien sqd qsdqs',
  },
  {
    id: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    job: 'atinux',
    name: 'qs sdfd Sébastien',
  },
]
export default {
  name: 'add-course-dialog-first',
  props: {
    group: {
      type: String,
      default: 'add-course-first'
    }
  },
  computed: {
    events() {
      return {
        open: (key) => this.loadInstructors(null, key),
        //apply:this.onApply,
        search: (search) => this.loadInstructors(search, null)
      }
    }
  },
  data: () => {
    return {
      items: process.env.NODE_ENV == 'development' ? users : [],
      type: 'live',
      isUpdate: false,
      itemDialog: {},
      showDialog: false,
      instructors: process.env.NODE_ENV == 'development' ? users : [],
      keyChoose: null,
      itemForm: {
        instructors: [],
        type: 'live',
      }
    }
  },
  watch: {
    instructors: {
      deep: true,
      handler() {
        this.itemForm.instructors = this.instructors.map(x => x.id)
      }
    }
  },
  methods: {
    async loadInstructors(search = null, key = null) {
      /* key: when click on @ or # in open event
      */
      if (key) this.keyChoose = key;//just future when want to change list type  ex: @ for instructors ,# for students
      let { data } = await academyAPI.instructor.getAllMentions({ search: search })
      if (data.data)
        this.instructors = data.data
    }
    ,
    async onOpen(key, ...rest) {
      console.mylog('key', key, rest)
      await this.loadIssues()
      //this.items = key === '@' ? users : issues
    },

    onApply(item, key, replacedWith) {
      console.mylog(item, key, `has been replaced with ${replacedWith}`)
    },
    clickItem(evt, type) {
      evt.preventDefault();

      this.type = type
    },
    nextDialogCourse() {
      let instructorIds = this.itemForm.instructors.map(instructor => instructor.id);
      console.log('instructorsIds', instructorIds);
      let groupDialog = this.isUpdate ? 'update-course' : `add-course-${this.itemForm.type}`
      let dataEvt = this.isUpdate ? { ...this.itemDialog } : {}
      this.fireOpenDialog(groupDialog, { ...dataEvt, instructors: instructorIds })
      this.closeEvent()
    },
    closeEvent() {
      this.fireCloseDialog(this.group)
    },
    openDialog(dataEvt) {
      this.isUpdate = false;
      if (dataEvt && dataEvt.id) {
        this.isUpdate = true;

        this.itemDialog = dataEvt;
        this.itemForm.type = dataEvt.type ?? 'live';
        this.instructors = dataEvt.instructors ?? [];
        this.itemForm.instructors = this.instructors.map(ins => ins.id);
      }
      this.showDialog = true;

      return true;
    },
    closeDialog() {
      this.showDialog = false;
      return true;
    }
  }
}
</script>

<style></style>