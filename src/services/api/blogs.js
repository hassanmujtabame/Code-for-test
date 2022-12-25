
class BlogsApi {
    //Get all Blogs
    getAll(params={}){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
             s+=`${key}=${params[key]}`
        })
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
}

export default new BlogsApi();