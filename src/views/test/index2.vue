<template>
  <div class="d-flex align-items-center justify-content-center">
  <div style="max-width:200px">
    <d-mention-input
    v-model="list"
      label="المدربين"
    :items="items"
    :tooltipEvents="events"
  >
  </d-mention-input>
</div>
</div>
</template>
<script>
import academy from '@/services/api/academy'
const users = [
  {  id:1,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    value: 'akryum',
    name: 'Guillaume',
  },
  {
    id:2,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    value: 'posva',
    name: 'Eduardo',
  },
  {
    id:3,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    value: 'atinux',
    name: 'Sébastien',
  },
  {
    id:3,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    value: 'atinux',
    name: 'Sébastien sqd qsdqs',
  },
  {
    id:3,
    image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    value: 'atinux',
    name: 'qs sdfd Sébastien',
  },
]

export default {
  name:'test-page',
  components: {},

  data () {
    return {
      list: [],
      items: users,
    }
  },
computed:{
  events(){
    return {
    //  open:this.loadIssues,
      apply:this.onApply,
      //search:this.loadIssues
    }
  }
},
  methods: {
    async loadIssues (search = null) {
      let {data} = await academy.instructor.getAll({search:search})
      this.items = data.data
    }
  ,
    async onOpen (key,...rest) {
      console.mylog('key',key,rest)
      await this.loadIssues ()
      //this.items = key === '@' ? users : issues
    },

    onApply (item, key, replacedWith) {
      console.log(item,key, `has been replaced with ${replacedWith}`)
    }
  },
}
</script>
