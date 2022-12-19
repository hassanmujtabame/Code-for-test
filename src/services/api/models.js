
class ModelsApi {
    //Get all Models
    getAll(){
        return window.axios.get(`network/models`);
    }
    getItem(id){
        return window.axios.get(`network/models/${id}`);
    }
}

export default new ModelsApi();