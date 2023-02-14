<template>
 <div style="margin-top: 85px " class="consult">
    <div class="container mt-5">
        <div class="course-show-page">
    <SectionHeaderOwner v-if="isOwner"/>
    <SectionHeader v-else />
    <SectionBody />
</div>
</div>
  </div>
</template>

<script>
import SectionHeader from './sections/section-header/index.vue'
import SectionHeaderOwner from './sections/section-header-owner/index.vue'
import SectionBody from './sections/section-body/index.vue'
import coursesAPI from '@/services/api/academy/courses'
export default {
 name:'course-show',
 components:{
    SectionHeader,
    SectionBody,
    SectionHeaderOwner
 },
 data:()=>{
    return {
        isOwner:true,
        loading:false,
        hasError:false,
        itemPage:{}
    }
 },
 methods:{
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await coursesAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                   this.isOwner = this.itemPage.user_info.id==this.user.id
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
                this.hasError = true;
              }

            this.loading = false;
        }
  },
  mounted(){
    this.initializing()
  }
}
</script>

<style scoped>
.course-show-page{
    width: 100%;
    background: white;
    padding: 5px;
    border-radius: 10px 20px;
}
</style>