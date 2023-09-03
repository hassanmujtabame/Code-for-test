<template>
   <div> 

                        <div class="box d-flex align-items-center justify-content-between mb-2">
                            <h5 >
              قدم فكرة أو اقتراح لفريق رياديات
                            </h5>
                    
                        </div>
                         <textarea class="form-control" 
                            v-model="idea" 
                            rows="6" 
                            placeholder="قدم فكرة أو اقتراح لفريق رياديات"
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
        idea:''

        }
    },
};
</script>
  
  <style>
</style>