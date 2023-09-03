<template>
   <div> 

                        <div class="box d-flex align-items-center justify-content-between mb-2">
                            <h5 >
                                اسأل رياديات
                            </h5>
                    
                        </div>
                         <textarea class="form-control" 
                            v-model="freeConsultation" 
                            rows="6" 
                            placeholder="اسأل رياديات"
                            ></textarea>

                               <button  type="button" class="btn btn-main mt-3">
                                  {{ $t('send') }}
                                </button>
 
                   </div>

</template>
  
  <script>
export default {
  components: {
  },
      data: () => {
        return {
        freeConsultation:''

        }
    },
};
</script>
  
  <style>
</style>