class Dhelper{
 convertCountriesToPhoneCodes(countries){
    // response of https://restcountries.com/v3/lang/arabic
    let list = [];
    countries.forEach(country => {
        if(country.tld.includes('.il')) return;
        let {name,idd,translations,flag,flags}=country;
        let name_country=[];
         name_country['en']=name.common;
         name_country['ar']=translations.ara.common;
       /*
         "name": {
            "common": "Algeria",
            "official": "People's Democratic Republic of Algeria",
            "nativeName": {
                "ara": {
                    "official": "الجمهورية الديمقراطية الشعبية الجزائرية",
                    "common": "الجزائر"
                }
            }
        },
        "cca2": "DZ",
        "ccn3": "012",
        "cca3": "DZA",
        "cioc": "ALG",
       */
        //idd ex:algeria +213
        /*
        "idd": {
            "root": "+2",
            "suffixes": [
                "13"
            ]
        },
        */
       if( idd.suffixes.length>3){
        let phone_code = idd.root
        list.push({name_country,phone_code,flag,flags,f:escape(flag).replace(/%(..)/g,"&#x$1;")})
       }else
        idd.suffixes.forEach(suf=>{
            let phone_code = idd.root+suf
            list.push({name_country,phone_code,flag,flags,f:escape(flag).replace(/%(..)/g,"&#x$1;")})
        })
    });
    return list;
 }
 catchException(error,form){

    if(error.response){
        let response= error.response;
        if(response.status==422){
            this.setErrorsForm(form,response)
        }
        if(response.status==500 || response.status==405 ){
            window.SwalError(response.data.message)
        }
    }

 }
    
}
export default new Dhelper();