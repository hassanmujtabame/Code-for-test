<template>
   <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" :id="idh">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#${id}`" aria-expanded="false" :aria-controls="id">{{title}}</button>
                          </h2>
                          <div :id="id" class="accordion-collapse collapse" :aria-labelledby="idh" data-bs-parent="#accordionFlushExample1">
                            <div class="accordion-body">
                                <slot></slot>
                            </div>
                          </div>
</div>
</template>

<script>
export default {
props:{
    title:{
        type:String,
        require:true
    }
},
data:()=>({
  id:'',
  idh:''
}),
mounted () {
  //console.log('this',this._uid,this.$parent.$children[0]._uid)
  let id=this.$parent.$attrs.id;
  let index = this.$parent.$children.findIndex(x=>x._uid==this._uid)+1;
  //console.log(index)
       this.id = id+'-'+index
       this.idh = id+'-header'+index
    }
}
</script>

<style>

</style>