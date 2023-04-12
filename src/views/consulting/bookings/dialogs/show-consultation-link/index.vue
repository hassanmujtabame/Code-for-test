<template>
    <d-dialog-large :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
    >
      <template v-slot>
          <div class="text-center" v-if="showDialog">
            <div >
            <img src="/assets/img/Group 39921.png" width="300" height="220" alt="">
          </div>
            <div>
                <h4>
                  {{ itemDialog.title }}
                </h4>
                <p class="t-c fs-r-16-24" v-html="itemDialog.description" ></p>
              </div>
            <!-- input coy link-->
             
              
          
  </div>
      </template>
     
    </d-dialog-large>
  </template>

  <script>
 export default {
    name: "show-consultation-link",
    props: {
        group: {
            type: String,
            default: "show-consultation-link"
        }
    },
    data: () => ({
        itemDialog: { title: null, description: null, btns: null, image: "/assets/img/cuate-2.png" },
        loading: false,
        showDialog: false,
    }),
    methods: {
       
        openDialog(data) {
            this.itemDialog = Object.assign({}, data);
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false;
            return true;
        },
        closeEvent() {
            this.fireEvent(this.group + "-close-dialog");
        }
    }
}
  </script>
  
  <style>
  
  </style>