<template>
  <div class="box-subscribe  border shadow p-5 text-center rounded-2 bg-white d-flex flex-column justify-content-between">
                     

                     <div>

                         <h2 class="fw-bolder">{{title}}</h2>
                         <h1 class="y-c fw-bolder fs-1 py-4">
                             {{typeSubscribe=='free'?`0`:price}} {{ $t('riyals') }}
                         </h1>
                         <div class="text-start">

                             <p v-for="(feature,i) in features" :key="i">
                                 <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M4.53915 7.60486L1.5259 4.59162L0.521484 5.59604L4.53915 9.6137L13.1484 1.00442L12.144 0L4.53915 7.60486Z" fill="#1FB9B3"/>
                                 </svg>
                                {{feature}}
                                </p>
                         </div>
                     </div>
                     <div >
                         <a @click="selected" href="#" class="btn-main px-4 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                             اشتركي الآن
                         </a>
                     </div>
            
                 </div>
</template>

<script>

export default {
  props:{
    title:{
        type:String,
    },
    price:{
        type:[String,Number]
    },
    typeSubscribe:{
        type:String
    },
    features:{
        type:[Array,Object],
        
    }
  },
  methods:{
    selected(){
        this.$emit('selected',this.typeSubscribe)
    }
  }
}
</script>

<style>

</style>