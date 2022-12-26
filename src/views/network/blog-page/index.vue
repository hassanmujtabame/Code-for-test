<template>
  <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container blog-page">
      <div class=" position-relative">
        <img class="w-100" :src="blog.image" :alt="blog.title" height="432">
        <div class="d-flex gap-2 position-absolute bottom-0 data">
          <p v-for="(cat,c) in blog.categories" :key="c" :style="{'background-color':colors[c%3]}" class="p-1 px-2 rounded-2 text-white m-0">
            {{ cat.name }}
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class=" col-12 col-md-8">
          <h3 class="m-c">{{ blog.title }}
          </h3>
          <p class="pargrapg" v-html="blog.description">
           </p>
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
          <div v-else class="box border rounded-3 p-2">
            <div class="row justify-content-center">
              <div class="col-md-4 img-service text-center">
                <img class="rounded-circle " :src="blog.user_info.image" :alt="blog.user_info.name"
                  width="100" height="100">
              </div>
              <div class="col-md-8 t-c">
                <h4 class="fw-bold">
                 {{ blog.user_info.name}}
                </h4>
                <p>
                  {{ blog.user_info.job}}
                </p>
                <div class="message-service">
                  <button class="text-white border-0 p-2 px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
                        fill="white" />
                      <path
                        d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
                        fill="white" />
                    </svg>
                    رسالة
                  </button>
                </div>
              </div>


            </div>
          </div>
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
    <portal to="body">
    <UpdateBlogDialog />
    <deleteBlogDialog/>
  </portal>
  </div>
</template>

<script>
import BlogsAPI from '@/services/api/blogs.js'
import UpdateBlogDialog from '../blog/parts/dialogs/update-blog.vue'
import deleteBlogDialog from '../blog/parts/dialogs/del-blog.vue'
export default {
  name: 'blog-page',
  components:{
    UpdateBlogDialog,
    deleteBlogDialog
  },
  data:()=>{
    return {
      isOwner:true,
      loading:true,
      hasError:false,
      blog:{},
      colors:['#F2631C','#FFBC00','#2C98B3']
  }},
  methods:{
    openEditDialog(){
      this.fireOpenDialog('update-blog',this.blog)
    },
    openDeleteDialog(){
      this.fireOpenDialog('delete-blog',this.blog)
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await BlogsAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.blog = data.data;
                   this.isOwner = this.blog.user_info.id==this.user.id
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

</style>