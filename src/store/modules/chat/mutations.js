export default{
    ADD_MESSAGE(state,payload){
        state.messages.push(payload) 
    },
    ADD_MESSAGES(state,payload){
        state.messages.push(...payload) 
    },
   SET_MESSAGES(state,payload=[]){
        state.messages = payload
    }

}