<template>
  <div>
    <div class="dashbord">
      <div>
        <div class="row">
          <h1>توليد الروابط</h1>
        </div>

        <div class="row mb-3" style="padding: 0 10px">
          <div class="col-12 d-flex justify-content-between">
            <div class="col-4 row justify-content-between">
              <button @click='generateUrl()'
                class="text-white border-0 col-5"
                style="
                  border-radius: 5px;
                  box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
                  padding: 10px;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #2db7b3;
                "
              >
                انشاء رابط
              </button>
              <select
                class="text-white border-0 col-5"
                v-model='page'
                style="
                  border-radius: 5px;
                  box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
                  padding: 10px;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #2db7b3;
                "
              >
                <option value=""> الرئيسيه</option>
                <option value="network">الشبكه</option>
                <option value="incubator">الحاضنه</option>
                <option value="academy">الاكاديميه</option>
                <option value="service-provider">مقدمى الخدمه</option>
              </select>
            </div>
            <div class="col-8 row justify-content-between">
              <input
                class="col-8 text-center t-c" readonly
                style="
                  border: 1px solid #6666663d;
                  border-radius: 5px;
                  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.125);
                  padding: 10px;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
                v-model='url'
              />
              <button
                @click="copyToClipboard"
                class="col-3"
                style="
                color: #444;
                  border: 1px solid #6666663d;
                  border-radius: 5px;
                  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.125);
                  padding: 10px;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
              {{copied}}
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6689 2.0771L12.0346 0.442851C11.7511 0.1593 11.3665 2.09684e-06 10.9655 0L5.5439 0C4.70885 0 4.03193 0.676923 4.03193 1.51197V3.02395H1.51197C0.676923 3.02395 0 3.70087 0 4.53592V14.6157C0 15.4508 0.676923 16.1277 1.51197 16.1277H8.56785C9.4029 16.1277 10.0798 15.4508 10.0798 14.6157V13.1038H12.5998C13.4348 13.1038 14.1117 12.4268 14.1117 11.5918V3.14623C14.1117 2.74523 13.9524 2.36065 13.6689 2.0771ZM8.37885 14.6157H1.70097C1.65084 14.6157 1.60277 14.5958 1.56733 14.5604C1.53189 14.5249 1.51197 14.4769 1.51197 14.4267V4.72492C1.51197 4.67479 1.53189 4.62672 1.56733 4.59127C1.60277 4.55583 1.65084 4.53592 1.70097 4.53592H4.03193V11.5918C4.03193 12.4268 4.70885 13.1038 5.5439 13.1038H8.56785V14.4267C8.56785 14.4769 8.54794 14.5249 8.51249 14.5604C8.47705 14.5958 8.42898 14.6157 8.37885 14.6157ZM12.4108 11.5918H5.7329C5.68277 11.5918 5.6347 11.5719 5.59926 11.5364C5.56381 11.501 5.5439 11.4529 5.5439 11.4028V1.70097C5.5439 1.65084 5.56381 1.60277 5.59926 1.56733C5.6347 1.53189 5.68277 1.51197 5.7329 1.51197H9.07184V4.28392C9.07184 4.70145 9.4103 5.03991 9.82782 5.03991H12.5998V11.4028C12.5998 11.4529 12.5799 11.501 12.5444 11.5364C12.509 11.5719 12.4609 11.5918 12.4108 11.5918ZM12.5998 3.52794H10.5838V1.51197H10.8872C10.9373 1.51197 10.9854 1.53188 11.0209 1.56732L12.5444 3.09088C12.562 3.10843 12.5759 3.12927 12.5854 3.1522C12.5949 3.17514 12.5998 3.19971 12.5998 3.22453V3.52794Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- <div class="row mb-3" style="padding: 0 10px">
          <div class="col-12 d-flex justify-content-between">
            <div class="col-4 row">
              <button
                class="text-white border-0 col-12"
                style="
                  border-radius: 5px;
                  box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
                  padding: 10px;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #2db7b3;
                "
              >
                اختصار الرابط
              </button>
            </div>
            <div class="col-8 row justify-content-between">
              <span
                class="col-8"
                style="
                  border: 1px solid #6666663d;
                  border-radius: 5px;
                  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.125);
                  padding: 10px;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                demo.riadiat.com
              </span>
              <span
                class="col-3"
                style="
                  border: 1px solid #6666663d;
                  border-radius: 5px;
                  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.125);
                  padding: 10px;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                نسخ الرابط
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6689 2.0771L12.0346 0.442851C11.7511 0.1593 11.3665 2.09684e-06 10.9655 0L5.5439 0C4.70885 0 4.03193 0.676923 4.03193 1.51197V3.02395H1.51197C0.676923 3.02395 0 3.70087 0 4.53592V14.6157C0 15.4508 0.676923 16.1277 1.51197 16.1277H8.56785C9.4029 16.1277 10.0798 15.4508 10.0798 14.6157V13.1038H12.5998C13.4348 13.1038 14.1117 12.4268 14.1117 11.5918V3.14623C14.1117 2.74523 13.9524 2.36065 13.6689 2.0771ZM8.37885 14.6157H1.70097C1.65084 14.6157 1.60277 14.5958 1.56733 14.5604C1.53189 14.5249 1.51197 14.4769 1.51197 14.4267V4.72492C1.51197 4.67479 1.53189 4.62672 1.56733 4.59127C1.60277 4.55583 1.65084 4.53592 1.70097 4.53592H4.03193V11.5918C4.03193 12.4268 4.70885 13.1038 5.5439 13.1038H8.56785V14.4267C8.56785 14.4769 8.54794 14.5249 8.51249 14.5604C8.47705 14.5958 8.42898 14.6157 8.37885 14.6157ZM12.4108 11.5918H5.7329C5.68277 11.5918 5.6347 11.5719 5.59926 11.5364C5.56381 11.501 5.5439 11.4529 5.5439 11.4028V1.70097C5.5439 1.65084 5.56381 1.60277 5.59926 1.56733C5.6347 1.53189 5.68277 1.51197 5.7329 1.51197H9.07184V4.28392C9.07184 4.70145 9.4103 5.03991 9.82782 5.03991H12.5998V11.4028C12.5998 11.4529 12.5799 11.501 12.5444 11.5364C12.509 11.5719 12.4609 11.5918 12.4108 11.5918ZM12.5998 3.52794H10.5838V1.51197H10.8872C10.9373 1.51197 10.9854 1.53188 11.0209 1.56732L12.5444 3.09088C12.562 3.10843 12.5759 3.12927 12.5854 3.1522C12.5949 3.17514 12.5998 3.19971 12.5998 3.22453V3.52794Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="row mb-5 justify-content-center">
          <button
            class="text-white border-0 col-3"
            style="
              border-radius: 5px;
              box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
              padding: 10px;
              height: auto;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #2db7b3;
            "
          >
            انشاء بانر اعلانى
          </button>
        </div> -->

        <!-- <div style="padding: 20px; border: 1px solid #2db7b3">
          <SectionTable />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

