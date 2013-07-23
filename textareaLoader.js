
function textareaLoadEngine(conceptMap, options){

var triples = new Array();

var httpObj = new XMLHttpRequest();
httpObj.open("get", "./kurochan.json", true);
httpObj.onload = function(){
var myData = JSON.parse(this.responseText);
    //triplesの中に連想配列を代入する
    for(var i=0; i<myData.length; i++){
        triples[i] = new Object();
        triples[i]['concept1']   = myData[i].id;
        triples[i]['concept2']   = myData[i].prev_id;
        triples[i]['comment']    = myData[i].comment;
        triples[i]['name']       = myData[i].user.name;
        triples[i]['image']      = myData[i].user.image_path;
        triples[i]['relation']   = ' ';
    }
}
httpObj.send(null);
alert('a');
//alert(vardump(triples));
return triples;
};
 
/*
httpObj = new XMLHttpRequest();
httpObj.open("get", "http://macrocro.com/forward/api", true);
httpObj.onload = function(){
   // var myData = JSON.parse(this.responseText);
   var myData =this.responseText;
alert(myData);
}*/

 /*
  * debug用　vardump
  */
 
 function vardump(arr,lv,key) {
    var dumptxt = "",
        lv_idt = "",
        type = Object.prototype.toString.call(arr).slice(8, -1);
    if(!lv) lv = 0;
    for(var i=0;i<lv;i++) lv_idt += "    ";
    if(key) dumptxt += lv_idt + "[" + key + "] => ";
   
    if(arr == null || arr == undefined){
        dumptxt += arr + '\n';
    } else if(type == "Array" || type == "Object"){
        dumptxt += type + "...{\n";
        for(var item in arr) dumptxt += vardump(arr[item],lv+1,item);
        dumptxt += lv_idt + "}\n";
    } else if(type == "String"){
        dumptxt += '"' + arr + '" ('+ type +')\n';
    }  else if(type == "Number"){
        dumptxt += arr + " (" + type + ")\n";
    } else {
        dumptxt += arr + " (" + type + ")\n";
    }
    return dumptxt;
}
