var httpObj = XMLHttpRequestCreate();
httpObj.open("get", "./kurochan.json", true);
//httpObj.open("get", "http://numanomanu.sakura.ne.jp/json.txt", true);
httpObj.onload = function(){
    var myData = JSON.parse(this.responseText);
    var txt = "";
    var concept = new Array(myData.length);
    for (var i=0;i<myData.length;i++){
        concept[i] = new Array(5);
        concept[i][0] = myData[i].id;
        concept[i][1] = myData[i].prev_id;
        concept[i][2] = myData[i].comment;
        concept[i][3] = myData[i].user.name;
        concept[i][4] = myData[i].user.image_path;
    }
/*
    for(var i=0; i<concept.length; i++){
        alert(
        concept[i][0] +
        concept[i][1] +
        concept[i][2] +
        concept[i][3] +
        concept[i][4])
    }
*/
    for (var i=0; i<myData.length; i++){
    txt = txt + myData[i].id + "コメント" + myData[i].comment + "　" + myData[i].prev_id + " " + "name" + myData[i].user.name + "<img src="+ myData[i].user.image_path + "> <br>";
    }

    document.getElementById("result").innerHTML = txt;
    
}
httpObj.send(null);


// ------------------------------------------------------------
// XMLHttpRequest オブジェクトを作成する関数
// ------------------------------------------------------------
function XMLHttpRequestCreate(){
	try{
		return new XMLHttpRequest();
	}catch(e){}
	try{
		return new ActiveXObject('MSXML2.XMLHTTP.6.0');
	}catch(e){}
	try{
		return new ActiveXObject('MSXML2.XMLHTTP.3.0');
	}catch(e){}
	try{
		return new ActiveXObject('MSXML2.XMLHTTP');
	}catch(e){}

	return null;
}

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