import SectionTable from "./parts/section-table/index.vue";

export default {
  name: "affiliate-marketing-visits",
  components: {
    SectionTable,
    DatePick,
  },
  data: () => ({
    textOfCopy: 'نسخ الرابط',
    page: '',
    url: ''
  }),
  computed: {
    copied(){
      return this.textOfCopy
    }
  },
  methods: {
      copyToClipboard() {
      this.textOfCopy = 'تم النسخ'
      const textField = document.createElement("textarea");
      textField.innerText = this.url;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
      // alert("Text copied to clipboard!");
    },
    generateUrl(){
      this.textOfCopy = 'نسخ الرابط'
        let host = window.location.host
        let page = this.page
        let url = null
        if (page == '') {
            url = host + '/ar' + '?affiliate_id=' + this.user.affiliate_id
        }else {
            url = host + '/ar/' + page + '/home' + '?affiliate_id=' + this.user.affiliate_id
        }
        this.url = url

    }
  },
  mounted() {
    this.generateUrl()
  }
};
</script>

<style>
.vdpArrowPrev:after {
  border-right-color: #2db7b3;
}

.vdpArrowNext:after {
  border-left-color: #2db7b3;
}

.vdpCell.selectable:hover .vdpCellContent,
.vdpCell.selected .vdpCellContent {
  background: #2db7b3;
}

.vdpCell.today {
  color: #2db7b3;
}

.vdpTimeUnit > input:hover,
.vdpTimeUnit > input:focus {
  border-bottom-color: #2db7b3;
}

.vdpComponent.vdpWithInput > input {
  height: 100%;
  background: #eee;
  border-radius: 5px;
  border-color: #979797;
  box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.125);
}
</style>
