<template>
    <div class="hello">
      <ValidationProvider
                                                    tag="div"
                                                    class="w-100"
                                                        :name="$t('freelance_document')"
                                                        vid="file"
                                                        rules="required"
                                                        v-slot="{errors,validate}"
                                                        >
                                                        <d-file-input class="rate-image" 
                                                        prendIcon="far fa-square-plus"
                                                        :validate="validate" 
                                                        :errors="errors" 
                                                        v-model="file" 
                                                        placeholder="ارفق صورة" />
                                                    
     </ValidationProvider>
    </div>
  </template>
  
  <script>

  export default {
    name: 'test-vue',
    data:()=>({
      file:null,
    })
 
  }
  </script>
  <style>
  .hello{
    display: flex;
    justify-content: center;
    align-items: center;
  }
.rate-image .input-file__wrapper{
  border-style: solid !important;
  border-color: var(--m-color) !important;
  color: var(--m-color) !important;
}
.rate-image .input-file__label{
  color: var(--m-color) !important;
}
</style>
  