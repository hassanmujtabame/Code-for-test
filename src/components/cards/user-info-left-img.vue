<template>
    <div class="box border rounded-3 p-4">
        <div class="row justify-content-center">
            <div class="col-md-4 img-service text-center">
                <img class="rounded-circle " :src="member.image" :alt="member.name"
                    :width="sizeImage" :height="sizeImage">
            </div>
            <div class="col-md-8 t-c">
                <h4 class="fw-bold">
                  {{member.name}}
                </h4>
                <p>{{ member.description??member.job }}</p>
                <div class="message-service">
                    <button class="text-white border-0 p-2 px-3"
                       @click="sendMessage" >
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
</template>

<script>
export default {
    name:'user-info-li',
 props:{
    sizeImage:{
        type:String,
        default:'145'
    },
    groupDialog:{
        type:String,
    },
    dataEvent:{
        default:()=>{return {
            /**
             formData:{},
            opts:{}
             */
        }}
    },
   member:{
     type:[Array,Object],
     default:()=>{return {
        image:'/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg',
        name:'عبد الرحمن الشيخ',
        job:'مصمم واجهات اميامية',
        summary:'مصمم واجهات محترفة لدي الكثير من الخبرة في تصميم الازياء والعبايات يسرني مساعدتك'
     }}
   }
 },
 methods:{
    sendMessage(){
        if(!this.groupDialog) return;
        if(!this.member.id) return;
        this.fireOpenDialog(this.groupDialog,this.dataEvent)
    }
 }
}
</script>

<style>

</style>