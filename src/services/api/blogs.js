
import BaseApi from "./base-service";
class BlogsApi extends BaseApi {
    //Get all Blogs
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/blogs?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/blogs/${id}`);
    }
    getCategories(){
        return window.axios.get(`network/blogs-categories`);
    }
    getRecent(){
        return window.axios.get(`network/latest-blogs`);
    }
    getTags(){
        return window.axios.get(`network/blogs-tags`);
    }
    addBlog(data){
        return window.axios.post(`network/blogs`,data);  
    }
}

export default new BlogsApi();