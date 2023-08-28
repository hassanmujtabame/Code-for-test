<template>
   <div class="box ">
            <p class="p-2 m-0 border-bottom w-75">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.56 26.3333C14.1734 26.3333 13.8 26.28 13.4933 26.16C8.93335 24.6 1.66669 19.0266 1.66669 10.7866C1.66669 6.55995 5.08001 3.1333 9.28001 3.1333C11.2933 3.1333 13.1733 3.90661 14.5733 5.27995C15.9867 3.90661 17.8533 3.1333 19.8667 3.1333C24.0667 3.1333 27.48 6.55995 27.48 10.7866C27.48 11.36 27.44 11.9466 27.36 12.5466C27.32 12.8533 27.1333 13.1333 26.8667 13.2933C26.6 13.4533 26.2667 13.4666 25.9734 13.3466C24.3334 12.64 22.2934 13.1733 21.2267 14.6C21.04 14.8533 20.68 14.9866 20.4267 15C20.1067 15 19.8134 14.8533 19.6267 14.6C18.8667 13.5866 17.7067 13.0133 16.4533 13.0133C14.28 13.0133 12.5067 14.8 12.5067 17C12.5067 20.4666 14.4934 22.9333 16.1734 24.4133C16.4134 24.6266 16.5334 24.9333 16.5067 25.2533C16.48 25.5733 16.3067 25.8533 16.0267 26.0266C15.88 26.1066 15.76 26.16 15.6933 26.1733C15.3467 26.28 14.96 26.3333 14.56 26.3333ZM9.28001 5.1333C6.18668 5.1333 3.66669 7.66662 3.66669 10.7866C3.66669 17.76 9.4667 22.0533 12.8 23.7066C11.5334 22.0133 10.4933 19.7733 10.4933 16.9866C10.4933 13.6799 13.16 11 16.44 11C17.9333 11 19.3334 11.5466 20.4134 12.52C21.76 11.32 23.68 10.7733 25.4667 11.1066C25.4667 10.9999 25.4667 10.8933 25.4667 10.8C25.4667 7.67997 22.9467 5.14661 19.8534 5.14661C18.08 5.14661 16.44 5.97328 15.36 7.39994C15.1733 7.65328 14.88 7.79997 14.56 7.79997C14.24 7.79997 13.9467 7.65328 13.76 7.39994C12.7067 5.95994 11.0667 5.1333 9.28001 5.1333Z"
                    fill="#414042" />
                <path
                    d="M20.4269 28.8667C20.1202 28.8667 19.8002 28.8267 19.5469 28.7333C18.4002 28.3467 16.5469 27.4 14.8535 25.8934C12.8802 24.1467 10.5202 21.1867 10.5202 16.9867C10.5202 13.68 13.1869 11 16.4669 11C17.9602 11 19.3602 11.5467 20.4402 12.52C22.1202 11.0134 24.6802 10.5867 26.7868 11.5067C28.9468 12.4667 30.3469 14.6267 30.3469 17C30.3469 23.32 24.8002 27.56 21.3069 28.7467C21.0402 28.8267 20.7335 28.8667 20.4269 28.8667ZM16.4535 13C14.2802 13 12.5069 14.7867 12.5069 16.9867C12.5069 20.4533 14.4935 22.92 16.1735 24.4C17.6535 25.7067 19.2135 26.52 20.1869 26.84C20.2935 26.88 20.5469 26.88 20.6402 26.84C22.6402 26.16 28.3335 22.8933 28.3335 16.9867C28.3335 15.4 27.4002 13.96 25.9735 13.3333C24.3602 12.6267 22.2935 13.16 21.2269 14.5867C21.0402 14.84 20.6802 14.9733 20.4269 14.9867C20.1069 14.9867 19.8135 14.84 19.6269 14.5867C18.8669 13.5733 17.7068 13 16.4535 13Z"
                    fill="#414042" />
            </svg>
            الخدمات التي تقدمها
        </p>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                          
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                   <div class="accordion-body">
            <div class=" d-flex rounded-3" style="width:fit-content; border: 1px solid #1FB9B3;">
              <div v-for="(state,i) in states" :key="i" class="form-check form-check-custom-states">
                <input
                  class="form-check-input form-check-states"
                  type="radio"
                  :value="state.id"
                  v-model="filter.state"
                  :selected="state.id===filter.state"
                  name="stateRadioDefault"
                  :id="state.id"
                  @change="updateFilter"
                />
                <label  style="color: #1FB9B3; cursor: pointer;" :id="state.id" class="form-check-label t form-check-custom" :for="state.id">{{state.name}}</label>
              </div> 
            </div>
          </div>
                            </div>
                        </div>
                
                    </div>
                </div>
</template>

<script>
import readyServiceAPIs from '@/services/api/service-provider/provider/ready-service'
export default {
 name:'sidebar-box',
 props:{
    filterItem:{
        type:[Object,Array],//defaults values
        require:true
    }
 },
 data:(vm)=>{

    return{
        states:[
            {id:'online',name:vm.$t('online-services')},
            {id:'offline',name:vm.$t('offline-services')},
        ],
        categories:[],
    filter:vm.filterItem
 }},
 watch:{
    //     filter:{
    //     deep:true,
    //     handler(val){
    //         this.$emit('change',val)
    //     }
    // }
 },
 methods:{
 updateFilter(){
    this.$emit('change',this.filter)
 },
 async getCategories() {
            try {
                let { data } = await readyServiceAPIs.getCategories()
                if (data.success) {

                    let categories = data.data;
                    //categories.unshift({ id: null, name: 'الكل' })
                    this.categories=categories
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
        }
    },
    mounted() {
        this.getCategories();
    }
}
</script>



<style>
.form-check-input-custom{
 display: none;
}
.form-check-input-custom:checked + label{
    background-color: #1FB9B3;
    border-radius: 5px;
    color: white;
}
.form-check-custom{
/* border: 1px solid #1FB9B3; */
/* border-radius: 8px; */
padding: 3px 45px;

}
.form-check-custom-states{
  padding: 0 !important;
  margin: 0 !important;
}
.form-check-states:checked  + label{
    background-color: #1FB9B3;
    border-radius: 5px ;
    border-top-left-radius: 0px !important ;
    border-bottom-left-radius: 0px !important ;
    color: white !important;
}
.form-check-states:checked   + #offline{
    background-color: #1FB9B3;
    border-top-right-radius: 0px !important ;
    border-bottom-right-radius: 0px !important ;
   border-top-left-radius: 5px !important ;
    border-bottom-left-radius: 5px !important ;
    color: white !important;
}
.form-check-states{
 display: none;
}
#offline{
 border-right: 1px solid #1FB9B3;
}
</style>