<template>
  <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container blog-page">
      <div class=" position-relative">
        <img class="w-100" :src="itemPage.image" :alt="itemPage.title" height="432">
        <div class="d-flex gap-2 position-absolute bottom-0 data">
          <p v-for="(cat,c) in itemPage.categories" :key="c" :style="{'background-color':colors[c%3]}" class="p-1 px-2 rounded-2 text-white m-0">
            {{ cat.name }}
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class=" col-12 col-md-8">
          <h3 class="m-c">{{ itemPage.title }}
          </h3>
          <div class="pargrapg" v-html="itemPage.description">
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div v-if="isOwner" class="box  rounded-3 p-2">
          <div class="text-end">
                        <button @click="openEditDialog" class="btn bg-main border-0 text-white p-2 mx-1"   >
                           <img src="/assets/svg/update.svg" />   
                           تعديل 
                        </button>
                        <button @click="openDeleteDialog" class="btn bg-danger border-0 text-white p-2"   >
                            <img src="/assets/svg/trash-outline.svg" />
                           حذف 
                        </button>
          </div>
          </div>
          <d-user-info-li v-else sizeImage="100" :member="itemPage.user_info" routeName="academy-show-profile" />
          <div class="box border rounded-3 p-2 mt-3">
            <h3>
              تدوينات أخرى
            </h3>


            <div class="blogs-auhter">
              <div class="box rounded-3 border mt-3">
                <div class="image">
                  <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                </div>
                <div class="text p-3">
                  <h5>عنوان المدونة </h5>
                  <p>
                    نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي
                  </p>
                </div>
                <div class="date d-flex justify-content-between mx-1 p-3">
                  <p class="m-c">
                    ريادة الاعمال
                  </p>
                  <p>
                    10 sep, 2021
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                        fill="#979797" />
                    </svg>

                  </p>

                </div>

              </div>
              <div class="box rounded-3 border mt-3">
                <div class="image">
                  <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                </div>
                <div class="text p-3">
                  <h5>عنوان المدونة </h5>
                  <p>
                    نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي
                  </p>
                </div>
                <div class="date d-flex justify-content-between mx-1 p-3">
                  <p class="m-c">
                    ريادة الاعمال
                  </p>
                  <p>
                    10 sep, 2021
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                        fill="#979797" />
                    </svg>

                  </p>

                </div>

              </div>
              <div class="box rounded-3 border mt-3">
                <div class="image">
                  <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                </div>
                <div class="text p-3">
                  <h5>عنوان المدونة </h5>
                  <p>
                    نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي
                  </p>
                </div>
                <div class="date d-flex justify-content-between mx-1 p-3">
                  <p class="m-c">
                    ريادة الاعمال
                  </p>
                  <p>
                    10 sep, 2021
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                        fill="#979797" />
                    </svg>

                  </p>

                </div>

              </div>
              <div class="box rounded-3 border mt-3">
                <div class="image">
                  <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                </div>
                <div class="text p-3">
                  <h5>عنوان المدونة </h5>
                  <p>
                    نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي نص تعريفي
                  </p>
                </div>
                <div class="date d-flex justify-content-between mx-1 p-3">
                  <p class="m-c">
                    ريادة الاعمال
                  </p>
                  <p>
                    10 sep, 2021
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                        fill="#979797" />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <UpdateBlogDialog />
    <deleteBlogDialog/>

  </div>
</template>

<script>
import BlogsAPI from '@/services/api/blogs.js'
import UpdateBlogDialog from '../dialogs/update-blog.vue'
import deleteBlogDialog from '../dialogs/del-blog.vue'
export default {
  name: 'blog-page',
  components:{
    UpdateBlogDialog,
    deleteBlogDialog
  },
  data:()=>{
    return {
      isOwner:false,
      loading:true,
      hasError:false,
      itemPage:{},
      colors:['#F2631C','#FFBC00','#2C98B3']
  }},
  methods:{
    openEditDialog(){
      this.fireOpenDialog('update-blog',this.itemPage)
    },
    openDeleteDialog(){
      this.fireOpenDialog('delete-blog',this.itemPage)
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await BlogsAPI.getItem(this.$route.params.id)
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

<style>
.blog-page .pargrapg>*{
  width:100% !important;
}
</style>