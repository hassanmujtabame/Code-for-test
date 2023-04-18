<script>
export default {
    methods:{
        addMsgLoad(msg,other_image,other_name){
      if (this.messages.length == 0) {
        let m = {
          id: msg.id,
          user_id: msg.user_id,
          user_image:msg.sender_id==this.user.id?this.user.image: other_image,
          user_name:msg.sender_id==this.user.id?this.user.name:other_name,
          list: [{ ...msg }]
        }
        this.messages.unshift(m)
      } else {
        let first = this.messages[0]
        //console.mylog('first',first,msg)
        if (first.user_id == msg.user_id && first.list[0].datetime == msg.datetime){
          
          first.list.unshift({...msg})
      
        } else {
          //console.mylog('new',msg)
          let m = {
            id: msg.id,
            user_id: msg.user_id,
            user_image:msg.sender_id==this.user.id?this.user.image: other_image,
          user_name:msg.sender_id==this.user.id?this.user.name:other_name,
            list: [{ ...msg}]
          }
       
        this.messages.unshift(m)
       

      }
     
    }
    },
    addMsgLoadByDate(msg,other_image,other_name){
      if(!this.messages[msg.date])
      this.messages[msg.date]=[]
      if (this.messages[msg.date].length == 0) {
        
        let m = {
          id: msg.id,
          user_id: msg.user_id,
          user_image:msg.sender_id==this.user.id?this.user.image: other_image,
          user_name:msg.sender_id==this.user.id?this.user.name:other_name,
          list: [{ ...msg }]
        }
        this.messages[msg.date].unshift(m)
      } else {
        if(this.messages[msg.date].find(m=>m.list.some(s=>s.id==msg.id))) return;
        let first = this.messages[msg.date][0]
        if (first.user_id == msg.user_id && first.list[0].datetime == msg.datetime){
          
          first.list.unshift({...msg})
      
        } else {
          //console.mylog('new',msg)
          let m = {
            id: msg.id,
            user_id: msg.user_id,
            user_image:msg.sender_id==this.user.id?this.user.image: other_image,
          user_name:msg.sender_id==this.user.id?this.user.name:other_name,
            list: [{ ...msg}]
          }
       
        this.messages[msg.date].unshift(m)
       

      }
     
    }
    },
    }
}
</script>