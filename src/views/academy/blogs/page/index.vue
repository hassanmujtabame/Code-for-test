<template>
  <div style="margin-top: 96px; background-color: #fafafa">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else class="container blog-page">
      <div
        class="position-relative rounded-3"
        style="height: 400px; overflow: hidden"
      >
        <img
          class="w-100 header-img"
          :src="itemPage.image"
          :alt="itemPage.title"
          @error="handleImageError"
        />
        <div class="d-flex gap-2 position-absolute bottom-0 data">
          <p
            v-for="(cat, c) in itemPage.categories"
            :key="c"
            :style="{ 'background-color': colors[c % 3] }"
            class="p-1 px-2 rounded-2 text-white m-0"
          >
            {{ cat.name }}
          </p>
        </div>
      </div>

      <div class="row mt-5 title-bar rounded-3">
        <div class="p-3 col-12 col-md-7">
          <h3 class="m-c">{{ itemPage.title }}</h3>
          <p style="color: #cdd7d8">
            تاريخ النشر

            {{ itemPage.created_at }}
          </p>
        </div>
        <div class="col-12 col-md-5 m-auto">
          <div v-if="isOwner" class="box rounded-3 p-2">
            <div class="text-start">
              <button
                @click="openEditDialog"
                style="
                  color: #1fb9b3;
                  background-color: transparent;
                  border: 1px solid #1fb9b3;
                "
                class="btn py-2 rounded-3 px-4 mx-1"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4411_23703)">
                    <path
                      d="M9.57403 2.71878L10.1919 2.10086C11.2157 1.07706 12.8757 1.07706 13.8995 2.10086C14.9233 3.12466 14.9233 4.78457 13.8995 5.80838L13.2815 6.4263M9.57403 2.71878C9.57403 2.71878 9.65127 4.03186 10.8099 5.19046C11.9685 6.34906 13.2815 6.4263 13.2815 6.4263M9.57403 2.71878L8.00065 4.29216M13.2815 6.4263L9.77446 9.93338L7.70817 11.9997L7.60072 12.1071C7.21594 12.4919 7.02356 12.6843 6.81143 12.8497C6.5612 13.0449 6.29045 13.2122 6.00397 13.3488C5.76111 13.4645 5.503 13.5506 4.98677 13.7226L2.79926 14.4518M2.79926 14.4518L2.26455 14.63C2.0105 14.7147 1.73042 14.6486 1.54107 14.4593C1.35172 14.2699 1.2856 13.9898 1.37028 13.7358L1.54852 13.2011M2.79926 14.4518L1.54852 13.2011M1.54852 13.2011L2.27769 11.0136C2.44977 10.4973 2.53581 10.2392 2.65155 9.99636C2.78807 9.70988 2.95541 9.43913 3.15058 9.1889C3.31604 8.97677 3.50843 8.78438 3.8932 8.39961L5.66732 6.62549"
                      stroke="#1FB9B3"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4411_23703">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                تعديل
              </button>
              <button
                style="color: #ff1616; border: 1px solid #ff1616"
                @click="openDeleteDialog"
                class="btn rounded-3 px-4 mx-1 py-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6664 4H2.33301"
                    stroke="#FF1616"
                    stroke-linecap="round"
                  />
                  <path
                    d="M6.11426 2.66634C6.38882 1.88955 7.12964 1.33301 8.00045 1.33301C8.87127 1.33301 9.61209 1.88955 9.88665 2.66634"
                    stroke="#FF1616"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.2488 10.2664C12.1308 12.0363 12.0718 12.9213 11.4952 13.4608C10.9185 14.0003 10.0315 14.0003 8.25768 14.0003H7.7421C5.96824 14.0003 5.0813 14.0003 4.50463 13.4608C3.92796 12.9213 3.86896 12.0363 3.75096 10.2664L3.44434 5.66699M12.5554 5.66699L12.4221 7.66699"
                    stroke="#FF1616"
                    stroke-linecap="round"
                  />
                </svg>

                حذف
              </button>
            </div>
          </div>
          <d-user-info-li
            v-else
            sizeImage="100"
            :member="itemPage.user_info"
            routeName="academy-show-profile"
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-7">
          <div
            class="pargrapg"
            style="width: 85%; word-wrap: break-word"
            v-html="itemPage.description"
          ></div>
        </div>
        <div class="col-12 col-md-5">
          <div class="box bg-white rounded-3 p-4 mt-3">
            <h3 class="my-4 other-blogs">تدوينات أخرى</h3>

            <div
              class=""
              v-for="(blog, index) in itemPage.related_blogs"
              :key="index"
            >
              <div
                class="box bg-white rounded-3 gap-2 flex-md-row flex-column d-flex align-items-center border mt-3"
              >
                <div class="image p-3 rounded-3">
                  <img
                    width="210px"
                    class="rounded-3"
                    :src="blog.image"
                    alt=""
                    height="184"
                    @error="handleImageError"
                  />
                </div>
                <div class="d-flex flex-column">
                  <h5>{{ blog.title }}</h5>
                  <!-- <p v-html="blog.description"></p> -->
                  <router-link
                    :to="getRouteLocale('academy-blogs', { id: blog.id })"
                    style="color: #2cb7b3"
                    class=""
                  >
                    اعرف المزيد
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <UpdateBlogDialog />
    <deleteBlogDialog />
  </div>
</template>

<script>
import BlogsAPI from "@/services/api/blogs.js";
import UpdateBlogDialog from "../dialogs/update-blog.vue";
import deleteBlogDialog from "../dialogs/del-blog.vue";
export default {
  name: "blog-page",
  components: {
    UpdateBlogDialog,
    deleteBlogDialog,
  },
  data: () => {
    return {
      isOwner: false,
      loading: true,
      hasError: false,
      itemPage: {},
      colors: ["#F2631C", "#FFBC00", "#2C98B3"],
    };
  },
  methods: {
    openEditDialog() {
      this.fireOpenDialog("update-blog", this.itemPage);
    },
    openDeleteDialog() {
      this.fireOpenDialog("delete-blog", this.itemPage);
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await BlogsAPI.getItem(this.$route.params.id);
        if (data.success) {
          this.itemPage = data.data;
          this.isOwner = this.itemPage.user_info.id == this.user.id;
        } else {
          this.hasError = true;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
        this.hasError = true;
      }

      this.loading = false;
    },

    handleImageError(event) {
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/no-img.png"; // Replace with your placeholder image URL
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style>
.other-blogs {
  font-family: Cairo;
  font-size: 32px;
  font-weight: 700;
  color: #1fb9b3;
}
.header-img {
  height: 400px;
  object-fit: cover;
}
.blog-page .pargrapg > * {
  width: 100% !important;
}
.title-bar {
  background-color: white !important;
}
</style>
