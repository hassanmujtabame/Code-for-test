<template>
    <d-dialog-large 
    :group="group" 
    :openDialog="openDialog" 
    :close-dialog="closeDialog"
    :xl="false"
    >
   <div class="text-center">
            <div>
                <h4>
                    هل تريدين اضافة اعلان ؟
                </h4>
              </div>
          <div>
            <img src="/assets/img/ve-122.png" alt="">
          </div>
          <p>
            حتى تتمكن من اضافة اعلانات يجب ان تكون شريك معنا في الشبكة , رقي حسابك الان و استفيد من هذه الميزة ومميزات اخرى عديدة
          </p>
    
        </div>
        <template v-slot:actions>
            <button @click="openJoinPage" type="button" class="btn btn-main">
             {{ $t('join-as-partner') }}
            </button>
        </template>
    </d-dialog-large>
</template>

<script>
export default {
    props:{
        group:{
            type:String,
            default:'join-as-partner'
        }
    },
    data: () => {
        return{
            routeObje:{},
            showDialog:false,
        }
    },
    methods:{
        closeEvent(){
            this.fireCloseDialog(this.group)
        },
        openJoinPage(){
            this.$router.push(this.routeObje),
            this.closeEvent()
        },
        closeDialog(){
            this.showDialog = false;
            return true;
        },
        openDialog(data){
                this.routeObje = data;
                this.showDialog = true;
            return true;
        },
    }
}
</script>