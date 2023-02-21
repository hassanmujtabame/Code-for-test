<template>
  <div style="margin-top: 85px " class="consult">
    <SectionHeader />
  <div class="container mt-5 text-end">
    <button @click="addItem" class="btn btn-custmer"><i class="fa fa-circle-plus"></i> إضافة لقاء تعليمي</button>
    </div>
  <div class="container mt-5">
    <SectionFilterList />
  </div>
  <AddMeetingDialog />
  </div>
</template>

<script>
import SectionHeader from './parts/section-header/index';
import SectionFilterList from './parts/section-filter-list/index';
import AddMeetingDialog from './dialogs/add-meeting/index.vue'

export default {
  name: 'learing-meetings-list',
  components:{
    SectionHeader,
    SectionFilterList,
    AddMeetingDialog
  },
  methods:{
    addItem(){
            this.fireOpenDialog('add-meeting',{id:null,title:null,video:null})
        },
  }
}
</script>

<style>

</style>