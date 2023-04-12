export default{
    ADD_MESSAGE(state,payload){
        if(!state.messages.find(x=>x.id==payload.id))
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
    ADD_MESSAGE_OFFER_PROPOSAL(state,payload){
        if(!state.offer_messages.find(x=>x.id==payload.id))
        state.offer_messages.push(payload) 
    },
    ADD_MESSAGES_OFFER_PROPOSAL(state,payload){
        state.offer_messages.push(...payload) 
    },
   SET_MESSAGES_OFFER_PROPOSAL(state,payload=[]){
        state.offer_messages = payload
    },
    /** chat request service */
    ADD_MESSAGE_REQUEST_SERVICE(state,payload){
        if(!state.request_service_messages.find(x=>x.id==payload.id))
        state.request_service_messages.push(payload) 
    },
    ADD_MESSAGES_REQUEST_SERVICE(state,payload){
        state.request_service_messages.push(...payload) 
    },
   SET_MESSAGES_REQUEST_SERVICE(state,payload=[]){
        state.request_service_messages = payload
    }
}