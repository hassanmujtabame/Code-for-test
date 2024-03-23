<template>
  <d-dialog-large
    :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
  >
    <template v-slot>
      <div class="text-center" v-if="showed">
        <svg
          width="142"
          height="142"
          viewBox="0 0 142 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9"
            y="9"
            width="124"
            height="124"
            rx="62"
            fill="#FFC523"
            fill-opacity="0.2"
          />
          <rect
            x="9"
            y="9"
            width="124"
            height="124"
            rx="62"
            stroke="#FFE393"
            stroke-opacity="0.5"
            stroke-width="16.7568"
          />
          <path
            d="M71 58.4326V73.5137"
            stroke="#FFBC00"
            stroke-width="3.77027"
            stroke-linecap="round"
          />
          <circle cx="70.9998" cy="81.0545" r="2.51351" fill="#FFBC00" />
          <path
            d="M58.4328 49.2279C62.1298 47.0892 66.4222 45.8652 71.0004 45.8652C84.8821 45.8652 96.1355 57.1186 96.1355 71.0004C96.1355 84.8821 84.8821 96.1355 71.0004 96.1355C57.1186 96.1355 45.8652 84.8821 45.8652 71.0004C45.8652 66.4222 47.0892 62.1298 49.2279 58.4328"
            stroke="#FFBC00"
            stroke-width="3.77027"
            stroke-linecap="round"
          />
        </svg>

        <!-- <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="80" fill="#FF1616" />
          <path
            d="M80 88.792C77.4717 88.792 75.375 86.6953 75.375 84.167V51.792C75.375 49.2637 77.4717 47.167 80 47.167C82.5283 47.167 84.625 49.2637 84.625 51.792V84.167C84.625 86.6953 82.5283 88.792 80 88.792Z"
            fill="white" />
          <path
            d="M79.9987 110.375C78.3337 110.375 76.7919 109.758 75.6202 108.586C75.0652 107.97 74.6337 107.291 74.2637 106.551C73.9554 105.811 73.832 105.01 73.832 104.208C73.832 102.605 74.5102 101.001 75.6202 99.8294C77.9019 97.5477 82.0955 97.5477 84.3772 99.8294C85.4872 101.001 86.1654 102.605 86.1654 104.208C86.1654 105.01 85.9803 105.811 85.6719 106.551C85.3636 107.291 84.9322 107.97 84.3772 108.586C83.2055 109.758 81.6637 110.375 79.9987 110.375Z"
            fill="white" />
          <path
            d="M80.0005 144.292C75.8688 144.292 71.6754 143.243 67.9754 141.085L31.3454 119.933C23.9454 115.617 19.3203 107.662 19.3203 99.09V56.9102C19.3203 48.3386 23.9454 40.3835 31.3454 36.0669L67.9754 14.9152C75.3754 10.5986 84.5639 10.5986 92.0256 14.9152L128.656 36.0669C136.056 40.3835 140.681 48.3386 140.681 56.9102V99.09C140.681 107.662 136.056 115.617 128.656 119.933L92.0256 141.085C88.3256 143.243 84.1321 144.292 80.0005 144.292ZM80.0005 20.9584C77.4721 20.9584 74.8821 21.6368 72.6004 22.9318L35.9704 44.0834C31.4071 46.7351 28.5703 51.6069 28.5703 56.9102V99.09C28.5703 104.332 31.4071 109.265 35.9704 111.917L72.6004 133.068C77.1637 135.72 82.8372 135.72 87.3388 133.068L123.969 111.917C128.532 109.265 131.369 104.393 131.369 99.09V56.9102C131.369 51.6686 128.532 46.7351 123.969 44.0834L87.3388 22.9318C85.1188 21.6368 82.5288 20.9584 80.0005 20.9584Z"
            fill="white" />
        </svg> -->
        <p class="mt-1">
          {{ $t("confirm_delete_blog_message") }}
        </p>
        <p class="m-c m-0">
          {{ blog.title }}
        </p>
      </div>
    </template>
    <template v-slot:actions>
      <button @click="delBlog" style="height: 40px" class="btn btn-main">
        {{ $t("confirm_delete") }}
      </button>
    </template>
  </d-dialog-large>
</template>

<script>
import BlogsAPI from "@/services/api/academy/instructor/blogs.js";

export default {
  props: {
    group: {
      type: String,
      default: "delete-blog",
    },
  },
  data: () => ({
    blog: { id: null },
    showed: false,
  }),
  methods: {
    async delBlog() {
      try {
        let { data } = await BlogsAPI.deleteItem(this.blog.id);
        if (data.success) {
          //console.log('success',data)
          //this.fireEvent('list-blogs-update')
          this.closeEvent();
          this.$router.push(this.getRouteLocale(-1));
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
    openDialog(data) {
      this.blog = Object.assign({}, data);
      this.showed = true;
      return true;
    },
    closeDialog() {
      this.showed = false;
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + "-close-dialog");
    },
  },
};
</script>

<style></style>
