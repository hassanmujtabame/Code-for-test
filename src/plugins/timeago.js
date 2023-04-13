export default class TimeAgo {
    
    constructor() {  // Constructor
        this.timeAgo=[];
      }
 timeAgoToHuman(date)
{
  // Calculate the difference in milliseconds
  let date1 = new Date(date)
  let date2 = new Date()
  var millisec = date2.getTime() - date1.getTime();
  if(millisec<0) millisec =0;
   if(millisec===0){
    return window.i18n.t('just-now')
   }
  var s = (millisec / 1000).toFixed(1);

  var m = (millisec / (1000 * 60)).toFixed(1);

  var h = (millisec / (1000 * 60 * 60)).toFixed(1);

  var d = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
  var mth = (millisec / (1000 * 60 * 60 * 24*30)).toFixed(1);
  var y = (millisec / (1000 * 60 * 60 * 24*30*12)).toFixed(1);
  let ago=window.i18n.t('time_ago');
  let result = "";
  let label = ""
  if (s < 60) {
    label = window.i18n.t('second_s')
    if(mth>2 && mth<=10 && window.i18n.locale=='ar') label= "ثوني";
    if(mth==2 &&window.i18n.locale=='ar') return ago+" "+"ثانتين";
    if(mth==1 &&window.i18n.locale=='ar') return ago+" "+label;
    if(mth==1 &&window.i18n.locale=='en') return "a second"+" "+ago;
    result = Math.floor(s) +" "+ label;

  } else if (m < 60) {
    label = window.i18n.t('minute_s')
    if(mth>2 && mth<=10 &&window.i18n.locale=='ar') label= "دقائق";
    if(mth==2 &&window.i18n.locale=='ar') return ago+" "+"دقيقتين";
    if(mth==1 &&window.i18n.locale=='ar') return ago+" "+label;
    if(mth==1 &&window.i18n.locale=='en') return "a second"+" "+ago;
    result = Math.floor(m) +" "+ label;
  } else if (h < 24) {
    label = window.i18n.t('hour_s')
    if(mth>2 && mth<=10 &&window.i18n.locale=='ar') label= "ساعات";
    if(mth==2 &&window.i18n.locale=='ar') return ago+" "+"ساعتين";
    if(mth==1 &&window.i18n.locale=='ar') return ago+" "+label;
    if(mth==1 &&window.i18n.locale=='en') return "an Hour"+" "+ago;
    result = Math.floor(h) +" "+ label;
  } else if (d < 30) {
    label = window.i18n.t('day_s')
    if(mth>2 && mth<=10 &&window.i18n.locale=='ar') label= "أيام";
    if(mth==2 &&window.i18n.locale=='ar') return ago+" "+"يومين";
    if(mth==1 &&window.i18n.locale=='ar') return ago+" "+label;
    if(mth==1 &&window.i18n.locale=='en') return "a day"+" "+ago;
    result = Math.floor(d) +" "+ label;
  }else if (mth < 12) {
     label = window.i18n.t('month_s')
    if(mth>2 && mth<=10 &&window.i18n.locale=='ar') label= "أشهر";
    if(mth==2 &&window.i18n.locale=='ar') return ago+" "+"شهرين";
    if(mth==1 &&window.i18n.locale=='ar') return ago+" "+"شهر";
    if(mth==1 &&window.i18n.locale=='en') return "a month"+" "+ago;
     result = Math.floor(mth) +" "+ label;
   
}else {
  label = window.i18n.t('year_s')
  if(mth>2 && mth<=10 &&window.i18n.locale=='ar') label= "سنوات";
  if(mth==2 &&window.i18n.locale=='ar') return ago+" "+"سنتين";
  if(mth==1 &&window.i18n.locale=='ar') return ago+" "+label;
  if(mth==1 &&window.i18n.locale=='en') return "a year"+" "+ago;
  result = Math.floor(y) +" "+ label;
}

if(window.i18n.locale=="ar")
return ago+" "+result;
else
return result+" "+ago;
}
cancel(name,list=null){
    //if(!Object.hasOwn(window,'timeago'))  return
    if(Object.keys(this.timeAgo).includes(name)){
        if(list==null){
            clearInterval(this.timeAgo[name].timer);
            this.timeAgo[name].timer = null;
            delete this.timeAgo[name];
        }else if (Array.isArray(list)) {
            this.timeAgo[name].list= this.timeAgo[name].list.filter(x=>!list.some(c=>x==c))
        } else {
            this.timeAgo[name].list= this.timeAgo[name].list.filter(x=>x!=list)
        }
    }
}
addList(name,list){
    if(Array.isArray(list))
    this.timeAgo[name].list.push(...list)
    else
    this.timeAgo[name].list.push(list)
    this.updateList(name)
}
    render(name,list,interval=1000){
    //if(!Object.hasOwn(window,'timeago'))
    //window.timeago=[];
    if(Object.keys(this.timeAgo).includes(name)){
        //cancelTimeAgo(name)
        this.addList(name,list)
    }else{
        this.timeAgo[name]={
            timer:null,
            list:[]
        }
        this.addList(name,list)
        this.timeAgo[name].timer = setInterval(()=>{
            this.updateList(name)
        }
        ,interval)
          }
          
    }
    updateElement(element){
        let datetime = element.attributes['datetime'];
        //console.mylog('datetime',datetime.nodeValue,element)
      let  dateHuman=  this.timeAgoToHuman(datetime.nodeValue);
      element.innerHTML=dateHuman;
    }
    updateList(name){
        this.timeAgo[name].list.forEach(element=>this.updateElement(element));
    }

}