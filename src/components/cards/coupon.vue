<template>
    <div class="border rounded-3 ">
                            <div class="d-flex justify-content-end p-3" style="height:75px">
                                  <p v-if="tag" style=" background-color:#414042 ;width: fit-content;"  class="text-white px-3 rounded-2">
                                      {{tag}}
                                  </p>
                              </div>
                              <div class="d-flex ">
                                  <div class="px-2" >
                                      <img class="border p-2" :src="img" alt="" width="57" height="57">
                                  </div>
                                  <div class="text-start px-3">
                                      <h5 style="height:48px">
                                          {{title}}
                                      </h5>
                                      <p class="t-c">
                                          احصل على خصم {{discount}}% عند استخدامك كود الخصم
                                      </p>
                                      <button @click="copyToClipboard" class="btn border p-2  px-3 m-c">
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M11.4 22.75H7.6C3.21 22.75 1.25 20.79 1.25 16.4V12.6C1.25 8.21 3.21 6.25 7.6 6.25H10.6C11.01 6.25 11.35 6.59 11.35 7C11.35 7.41 11.01 7.75 10.6 7.75H7.6C4.02 7.75 2.75 9.02 2.75 12.6V16.4C2.75 19.98 4.02 21.25 7.6 21.25H11.4C14.98 21.25 16.25 19.98 16.25 16.4V13.4C16.25 12.99 16.59 12.65 17 12.65C17.41 12.65 17.75 12.99 17.75 13.4V16.4C17.75 20.79 15.79 22.75 11.4 22.75Z" fill="#1FB9B3"/>
                                              <path d="M16.9977 14.1505H13.7977C10.9877 14.1505 9.84766 13.0105 9.84766 10.2005V7.00048C9.84766 6.70048 10.0277 6.42048 10.3077 6.31048C10.5877 6.19048 10.9077 6.26048 11.1277 6.47048L17.5277 12.8705C17.7377 13.0805 17.8077 13.4105 17.6877 13.6905C17.5777 13.9705 17.2977 14.1505 16.9977 14.1505ZM11.3477 8.81048V10.2005C11.3477 12.1905 11.8077 12.6505 13.7977 12.6505H15.1877L11.3477 8.81048Z" fill="#1FB9B3"/>
                                              <path d="M15.6016 2.75H11.6016C11.1916 2.75 10.8516 2.41 10.8516 2C10.8516 1.59 11.1916 1.25 11.6016 1.25H15.6016C16.0116 1.25 16.3516 1.59 16.3516 2C16.3516 2.41 16.0116 2.75 15.6016 2.75Z" fill="#1FB9B3"/>
                                              <path d="M7 5.75C6.59 5.75 6.25 5.41 6.25 5C6.25 2.93 7.93 1.25 10 1.25H12.62C13.03 1.25 13.37 1.59 13.37 2C13.37 2.41 13.03 2.75 12.62 2.75H10C8.76 2.75 7.75 3.76 7.75 5C7.75 5.41 7.41 5.75 7 5.75Z" fill="#1FB9B3"/>
                                              <path d="M19.1875 17.75C18.7775 17.75 18.4375 17.41 18.4375 17C18.4375 16.59 18.7775 16.25 19.1875 16.25C20.3275 16.25 21.2475 15.32 21.2475 14.19V8C21.2475 7.59 21.5875 7.25 21.9975 7.25C22.4075 7.25 22.7475 7.59 22.7475 8V14.19C22.7475 16.15 21.1475 17.75 19.1875 17.75Z" fill="#1FB9B3"/>
                                              <path d="M22 8.75048H19C16.34 8.75048 15.25 7.66048 15.25 5.00048V2.00048C15.25 1.70048 15.43 1.42048 15.71 1.31048C15.99 1.19048 16.31 1.26048 16.53 1.47048L22.53 7.47048C22.74 7.68048 22.81 8.01048 22.69 8.29048C22.58 8.57048 22.3 8.75048 22 8.75048ZM16.75 3.81048V5.00048C16.75 6.83048 17.17 7.25048 19 7.25048H20.19L16.75 3.81048Z" fill="#1FB9B3"/>
                                              </svg>
                                              <span :id="couponId">{{name}}</span>
                                              <span class="copyAlert " :id="`${couponId}-alert`"></span>
                                      </button>
                                  </div>
                              </div>
                              <div class="d-flex justify-content-between mt-3 border-top px-3 py-2">
                                  <p class="t-c p-0 m-0">
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8.0013 15.1667C4.50797 15.1667 1.66797 12.3267 1.66797 8.83333C1.66797 5.34 4.50797 2.5 8.0013 2.5C11.4946 2.5 14.3346 5.34 14.3346 8.83333C14.3346 12.3267 11.4946 15.1667 8.0013 15.1667ZM8.0013 3.5C5.0613 3.5 2.66797 5.89333 2.66797 8.83333C2.66797 11.7733 5.0613 14.1667 8.0013 14.1667C10.9413 14.1667 13.3346 11.7733 13.3346 8.83333C13.3346 5.89333 10.9413 3.5 8.0013 3.5Z" fill="#979797"/>
                                          <path d="M8 9.16536C7.72667 9.16536 7.5 8.9387 7.5 8.66536V5.33203C7.5 5.0587 7.72667 4.83203 8 4.83203C8.27333 4.83203 8.5 5.0587 8.5 5.33203V8.66536C8.5 8.9387 8.27333 9.16536 8 9.16536Z" fill="#979797"/>
                                          <path d="M10 1.83398H6C5.72667 1.83398 5.5 1.60732 5.5 1.33398C5.5 1.06065 5.72667 0.833984 6 0.833984H10C10.2733 0.833984 10.5 1.06065 10.5 1.33398C10.5 1.60732 10.2733 1.83398 10 1.83398Z" fill="#979797"/>
                                          </svg>
                                          {{ $t('publish-date') }} : {{date}}
                                  </p>
                                  <p class="t-c p-0 m-0">
                                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.0811 15.1673H6.76111C5.50111 15.1673 4.58111 14.6407 4.22777 13.734C3.86111 12.7873 4.20111 11.614 5.08111 10.8207L8.17444 8.00065L5.08111 5.18065C4.20111 4.38732 3.86111 3.21398 4.22777 2.26732C4.58111 1.35398 5.50111 0.833984 6.76111 0.833984H11.0811C12.3411 0.833984 13.2611 1.36065 13.6144 2.26732C13.9811 3.21398 13.6411 4.38732 12.7611 5.18065L9.66777 8.00065L12.7678 10.8207C13.6411 11.614 13.9878 12.7873 13.6211 13.734C13.2611 14.6407 12.3411 15.1673 11.0811 15.1673ZM8.92111 8.67398L5.75444 11.554C5.19444 12.0673 4.94777 12.814 5.16111 13.3673C5.36111 13.8806 5.92777 14.1673 6.76111 14.1673H11.0811C11.9144 14.1673 12.4811 13.8873 12.6811 13.3673C12.8944 12.814 12.6544 12.0673 12.0878 11.554L8.92111 8.67398ZM6.76111 1.83398C5.92777 1.83398 5.36111 2.11398 5.16111 2.63398C4.94777 3.18732 5.18777 3.93398 5.75444 4.44732L8.92111 7.32732L12.0878 4.44732C12.6478 3.93398 12.8944 3.18732 12.6811 2.63398C12.4811 2.12065 11.9144 1.83398 11.0811 1.83398H6.76111Z" fill="#979797"/>
                                          </svg>
                                          المدة :{{during}} أيام 
                                  </p>
                              </div>
                             </div>
  </template>
  
  <script>
  export default {
   name:'card-vue',
   props:{
      title:{
          type:String
      },
      img:{
          type:String
      },
      tag:{
          type:String,
      },
      discount:{
          type:[String,Number]
      },
      name:{
          type:String,
          default:'riadiat-10'
      },
      date:{
          type:String,
      },
      during:{
          type:[String,Number]
      }
   },
   data:(vm)=>{
    return {
        couponId:`code-coupon-${vm.generateRandomString(8)}`
    }
   },
   methods:{
     copyToClipboard() {
  // Get the text field
  var copyText = document.getElementById(this.couponId);
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerHTML);
  const copyDiv = document.getElementById(this.couponId+"-alert")
    copyDiv.textContent = "Copied!";
    copyDiv.style.display = "inline"; 
    copyDiv.style.animationName = "disappear";
    copyDiv.style.animationDuration = "2.5s"; 
    setTimeout(function(){ 
    copyDiv.style.display = "none"; 
    copyDiv.style.animationName = "none"; 
    }, 2400);
  // Alert the copied text
  //alert("Copied the text: " + copyText.innerHTML);
}
   }
  }
  </script>
  
  <style>
  .copyAlert {
  opacity: 0;
  color:rgb(79, 222, 79)
}

@keyframes disappear {
  30% {
    opacity: 0;
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
  </style>