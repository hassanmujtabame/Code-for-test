export default{
    ADD_MESSAGE(state,payload){
        state.messages.push(payload) 
    },
    ADD_MESSAGES(state,payload){
        state.messages.push(...payload) 
    },
   SET_MESSAGES(state,payload=[]){
        state.messages = payload
    },
    SET_CHATS(state,payload=[]){
         state.chats = payload
     },
     ADD_CHAT(state,payload){
        state.chats.push(payload) 
    },
    MIN_CHAT(state,payload){
        let index = state.chats.findIndex(x=>x.id==payload)
        if(index>-1)
        state.chats[index].status='minimized'
    },
    OPEN_CHAT(state,payload){
        let index = state.chats.findIndex(x=>x.id==payload)
        if(index>-1)
        state.chats[index].status='opened'
    },
    CLOSE_CHAT(state,payload){
        let index = state.chats.findIndex(x=>x.id==payload)
        if(index>-1)
        state.chats.splice(index,1)
    },
    /** chat offer */
    ADD_MESSAGE_OFFER(state,payload){
        state.offer_messages.push(payload) 
    },
    ADD_MESSAGES_OFFER(state,payload){
        state.offer_messages.push(...payload) 
    },
   SET_MESSAGES_OFFER(state,payload=[]){
        state.offer_messages = payload
    }
}